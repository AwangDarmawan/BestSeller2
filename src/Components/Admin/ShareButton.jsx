

import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaCopy,
} from "react-icons/fa";
import { encodeForShare } from "./Share";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
const ShareButton = ({ invitationLink, shareText }) => {
  const handleCopy = async () => {
    try {
    
      await navigator.clipboard.writeText(shareText);
      toast.success("Link berhasil disalin 📋");
    } catch (err) {
        console.error(err);
       toast.erorr("Link berhasil disalin 📋");
      
    }
  };

  return (
    <div className="flex gap-4 mt-4">
      {/* WhatsApp */}
      <a
        href={`https://api.whatsapp.com/send?text=${encodeForShare(shareText)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition-all duration-300"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeForShare(
          invitationLink
        )}&quote=${encodeForShare(shareText)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg transition-all duration-300"
      >
        <FaFacebook className="text-white text-2xl" />
      </a>

      {/* Twitter */}
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeForShare(
  shareText
)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-sky-500 hover:bg-sky-600 shadow-lg transition-all duration-300"
      >
        <FaTwitter className="text-white text-2xl" />
      </a>

      {/* <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-500 hover:bg-pink-600 shadow-lg transition-all duration-300" > 
      <FaInstagram className="text-white text-2xl" /> 
      </a> */}

      {/* Salin Link */}
      <button
        onClick={handleCopy}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-600 hover:bg-gray-700 shadow-lg transition-all duration-300"
      >
        <FaCopy className="text-white text-2xl" />
      </button>
    </div>
  );
};

ShareButton.propTypes = {
  invitationLink: PropTypes.string.isRequired,
  shareText: PropTypes.string.isRequired, 
};

export default ShareButton;