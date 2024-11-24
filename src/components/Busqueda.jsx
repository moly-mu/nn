import { useEffect } from 'react';
import { gsap } from 'gsap';

const JobSearchPage = () => {
    useEffect(() => {
        gsap.from('.fade-in', {
            opacity: 0,
            y: 20,
            duration: 1,
            stagger: 0.2,
            ease: 'power2.out',
        });
    }, []);

    return (
        <div className="min-h-screen bg-white flex flex-col">
            
            <nav className="flex justify-between items-center p-4 bg-white shadow-md">
                <div className="flex items-center space-x-2">
                    <img src="/logo.png" alt="Logo" className="h-8" />
                    <h1 className="text-xl font-bold">UDT TALENTO</h1>
                </div>
                <div className="space-x-4">
                    <a href="/cv" className="text-sm text-gray-700 hover:underline">
                        Crear hoja de vida
                    </a>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        Iniciar sesión
                    </button>
                </div>
            </nav>

    
            <main className="flex flex-col items-center py-8 px-4">
                <div className="fade-in text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Filtra tus búsquedas para un mejor resultado
                    </h2>
                    <img
                        src="/filter-image.png"
                        alt="Filtro"
                        className="mt-4 w-64 mx-auto"
                    />
                </div>

                <div className="flex flex-wrap gap-8 justify-center w-full max-w-6xl">
                    {/* Filters */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md w-full md:w-1/4">
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">
                            Categorías
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <input
                                    type="checkbox"
                                    id="tech"
                                    className="mr-2"
                                />
                                <label htmlFor="tech">Tecnología de la información</label>
                            </li>
                            <li>
                                <input
                                    type="checkbox"
                                    id="design"
                                    className="mr-2"
                                />
                                <label htmlFor="design">Diseño y Creatividad</label>
                            </li>
                            


                        </ul>
                        <h3 className="text-lg font-semibold text-gray-700 mt-6">
                            Modalidad del trabajo
                        </h3>
                        <select className="w-full border-gray-300 rounded-lg p-2 mt-2">
                            <option>Todas</option>
                            <option>Remoto</option>
                            <option>Presencial</option>
                        </select>
                        <h3 className="text-lg font-semibold text-gray-700 mt-6">
                            Fecha de publicación
                        </h3>
                        <select className="w-full border-gray-300 rounded-lg p-2 mt-2">
                            <option>En cualquier momento</option>
                            <option>Últimas 24 horas</option>
                        </select>
                        <h3 className="text-lg font-semibold text-gray-700 mt-6">
                            Idioma
                        </h3>
                        <div className="flex space-x-4 mt-2">
                            <button className="px-4 py-2 border rounded-lg">
                                Español
                            </button>
                            <button className="px-4 py-2 border rounded-lg">
                                Inglés
                            </button>
                        </div>
                    </div>

                   
                    <div className="flex-1 space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg shadow-md fade-in">
                            <p>Job result 1</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-md fade-in">
                            <p>Job result 2</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-md fade-in">
                            <p>Job result 3</p>
                        </div>
                        
                    </div>
                </div>
            </main>

            
            <footer className="bg-gray-100 text-center py-4 mt-auto">
                <p className="text-sm text-gray-600">
                    2024 | UDT - Todos los derechos reservados
                </p>
                <div className="mt-2 flex justify-center space-x-4">
                    <a href="#" className="text-gray-500 hover:text-gray-800">
                        Facebook
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-800">
                        Twitter
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default JobSearchPage;


