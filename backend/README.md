-- Readme file of https://test-scandiweb-project.000webhostapp.com --

/config
-- database.php - stores connection information for the database.
-- routes.php - defines the routes and their corresponding actions of controllers.

/core - contains fundamental essential components and classes.

    /Config
    -- Config.php - getting configuration values from configuration files.
    -- ConfigInterface.php - interface of Config.php.

    /Container
    -- Container.php - class for managing and providing instances of essential services.

    /Controller
    -- Controller.php - abstract class convenient methods for interacting with common services and reusability.

    /Database
    -- Database.php - class encapsulates database-related operations.
    -- DatabaseInterface.php - interface of Database.php.

    /Exceptions
    -- Exceptions.php - class is defined as a subclass of the built-in \Exception class.

    /Http
    -- Redirect.php - is responsible for performing the redirect.
    -- RedicrectInterface.php - interface of Redirect.php
    -- Request.php - created to handle and encapsulate various aspects of an HTTP request, including URI, method, input data, and validation 		functionality.
    -- RequestInterface.php - interface of Request.php

    /Router
    -- Route.php - router implementation for handling HTTP requests and defining routes.
    -- Router.php - class, which appears to handle HTTP requests.
    -- RouterInterface.php - interface of Router.php

    /Session
    -- Session.php - class provides way to interact with session data in PHP.
    -- SessionInterface.php - interface of Session.php

    /Validator
    -- Validator.php - class of validating forms and values.
    -- ValidatorInterface.php - interface of Validator.php

    /View
    -- View.php - class, of rendering views and components.
    -- ViewInterface.php - interface of View.php

    App.php - class of initialization entry point.

/public - entry point for web server.
/src
/Controllers
-- AddProductController.php - add product controller.
-- HomeController.php - homepage controller.
/Models
-- Product.php - model of product with getters and setters methods.

    /Services
    -- ProductService.php - logic related to products.

/vendor - autoloader files.
/views - pages and components project.

--
