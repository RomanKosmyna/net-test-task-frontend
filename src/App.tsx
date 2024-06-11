import { Outlet } from 'react-router-dom';
import { UserProvider } from './providers/useAuth';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './libs/react-query';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <Outlet />
          <ToastContainer />
        </UserProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
