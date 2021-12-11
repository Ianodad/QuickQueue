import React from 'react';
import { useForm } from 'react-hook-form';

export default function index({CheckCode}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = ({referenceCode}) => {
    CheckCode(referenceCode)
  };

  return (
    <form
      className="mt-5 md:mt-2 md:col-span-2 flex flex-col items-center justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input className="w-3/4 bg-gray-50 rounded h-10" {...register('referenceCode')} />{' '}
      <button
        className="bg-gray-50 hover:bg-secondary text-white font-bold py-2 px-4 rounded mt-4"
        type="submit"
      >
        <span className="text-primary hover:text-primary align-middle">Submit</span>
      </button>
    </form>
  );
}
