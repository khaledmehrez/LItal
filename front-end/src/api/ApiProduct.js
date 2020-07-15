import axios from "axios";
import { getProduct } from "../actions/ProductAction";

// get product
export function getProductAPi() {
  return (dispatch) =>
    axios
      .get("http://localhost:5000/Product/getProduct")
      .then((res) => dispatch(getProduct(res.data)));
}

//Post product
export function PostProductAPi(data) {

  return () =>
    axios.post("http://localhost:5000/Product/postProduct", {
      name: data.name,
      reference: data.reference,
      color: data.color,
      quantity: data.quantity,
      phase: data.phase,
      dimension: data.dimension,
      marque: data.marque,
      type: data.type,
      collection: data.collection,
      locallisation: data.locallisation,
      carton: data.carton,
      image: data.image,
      commentaire: data.commentaire,

    }

    ).then((res) =>
      console.log(res.data),

      window.location.reload()
    );
  ;

}
//delete product
export function deleteProductFromApi(i) {

  return () => {
    axios.delete(`http://localhost:5000/Product/deleteProduct/${i}`)
    window.location.reload()
  }

}


export function patchProductToApi(id, name, reference, color, quantity, phase, dimension, marque, type, collection, locallisation, carton, image, commentaire) {


  return () => {

    axios.patch(`http://localhost:5000/Product/patchProduct/${id}`, {


      name: name,
      reference: reference,
      color: color,
      quantity: quantity,
      phase: phase,
      dimension: dimension,
      marque: marque,
      type: type,
      collection: collection,
      locallisation: locallisation,
      carton: carton,
      image: image,
      commentaire: commentaire,


    }).then((res) =>
      console.log(res.data),

 
    );

  }

}