import React, { createContext, useReducer, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SubHeader from "./SubHeader";
import { reducer } from "./Reducer";
import {apipath} from '../pages/api/apiPath';

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
        getAllData(result.data[0].cart_items || []);
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
  
  console.log('state.item :>> ', state);
  return (
    <CardContext.Provider
      value={{
        ...state,
        userLogin,
        addToCart,
        removeItem,
        increament,
        decreament,
        // displayRazorpay,
      }}
    >
      <Header />
      <SubHeader />
      <main>{children}</main>
      <Footer />
    </CardContext.Provider>
  );
}

export default Layout;
