import MenuList from "./CategoryTab";
import useGetAllQuery from "../../hooks/api/useGetAllQuery";
import { URLS } from "../../config/export/urls";
import { KEYS } from "../../config/export/keys";

const Catalogue = ({ open, setOpen }) => {
  const { data } = useGetAllQuery({
    key: KEYS.category_list,
    url: URLS.category_list,
    enabled: !!open,
  });

  return (
    <div className="max-h-max bg-white">
      <MenuList setOpen={setOpen} open={open} categories={data?.data} />
    </div>
  );
};

export default Catalogue;
