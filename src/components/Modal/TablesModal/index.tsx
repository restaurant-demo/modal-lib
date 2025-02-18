import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ButtonGroup from 'components/ButtonGroup';
import Input from 'components/Input';
import Textarea from 'components/Textarea';
import SelectBox from 'components/SelectBox';
import './TablesModal.css';

type LocationUnion = 'Indoor' | 'Outdoor' | 'Other';
const locationOptions: LocationUnion[] = ['Indoor', 'Outdoor', 'Other'];

type StatusUnion = 'Available' | 'Busy' | 'Reserved';
const statusOptions: StatusUnion[] = ['Available', 'Busy', 'Reserved'];

const TablesModal = () => {
  const [selectedLocation, setSelectedLocation] = useState<LocationUnion>('Indoor');
  const [selectedStatus, setSelectedStatus] = useState<StatusUnion>('Available');

  const formik = useFormik({
    initialValues: {
      table_no: '',
      name: ''
    },
    validationSchema: Yup.object({
      table_no: Yup.string().required('Table number is required'),
      name: Yup.string().required('Name is required')
    }),
    onSubmit: (values) => {
      console.log('Form Submitted', values);
    }
  });

  const handleSelectChange = (name: string, value: LocationUnion | StatusUnion) => {
    if (name === 'location') {
      setSelectedLocation(value as LocationUnion);
    } else if (name === 'status') {
      setSelectedStatus(value as StatusUnion);
    }
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="custom-table-modal-container">
          <div className="custom-left-side">
            <p className="custom-field-text">Table №</p>
            <p className="custom-field-text">Name:</p>
            <p className="custom-field-text">Description:</p>
            <p className="custom-field-text">Location:</p>
            <p className="custom-field-text">Status:</p>
          </div>
          <div className="custom-right-side">
            <Input formik={formik} name="table_no" label="Table №" width="4vw" />
            <Input formik={formik} name="name" label="Name" />
            <Textarea formik={formik} name="description" label="Description" />
            <SelectBox
              options={locationOptions}
              value={selectedLocation}
              name="location"
              label="Location"
              onChange={(value) => handleSelectChange('location', value as LocationUnion)}
            />
            <SelectBox
              options={statusOptions}
              value={selectedStatus}
              name="status"
              label="Status"
              onChange={(value) => handleSelectChange('status', value as StatusUnion)}
            />
          </div>
        </div>
        <ButtonGroup />
      </form>
    </>
  );
};

export default TablesModal;
