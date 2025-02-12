import React from 'react';
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./DragDropButton.css";

const DragDropButton = () => {
  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;

    const file = acceptedFiles[0];
    // console.log("Dropped File:", file.name, file.type, file.size);

    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
      "image/gif": [".gif"],
      "image/webp": [".webp"],
    },
    noClick: true,
  });

  return (
    <div
      {...getRootProps()}
      className={`custom-drag-drop ${
        isDragActive ? "bg-blue-500 border-blue-600" : "bg-gray-200 hover:bg-gray-300"
      }`}
      onClick={open}
    >
      <input {...getInputProps()} />
      {preview ? (
        <img src={preview} alt="Uploaded" className="custom-image-preview" />
      ) : (
        <p className="custom-text-preview">{isDragActive ? "Drop here..." : "Click or Drag to Upload"}</p>
      )}
    </div>
  );
};

export default DragDropButton;
