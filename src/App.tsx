import { Outlet } from 'react-router-dom';
import { AppProvider } from '@providers/AppProvider';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <AppProvider>
      <Outlet />
      <ToastContainer />
    </AppProvider>
  )
}

export default App
