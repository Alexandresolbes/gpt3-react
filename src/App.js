import logo from './logo.svg';
import './App.css';
import { Footer, Blog, Possibility, Feature, Whatgpt3, Header} from './containers';
import { Cta, Brand, Navbar } from './components';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand  />
      <Whatgpt3 />
      <Feature />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
