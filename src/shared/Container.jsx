export default function Container({ children }) {
  return (
    <div className="relative m-auto  h-full w-containerWidth px-3 sm:w-full sm:border 2xs:w-full 2xs:border">
      {children}
    </div>
  );
}
