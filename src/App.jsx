import { useState } from 'react';
import './style.css';

export default function App() {
  const [rockets, setRockets] = useState(0);

  const handleClick = () => {
    setRockets((prevRockets) => prevRockets + 1);
  };

  return (
    <div>
      <h1>Hello SSR 👨‍🚀</h1>
      <p>{rockets} rockets sent! 🚀</p>
      <button onClick={() => handleClick()}>Click me</button>
    </div>
  );
}
