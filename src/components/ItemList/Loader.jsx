import SyncLoader from "react-spinners/SyncLoader";

function Loader(props) {

  return (
    <div>
      <div>
        <h5
          style={{
            fontSize: "30px",
            color: "black"
          }}
        >
          {props.textLoad}
        </h5>
        <SyncLoader/>
      </div>
    </div>
  );
}

export default Loader;
