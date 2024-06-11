import { Outlet } from 'react-router-dom';
import { UserProvider } from './providers/useAuth';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './libs/react-query';
import { ToastContainer } from 'react-toastify';
import { ChakraProvider } from '@chakra-ui/react';

import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <ChakraProvider>
            <Outlet />
            <ToastContainer />
          </ChakraProvider>
        </UserProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
