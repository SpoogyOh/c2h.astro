import React from "react";
import { useForm } from "react-hook-form";

export default function MForm2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} className="sm:space-x-2 flex space-y-2 sm:space-y-0 flex-col sm:flex-row items-center">
        <input
          type="text"
          placeholder="E-Mail"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          className="border-2 rounded-lg h-12 w-72 text-center"
        />

        <button
          type="submit"
          className=" rounded-lg bg-black text-white h-12 w-36"
        >
          Probiere es aus
        </button>
      </form>
    </div>
  );
}
