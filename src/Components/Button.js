function Button({ onChange, text, icon, className }) {
  return (
    <button onClick={onChange} className={className}>
      {text}
      {icon}
    </button>
  );
}
export default Button;
