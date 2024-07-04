export const Button = (props) => {
  // eslint-disable-next-line react/prop-types
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
