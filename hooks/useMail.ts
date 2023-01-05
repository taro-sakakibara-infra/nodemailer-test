import { useState } from "react";

export const useMail = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const send = async () => {
    await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify({
        text: `
      名前
      ${name}
      
      お問い合わせ内容
      ${message}
      `,
        email: email,
      }),
    });
  };

  return {
    setName,
    setMessage,
    setEmail,
    send,
  };
};
