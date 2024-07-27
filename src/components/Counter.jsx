import { useState } from 'react';

export default function Counter() {
  const [rockets, setRockets] = useState(0);

  const handleClick = () => {
    setRockets((prevRockets) => prevRockets + 1);
  };

  return (
    <div className='counter'>
      <p>{rockets} rockets sent! 🚀</p>
      <button onClick={() => handleClick()}>Click me</button>
    </div>
  );
}
