import React, { Fragment, useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";;
import { HomeContext } from "./index";
import { isWishReq, unWishReq, isWish } from "./Mixins";

const apiURL = process.env.REACT_APP_API_URL;

const SingleProduct = (props) => {
  const { data, dispatch } = useContext(HomeContext);
  const { products } = data;
  const history = useHistory();

  /* WhisList State */
  const [wList, setWlist] = useState(
    JSON.parse(localStorage.getItem("wishList"))
  );

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    dispatch({ type: "loading", payload: true });
    try {
      let responseData = await getAllProduct();
      setTimeout(() => {
        if (responseData && responseData.Products) {
          dispatch({ type: "setProducts", payload: responseData.Products });
          dispatch({ type: "loading", payload: false });
        }
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  if (data.loading) {
    return (
      <div className="col-span-2 md:col-span-3 lg:col-span-4 flex items-center justify-center py-24">
        <svg
          className="w-12 h-12 animate-spin text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          ></path>
        </svg>
      </div>
    );
  }
  return (
    <Fragment>
      <div style={{ margin: `50px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
        <div className="e-card e-card-horizontal" style={{ width: `400px` }}>
            <img src="https://img.freepik.com/premium-photo/pretty-heart-outline-illustration-with-isolated-background_742252-4561.jpg" alt="Sample" style={{ height: `180px` }}/>
            <div className="e-card-stacked">
                <div className="e-card-header">
                    <div className="e-card-header-caption">
                        <div className="e-card-header-title">Philips Trimmer</div>
                    </div>
                </div>
                <div className="e-card-content">
                    Powered by the innovative DuraPower Technology which optimizes power consumption, Philips trimmers are designed to last longer
                    than 4 ordinary trimmers.
                </div>
            </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SingleProduct;
