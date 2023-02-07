import './App.scss';
import MyCarousel from './pages/MyCarousel';
import Content from './pages/Content';
import Navbar from './pages/Navbar';
import Partners from './pages/Partners';
import Aboutus from './pages/Aboutus';
import Stacks from './pages/Stacks';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <MyCarousel />
      <Partners />
      <Aboutus />
      <Stacks />
      <Blog />
      <FAQ />
    </div>
  );
}

export default App;
