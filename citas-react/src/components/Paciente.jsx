

const Paciente = () => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className=" font-bold mb-3  text-gray-700 uppercase">
          Nombre: <span className="font-normal normal-case">Hook</span>
        </p>
        <p className=" font-bold mb-3  text-gray-700 uppercase">
          Propietario: <span className="font-normal normal-case">Jirgort</span>
        </p>
        <p className=" font-bold mb-3  text-gray-700 uppercase">
          Email:{" "}
          <span className="font-normal normal-case">Jirgort@gmail.com</span>
        </p>
        <p className=" font-bold mb-3  text-gray-700 uppercase">
          Fecha Alta:{" "}
          <span className="font-normal normal-case">20 Agosto 2023</span>
        </p>
        <p className=" font-bold mb-3  text-gray-700 uppercase">
          Sintomas:{" "}
          <span className="font-normal normal-case">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            blanditiis alias. Quaerat consequuntur, expedita iure dignissimos,
            deleniti debitis ipsam animi aperiam aspernatur, earum veritatis. Et
            dolorum repellat magni consectetur soluta!
          </span>
        </p>
      </div>
  )
}

export default Paciente
