import { useState } from "react";
import Form from "./Form";
import Preview from "./Preview";
import { generateInvitationLink, generateShareText } from "./Share";
// import Footer from "../Footer";
// import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Admin = () => {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name.trim());
  };

  const invitationLink = generateInvitationLink(submittedName);
  const shareText = generateShareText(submittedName, invitationLink);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-red-500 p-6">
   
      {/* Form */}
      <Form
        name={name}
        setName={setName}
        handleSubmit={handleSubmit}
      />

      {/* Preview */}
      {submittedName && (
        <Preview
          submittedName={submittedName}
          invitationLink={invitationLink}
          shareText={shareText}
        />
      )}
      {/* /* footer */}
      {/* <Footer/> */}
       
    </div>
  );
};

export default Admin;