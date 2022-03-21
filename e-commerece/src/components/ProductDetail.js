import { useParams } from "react-router-dom";
import Data from "./Data";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/actions/index";

const ProductDetail = () => {
  const [cartBtn, setCartBtn] = useState("Add To Cart");

  {
    /* We need to product id to see the product detail */
  }
  const proid = useParams();

  const proDetail = Data.filter((x) => x.id == proid.id);
  const product = proDetail[0];
  console.log(product);

  // Add Product to Cart
  // We need to store useDispatch in a variable

  const dispatch = useDispatch();

  const handleCart = (product) => {
    if (cartBtn === "Add To Cart") {
      dispatch(addItem(product));

      setCartBtn("Remove From Cart");
    } else {
      dispatch(delItem(product));
      setCartBtn("Add To Cart");
    }
  };

  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={product.img} alt={product.title} height="400px" />
          </div>
          <div className="col-md-6  d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{product.title}</h1>
            <hr />
            <h2 className="my-4">${product.price}</h2>
            <p className="lead">{product.desc}</p>
            <button
              onClick={() => {
                handleCart(product);
              }}
              className="btn btn-outline-primary my-5"
            >
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
