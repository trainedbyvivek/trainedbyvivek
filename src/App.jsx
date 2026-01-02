import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Transformations from "./components/Transformations.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <Transformations />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
