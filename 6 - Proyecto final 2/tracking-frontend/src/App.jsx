import Main from "./assets/components/Main";
import NavBar from "./assets/components/NavBar";
import "./index.css";
import { useState, useEffect } from "react";

function App() {
  const [figuritas, setFiguritas] = useState([]);
  const [isLoading, setIsLoading] = useState("false");

  //fetch para la actualización de los datos
  const updateFigurita = async (id, cantidad, la_tengo) => {
    try {
      setIsLoading(true);
      const data = {
        la_tengo: la_tengo,
        cantidad: cantidad,
      };

      const response = await fetch(
        `http://localhost:3004/api/figuritas/figuritas/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      //Lo guardo en un state
    } catch (error) {
      return <Error to="/error" />;
    } finally {
      setIsLoading(false);
    }
  };

  //fetch para traer todos los datos de la DB.
  const getFiguritas = async () => {
    try {
      setIsLoading(true);
      //Obtengo los datos de la REST API con el ENDPOINT
      fetch(`http://localhost:3004/api/figuritas/figuritas`)
        //Proceso lo que me devuelve el REST API (objeto promise)
        .then((response) => response.json())
        //Convierte el valor retornado en formato JSON
        .then((data) => {
          setFiguritas(data);
        });
      //Lo guardo en un state
    } catch (error) {
      return <Error to="/error" />;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getFiguritas();
  }, []);

  return (
    <>
      <div className="app-conteiner">
        <NavBar />
        <Main
          updateFigurita={updateFigurita}
          isLoading={false}
          figuritas={figuritas}
        />
      </div>
    </>
  );
}

export default App;
