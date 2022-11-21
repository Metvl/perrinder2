import React from "react";
import { QueryClient, QueryClientProvider } from 'react-query';
import Tinder from './components/Tinder';


const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Tinder></Tinder>
    </QueryClientProvider>
  )
}

export default App
