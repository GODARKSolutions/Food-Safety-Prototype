import './App.css';
import FoodSafety from './components/FoodSafety';
import FoodSafetyPrototype from './components/FoodSafetyPrototype';

function App() {
  return (
    <div className="App">
      <header className="App-header bg-blue-800 p-4 text-white">
        <h1 className="text-xl font-bold">Chef Admin Dashboard</h1>
      </header>
      <main className="py-8">
        {/* <FoodSafety /> */}
        <FoodSafetyPrototype />
      </main>
    </div>
  );
}

export default App;
