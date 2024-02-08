import React, { createContext, useContext, useReducer, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  data: [],
  oneProduct: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET":
      return { ...state, data: `${action.payload}/${window.location.search}` };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
};

const ProductContext = ({ children }) => {
  const productsCollectionRef = collection(db, "product");
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  async function getProduct() {
    let data = await getDocs(productsCollectionRef);
    data = data.docs.map((el) => ({ ...el.data(), id: el.id }));
    dispatch({
      type: "GET",
      payload: data,
    });
  }
  async function addProduct(newProduct) {
    await addDoc(productsCollectionRef, newProduct);
  }

  async function deleteProduct(id) {
    const productDocRef = doc(db, "product", id);
    await deleteDoc(productDocRef);
    getProduct();
  }

  async function getOneProduct(id) {
    const productDocRef = doc(db, "product", id);
    const oneProduct = await getDoc(productDocRef);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: oneProduct.data(),
    });
  }

  async function editProduct(id, newProduct) {
    const productDocRef = doc(db, "product", id);
    await updateDoc(productDocRef, newProduct);
    getProduct();
  }

  //! PAGINATION

  const [page, setPage] = useState(1);
  const itemsPerPage = 2;
  const count = Math.ceil(state.data.length / itemsPerPage);

  function currentPage() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return state.data.slice(begin, end);
  }

  console.log(state.data);

  const values = {
    addProduct,
    data: state.data,
    getProduct,
    deleteProduct,
    getOneProduct,
    oneProduct: state.oneProduct,
    editProduct,
    currentPage,
    count,
    setPage,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
