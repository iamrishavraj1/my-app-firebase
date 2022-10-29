const Modal = (props) => {
  const cancelHandler = () =>
  {
    props.onCancel();
  };
  const conformHandler = () =>
  {
    props.onConform();
  };
  return (
    <>
      <div className="modal">
        <h1>Are your Sure...</h1>
        <button className="btn btn--alt" onClick={cancelHandler}>Cancle</button>
        <button className="btn" onClick={conformHandler}>Conform</button>
      </div>
    </>
  );
};

export default Modal;
