import React from "react";

function Contact(props) {
  return (
    <div className="flex space-x-3 h-1/4 space-y-3 items-center justify-center">
      <img
        src={props.icon}
        className="h-7 transform translate-y-2 rounded-sm"
      />
      <input
        type="text"
        placeholder={props.holder}
        className="p-1 bg-transparent focus:bg-gray-50"
      />
    </div>
  );
}

export default Contact;
