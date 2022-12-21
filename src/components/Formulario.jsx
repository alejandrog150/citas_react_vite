import { useState, useEffect } from 'react';
import Error from './Error';
import addButton from '../img/add-button.svg'
import editButton from '../img/edit-button.svg'

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [tel, setTel] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [notas, setNotas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setTel(paciente.tel);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
      setNotas(paciente.notas);
    }
  }, [paciente]);


  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36)

    return random + fecha;
  }

  const handleSubmit = () => {
    event.preventDefault()

    //Validación del Formulario
    if ([nombre, propietario, tel, fecha, sintomas].includes('')) {
      setError(true)
      return
    }
    setError(false)

    const objetoPaciente = {
      nombre,
      propietario,
      tel,
      fecha,
      sintomas,
      notas
    }

    if (paciente.id) {
      // Editando el Registro
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map(pacienteState =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState);

      setPacientes(pacientesActualizados);
      setPaciente({})

    } else {
      // Nuevo registro
      objetoPaciente.id = generarId()

      setPacientes([...pacientes, objetoPaciente]);
    }

    // Reiniciar el form
    setNombre('');
    setPropietario('');
    setTel('');
    setFecha('');
    setSintomas('');
    setNotas('');
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 md:h-full md:flex md:flex-col md:pr-3">

      <div className="md:flex-grow-0 md:flex-shrink-0">
        <p className="font-black text-xl mt-1 text-center mb-3">
          Añade Pacientes y {''}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>
      </div>

      <div className="md:flex-grow md:flex-shrink md:overflow-hidden pb-2">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg px-4 py-2 h-full overflow-y-scroll">

          <div className="flex justify-end">
            <button className="mt-2 mx-3" style={{ height: 45, width: 45 }} type="submit" value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}>
              {paciente.id == null ? (
                <img src={addButton} alt="Agregar Paciente" />
              ) : (
                <img src={editButton} alt="Agregar Paciente" />
              )
              }
            </button>
          </div>

          {error && <Error><p>Faltan Datos</p></Error>}
          
          <div className="mb-3">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
              Nombre Mascota
            </label>
            <input id="mascota" type="text" placeholder="Nombre de la Mascota"
              className="border-2 w-full p-2 mt-0.5 placeholder-gray-400 rounded-md"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)} />
          </div>

          <div className="mb-3">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
              Nombre Propietario
            </label>
            <input id="propietario" type="text" placeholder="Nombre del Propietario"
              className="border-2 w-full p-2 mt-0.5 placeholder-gray-400 rounded-md"
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)} />
          </div>

          <div className="mb-3">
            <label htmlFor="tel" className="block text-gray-700 uppercase font-bold">
              Teléfono
            </label>
            <input id="tel" type="tel" placeholder="Telefono Contacto Propietario"
              className="border-2 w-full p-2 mt-0.5 placeholder-gray-400 rounded-md"
              value={tel}
              onChange={(e) => setTel(e.target.value)} />
          </div>

          <div className="mb-3">
            <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold">
              Fecha
            </label>
            <input id="fecha" type="date"
              className="border-2 w-full p-2 mt-0.5 placeholder-gray-400 rounded-md"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)} />
          </div>

          <div className="mb-2">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
              Síntomas
            </label>
            <textarea id="sintomas" placeholder="Describe los síntomas"
              className="border-2 w-full p-2 mt-0.5 placeholder-gray-400 rounded-md"
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)} />
          </div>

          <div className="mb-1">
            <label htmlFor="notas" className="block text-gray-700 uppercase font-bold">
              Notas
            </label>
            <textarea id="notas" placeholder="Notas..."
              className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
              value={notas}
              onChange={(e) => setNotas(e.target.value)} />
          </div>

          <input type="submit" value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold 
        hover:bg-indigo-700 cursor-pointer transition-all"/>
        </form>

      </div >




    </div >
  )
}

export default Formulario