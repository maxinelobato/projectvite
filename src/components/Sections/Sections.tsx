import { Navbar } from "../Nav/Navbar";
import { BgBox } from "../Responsive/BgBox";
import { BgBoxImage } from "../Responsive/BgBoxImage";
import { CTASplitImage } from "./CTASplitImage";
import { Header } from "./Header";
import { Specialists } from "./Specialists";

function Sections() {
  return (
    <>
      <BgBoxImage>
        <Navbar />
        <Header />
      </BgBoxImage>
      <BgBox>
        <CTASplitImage />
        <Specialists />
      </BgBox>
    </>
  );
}

export default Sections;
