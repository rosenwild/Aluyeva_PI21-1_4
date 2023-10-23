import { useState } from "react";

export default function MyApp() {
  return (
    <div>
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [phone, setPhone] = useState("Contacts");

  function handleClick() {
    if (phone == "+79680985585") {
      setPhone("Call us!!!");
    } else {
      setPhone("+79680985585");
    }
  }

  return (
    <button className="contact" onClick={handleClick}>
      {phone}
    </button>
  );
}
