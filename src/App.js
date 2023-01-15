import Hero from "./component/hero/Hero";
import Icons from "./component/icons/Icons";
import Navbar from "./component/navbar/Navbar";
import './component/navbar/Navbar.scss';


function App() {
  return (
    
         <>
         <div className="page-container">
         <Navbar />
         <Hero />
         <Icons />
         </div>
         
         
         </>
  );
}

export default App;
