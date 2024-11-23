import { useParams } from "react-router-dom";

const useProduct = () => {
  const { id } = useParams();
  
  return { id };  
};

export default useProduct;
