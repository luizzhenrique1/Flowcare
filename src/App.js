import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { Work } from "./components/Work";
import { About } from "./components/About";
import { Articles } from "./components/Articles";
import { Products } from "./components/Products";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";



function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Work/>
      <Articles/>
      <Products/>
      <Contact/>
      <Footer/>
      

    </div>
  );
}

export default App;
