import React, { useState } from 'react';
import GlobalHeader from '../components/global/GlobalHeader';
import Signing from '../components/global/Signing';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const FormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
  phone: z.string().min(1, 'Phone number is required'),
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
});

const ContactUs = () => {
const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset
  } = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      title: "",
      description: "",
    },    
  });

  const _handleSubmit = async (request) => {
    setIsSubmitting(true);
    if (!trigger()) return;
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request),
      });
      if (!response.ok) {
        setError(await response.text()) 
        return;
      }
      console.log("Form Data Submitted:", request);
      setSuccess("Details successfuly submitted, Our PR team will reach out shortly via email");
      reset();
    } catch (error) {
      setError(error.message)
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative h-screen overflow-auto">
      <GlobalHeader />

      <section className="pt-8">
        <div className="flex flex-wrap justify-center items-start gap-16 px-8">

          <div className="max-w-sm flex flex-col justify-center items- gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 text-center">Reach out to us</h2>
            <p className="text-gray-600 mb-8 mt-2 text-center">
              Got questions, feedback, or want to discuss any program-related issue with us? 
              Feel free to reach out anytime! Whether you're looking for personalized assistance, 
              or just want to learn more about our offerings, we're here to help. Our dedicated 
              team is ready to answer all your inquiries and offer guidance where necessary. 
              Don’t hesitate—together, let’s Learn & Mold!
            </p>


            <div className="max-w-sm flex flex-col gap-2 border p-8 rounded-lg bg-black bg-opacity-5">
              <div className="flex items-center gap-4">
                <FaPhone size={14} className="text-blue-600" />
                <a href='tel:+256761334247' className="text-gray-700">+256 (761) 334-247</a>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope size={14} className="text-red-300" />
                <a href='mailto:info@remolders.com' className="text-gray-700">info@remolders.com</a>
              </div>
              <div className="flex items-center gap-4">
                <BsWhatsapp size={14} className="text-green-600" />
                <a href='https://wa.me/+256761334247' className="text-gray-700">+256 (761) 33-4247</a>
              </div>
              <div className="flex items-center gap-4">
                <i size={14} className="text-black pi pi-twitter" />
                <a href='https://www.x.com/remolders/' className="text-gray-700">@reMolders</a>
              </div>
            </div>

          </div>

          <div className="max-w-md w-full bg-black bg-opacity-5 p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Send Us a Message</h2>
            <form onSubmit={handleSubmit(_handleSubmit)} className="grid grid-cols-2 gap-4">
              <div className='col-span-2'>
                <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
                  Full Name
                </label>
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
                {errors.name && <small className="text-red-500">{errors.name.message}</small>}
              </div>

              <div className='col-span-2'>
                <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                  Personal or work Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
                {errors.email && <small className="text-red-500">{errors.email.message}</small>}
              </div>
              
              <div className='col-span-2'>
                <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">
                  Phone number
                </label>
                <input
                  {...register("phone")}
                  type="number"
                  id="phone"
                  placeholder="E.g 0712345678"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
                {errors.phone && <small className="text-red-500">{errors.phone.message}</small>}
              </div>

              <div className='col-span-2'>
                <label htmlFor="artist" className="block text-gray-700 mb-2 font-medium">
                  Sending as
                </label>
                <select
                  className="px-2 py-3 border rounded-md w-full"
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

              <div className='col-span-2'>
                <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
                  Enter Message
                </label>
                <textarea
                  {...register("description")}
                  id="message"
                  placeholder="Briefly describe any further specific details regarding the package you would like to undertake..."
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                ></textarea>
                {errors.description && <small className="text-red-500">{errors.description.message}</small>}
              </div>
            
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="col-span-2 w-full px-6 py-3 bg-black bg-opacity-60 text-white font-bold rounded-lg shadow-md hover:shadow-lg hover:bg-opacity-70 transition-transform transform hover:scale-105"
              >
                { !isSubmitting ? "Submit" : <i className='pi pi-spinner pi-spin'/>}
              </button>

            </form>
            {success && (
              <div className='relative my-4 text-center text-sm text-green-600 bg-green-200 p-3 rounded-md border border-green-600'>
                {success}
                <button onClick={() => setSuccess("")} className="absolute top-0 right-0 px-2 py-1 text-green-800 hover:text-green-900">
                  ×
                </button>
              </div>
            )}
            {error && (
              <div className='relative my-4 text-center text-sm text-red-600 bg-red-200 p-3 rounded-md border border-red-600'>
                {error}
                <button onClick={() => setError("")} className="absolute top-0 right-0 px-2 py-1 text-red-800 hover:text-red-900">
                  ×
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="w-full mt-16 md: ">
        <Signing />
      </div>
    </div>
  );
};

export default ContactUs;