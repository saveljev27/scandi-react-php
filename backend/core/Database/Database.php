<?php

namespace App\Core\Database;

use \App\Core\Config\ConfigInterface;

class Database implements DatabaseInterface
{
    private \PDO $pdo;

    public function __construct(
        public ConfigInterface $config
    ) {
        $this->connect();
    }

    public function insertProducts(string $table, array $data): int|false
    {
        $fields = array_keys($data);
        $columns = implode(', ', $fields);
        $binds = implode(', ', array_map(fn($field) => ":$field", $fields));

        $sql = "INSERT INTO $table ($columns) VALUES ($binds)";
        $stmt = $this->pdo->prepare($sql);


        try {
            $stmt->execute($data);
        } catch (\PDOException $exception) {
            error_log('SQL Error: ' . $exception->getMessage());
            return false;
        }

        return (int) $this->pdo->lastInsertId();
    }
    public function getProducts(string $table, array $conditions = []): array
    {
        $sql = "SELECT * FROM $table";

        if (!empty($conditions)) {
            $whereClauses = [];
            foreach ($conditions as $column => $value) {
                $whereClauses[] = "$column = :$column";
            }
            $sql .= " WHERE " . implode(' AND ', $whereClauses);
        }

        $stmt = $this->pdo->prepare($sql);

        foreach ($conditions as $column => $value) {
            $stmt->bindValue(":$column", $value);
        }

        $stmt->execute();
        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }


    public function deleteProducts(string $table, array $conditions = []): void
    {
        $where = '';
        $data = implode("','", $conditions['sku']);
        $where = "WHERE sku IN ('$data')";

        $sql = "DELETE FROM $table $where";

        $this->pdo->exec($sql);
    }

    private function connect()
    {
        $driver = $this->config->get('database.driver');
        $host = $this->config->get('database.host');
        $port = $this->config->get('database.port');
        $database = $this->config->get('database.database');
        $username = $this->config->get('database.username');
        $password = $this->config->get('database.password');
        $charset = $this->config->get('database.charset');

        try {
            $this->pdo = new \PDO("$driver:host=$host;port=$port;dbname=$database;charset=$charset", $username, $password);
        } catch (\PDOException $exception) {
            exit($exception->getMessage());
        }
    }
}
