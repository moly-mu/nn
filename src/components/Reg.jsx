
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Reg = ({ onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [firstLastName, setFirstLastName] = useState("");
  const [secondLastName, setSecondLastName] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!firstName || !firstLastName || !email || !password) {
      setError("Por favor, complete todos los campos requeridos");
      return;
    }

    if (email !== confirmEmail) {
      setError("El correo electrónico no coincide");
      return;
    }

    if (password !== confirmPassword) {
      setError("La contraseña no coincide");
      return;
    }

    
    setError("");
    setSuccessMessage("¡Registro exitoso! Redirigiendo a inicio de sesión...");

    setTimeout(() => {
      navigate("/login");
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-blue">
          ✗
        </button>
        <h2 className="text-xl font-bold mb-4 text-center">Registro</h2>

        {error && (
          <p className="text-red-500 text-center text-sm mb-4">{error}</p>
        )}
        {successMessage && (
          <p className="text-green-500 text-center text-sm mb-4">{successMessage}</p>
        )}

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Primer nombre"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border rounded-lg px-4 py-2"
            required
          />
          <input
            type="text"
            placeholder="Segundo nombre"
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
            className="border rounded-lg px-4 py-2"
          />
          <input
            type="text"
            placeholder="Primer apellido"
            value={firstLastName}
            onChange={(e) => setFirstLastName(e.target.value)}
            className="border rounded-lg px-4 py-2"
            required
          />
          <input
            type="text"
            placeholder="Segundo apellido"
            value={secondLastName}
            onChange={(e) => setSecondLastName(e.target.value)}
            className="border rounded-lg px-4 py-2"
          />
          <select
            value={documentType}
            onChange={(e) => setDocumentType(e.target.value)}
            className="border rounded-lg px-4 py-2"
            required
          >
            <option value="" disabled>Tipo de documento</option>
            <option value="RC">Registro civil</option>
            <option value="CC">Cédula de ciudadanía</option>
            <option value="CE">Cédula de extranjería</option>
            <option value="NIT">Número de identificación tributaria</option>
            <option value="PEP">Permiso especial de permanencia</option>
            <option value="FOREIGN_NIT">NIT de otro país</option>
          </select>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-lg px-4 py-2"
            required
          />
          <input
            type="email"
            placeholder="Confirmar correo electrónico"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
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
          <input
            type="password"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border rounded-lg px-4 py-2"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Registrarse
          </button>
          <p className="text-center text-sm">
            ¿Ya tienes una cuenta?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Iniciar sesión
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

Reg.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Reg;

