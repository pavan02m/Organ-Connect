import { getAllOrder, deleteOrder } from "./FetchApi";

export const fetchData = async (dispatch) => {
  dispatch({ type: "loading", payload: true });
  let responseData = await getAllOrder();
  setTimeout(() => {
    if (responseData && responseData.Orders) {
      dispatch({
        type: "fetchOrderAndChangeState",
        payload: responseData.Orders,
      });
      dispatch({ type: "loading", payload: false });
    }
  }, 1000);
};

/* This method call the editmodal & dispatch category context */
export const editOrderReq = (oId, type, status, dispatch) => {
  if (type) {
    console.log("click update");
    dispatch({ type: "updateOrderModalOpen", oId: oId, status: status });
  }
};

export const deleteOrderReq = async (oId, dispatch) => {
  let responseData = await deleteOrder(oId);
  console.log(responseData);
  if (responseData && responseData.success) {
    fetchData(dispatch);
  }
};

/* Filter All Order */
export const filterOrder = async (
  type,
  data,
  dispatch,
  dropdown,
  setDropdown
) => {
  let responseData = await getAllOrder();
  if (responseData && responseData.Orders) {
    let newData;
    if (type === "All") {
      dispatch({
        type: "fetchOrderAndChangeState",
        payload: responseData.Orders,
      });
      setDropdown(!dropdown);
    } else if (type === "Location") {
      newData = responseData.Orders.filter(
        (item) => item.address === "Mumbai"
      );
      dispatch({ type: "fetchOrderAndChangeState", payload: newData });
      setDropdown(!dropdown);
    } else if (type === "Organ") {
      newData = responseData.Orders.filter(
        (item) => item.organ === "heart"
      );
      dispatch({ type: "fetchOrderAndChangeState", payload: newData });
      setDropdown(!dropdown);
    }
  }
};
