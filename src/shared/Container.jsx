export default function Container({ children }) {
  return (
    <div className="relative m-auto h-full w-containerWidth  overflow-hidden   px-3  md:w-full   lg:w-full xs:w-[1200px]3xs:w-full ">
      {children}
    </div>
  );
}
