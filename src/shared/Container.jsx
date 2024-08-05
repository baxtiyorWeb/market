export default function Container({ children }) {
  return (
    <div className="relative m-auto h-full   3xs:w-full   w-containerWidth   px-3   xs:w-full md:w-full lg:w-full ">
      {children}
    </div>
  );
}
