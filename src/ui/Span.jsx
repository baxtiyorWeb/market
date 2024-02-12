export const Span = ({ children, value }) => {
  return (
    <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
      {children ? children : `Tavsif  (Tavsigfa to’liqroq ma’lumot yozing)`}
    </span>
  );
};
