import React, { useEffect, useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const Photo = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [id, setId] = useState();
  const [value, setValue] = useState("small");
  const [price, setPrice] = useState(100);
  useEffect(() => {
    setId(Math.trunc(Math.random() * 1000) + 1);
  }, []);

  return (
    <>
      <div className="photo" onClick={() => setModalIsOpen(true)}>
        <img alt="img" src={`https://picsum.photos/id/${id}/200/300`} />
      </div>

      <Modal
        className="modal"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div>
          <img
            className="modalImg"
            alt="img"
            src={`https://picsum.photos/id/${id}/200/300`}
          />
        </div>
        <div className="modalFooter">
          <div className="meta-data">{"Picsum"}</div>
          <div className="sizes">
            <select
              id="size"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                if (e.target.value === "small") setPrice(100);
                else if (e.target.value === "medium") setPrice(150);
                else if (e.target.value === "large") setPrice(200);
                else if (e.target.value === "xlarge") setPrice(300);
              }}
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="xlarge">X-Large</option>
            </select>
            <div className="priceHolder">{price}</div>
          </div>
        </div>
      </Modal>
    </>
  );
};
