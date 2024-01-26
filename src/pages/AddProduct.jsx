import AddProductComponent from "../components/Announcement/addProcutComponent";
import useSelectAddCategory from "../hooks/useSelectAddCategory";
import Consturction from "../product/components/Consturction";

export default function AddProduct() {
  const { value } = useSelectAddCategory();
  return (
    <>
      <h1 className="text font-poppins text-[33px] font-medium not-italic leading-normal tracking-[-0.33px] text-[#130F1E]"></h1>

      <div className="child-product">
        {value === "Aksessuarlar" ? <Consturction /> : <AddProductComponent />}
      </div>
    </>
  );
}
