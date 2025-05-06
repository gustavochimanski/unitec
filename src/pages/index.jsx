import Hero from "/";
import ProblemsSection from "./Components/ProblemsSection";
import ComoFazemosDiferenca from "./Components/ComoFazemosDiferença";
import FuncionalidadesPoderosas from "./Components/FuncionalidadesPoderosas";
import TestimonialsSection from "./Components/TestimonialsSection"; // <-- CORRIGIDO
import NumerosQualidade from "./Components/NumerosQualidade";
import SuportePersonalizado from "./Components/SuportePersonalizado"; // <-- CORRIGIDO
import SoliciteDemo from "./Components/SoliciteDemo";
import Footer from "./Components/Footer";


function Home() {
  return (
    <>
      <Hero/>
      <ProblemsSection />
      <ComoFazemosDiferenca />
      <FuncionalidadesPoderosas />
      <TestimonialsSection />
      <NumerosQualidade />
      <SuportePersonalizado />
      <SoliciteDemo />
      <Footer />
    </>
  )
}

export default Home

