import React, { Fragment, useContext, useEffect } from "react";
import moment from "moment";

import { OrderContext } from "./index";
import { fetchData, editOrderReq, deleteOrderReq } from "./Actions";

const apiURL = process.env.REACT_APP_API_URL;

const AllCategory = (props) => {
  const { data, dispatch } = useContext(OrderContext);
  const { orders, loading } = data;

  useEffect(() => {
    fetchData(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
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
      <div className="col-span-1 overflow-auto bg-white shadow-lg p-4">
        <table className="table-auto border w-full my-2">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Organ_Id</th>
              <th className="px-4 py-2 border">Age</th>
              <th className="px-4 py-2 border">Blood Group</th>
              <th className="px-4 py-2 border">Gender</th>
              <th className="px-4 py-2 border">Contact Number</th>
              <th className="px-4 py-2 border">Location</th>
              <th className="px-4 py-2 border">Organ</th>
            </tr>
          </thead>
          <tbody>
            {orders && orders.length > 0 ? (
              orders.map((item, i) => {
                return (
                  <CategoryTable
                    key={i}
                    donar={item}
                    editOrder={(oId, type, status) =>
                      editOrderReq(oId, type, status, dispatch)
                    }
                  />
                );
              })
            ) : (
              <tr>
                <td
                  colSpan="12"
                  className="text-xl text-center font-semibold py-8"
                >
                  No order found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="text-sm text-gray-600 mt-2">
          Total {orders && orders.length} order found
        </div>
      </div>
    </Fragment>
  );
};

/* Single Category Component */
const CategoryTable = ({ donar, editOrder }) => {
  const { dispatch } = useContext(OrderContext);
  return (
    <Fragment>
      <tr className="border-b">
        <td className="hover:bg-gray-200 p-2 text-center">
        {donar._id}
        </td>
        <td className="hover:bg-gray-200 p-2 text-center">
          {donar.age}
        </td>
        <td className="hover:bg-gray-200 p-2 text-center">
          {donar.blood_group}
        </td>
        <td className="hover:bg-gray-200 p-2 text-center">{donar.gender}</td>
        <td className="hover:bg-gray-200 p-2 text-center">{donar.phoneNumber}</td>
        <td className="hover:bg-gray-200 p-2 text-center">{donar.address}</td>
        <td className="hover:bg-gray-200 p-2 text-center">{donar.organ}</td>
      </tr>
    </Fragment>
  );
};

export default AllCategory;
