import { useModal } from "./hooks/useModal";
import Modal from "./Modal";
import "./Modal.css";

const Modals = ({ item }) => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenModal3, openModal3, closeModal3] = useModal(false);
  const [isOpenModal4, openModal4, closeModal4] = useModal(false);
  const [isOpenModal5, openModal5, closeModal5] = useModal(false);
  const [isOpenModal6, openModal6, closeModal6] = useModal(false);

  return (
    <div>
      <section className="modals-container">
        <button className="btn-open-modal" onClick={openModal1}>
          <img
            alt="Icono"
            src="https://res.cloudinary.com/adastrashop/image/upload/v1646254067/hoodie_mzhrv2.png"
          ></img>
          Descripción y cuidados
        </button>
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
          <h3>Descripción y cuidados</h3>
          <p>{item.description}</p>
          <label>
            Lavar la prenda al revés y con agua fría. NO planchar en el
            estampado.
          </label>
        </Modal>

        <button className="btn-open-modal" onClick={openModal2}>
          <img
            alt="Icono"
            src="https://res.cloudinary.com/adastrashop/image/upload/v1646253845/exchange_bxxmal.png"
          ></img>
          Cambios y devoluciones
        </button>
        <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
          <h3>Cambios y devoluciones</h3>
          <p>
            Realizar cambios y devoluciones es gratis y muy sencillo. Podés
            acercarte a alguno de nuestros locales oficiales (no franquicias)
            con el producto en perfecto estado y la factura recibida por email
            (*en los locales sólo se cambia por la misma prenda o el valor
            abonado*).
          </p>
        </Modal>

        <button className="btn-open-modal" onClick={openModal3}>
          <img
            alt="Icono"
            src="https://res.cloudinary.com/adastrashop/image/upload/v1646253257/envio_f9yunu.png"
          ></img>
          Métodos de envío
        </button>
        <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
          <h3>Métodos de envío</h3>
          <p>
            Envíos a domicilio a todo el país (Envíos realizados por Andreani).
          </p>
          <label>
            La demora de los envíos en Capital Federal se hacen en el mismo dia,
            mientras la compra se haga antes de las 14hs. En caso de que el
            envío fuese para el interior, la demora rondaría entre 3 y 4 días
            hábiles.
          </label>
        </Modal>

        <button className="btn-open-modal" onClick={openModal4}>
          <img
            alt="Icono"
            src="https://res.cloudinary.com/adastrashop/image/upload/v1646253845/pay_hbtkgo.png"
          ></img>
          Medios de pago
        </button>
        <Modal isOpen={isOpenModal4} closeModal={closeModal4}>
          <h3>Medios de pago</h3>
          <p>
            Podés realizar tu compra a través de todos los medios de pago
            habilitados en Mercado Pago:
          </p>
          <img
            className="img-mediosdepago"
            alt="Medios de pago"
            src="https://res.cloudinary.com/adastrashop/image/upload/v1646279925/medios-de-pago_asyuqw.jpg"
          ></img>
        </Modal>

        <button className="btn-open-modal" onClick={openModal5}>
          <img
            alt="Icono"
            src="https://res.cloudinary.com/adastrashop/image/upload/v1646253845/credit-cards_zflcsa.png"
          ></img>
          Cuotas y beneficios
        </button>
        <Modal isOpen={isOpenModal5} closeModal={closeModal5}>
          <h3>Cuotas y beneficios</h3>
          <p>3 y 6 cuotas sin interés sin monto mínimo</p>
          <ul>
            <li>
              <img
                alt="Icono"
                src="https://res.cloudinary.com/adastrashop/image/upload/v1646281980/visa_yqm15x.png"
              ></img>
              <span>Hasta 6 Cuotas sin interés de $ 2,336.06 con Visa</span>
            </li>
            <li>
              <img
                alt="Icono"
                src="https://res.cloudinary.com/adastrashop/image/upload/v1646281980/maestro_smw6in.png"
              ></img>
              <span>Hasta 6 Cuotas sin interés de $ 2,336.06 con Maestro.</span>
            </li>
            <li>
              <img
                alt="Icono"
                src="https://res.cloudinary.com/adastrashop/image/upload/v1646281982/american-express_ezzxhm.png"
              ></img>
              <span>Hasta 6 Cuotas sin interés de $ 2,336.06 con Amex.</span>
            </li>
          </ul>
        </Modal>

        <button className="btn-open-modal" onClick={openModal6}>
          <img
            alt="Icono"
            src="https://res.cloudinary.com/adastrashop/image/upload/v1646253845/discount_kon6i5.png"
          ></img>
          Promociones
        </button>
        <Modal isOpen={isOpenModal6} closeModal={closeModal6}>
          <h3>Promociones</h3>
          <p>
            3 y 6 cuotas sin interés, sin monto mínimo. Y si haces una compra
            superior a $9.500, el envío lo hacemos totalmente gratis.
          </p>
        </Modal>
      </section>
    </div>
  );
};

export default Modals;
