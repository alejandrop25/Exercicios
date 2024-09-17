import logo from './logo.svg';
import Counter from './Counter';
import TextEditor from './TextEditor';
import CharCount from './CharCount';
import ShowPassword from './ShowPassword';
import Store from './Store';
import { BootstrapElement } from './BootstrapElement';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <br />
        <TextEditor />
        <br />
        <CharCount />
        <br />
        <ShowPassword />
        <br />
        <Store />
        <br />
        <br />
        <h2 className='display-1'>Bootstrap</h2>
        <br />
        <BootstrapElement />
        <br />

        <a
          className="App-link"
          href="mailto:alejandrop2506@gmail.com?subject=Contato&body=Olá!"
          target="_blank"
          rel="noopener noreferrer"
        >
          alejandrop2506@gmail.com
        </a>
        <br />
      </header>
    </div>
  );
}

export default App;
