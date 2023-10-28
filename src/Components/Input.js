function Input({ onChange, value, className, placeholder, disabled }) {
  return (
    <input
      onChange={onChange}
      value={value}
      className={className}
      placeholder={placeholder}
      readOnly={disabled}
    />
  );
}
export default Input;
