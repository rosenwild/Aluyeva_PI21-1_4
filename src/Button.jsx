import { useState } from "react";
import Button from "react-bootstrap/Button";

export default function MyApp() {
  return (
    <div>
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <Button variant="primary" size="lg" onClick={handleClick}>
      Clicked {count} times
    </Button>
  );
}
