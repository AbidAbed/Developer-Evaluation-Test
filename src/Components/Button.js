function Button({ onChange, text, icon, className }) {
  return (
    <button onClick={onChange} className={className}>
      {text}
    </button>
  );
}
export default Button;
