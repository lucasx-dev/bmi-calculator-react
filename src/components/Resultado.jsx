const resultado = ({ imc, classe, selecionarCor }) => {
  return (
    <h1 className=" font-normal ">
      Seu IMC é {""}
      <span className={`${selecionarCor()} font-bold`}>{imc}</span> e sua
      classificação é {""}
      <span className={`${selecionarCor()} font-bold`}>{classe}</span>
    </h1>
  );
};
export default resultado;
