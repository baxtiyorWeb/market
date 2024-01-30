import "./loading.css";
export default function Loading() {
  return (
    <div className="w-full h-[100vh] z-[999999] fixed bg-[#FAFAFA] flex justify-center items-center top-0 left-0">
      <div className="loader"></div>
    </div>
  );
}
