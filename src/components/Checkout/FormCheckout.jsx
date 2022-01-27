import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Formik, ErrorMessage } from "formik";
import { useCartContext } from "../../context/CartContext";
import "./Checkout.css";

function FormCheckout({ send, change }) {
  const { dataForm } = useCartContext();

  return (
    <>
      <Formik
        validate={() => {
          let error = {};

          if (!dataForm.name) {
            error.name = "Ingrese un nombre";
          } else if (dataForm.name.length < 3) {
            error.name = "Nombre inválido";
          }

          if (!dataForm.phone) {
            error.phone = "Ingrese un número móvil";
          } else if (
            !/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/.test(
              dataForm.phone
            )
          ) {
            error.phone = "Número móvil inválido";
          }

          if (!dataForm.email) {
            error.email =
              "Ingrese un email, para que podamos comunicarnos con usted.";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(dataForm.email)
          ) {
            error.email = "E-mail inválido";
          }

          return error;
        }}
      >
        {({ handleBlur, isValid }) => (
          <Form onChange={change}>
            <Row>
              <Form.Group className="mb-3 w-50">
                <Form.Label htmlFor="name">Nombre:</Form.Label>
                <Form.Control
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nombre completo"
                  required
                  defaultValue={dataForm.name}
                  onBlur={handleBlur}
                  className="form--control"
                />
                <ErrorMessage
                  name="name"
                  component="span"
                  className="validate--error"
                />
              </Form.Group>
              <Form.Group className="mb-3 w-50">
                <Form.Label htmlFor="phone">Teléfono:</Form.Label>
                <Form.Control
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Ej: 11-XXXX-XXXX"
                  required
                  defaultValue={dataForm.phone}
                  onBlur={handleBlur}
                  className="form--control"
                />
                <ErrorMessage
                  name="phone"
                  component="span"
                  className="validate--error"
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="mb-3 w-50">
                <Form.Label htmlFor="email">E-mail:</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Ej: ejemplo@hotmail.com"
                  required
                  defaultValue={dataForm.email}
                  onBlur={handleBlur}
                  className="form--control"
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="validate--error"
                />
              </Form.Group>
              <Form.Group className="mb-3 w-50">
                <Form.Label className="form--label">
                  Confirmar E-mail
                </Form.Label>
                <Form.Control
                  type="email"
                  name="emailConfirm"
                  placeholder="Repetir e-mail"
                  required
                  defaultValue={dataForm.emailConfirm}
                  onBlur={handleBlur}
                  className="form--control"
                />
              </Form.Group>
            </Row>
            <div className="text-center">
              <button
                type="submit"
                disabled={
                  dataForm.name === "" ||
                  dataForm.phone === "" ||
                  dataForm.email === "" ||
                  dataForm.email !== dataForm.emailConfirm
                    ? true
                    : false || isValid === false
                }
                onClick={send}
                className="btn btn-outline-secondary btn--checkout"
              >
                Generar orden
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default FormCheckout;
