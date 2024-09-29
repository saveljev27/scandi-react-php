export const Alert = ({ errors }: { errors: string[] }) => {
  return (
    <div style={{ display: 'flex', textWrap: 'nowrap', gap: '5px' }}>
      {errors &&
        errors.map((error, index) => (
          <p key={index} style={{ color: 'red' }}>
            {error}
          </p>
        ))}
    </div>
  );
};
