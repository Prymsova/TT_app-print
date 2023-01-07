import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import response from './sprintsList';

function App() {
  return (
    <div className="App">
      <Header response={response}/>
      {/* podmínka je-li vybrán sprint (nenulový state), tak zobraz main sekci s těmi tasks */}
      <Main response={response}/>
      <Footer />
    </div>
  );
}

export default App;
