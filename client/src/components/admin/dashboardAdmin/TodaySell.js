import React, { Fragment, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { DashboardContext } from "./";
import { todayAllOrders } from "./Action";

const apiURL = process.env.REACT_APP_API_URL;

const SellTable = () => {
  const history = useHistory();
  const { data, dispatch } = useContext(DashboardContext);

  useEffect(() => {
    todayAllOrders(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ordersList = () => {
    let newList = [];
    if (data.totalOrders.Orders !== undefined) {
      data.totalOrders.Orders.forEach(function (elem) {
          newList = [...newList, elem];
      });
    }
    // console.log("list");
    // console.log(newList);
    return newList;
  };

  return (
    <Fragment>
      <div className="col-span-1 overflow-auto bg-white shadow-lg p-4">
        <div className="text-2xl font-semibold mb-6 text-center">
          Today's Donars{" "}
          {data.totalOrders.Orders !== undefined ? ordersList().length : 0}
        </div>
        <table className="table-auto border w-full my-2">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Donar_Id</th>
              <th className="px-4 py-2 border">Age</th>
              <th className="px-4 py-2 border">Blood_group</th>
              <th className="px-4 py-2 border">Address</th>
              <th className="px-4 py-2 border">Organ</th>
            </tr>
          </thead>
          <tbody>
            {data.totalOrders.Orders !== undefined ? (
              ordersList().map((item, key) => {
                return <TodayOrderTable order={item} key={key} />;
              })
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-xl text-center font-semibold py-8"
                >
                  No donars found today
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="text-sm text-gray-600 mt-2">
          Total{" "}
          {data.totalOrders.Orders !== undefined ? ordersList().length : 0}{" "}
          orders found
        </div>
        <div className="flex justify-center">
          <span
            onClick={(e) => history.push("/admin/dashboard/orders")}
            style={{ background: "#303031" }}
            className="cursor-pointer px-4 py-2 text-white rounded-full"
          >
            View All
          </span>
        </div>
      </div>
    </Fragment>
  );
};

const TodayOrderTable = ({ order }) => {
  return (
    <Fragment>
      <tr>
        <td className="p-2 text-center">{order._id}</td>
        <td className="p-2 text-center">{order.age}</td>
        <td className="p-2 text-center">{order.blood_group}</td>
        <td className="p-2 text-center">{order.address}</td>
        <td className="p-2 text-center">{order.organ}</td>
      </tr>
    </Fragment>
  );
};

const TodaySell = (props) => {
  return (
    <div className="m-4">
      <SellTable />
    </div>
  );
};

export default TodaySell;
