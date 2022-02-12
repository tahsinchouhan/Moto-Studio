import React, { createContext, useReducer, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SubHeader from "./SubHeader";
import { reducer } from "./Reducer";

export const CardContext = createContext();
const initialState = {
  user: null,
  item: [],
  totalAmount: 0,
  totalItem: 0,
};

function Layout({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (data) => {
    axios
      .post(
        apipath + `/api/v1/cart/remove-items`,
        { product_id, user: userData?.user?._id },
        {
          headers: {
            Authorization: "Bearer " + userData.token,
          },
        }
      )
      .then((response) => {
        dispatch({
          type: "ADD_TO_CART",
          payload: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const removeItem = (product_id, id) => {
    axios
      .post(
        apipath + `/api/v1/cart/remove-items`,
        { product_id, user: userData?.user?._id },
        {
          headers: {
            Authorization: "Bearer " + userData.token,
          },
        }
      )
      .then((response) => {
        dispatch({
          type: "REMOVE_ITEM",
          payload: id,
        });
        const total = localStorage.getItem("cg-herbal-usercartItem");
        localStorage.setItem("cg-herbal-usercartItem", JSON.stringify(total - 1));
      })
      .catch((error) => {
        console.log(error);
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

  const fetchData = async (userData) => {
    try {
      const response = await axios.post(
        apipath + `/api/v1/cart/get-items`,
        { user: userData?.user?._id },
        {
          headers: {
            Authorization: "Bearer " + userData.token,
          },
        }
      );
      getAllData(response.data.data[0]?.cart_items || []);
      localStorage.setItem("cg-herbal-usercartItem", JSON.stringify(response?.data?.data[0]?.cart_items?.length));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch({
      type: "TOTAL_QTY",
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: "TOTAL_QTY",
    });
  }, [state.item]);

  return (
    <CardContext.Provider
      value={{
        ...state,
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
