import React, { createContext, useReducer, useEffect, useState } from "react";
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import Footer from "./Footer";
import Header from "./Header";
import SubHeader from "./SubHeader";
import { reducer } from "./Reducer";
import {apipath} from '../pages/api/apiPath';
import Router from 'next/router'

export const CardContext = createContext();
const initialState = {
  user: null,
  item: [],
  totalAmount: 0,
  totalItem: 0,
  isLogin: false
};

function Layout({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [show, setShow] = useState(false);

  const userLogin = data => {
    dispatch({
      type: "USER_SIGNIN",
      payload: data,
    });
  }

  const addToCart = (data) => {
    console.log('Add', data);
    dispatch({
      type: "ADD_TO_CART",
      payload: data,
    });
  };

  const removeItem = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const increament = (id) => {
    dispatch({
      type: "INCREAMENT_ITEM",
      payload: id,
    });
  };

  const decreament = (id) => {
    dispatch({
      type: "DECREAMENT_ITEM",
      payload: id,
    });
  };

  const getAllData = (data) => {
    dispatch({
      type: "GET_ALL",
      payload: data,
    });
  };

  const addProductToCart = (data, quantity = 1) => {
    if(!state.isLogin) {
      Router.push('/auth/Login');
      return false
    } 

    const params = {
      user: state.user.userData._id,
      cart_items: {
        product: data._id,
        SKU_Number:data?.SKU_Number || '',
        product_weight: data?.weight[0]?.weight_type?.weight_gram || '',
        quantity: quantity,
        price: data?.price_after_discount || data?.price || 0
      },
    };
    fetch(apipath + `/api/v1/cart/add-items`, {
      method: "POST",
      headers: { 
        'Content-Type': 'application/json',
        Authorization: "Bearer " + state.user.token
      },
      body: JSON.stringify(params)
    })
    .then((res) => res.json())
    .then((result) => {
      if (result?.cart) {
        addToCart(result.cart.cart_items)
        setShow(true)
      }
    }).catch((error) => console.log(error));
  }

  useEffect(() => {
    const fetchCartData = async (userData) => {
      try {
        const response = await fetch(apipath + `/api/v1/cart/get-items`, {
          method: "POST",
          headers: {
            'Content-type': 'application/json',
            Authorization: "Bearer " + userData.token,
          },
          body: JSON.stringify({ user: userData?.user?._id })
        });
        const result = await response.json();
        getAllData(result.data[0]?.cart_items || []);
      } catch (error) {
        console.log(error);
      }
    };
  
    const fetchUserData = async (data) => {
      try {
        const res = await fetch(apipath + `/api/v1/users/${data.user._id}`)
        const result = await res.json()
        userLogin({token:data.token, userData:result.data})
      } catch (error) {
        console.log('error :>> ', error);
      }
    };
    
    const getLoginDetails = localStorage.getItem("cg-herbal-userData");
    if (getLoginDetails) {
      const userDetails = JSON.parse(getLoginDetails);
      fetchUserData(userDetails);
      fetchCartData(userDetails);
    }
    dispatch({
      type: "TOTAL_QTY",
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: "TOTAL_QTY",
    });
  }, [state.item]);
  
  // console.log('state.item :>> ', state);
  return (
    <CardContext.Provider
      value={{
        ...state,
        userLogin,
        addToCart,
        removeItem,
        increament,
        decreament,
        addProductToCart
        // displayRazorpay,
      }}
    >
      <Header />
      <SubHeader />
      <main>{children}</main>
      <Footer />

      <ToastContainer className="p-3 position-fixed" position={`bottom-end`}>
        <Toast className="bg-success text-white rounded" onClose={() => setShow(false)} show={show} delay={3000} autohide >
          <Toast.Body>Product successfully add to cart!</Toast.Body>
        </Toast>
      </ToastContainer>
    </CardContext.Provider>
  );
}

export default Layout;
