"use client";
import { useForm } from "react-hook-form";

type FormData = { name: string; email: string; message: string };

export default function ContactPage() {
  const { register, handleSubmit, formState:{errors} } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) });
    const result = await res.json();
    if(result.success) alert("Message sent!");
    else alert("Error: " + result.error);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 max-w-md mx-auto flex flex-col gap-4">
      <input {...register("name", { required: true })} placeholder="Name" className="p-2 border rounded"/>
      {errors.name && <span className="text-red-500">Name is required</span>}
      <input {...register("email", { required: true })} placeholder="Email" className="p-2 border rounded"/>
      {errors.email && <span className="text-red-500">Valid email required</span>}
      <textarea {...register("message", { required: true })} placeholder="Message" className="p-2 border rounded"/>
      {errors.message && <span className="text-red-500">Message is required</span>}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send</button>
    </form>
  );
}
