import "./index.css";
import Figurita from "./Figurita";

// Traemos los datos por props desde el componente padre APP
function Main({ figuritas, isLoading, updateFigurita }) {
  return (
    <div className="main__conteiner">
      <div className="main__card-wrapper">
        {isLoading && <p>Loading...</p>}
        {figuritas &&
          figuritas.map((figurita, index) => {
            return (
              <Figurita
                key={index}
                id={figurita.id}
                la_tengo={figurita.la_tengo}
                url_foto={figurita.url_foto}
                categoria={figurita.categoria}
                nombre={figurita.nombre}
                updateFigurita={updateFigurita}
                cantidad={figurita.cantidad}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Main;
