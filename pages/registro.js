const Registro = () => {
    return (
      <>
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
                <div>
                <img src="/img/logo.svg" alt="Logo" className="h-7 sm:h-8" />
                </div>
                <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <p> Para registrate deberás enviar los siguientes datos de tu tienda a hola@gmail.com</p>
                    <ul className="list-disc space-y-2">
                    <li className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                            <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        <p className="ml-2">
                        Rut
                        </p>
                    </li>
                    <li className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                            <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        <p className="ml-2">
                        Descripción de la tienda
                        </p>
                    </li>
                    <li className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                            <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        <p className="ml-2">Email</p>
                    </li>
                    <li className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                            <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        <p className="ml-2">
                        Logo (formato .jpg)
                        </p>
                    </li>
                    <li className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                            <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        <p className="ml-2">
                        Nombre
                        </p>
                    </li>
                    <li className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                            <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        <p className="ml-2">
                        País - Departamento - Ciudad/Municipio - Ubicación - Código postal - Barrio - Dirección
                        </p>
                    </li>
                    <li className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                            <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        <p className="ml-2 mb-2">
                        Contacto 
                        </p>
                    </li>
                    </ul>
                    <p> Cuando envies los datos, se revisarán y si la tienda cumple con los requisitos, 
                        habrán máximo 2 días hábiles para incluirla en la página. 
                        De lo contrario se informará que no cumple con lo establecido.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
      </>
    )
  }
  
  export default Registro;