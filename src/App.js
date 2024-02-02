import logo from './logo.svg';
import './App.css';
import Top from './Component/Topnav/Top';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
function App() {
  return (
    <div className="App">

      <Top></Top>
      <Header></Header>
    </div>
  );
}

export default App;
