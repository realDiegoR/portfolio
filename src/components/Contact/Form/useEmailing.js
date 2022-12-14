import React from "react";
import emailjs from "@emailjs/browser";

function useEmailing() {
  const form = React.useRef(null);
  const [formAlert, setFormAlert] = React.useState({
    status: null,
    isVisible: false,
  });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fbn1m8j",
        "template_o7fwdnu",
        form.current,
        "St5iv4lgJlmyZvCCN"
      )
      .then(() => {
        setFormAlert({ status: "Email Sent!", isVisible: true });
      })
      .catch(() => {
        setFormAlert({ status: "Error", isVisible: true });
      })
      .finally(() => {
        setTimeout(() => {
          const formElement = document.querySelector("form");
          formElement.reset();
          setFormAlert({ ...formAlert, isVisible: false });
        }, 3000);
      });
  };

  return { form, formAlert, sendEmail };
}

export { useEmailing };
