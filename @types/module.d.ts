declare module "*.svg" {
  const content: string;
  export default content;
};

declare module "main/modalStore" {
  import type { ModalState } from "main/modalTypes";
  export const useModalStore: () => ModalState;
};
