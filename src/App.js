import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-6xl font-mono text-amber-500'>Hey,Tailwind,welcome!!</h1>
      <Header></Header>
      

    </div>
  );
}

export default App;
