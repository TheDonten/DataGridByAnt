import React from "react";

import "./App.css";
import axios from "axios";
import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from "react-query";
import { Layout } from "./components/Layout";



function App() {
  const clientQuery = new QueryClient();
  return (
    <QueryClientProvider client={clientQuery}>
      <Layout />
    </QueryClientProvider>
  );
}

export default App;
