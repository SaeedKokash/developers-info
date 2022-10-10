import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import DeveloperForm from './components/DeveloperForm';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />  
      <DeveloperForm />
      <Footer />
    </div>
  );
}

export default App;
