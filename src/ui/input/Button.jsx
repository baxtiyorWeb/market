export const Button = (props) => {
  const { children, style, onClick } = props;
  return (
    <button
      onClick={onClick}
      style={style ? style : { background: "green", color: "#fff" }}
    >
      {children}
    </button>
  );
};
