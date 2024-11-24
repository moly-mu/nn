
import React from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    gsap.fromTo(
      ".navbar",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  const handleRegisterClick = () => {
    navigate("/Reg");
  };

  const onLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="navbar bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
     
      <div className="flex items-center justify-center flex-1">
        <img
          src="/src/assets/Captura de pantalla 2024-11-18 045933.png" 
          alt="Logo"
          className="w-32 h-auto"
        />
      </div>

        
      <div className="flex items-center gap-8 justify-center flex-1">
      <button
          className="text-sm font-medium text-gray-700 hover:text-blue-500 transition">
          Soy Administrador
        </button>
        <button
          className="text-sm font-medium text-gray-700 hover:text-blue-500 transition">
          Soy Empresa
        </button>
        <button
          className="text-sm font-medium text-gray-700 hover:text-blue-500 transition"
          onClick={handleRegisterClick}>
          Registrarme
        </button>
        <button
          className="px-4 py-2 bg-[#00102D] text-white rounded-lg hover:bg-blue-800"
          onClick={onLoginClick}> 
          Iniciar sesión
        </button>
      </div>
    </div>
  );
};

export default Navbar;
