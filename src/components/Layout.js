import React, { createContext, useReducer, useEffect, useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import Footer from "./Footer";
import Header from "./Header";
import SubHeader from "./SubHeader";
import { reducer } from "./Reducer";
import { apipath } from "../pages/api/apiPath";
import Router from "next/router";
import { useSession } from "next-auth/react";
import Head from "next/head";

export const CardContext = createContext();
const initialState = {
  user: null,
  authenticating: false,
  loading: false,
  error: null,
  item: [],
  totalAmount: 0,
  totalItem: 0,
  isLogin: false,
};

function Layout({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [show, setShow] = useState(false);

  const { data: session } = useSession();

  const loginRequest = () => {
    dispatch({ type: "LOGIN_REQUEST" });
  };
  const loginSuccess = (data) => {
    dispatch({ type: "LOGIN_SUCCESS", payload: data });
  };
  const loginFailure = (error) => {
    dispatch({ type: "LOGIN_FAILURE", payload: error });
  };

  const userLogout = () => {
    dispatch({ type: "USER_LOGOUT" });
  };

  const fetchRequest = () => {
    dispatch({ type: "FETCH_REQUEST" });
  };
  const fetchFailure = (error) => {
    dispatch({ type: "FETCH_FAILURE", payload: error });
  };

  const userLogin = (data) => {
    dispatch({
      type: "USER_SIGNIN",
      payload: data,
    });
  };

  const addToCart = (data) => {
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

  const clearCart = (id) => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  const getAllData = (data) => {
    dispatch({
      type: "GET_ALL",
      payload: data,
    });
  };

  const addProductToCart = (data, selectedWeight, quantity = 1) => {
    if (!state.isLogin) {
      // user login nhi hain to data localstorage me save ho jaye
      let item = {
        product: {
          _id: data._id,
          title: data.title,
          images: data.images,
          weight: [
            {
              weight_type: selectedWeight.weight_type._id,
              count: selectedWeight.count,
              price: selectedWeight.price,
              discount: selectedWeight.discount,
              discount_value: selectedWeight.discount_value,
            },
          ],
        },
        SKU_Number: data?.SKU_Number || "",
        product_weight: selectedWeight?.weight_type?.weight_gram || "",
        weight_type: selectedWeight?.weight_type?._id,
        quantity: quantity,
        price:
          Number(selectedWeight?.price) -
            Number(
              selectedWeight.discount === "percentage"
                ? selectedWeight?.price * (selectedWeight.discount_value / 100)
                : selectedWeight.discount_value
            ) || 0,
        discount:
          Number(
            selectedWeight.discount === "percentage"
              ? selectedWeight?.price *
                  quantity *
                  (selectedWeight.discount_value / 100)
              : selectedWeight.discount_value
          ) || 0,
        total:
          Number(selectedWeight?.price * quantity) -
            Number(
              selectedWeight.discount === "percentage"
                ? selectedWeight?.price *
                    quantity *
                    (selectedWeight.discount_value / 100)
                : selectedWeight.discount_value
            ) || 0,
      };
      const localCartData = localStorage.getItem("cg-herbal-cartData");
      if (localCartData) {
        localCartData = JSON.parse(localCartData);
        localCartData.push(item);
        localStorage.setItem(
          "cg-herbal-cartData",
          JSON.stringify(localCartData)
        );
        addToCart(localCartData);
        setShow(true);
      } else {
        localStorage.setItem("cg-herbal-cartData", JSON.stringify([item]));
        addToCart([item]);
        setShow(true);
      }
      Router.push("/shopping/Shopping");
      return false;
    }

    const params = {
      user: state.user._id,
      cart_items: {
        product: data._id,
        SKU_Number: data?.SKU_Number || "",
        product_weight: selectedWeight?.weight_type?.weight_gram || "",
        weight_type: selectedWeight?.weight_type?._id,
        quantity: quantity,
        price:
          Number(selectedWeight?.price) -
            Number(
              selectedWeight.discount === "percentage"
                ? selectedWeight?.price * (selectedWeight.discount_value / 100)
                : selectedWeight.discount_value
            ) || 0,
        discount:
          Number(
            selectedWeight.discount === "percentage"
              ? selectedWeight?.price *
                  quantity *
                  (selectedWeight.discount_value / 100)
              : selectedWeight.discount_value
          ) || 0,
        total:
          Number(selectedWeight?.price * quantity) -
            Number(
              selectedWeight.discount === "percentage"
                ? selectedWeight?.price *
                    quantity *
                    (selectedWeight.discount_value / 100)
                : selectedWeight.discount_value
            ) || 0,
      },
    };
    fetch(apipath + `/api/v1/cart/add-items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + session.token,
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result?.cart) {
          addToCart(result.cart.cart_items);
          setShow(true);
          Router.push("/shopping/Shopping");
        }
      })
      .catch((error) => console.log(error));
  };

  const fetchCartData = async (userData) => {
    try {
      const response = await fetch(apipath + `/api/v1/cart/get-items`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + userData?.token,
        },
        body: JSON.stringify({ user: userData?.user?._id }),
      });
      const result = await response.json();
      getAllData(result.data[0]?.cart_items || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (session) {
      // user login hote hi localstorage cart data datbase me save hona chahiye
      const localCartData = localStorage.getItem("cg-herbal-cartData");
      if (localCartData) {
        JSON.parse(localCartData).map((data) => {
          const params = {
            user: session.user._id,
            cart_items: {
              product: data.product._id,
              SKU_Number: data?.SKU_Number || "",
              product_weight: data?.product_weight || "",
              weight_type: data?.weight_type,
              quantity: data.quantity,
              price: data.price,
              discount: data.discount,
              total: data.total,
            },
          };
          fetch(apipath + `/api/v1/cart/add-items`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + session.token,
            },
            body: JSON.stringify(params),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result?.cart) {
                addToCart(result.cart.cart_items);
              }
            })
            .catch((error) => console.log(error));
        });
        localStorage.removeItem("cg-herbal-cartData");
      }

      const fetchUserData = async () => {
        try {
          fetchRequest();
          const res = await fetch(
            apipath + `/api/v1/users/${session.user._id}`
          );
          const result = await res.json();
          dispatch({ type: "GET_USER_DATA", payload: result.data });
        } catch (error) {
          console.log("error :>> ", error);
          fetchFailure();
        }
      };
      fetchUserData();
      fetchCartData(session);
    } else {
      const localCartData = localStorage.getItem("cg-herbal-cartData");
      getAllData(JSON.parse(localCartData) || []);
    }
  }, [session]);

  useEffect(() => {
    dispatch({
      type: "TOTAL_QTY",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        loginRequest,
        loginSuccess,
        loginFailure,
        userLogout,
        userLogin,
        addToCart,
        removeItem,
        increament,
        decreament,
        addProductToCart,
        fetchCartData,
        clearCart,
        // displayRazorpay,
      }}
    >
      <div>
        <Head>
          <link rel="icon" href="/favicon.png" />
          <title>
            Chhattisgarh Herbals | Official Website of Chhattisgarh Minor Forest
            Produce Cooperative Federation
          </title>
        </Head>

        <Header />
        <SubHeader />
        <main>{children}</main>
        <Footer />

        <ToastContainer className="p-3 position-fixed" position={`bottom-end`}>
          <Toast
            className="bg-success text-white rounded"
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Body>Product successfully add to cart!</Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </CardContext.Provider>
  );
}

export default Layout;
