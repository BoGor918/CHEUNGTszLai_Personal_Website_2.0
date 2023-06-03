import './App.css';
import Header from './components/header';
import TopSection from './components/topSection';
import LeftRightColumn from './components/leftRightColumn';

function App() {
  return (
    <div className="px-[10rem]">
      <Header />
      <TopSection />
      <LeftRightColumn />
    </div>
  );
}

export default App;
