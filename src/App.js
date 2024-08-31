import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRouter from "./pages/Router";
import { ProductProvider } from "./components/context/ProductContext";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductProvider>
        <div className="App">
          <AppRouter />
        </div>
      </ProductProvider>
    </QueryClientProvider>
  );
}

export default App;
