import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Modal = () => {
  const { done, message, error } = useSelector((state) => state.user);

  return (
    <div className="text-[red]">
      <p>Heelo</p>
      <p>{message}</p>
    </div>
  );
};

export default Modal;
