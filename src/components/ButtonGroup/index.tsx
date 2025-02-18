import { useModalStore } from "main/modalStore";
import React from 'react';

const ButtonGroup = () => {
  const { setModal } = useModalStore();

  return (
    <>
      <div className="custom-button-group">
        <button
          onClick={() => setModal(false, null)}
          className="custom-modal-button"
          type="button"
        >
          Cancel
        </button>
        <button
          // onClick={() => setModal(false, null)}
          className="custom-modal-button"
          type="submit"
        >
          Save
        </button>
      </div>
    </>
  );
};

export default ButtonGroup;
