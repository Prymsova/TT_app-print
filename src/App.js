import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      {/* podmínka je-li vybrán sprint (nenulový state), tak zobraz main sekci s těmi tasks */}
      <Footer />
    </div>
  );
}

export default App;
