import axios from "axios";
import { getProduct } from "../actions/ProductAction";

// get product
export function getProductAPi() {
  return (dispatch) =>
    axios
      .get("http://localhost:4000/Product")
      .then((res) => dispatch(getProduct(res.data)));
}

//Post product
export function PostProductAPi(data) {
  window.location.reload();
  return () =>
    axios.post("http://localhost:4000/Product", {
      name: data.name,
      reference: data.reference,
      color: data.color,
      quantity: data.quantity,
      phase: data.phase,
      dimension: data.dimension,
    });
}
