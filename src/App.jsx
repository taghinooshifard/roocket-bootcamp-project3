import { useState } from 'react'
import './App.css'
import AdminLayout from './Layouts/Admin'
import store from './store'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <>
        <Provider store={store}>
            <AdminLayout/>
            <ToastContainer/>
        </Provider>
    </>
  )
}

export default App
