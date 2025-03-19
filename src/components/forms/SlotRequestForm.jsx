import React, { useEffect, useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputTextarea } from 'primereact/inputtextarea';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { BsArrowUpRightCircle } from 'react-icons/bs';

const FormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
  phone: z.string().min(1, 'Phone number is required'),
  title: z.string().min(1, 'Title is required'),
  selectedPackage: z.string().min(1, 'Service package is required'),
  description: z.string().min(1, 'Description is required'),
});

const SlotRequestForm = ({ visible, onHide }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const location = useLocation();
  const isPackagesPage = location.pathname === '/packages';

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      title: "",
      selectedPackage: searchParams.get("sPackage") || "",
      description: "",
    },    
  });

  useEffect(() => {
    const sPackage = searchParams.get("sPackage") || "";
    setValue("selectedPackage", sPackage);
  }, [searchParams, setValue]);

  const _handleSubmit = async (request) => {
    setIsSubmitting(true);
    if (!trigger()) return;
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/enrollments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request),
      });
      if (!response.ok) {
        setError(await response.text()) 
        return;
      }
      console.log("Form Data Submitted:", request);
      setSuccess("Details successfuly submitted, Our PR team will reach out shortly via email or phone");
      reset();
    } catch (error) {
      setError(error.message)
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog
      visible={visible}
      onHide={onHide}
      header="Enroll here"
      draggable={false}
      className="w-11/12 md:w-1/2"
      headerClassName='text-center border-b'
    >
      <form onSubmit={handleSubmit(_handleSubmit)} className="flex flex-col gap-4 my-4">
        <section className='grid md:grid-cols-2 md:gap-x-6 md:gap-y-2'>
          <div className='grid'>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id='name'
              name='name'
              placeholder="e.g. Joseph Doe"
              className="px-2 py-3 border rounded-md"
              {...register("name")}
            />
            {errors.name && <small className="text-red-500">{errors.name.message}</small>}
          </div>
          <div className='grid'>
            <label htmlFor="title">In capacity of</label>
            <select
              name='title'
              className="px-2 py-3 border rounded-md"
              {...register("title")}
            >
              <option label='In capacity of?' value="" disabled/>
              <option label='Parent or Guardian' value="Parent or Guardian"/>
              <option label='Learner' value="Learner"/>
              <option label='School administrator' value="School administrator"/>
              <option label='Organisation Admin' value="Organisation Admin"/>
            </select>
            {errors.title && <small className="text-red-500">{errors.title.message}</small>}
          </div>
          <div className='grid'>
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id='phone'
              name='phone'
              placeholder="e.g. +1234567890"
              className="px-2 py-3 border rounded-md"
              {...register("phone")}
            />
            {errors.phone && <small className="text-red-500">{errors.phone.message}</small>}
          </div>
          
          <div className='relative grid'>
            <label htmlFor="selectedPackage">Select service package</label>
            <select
              name='selectedPackage'
              className="px-2 py-3 border rounded-md"
              {...register("selectedPackage")}
              disabled={isPackagesPage} 
            >
              <option label='Select a Package' value="" disabled/>
              <option label='Holiday learners’ package' value="Holiday learners’ package"/>
              <option label='Young Adults' value="Young Adults"/>
              <option label='Organizational package' value="Organizational package"/>
              <option label='Institutional arrangements' value="Institutional arrangements"/>
            </select>
            {!isPackagesPage && (
              <small className="text-gray-500 flex items-center mt-2 absolute -bottom-6">
                Visit packages page for details 
                <Link to={'/packages'} className='flex items-center text-blue-500 ml-2 gap-2'>
                  Packages <BsArrowUpRightCircle className=''/>
                </Link>
              </small>
            )}
            {errors.selectedPackage && <small className="text-red-500">{errors.selectedPackage.message}</small>}
          </div>

          <div className='grid md:col-span-2'>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id='email'
              name='email'
              placeholder="e.g. jdoe@gmail.com"
              className="px-2 py-3 border rounded-md"
              {...register("email")}
            />
            {errors.email && <small className="text-red-500">{errors.email.message}</small>}
          </div>
        </section>
        <InputTextarea
          name='description'
          placeholder="Briefly describe the service you want for your music..."
          autoResize
          spellCheck
          rows={2}
          cols={30}
          className="text-sm w-full p-3 border focus:border-gray-300"
          {...register("description")}
        />
        {errors.description && <small className="text-red-500">{errors.description.message}</small>}
        <button
          disabled={isSubmitting}
          type="submit"
          className="px-2 py-3 bg-black bg-opacity-80 hover:bg-opacity-50 text-white rounded-md"
        >
          { !isSubmitting ? "Submit" : <i className='pi pi-spinner pi-spin'/>}
        </button>

        { success && <p className='text-center text-sm text-green-600 bg-green-200 p-3 rounded-md border border-green-600'>{success}</p>}
        { error && <p className='text-center text-sm text-red-600 bg-red-200 p-3 rounded-md border border-red-600'>{error}</p>}
      </form>
    </Dialog>
  );
};

export default SlotRequestForm;
