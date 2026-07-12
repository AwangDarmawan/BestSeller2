import Admin from "../Components/Admin/Admin"
import Footer from "../Components/Footer"
import NavbarAdmin from "../Components/Admin/NavbarAdmin"


function AdminPage() {
  return (
    <>
  
    <NavbarAdmin />
       <div className="max-w-6xl mx-auto p-4">
        <Admin />
      </div>
      <Footer/>
      
      
    </>
  )
}

export default AdminPage
