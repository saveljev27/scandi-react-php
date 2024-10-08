import { InputProps } from '../types';
import { Alert } from './alert';

export const Input = ({
  name,
  placeholder,
  value,
  onChange,
  errors,
  type,
}: InputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  return (
    <div className="mb-3">
      <input
        type={type ? type : 'text'}
        value={value}
        placeholder={placeholder}
        id={name}
        name={name}
        className={'form-control' + (errors[name] ? ' is-invalid' : '')}
        onChange={handleChange}
      />
      <Alert errors={errors[name]} />
    </div>
  );
};
