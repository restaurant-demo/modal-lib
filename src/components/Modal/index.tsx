import React from 'react';
import './Modal.css';
import MenuModal from './MenuModal';
import TablesModal from './TablesModal';
import { EModalType } from "main/modalTypes";
import { useModalStore } from 'main/modalStore';

const Modal = () => {
  const { modal } = useModalStore();

  return (
    <div className="custom-modal-layout">
      {modal.isOpen && modal.type === EModalType?.MENU && <MenuModal />}
      {modal.isOpen && modal.type === EModalType?.TABLES && <TablesModal />}
    </div>
  );
};

export default Modal;
