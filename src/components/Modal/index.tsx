import React from 'react'
import "./Modal.css";
import { useModalStore } from "main/modalStore";

const Modal = () => {
  const setIsModalOpen = useModalStore.getState().setIsModalOpen;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={() => setIsModalOpen(false)}
      ></div>

      <div className="relative bg-white p-6 rounded-lg shadow-lg z-10 w-96">
        <h2 className="text-xl font-semibold">Modal Title</h2>
        <p className="mt-2 text-gray-600">This is a modal with a blurred background.</p>
        <button
          onClick={() => setIsModalOpen(false)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;