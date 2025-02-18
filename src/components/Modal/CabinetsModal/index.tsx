import ButtonGroup from 'components/ButtonGroup';
import DragDropButton from 'components/DragDropButton';
import Input from 'components/Input';
import SelectBox from 'components/SelectBox';
import Textarea from 'components/Textarea';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import './CabinetsModal.css';

type StatusUnion = 'Busy' | 'Available' | 'Reserved';
const statusOptions: StatusUnion[] = ['Available', 'Busy', 'Reserved'];

type TypeUnion = 'Business' | 'Family' | 'Lounge' | 'Other';
const typeOptions: TypeUnion[] = ['Business', 'Family', 'Lounge', 'Other'];

// interface ICabinet {
//   number: number;
//   name: string;
//   description: string;
//   status: StatusUnion;
//   type: TypeUnion;
//   capacity: number;
//   pricePerHour: number;
//   features: string[];
//   minSpend: number;
//   contact: string;
//   imageUrl: string;
//   availableTimeSlots: string[];
// }

const CabinetsModal = () => {
  // const [cabinet, setCabinet] = useState<ICabinet>({
  //   number: 1,
  //   name: '',
  //   description: '',
  //   status: 'Available',
  //   type: 'Business',
  //   capacity: 4,
  //   pricePerHour: 100,
  //   features: [],
  //   minSpend: 200,
  //   contact: '',
  //   imageUrl: '',
  //   availableTimeSlots: []
  // });

  const [selectedStatus, setSelectedStatus] = useState<StatusUnion>('Available');
  const [selectedType, setSelectedType] = useState<TypeUnion>('Business');

  const formik = useFormik({
    initialValues: {
      name: '',
      cabinet_no: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      cabinet_no: Yup.string().required('Cabinet is required')
    }),
    onSubmit: (values) => {
      console.log('Form Submitted', values);
    }
  });

  const handleSelectChange = (name: string, value: StatusUnion | TypeUnion) => {
    if (name === 'type') {
      setSelectedType(value as TypeUnion);
    } else if (name === 'status') {
      setSelectedStatus(value as StatusUnion);
    }
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="custom-up-side">
          <div className="custom-drag-drop-container">
            <DragDropButton />
          </div>
          <div className="custom-top-right-side">
            <Input formik={formik} name="name" label="Name*" />
          </div>
        </div>
        <div className="custom-middle-side">
          <div className="custom-middle-flex">
            <Input formik={formik} name="cabinet_no" label="Cabinet №" width="4vw" />
            <Input formik={formik} name="min_spend" label="Min spend" width="4vw" />
            <Input formik={formik} name="price_per_hour" label="Price per hour" width="4vw" />
            <Input formik={formik} name="capacity" label="Capacity" width="4vw" />
          </div>
          <div className="custom-middle-bottom">
            <SelectBox
              options={statusOptions}
              value={selectedStatus}
              name="status"
              label="Status"
              onChange={(value) => handleSelectChange('status', value as TypeUnion)}
              width="11vw"
            />
            <SelectBox
              options={typeOptions}
              value={selectedType}
              name="type"
              label="Type"
              onChange={(value) => handleSelectChange('location', value as StatusUnion)}
              width="11vw"
            />
          </div>
          <Textarea formik={formik} name="description" label="Description" width="full" />
        </div>

        <ButtonGroup />
      </form>
    </>
  );
};

export default CabinetsModal;
