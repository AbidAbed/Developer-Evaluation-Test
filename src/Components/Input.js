function Input({ onChange, value, className, placeholder, disabled }) {
  return (
    <input
      onChange={onChange}
      value={value}
      className={"outline-orange-200 placeholder-orange-100 text-orange-100 " + className}
      placeholder={placeholder}
      readOnly={disabled}
    />
  );
}
export default Input;
