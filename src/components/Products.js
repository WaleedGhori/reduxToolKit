import React, {  useEffect } from "react";
import { add } from "../store/cartSlice";
import { useDispatch  ,useSelector} from "react-redux";
import { fetchproduct } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";
const Products = () => {
  const {data:products , status} = useSelector((state) =>state.product)
  // const [products, setproducts] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
    // const fetchProduct = async () => {
    //   const res = await fetch(`https://fakestoreapi.com/products`);
    //   const data =await res.json();
    //   setproducts(data);
    //   console.log(data);
    // };
    // fetchProduct();
    dispatch(fetchproduct())
  }, []);

  const handleAdd = (product) =>{
    dispatch(add(product))
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || {};
    cartItems[product.id] = product;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
  if (status === STATUSES.LOADING) {
    return <h4>Loading....</h4>;
}

if (status === STATUSES.ERROR) {
    return <h4>Something went wrong!</h4>;
}
  return (
    <>
      
        <div className="productsWrapper">
          {products.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
              <h5>{item.price}</h5>
              <button onClick={() => handleAdd(item)} className="btn">Add to Cart</button>
            </div>
          ))}
        </div>
      
    </>
  );
};

export default Products;
