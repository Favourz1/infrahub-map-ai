import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from 'Context/Global';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <ToastContainer
      position="top-center"
      autoClose={3500}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  </GlobalProvider>,
)
