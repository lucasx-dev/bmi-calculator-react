import { TbSunMoon } from "react-icons/tb";
const botoes = ({ calcularIMC, mudarTema }) => {
  return (
    <>
      <button
        className="rounded-md bg-violet-900 text-white w-80 hover:scale-105 hover:bg-violet-800 "
        onClick={calcularIMC}
      >
        Calcular
      </button>
      <button className="rounded-md  hover:scale-105 " onClick={mudarTema}>
        <TbSunMoon />
      </button>
    </>
  );
};
export default botoes;
