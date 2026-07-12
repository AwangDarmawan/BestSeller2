
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
             {/* <Route path="/home" element={<HomePage />} /> */}
               <Route path="/admin/pesan" element={<PesanAdminPage/>} />
             <Route path="/home" element={<HomePage />} />
               <Route path="/:nama" element={<CoverPage/>} />
            
          </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
      />
    </BrowserRouter>
    </>
  )
}

export default App
