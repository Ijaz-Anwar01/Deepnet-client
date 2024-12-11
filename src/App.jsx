import './App.css';
import Categories from './Components/Categories/Categories';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
// import Items from './Components/Items/Items';
import Navbar from './Components/Navbar/Navbar';
import Terms from './Components/Terms/Terms';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      {/* <Items /> */}
      <Footer />
      <Terms />
    </>
  );
}

export default App;
