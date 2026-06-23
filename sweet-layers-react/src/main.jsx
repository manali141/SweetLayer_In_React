import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "../src/routes/router"; // adjust path if needed
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./Styles/style.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);