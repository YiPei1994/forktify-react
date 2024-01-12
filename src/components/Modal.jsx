import { cloneElement, createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiXMark } from 'react-icons/hi2';
import { useOutsideClick } from '../hooks/useOutsideClick';

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState('');

  const close = () => setOpenName('');
  const open = setOpenName;
  return (
    <ModalContext.Provider value={{ close, open, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: openWindowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(openWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const { ref } = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed left-0 top-0 z-50 h-screen w-full  bg-slate-300/25 backdrop-blur-sm transition-all duration-500">
      <div
        className="fixed left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%] rounded-lg bg-slate-50 px-3 py-4 shadow-lg shadow-slate-300 transition-all duration-500"
        ref={ref}
      >
        <button
          className="absolute right-8 top-5 translate-x-3 rounded-sm border-none bg-none p-1 transition-all duration-200"
          onClick={close}
        >
          <HiXMark className="h-9 w-9" />
        </button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
