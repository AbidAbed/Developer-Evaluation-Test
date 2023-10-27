function Input({ onChange, value, className, placeholder }) {
  return (
    <input
      onChange={onChange}
      value={value}
      className={className}
      placeholder={placeholder}
    />
  );
}
export default Input;
