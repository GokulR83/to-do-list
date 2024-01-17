import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import AddListForm from './Component/AddListForm/AddListForm';
import ShowList from './Component/ShowList/ShowList';
function App() {
  return (
    <div className="App">
      <Header/>
      <ShowList/>
      <Footer/>
    </div>
  );
}

export default App;

