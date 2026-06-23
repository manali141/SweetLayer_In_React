import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getOrders, cancelOrder } from "../api/cakeApi";

function MyOrders() {
  const queryClient = useQueryClient();
  const [filter, setFilter] = useState("all");

  // GET ORDERS
  const { data: orders = [], isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders
  });

  // CANCEL ORDER (Optimistic Update)
  const mutation = useMutation({
    mutationFn: cancelOrder,

    onMutate: async (id) => {
      await queryClient.cancelQueries(["orders"]);

      const previousOrders = queryClient.getQueryData(["orders"]);

      queryClient.setQueryData(["orders"], (old = []) =>
        old.map((order) =>
          order.id === id
            ? { ...order, status: "cancelled" }
            : order
        )
      );

      return { previousOrders };
    },

    onError: (err, id, context) => {
      queryClient.setQueryData(
        ["orders"],
        context.previousOrders
      );
    },

    onSettled: () => {
      queryClient.invalidateQueries(["orders"]);
    }
  });

  if (isLoading) return <h2>Loading orders...</h2>;

  // FILTER LOGIC
  const filteredOrders = orders.filter((order) => {
    if (filter === "all") return true;
    return order.status === filter;
  });

  return (
  <div className="orders-page">
    <h1 className="page-title">My Orders</h1>

    {/* FILTER BUTTONS */}
    <div className="filter-bar">
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("confirmed")}>Confirmed</button>
      <button onClick={() => setFilter("cancelled")}>Cancelled</button>
    </div>

    {/* ORDERS LIST */}
    {filteredOrders.length === 0 && (
      <p className="empty-text">No orders found</p>
    )}

    <div className="orders-grid">
      {filteredOrders.map((order) => (
        <div key={order.id} className="order-card">
          <h3>{order.cakeTitle}</h3>

          <div className="order-info">
            <p><span>Quantity:</span> {order.quantity}</p>
            <p>
              <span>Status:</span>{" "}
              <span className={`status ${order.status}`}>
                {order.status}
              </span>
            </p>
          </div>

          {order.status !== "cancelled" && (
            <button
              className="cancel-btn"
              onClick={() => mutation.mutate(order.id)}
            >
              Cancel Order
            </button>
          )}
        </div>
      ))}
    </div>
  </div>
);
}

export default MyOrders;