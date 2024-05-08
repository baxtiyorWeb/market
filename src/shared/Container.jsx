export default function Container({ children }) {
  return (
    <div className="w-containerWidth relative m-auto h-full 2xs:w-full 2xs:border">
      {children}
    </div>
  );
}
