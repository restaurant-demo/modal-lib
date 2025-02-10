declare module "*.svg" {
  const content: string;
  export default content;
};

declare module "main/modalStore" {
  import { StoreApi } from "zustand";

  interface ModalState {
    isModalOpen: boolean;
    setIsModalOpen: (data: boolean) => void;
  }

  export const useModalStore: StoreApi<ModalState> & (() => ModalState);
}
