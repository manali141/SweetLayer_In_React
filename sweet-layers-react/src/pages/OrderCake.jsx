import { useReducer } from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { createOrder } from "../api/cakeApi";

const initialState = {
  step: 1,
  quantity: 1,
  name: "",
  email: "",
  phone: ""
};

function reducer(state, action) {
  switch (action.type) {
    case "NEXT":
      return { ...state, step: state.step + 1 };

    case "PREV":
      return { ...state, step: state.step - 1 };

    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value
      };

    case "QTY":
      return { ...state, quantity: action.value };

    default:
      return state;
  }
}

function OrderCake() {
  const { cakeId } = useParams();

  const [state, dispatch] = useReducer(reducer, initialState);

  // POST ORDER
  const mutation = useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      alert("Order placed successfully 🍰");
    }
  });

  const handleSubmit = () => {
    mutation.mutate({
      id: Date.now().toString(),
      cakeId,
      cakeTitle: `Cake ${cakeId}`,
      quantity: state.quantity,
      name: state.name,
      email: state.email,
      status: "confirmed"
    });
  };

  return (
    <div className="container">
      <h1>Order Cake</h1>

      {/* STEP 1 */}
      {state.step === 1 && (
        <div>
          <h2>Select Quantity</h2>

          <input
            type="number"
            value={state.quantity}
            onChange={(e) =>
              dispatch({
                type: "QTY",
                value: Number(e.target.value)
              })
            }
          />

          <button onClick={() => dispatch({ type: "NEXT" })}>
            Next
          </button>
        </div>
      )}

      {/* STEP 2 */}
      {state.step === 2 && (
        <div>
          <h2>Customer Info</h2>

          <input
            placeholder="Name"
            value={state.name}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "name",
                value: e.target.value
              })
            }
          />

          <input
            placeholder="Email"
            value={state.email}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "email",
                value: e.target.value
              })
            }
          />

          <button onClick={() => dispatch({ type: "PREV" })}>
            Back
          </button>

          <button onClick={() => dispatch({ type: "NEXT" })}>
            Next
          </button>
        </div>
      )}

      {/* STEP 3 */}
      {state.step === 3 && (
        <div>
          <h2>Confirm Order</h2>

          <p>Quantity: {state.quantity}</p>
          <p>Name: {state.name}</p>
          <p>Email: {state.email}</p>

          <button onClick={() => dispatch({ type: "PREV" })}>
            Back
          </button>

          <button onClick={handleSubmit}>
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}

export default OrderCake;