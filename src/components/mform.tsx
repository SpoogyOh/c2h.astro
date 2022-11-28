import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function MForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting , errors },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");

  function onSubmit(data) {
    axios
      .post("https://eollu7uuvae8ai4.m.pipedream.net", data)
      .then((response) => {
        setSuccessMessage(
          `Anmeldung erfolgreich. 😊`
        );
      })
      .catch((e) => console.error(e));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="sm:space-x-2 flex space-y-4 sm:space-y-0 flex-col sm:flex-row items-center">

      <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} placeholder="Trage deine E-Mail ein." className="border-2 rounded-lg h-12 w-72 text-center"></input>

      <button className="rounded-lg bg-[#234e70] text-white h-12 w-36" role="submit">{isSubmitting ? "Submitting" : "Submit"}</button>
      {successMessage && <p>{successMessage}</p>}
      {errors.email && <p>Bitte gib eine gültige E-Mail Adresse ein.</p>}
      
    </form>
  );
}