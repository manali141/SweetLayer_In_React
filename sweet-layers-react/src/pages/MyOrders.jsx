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
    <div className="container">
      <h1>My Orders</h1>

      {/* FILTER BUTTONS */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setFilter("all")}>
          All
        </button>

        <button onClick={() => setFilter("confirmed")}>
          Confirmed
        </button>

        <button onClick={() => setFilter("cancelled")}>
          Cancelled
        </button>
      </div>

      {/* ORDERS LIST */}
      {filteredOrders.length === 0 && (
        <p>No orders found</p>
      )}

      {filteredOrders.map((order) => (
        <div
          key={order.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px"
          }}
        >
          <h3>{order.cakeTitle}</h3>
          <p>Quantity: {order.quantity}</p>
          <p>Status: {order.status}</p>

          {order.status !== "cancelled" && (
            <button
              onClick={() =>
                mutation.mutate(order.id)
              }
            >
              Cancel Order
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default MyOrders;