export default function Container({ children }) {
  return (
    <div className="relative m-auto overflow-hidden h-full  w-containerWidth px-3 sm:w-full sm:border md:w-full 2xs:w-full 2xs:border">
      {children}
    </div>
  );
}
