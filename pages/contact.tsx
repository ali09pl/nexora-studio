import { useForm } from "react-hook-form"

export default function Contact() {
  const { register, handleSubmit, formState:{errors} } = useForm()
  return (
    <form className="space-y-4 max-w-xl mx-auto">
      <input {...register("name",{required:true})} placeholder="Name" className="glass p-3 w-full"/>
      {errors.name && <p>Name required</p>}
      <input {...register("email",{required:true,pattern:/\S+@\S+\.\S+/})} placeholder="Email" className="glass p-3 w-full"/>
      {errors.email && <p>Valid email required</p>}
      <textarea {...register("message",{required:true})} placeholder="Message" className="glass p-3 w-full"/>
      <button className="bg-indigo-600 px-6 py-3 rounded">Send</button>
    </form>
  )
}
