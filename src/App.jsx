
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import CoverPage from "./Pages/CoverPage";
import HomePage from "./Pages/HomePage";
import PesanAdminPage from "./Pages/PesanAdmin";
import AdminPage from "./Pages/AdminPage";

function App() {
  

  return (
    <>
       <BrowserRouter>
          <Routes>
           <Route path="/" element={<AdminPage/>} />
             
               <Route path="/admin/pesan" element={<PesanAdminPage/>} />
             <Route path="/home" element={<HomePage />} />
               <Route path="/:nama" element={<CoverPage/>} />
            
          </Routes>
      <ToastContainer
         position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
    </>
  )
}

export default App
