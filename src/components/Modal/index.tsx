import React from 'react';
import './Modal.css';
import MenuModal from './MenuModal';
import TablesModal from './TablesModal';
import { EModalType } from 'main/modalTypes';
import { useModalStore } from 'main/modalStore';
import CabinetsModal from './CabinetsModal';

const Modal = () => {
  const { modal } = useModalStore();

  return (
    <div className="custom-modal-layout">
      <section className="custom-modal-section">
        <h2 className="custom-modal-title">Add new {modal.type}</h2>
        {modal.isOpen && modal.type === EModalType?.MENU && <MenuModal />}
        {modal.isOpen && modal.type === EModalType?.TABLE && <TablesModal />}
        {modal.isOpen && modal.type === EModalType?.CABINET && <CabinetsModal />}
      </section>
    </div>
  );
};

export default Modal;
