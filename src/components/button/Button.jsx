export default function Button({
  children,
  type = "button",
  onClick,
  className = "",
  ...rest
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      {...rest}
    >
      {children}
    </button>
  );
}
