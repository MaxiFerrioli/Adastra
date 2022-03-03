import { useCartContext } from "../../context/CartContext";
import { Formik, ErrorMessage } from "formik";
import { Row, Form } from "react-bootstrap";
import "./Checkout.css";

function FormCheckout({ send, change }) {
  const { dataForm } = useCartContext();

  return (
    <>
      <Formik
        validate={() => {
          let error = {};

          if (!dataForm.name) {
            error.name = "Ingrese su nombre";
          } else if (dataForm.name.length < 3) {
            error.name = "El nombre es inválido";
          }

          if (!dataForm.phone) {
            error.phone = "Ingrese un número móvil";
          } else if (
            !/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/.test(
              dataForm.phone
            )
          ) {
            error.phone = "El número móvil es inválido";
          }

          if (!dataForm.email) {
            error.email = "Ingrese su email.";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(dataForm.email)
          ) {
            error.email = "El email es inválido";
          }

          return error;
        }}
      >
        {({ handleBlur, isValid }) => (
          <Form onChange={change}>
            <h2 className="text-center">Complete con sus datos:</h2>
            <Row>
              <Form.Group className="mb-3 w-50">
                <Form.Label htmlFor="name">Nombre</Form.Label>
                <Form.Control
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nombre completo"
                  required
                  defaultValue={dataForm.name}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="name"
                  component="span"
                  className="colorError"
                />
              </Form.Group>
              <Form.Group className="mb-3 w-50">
                <Form.Label htmlFor="phone">Phone</Form.Label>
                <Form.Control
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Ej: 11-XXXX-XXXX"
                  required
                  defaultValue={dataForm.phone}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="phone"
                  component="span"
                  className="colorError"
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="mb-3 w-50">
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Ej: example@gmail.com"
                  required
                  defaultValue={dataForm.email}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="colorError"
                />
              </Form.Group>
              <Form.Group className="mb-3 w-50">
                <Form.Label>Repetir Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email2"
                  placeholder="Ej: example@gmail.com"
                  required
                  defaultValue={dataForm.email2}
                  onBlur={handleBlur}
                />
              </Form.Group>
            </Row>
            <button
              type="submit"
              disabled={
                dataForm.name === "" ||
                dataForm.phone === "" ||
                dataForm.email === "" ||
                dataForm.email !== dataForm.email2
                  ? true
                  : false || isValid === false
              }
              onClick={send}
              className="btn btn-outline-secondary w-100"
            >
              Generar orden
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default FormCheckout;
