import { Outlet } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './libs/react-query';
import { ToastContainer } from 'react-toastify';
import { ChakraProvider } from '@chakra-ui/react';
import { UserProvider } from './providers/useAuth';
import { UrlProvider } from './providers/UrlContext';

import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UrlProvider>
          <UserProvider>
            <ChakraProvider>
              <Outlet />
              <ToastContainer />
            </ChakraProvider>
          </UserProvider>
        </UrlProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
