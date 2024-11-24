
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Insesion = ({ onClose }) => {
 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const testUser = {
    email: "prueba@udt.com",
    password: "123456",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email === testUser.email && password === testUser.password) {
      alert("Inicio de sesión exitoso");
      navigate("/src/components/Busqueda.jsx");
      
      onClose();
    } else {
      setError("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-blue">
          ✗
        </button>
        <h2 className="text-xl font-bold mb-4 text-center">Iniciar sesión</h2>
        {error && (
          <p className="text-red-500 text-center text-sm mb-4">{error}</p>
        )}
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-lg px-4 py-2"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-lg px-4 py-2"
            required
          />
          <a href="#" className="text-sm text-blue-600 hover:underline self-end">
            ¿Olvidaste tu contraseña?
          </a>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Ingresar
          </button>
          <p className="text-center text-sm">
            ¿No tienes cuenta?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Regístrate
            </a>
          </p>
          <div className="flex justify-center mt-4">
            <button className="border border-gray-300 py-2 px-4 rounded hover:bg-gray-100 flex items-center">
              <img
                src="/src/assets/google 2.png"
                alt="google logo"
                className="w-4 h-4"
              />
              <span className="ml-2">Continuar con Google</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Insesion.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Insesion;
