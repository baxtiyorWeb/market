export default function Container({ children }) {
  return (
    <div className="relative m-auto h-full w-containerWidth overflow-hidden  px-3 sm:w-full sm:border md:w-full lg:max-w-full 2xs:w-full 2xs:border">
      {children}
    </div>
  );
}
