import { BgBoxImage } from './components/Responsive/BgBoxImage';
import { Header } from './components/Section/Header';
import { Footer } from './components/Section/Footer';
import { Navbar } from './components/Section/Navbar';
import { Specialists } from './components/Section/Specialists';
import { Projects } from './components/Section/Projects';

function App() {
  return (
    <>
      <Navbar />
      <BgBoxImage>
        <Header />
      </BgBoxImage>
      <Projects />
      <Specialists />
      <Footer />
    </>
  );
}

export default App;
