export const Tituloh2 = ({ titulo, saludo }) => {
  return (
    <>
      <h2 onClick={() => saludo()}>{titulo}</h2>
    </>
  );
};
export default Tituloh2