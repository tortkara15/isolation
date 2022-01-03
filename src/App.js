import './App.css';
import Header from './Header'
import MainPage from './MainPage'
import Footer from './Footer'

function App() {
  return (
    <>
    <div className="mainContainer">
      <div className="headerComp container"> <Header /></div>
    <div className="mainPageComp"> <MainPage/></div>
  <div className="footerComp"> <Footer/></div>
  </div>
    </>
  );
}

export default App;
