
import './App.css'
import List from './Components/List/List.jsx';
import {ANIMALS} from './MockData.js';

function App() {


  return (
    <>
      <h1>Table with Animals</h1>
      <List list={ANIMALS} />
    </>
  )
}

export default App
