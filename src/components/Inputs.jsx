const Input = ({ peso, altura, setAltura, setPeso }) => {
  return (
    <>
      <h1>Digite seu peso:</h1>
      <input
        type="number"
        autoFocus
        placeholder="Peso (ex: 65.0) kg"
        value={peso}
        onChange={(e) => setPeso(e.target.value.replace(",", "."))}
        className="rounded-md p-2 outline-violet-600 bg-gray-800 text-white"
      />
      <h1>Digite sua altura:</h1>
      <input
        value={altura}
        type="number"
        onChange={(e) =>
          setAltura(e.target.value.replace(/(\d{1})(\d)(\d)/, "$1.$2$3"))
        }
        placeholder="Altura (ex: 1.75) metros"
        maxLength={4}
        className="rounded-md p-2 decoration-0 outline-violet-600 bg-gray-800 text-white"
      />
    </>
  );
};
export default Input;
