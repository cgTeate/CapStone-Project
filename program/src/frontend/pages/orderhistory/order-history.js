import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../layouts/Layout';
import { deliverFail, deliverRequest, deliverReset, deliverSuccess, fetchFail, fetchRequest, fetchSuccess, historyfetchFail, historyfetchRequest, historyfetchSuccess, payFail, payRequest, payReset, paySuccess } from "../../redux/orderSlice";
const url = process.env.NEXT_PUBLIC_SPRINGBOOT_API_URL

function OrderHistoryScreen() {
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
    const 
      {
        historyloading,
        historyerror,
        orders,
      } = useSelector((state) => state.order);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        dispatch(historyfetchRequest());

        const access_Token =  sessionStorage.getItem('access_Token')
                if(!access_Token) {
                    console.log("User Not Signed In")
                    return;
                }
                
                const {data} = await axios({
                  method: 'GET',
                  url:`${url}/api/orders/history/${user}`,
                  headers: {'Content-Type': 'application/json'},
                            Authorization: access_Token,
              });
              console.log(data)
        dispatch(historyfetchSuccess(data));
      } catch (err) {
        dispatch(historyfetchFail(err));
      }
    };
    fetchOrders();
     console.log("orders", orders)
  }, []);
  return (
    <Layout title="Order History">
      <h1 className="mb-4 text-xl">Order History</h1>
      {historyloading ? (
        <div>Loading...</div>
      ) : historyerror ? (
        <div className="alert-error">{historyerror}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="border-b">
              <tr>
                <th className="px-5 text-left">ID</th>
                <th className="p-5 text-left">DATE</th>
                <th className="p-5 text-left">TOTAL</th>
                <th className="p-5 text-left">PAID</th>
                <th className="p-5 text-left">DELIVERED</th>
                <th className="p-5 text-left">ACTION</th>
              </tr>
            </thead>
            
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className=" p-5 ">{order.id.substring(20, 24)}</td>
                  <td className=" p-5 ">{order.createdAt.substring(0, 10)}</td>
                  <td className=" p-5 ">${order.totalPrice}</td>
                  <td className=" p-5 ">
                    {order.paid
                      ? `${order.paidAt.substring(0, 10)}`
                      : 'not paid'}
                  </td>
                  <td className=" p-5 ">
                    {order.delivered
                      ? `${order.deliveredAt.substring(0, 10)}`
                      : 'not delivered'}
                  </td>
                  <td className=" p-5 ">
                    <Link href={`/order/${order.id}`} passHref>
                      <a>Details</a>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
            
          </table>
        </div>
      )}
    </Layout>
  );
}

OrderHistoryScreen.auth = true;
export default OrderHistoryScreen;