import { useEffect, useState } from "react";
import "./index.css";
import Resultado from "./components/Resultado";
import Inputs from "./components/Inputs";
import Footer from "./components/Footer";
import Botoes from "./components/Botoes";
import Erro from "./components/Erro";

function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(null);
  const [classe, setClasse] = useState("");
  const [temaEscuro, setTemaEscuro] = useState(false);
  const [mostrar, setMostar] = useState(false);
  const [erro, setErro] = useState(false);
  const mudarTema = () => {
    const temaAtual = !temaEscuro;
    setTemaEscuro(temaAtual);
    localStorage.setItem("temaEscuro", JSON.stringify(temaAtual));
  };
  useEffect(() => {
    const temaSalvo = localStorage.getItem("temaEscuro");
    if (temaSalvo !== null) {
      setTemaEscuro(JSON.parse(temaSalvo));
    }
  }, []);
  useEffect(() => {
    setErro(false);
  }, [imc, altura]);

  const temaEstilo = () => {
    if (temaEscuro === true) {
      return "bg-black text-white transition-colors duration-300 ease-in-out";
    } else {
      return "bg-slate-200 text-black transition-colors duration-300 ease-in-out";
    }
  };

  const calcularIMC = () => {
    const alturaMetros = parseFloat(altura);
    const pesoKilos = parseFloat(peso);
    if (altura === "" || altura == 0 || peso === "" || peso == 0) {
      setErro(true);
      setMostar(false);
    }
    if (alturaMetros > 0 && pesoKilos > 0) {
      const valorIMC = pesoKilos / (alturaMetros * alturaMetros);
      setImc(valorIMC.toFixed(2));
      setErro(false);
      if (valorIMC < 18.5) {
        setClasse("Magreza");
      } else if (valorIMC >= 18.5 && valorIMC <= 24.9) {
        setClasse("Normal");
      } else if (valorIMC >= 25 && valorIMC <= 29.9) {
        setClasse("Sobrepeso");
      } else if (valorIMC >= 30 && valorIMC <= 34.9) {
        setClasse("Obesidade grau 1");
      } else if (valorIMC >= 35 && valorIMC <= 35.9) {
        setClasse("Obesidade grau 2");
      } else {
        setClasse("Obesidade grau 3");
      }
      setMostar(true);
      setAltura("");
      setPeso("");
    }
  };
  const selecionarCor = () => {
    if (classe === "Magreza") {
      return "text-blue-500";
    } else if (classe === "Normal") {
      return "text-green-500";
    } else if (classe === "Sobrepeso") {
      return "text-yellow-500";
    } else if (classe === "Obesidade grau 1") {
      return "text-orange-500";
    } else if (classe === "Obesidade grau 2") {
      return "text-red-500";
    } else if (classe === "Obesidade grau 3") {
      return "text-red-700";
    } else {
      return "text-white";
    }
  };

  return (
    <div className={`${temaEstilo()} h-screen  w-screen`}>
      <h1 className="text-5xl p-8 justify-center font-bold items-center flex">
        Calculadora IMC
      </h1>
      <div
        className={`${temaEstilo()} flex flex-col text-2xl items-center w-full p-4 gap-4`}
      >
        <Inputs
          peso={peso}
          altura={altura}
          setAltura={setAltura}
          setPeso={setPeso}
        />
        {erro && <Erro />}
        <Botoes calcularIMC={calcularIMC} mudarTema={mudarTema} />
        {mostrar && (
          <Resultado imc={imc} classe={classe} selecionarCor={selecionarCor} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
