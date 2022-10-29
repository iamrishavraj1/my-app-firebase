import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
const Todo = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const deleteList = () => {
    setModalIsOpen(true);
  };
  const closeModel = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <div className="card">
        <h2>{props.title}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteList}>
            Delete
          </button>
        </div>
      </div>
      {modalIsOpen ? (
        <Modal onCancel={closeModel} onConform={closeModel} />
      ) : null}
      ;{modalIsOpen && <Backdrop onCancle={closeModel} />}
    </>
  );
};

export default Todo;
