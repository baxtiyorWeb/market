export default function Container({ children }) {
  return (
    <div className="relative m-auto h-full w-[1245px] max-sm:w-full max-sm:border">
      {children}
    </div>
  );
}
