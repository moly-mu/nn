
const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8 text-center">
      <div className="container mx-auto">
        <p className="text-lg font-medium">2024 | UDT - Todos los derechos reservados</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-blue-800 hover:underline">Volver al inicio</a>
          <a href="#" className="text-blue-800 hover:underline">Contacto</a>
          <a href="#" className="text-blue-800 hover:underline">Preguntas y respuestas</a>
          <a href="#" className="text-blue-800 hover:underline">Cookies</a>
        </div>
        <div className="flex justify-center space-x-4 mt-4 text-gray-600">
          <span>📧</span>
          <span>📞</span>
          <span>🌐</span>
          <span>📘</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
