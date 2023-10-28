function Button({ onChange, text, icon, className }) {
  return (
    <button onClick={onChange} className={className}>
      <div className="p-1"> {text}</div>
      <div>{icon}</div>
    </button>
  );
}
export default Button;
