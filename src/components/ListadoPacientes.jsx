import Paciente from "./Paciente"
//import { useEffect } from "react";

export const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-full md:flex md:flex-col md:pl-3">

      {pacientes.length ? (
        <>
          <div className="md:flex-grow-0 md:flex-shrink-0">
            <p className="font-black text-xl mt-1 text-center mb-3">
              Administra tus {''}
              <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>
          </div>

          <div className="md:flex-grow md:flex-shrink md:overflow-hidden">
            <div className="h-full overflow-y-scroll">
              {pacientes.map((paciente) => (
                <Paciente
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                />
              ))}
            </div>
          </div>
        </>
      ) : (

        <div className="md:flex-grow-0 md:flex-shrink-0">

          <h2 className="font-black text-2xl text-center ">No hay pacientes</h2>

          <p className="text-lg mt-1 text-center mb-4">
            Comienza agregando pacientes {''}
            <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
          </p>
        </div>

      )}

    </div>
  )
}
