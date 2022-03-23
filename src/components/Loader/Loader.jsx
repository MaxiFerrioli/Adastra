import SyncLoader from "react-spinners/SyncLoader";

function Loader() {
  return (
    <div className="container-loader">
      <h4>Cargando productos</h4>
      <SyncLoader />
    </div>
  );
}

export default Loader;
