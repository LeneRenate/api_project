import axios from "axios";

const fetchAllProducts = async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  console.log(res.data);
};
const fetchProductDetails = async (id) => {
  const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return res.data;
};

export { fetchAllProducts, fetchProductDetails };
