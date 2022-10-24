import { About } from "./components/Section/About";
import { Footer } from "./components/Section/Footer";
import { Navbar } from "./components/Section/Navbar";
import { Specialists } from "./components/Section/Specialists";
import { SplitImage } from "./components/Section/SplitImage";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <SplitImage />
      <Specialists />
      <Footer />
    </>
  );
}

export default App;
