import SyncLoader from "react-spinners/SyncLoader";

function Loader(props) {
  return (
    <div className="d-flex justify-content-center">
      <h4
        style={{
          fontSize: "40px",
          marginRight: "20px",
          color: "black",
          height: "70vh"
        }}>
        {props.textLoad}
      </h4>
      <SyncLoader size={16} color="black"/>
    </div>
  );
}

export default Loader;
