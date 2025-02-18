import React from 'react';
import DragDropButton from 'components/DragDropButton';
import './MenuModal.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from 'components/Input';
import './../../../styles.css';
import RadioButton from 'components/RadioButton';
import ButtonGroup from 'components/ButtonGroup';
import Textarea from 'components/Textarea';

const MenuModal = () => {
  const formik = useFormik({
    initialValues: {
      category: '',
      name: '',
      price: ''
    },
    validationSchema: Yup.object({
      category: Yup.string().required('Category is required'),
      name: Yup.string().required('Name is required'),
      price: Yup.number().required('Price is required')
    }),
    onSubmit: (values) => {
      console.log('Form Submitted', values);
    }
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="custom-up-side">
          <div className="custom-drag-drop-container">
            <DragDropButton />
          </div>
          <div className="custom-top-right-side">
            <Input formik={formik} name="category" label="Category*" />
            <Input formik={formik} name="name" label="Name*" />
          </div>
        </div>
        <div className="custom-middle-side">
          <div className="custom-middle-flex">
            <div className="custom-left-side">
              <div className="custom-left-input-group">
                <Input formik={formik} name="count" label="Count" width="5vw" />
                <Input formik={formik} name="unit" label="Unit" width="5vw" />
              </div>
              <div className="custom-exists-container">
                <p className="custom-exists-text">Exists: </p>
                <RadioButton title="YES" />
                <RadioButton title="NO" />
              </div>
            </div>
            <div className="custom-right-side">
              <Input formik={formik} name="price" label="Price* (USD)" />
              <Input formik={formik} name="discount" label="Discount (%)" />
            </div>
          </div>
          <Textarea formik={formik} name="ingredients" label="Ingredients" width="full" />
        </div>

        <ButtonGroup />
      </form>
    </>
  );
};

export default MenuModal;
