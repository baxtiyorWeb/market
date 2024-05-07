export default function Container({ children }) {
  return (
    <div className="relative m-auto h-full w-[1440px] 2xs:w-full 2xs:border">
      {children}
    </div>
  );
}
