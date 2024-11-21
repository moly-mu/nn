import { useEffect, useState } from "react";
import { gsap } from "gsap";
import "./index.css";
import Insesion from "./components/Insesion";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Reg from "./components/Reg";

const App = () => {
  
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    
    gsap.from(".hero-title", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".section-title", { opacity: 0, x: -50, duration: 1, stagger: 0.3 });
    gsap.from(".card", { opacity: 0, y: 50, duration: 1, stagger: 0.2 });
  }, []);

  return (
    <div className="font-sans text-[#00102D]">
      <Navbar />
      <Reg />
      |<Hero />


      {showLogin && <Insesion onClose={() => setShowLogin(false)} />}

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="card bg-white shadow-lg rounded-lg p-5 flex flex-col">
              <img src="/src/assets/Shipping Solutions 3D Scene 1 (1).png" alt="Delivery" className="mx-auto" />
              <p className="mt-4 text-lg font-medium">Repartidor fines de semana</p>
            </div>
            <div className="card bg-white shadow-lg rounded-lg p-5 flex flex-col">
              <img src="/src/assets/Advancing Healthcare With Electronic Prescription 3D Scene 1 (1).png" alt="Doctor" className="mx-auto" />
              <p className="mt-4 text-lg font-medium">Médico a domicilio</p>
            </div>
            <div className="card bg-white shadow-lg rounded-lg p-5 flex flex-col">
              <img src="/src/assets/Course 1 (1).png" alt="Teacher" className="mx-auto" />
              <p className="mt-4 text-lg font-medium">Docente particular</p>
            </div>
          </div>
        </div>
        <MainSection onLoginClick={() => setShowLogin(true)} />
      </section>

      
      <section className="py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
    
        <div className="flex-1 md:pr-8">
          <h2 className="text-6xl font-bold text-left">¿Por qué elegirnos?</h2>
          <p className="mt-7 text-lg text-left">
          Gracias a nuestra inteligencia artificial, tendrá una mejor experiencia
          a la hora de crear su perfil y encontrar ofertas que se ajusten a sus
          experiencias.
          </p>
        </div>

   
        <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
          src="/src/assets/A Female Customer Service Person Sits In Front Of The Phone And Provides Online Consultation 3D Illustration 1.png"
          alt="Help"
          className="w-80 h-auto"
          />
        </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;