import PropTypes from "prop-types";
import Sharebutton from "./ShareButton";

const Preview = ({ submittedName, invitationLink, shareText }) => (
  <div className="px-4 sm:px-6 lg:px-20 xl:px-[350px]">
  <div className="w-full max-w-2xl mx-auto mt-6 p-6   bg-gray-50 rounded-xl ">
    <p className="whitespace-pre-line leading-relaxed text-[#37558D] font-space ">
       <strong>{submittedName}</strong>

      {"\n\n"}

      {shareText.split(invitationLink).map((part, index, arr) => (
        <span key={index}>
          {part}
          {index < arr.length - 1 && (
            <a
              href={invitationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {invitationLink}
            </a>
          )}
        </span>
      ))}
    </p>

    <Sharebutton
      invitationLink={invitationLink}
      shareText={shareText}
    />
  </div>
  </div>
);

Preview.propTypes = {
  submittedName: PropTypes.string.isRequired,
  invitationLink: PropTypes.string.isRequired,
  shareText: PropTypes.string.isRequired,
};

export default Preview;