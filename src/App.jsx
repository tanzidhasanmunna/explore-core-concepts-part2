import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {

  function handleClick () {
    alert('Button clicked');
  }

  const handleClicked2 = () => {
    alert('Button clicked 2');
  }

  const addToFive = (num) => {
    alert(num+5);
  }
  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends/>
      <Users />
      <Team />
      <Counter  />
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClicked2}>Clicked 2</button>
      <button onClick={() => alert('clicked 3')}>Clicked 3</button>
      <button onClick={()=> addToFive(3)}>Add to 5</button>
    </>
  )
}

export default App
