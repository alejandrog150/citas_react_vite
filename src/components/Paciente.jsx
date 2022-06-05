//import { useEffect } from "react";

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, tel, fecha, sintomas, notas, id } = paciente

  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar este paciente');

    if(respuesta){
      eliminarPaciente(id);
    }
  }

  return (
    <div className="mb-6 bg-white shadow-md p-5 rounded-xl">
      <p className="font-bold mb-2 text-gray-700 uppercase">Nombre: {''}
        <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-2 text-gray-700 uppercase">Propietario: {''}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-2 text-gray-700 uppercase">Telefono: {''}
        <span className="font-normal normal-case">{tel}</span>
      </p>

      <p className="font-bold mb-2 text-gray-700 uppercase">Fecha: {''}
        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-2 text-gray-700 uppercase">Síntomas: {''}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <p className="font-bold mb-4 text-gray-700 uppercase">Notas: {''}
        <span className="font-normal normal-case">{notas}</span>
      </p>

      <div className="flex justify-around">
        <button
          className="py-1.5 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold
         uppercase rounded"
          onClick={() => setPaciente(paciente)}
        >Editar</button>

        <button
          className="py-1.5 px-5 bg-red-600 hover:bg-red-700 text-white font-bold
        uppercase rounded"
        onClick={handleEliminar}
        >Eliminar</button>
      </div>
    </div>
  )
}

export default Paciente