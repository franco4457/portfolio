import Input from '@/components/Input'
import { sendContactForm } from '@/lib/api'
import { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'

const initialValues = { name: '', email: '', subject: '', message: '' }

export default function ContactMe () {
  const [inputs, setInputs] = useState(initialValues)
  const handlerChange = ({ target }) => {
    setInputs({ ...inputs, [target.name]: target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!inputs.name || !inputs.email || !inputs.message || !inputs.subject) {
      toast.error('Todos los campos son requeridos')
      return
    }
    try {
      toast.promise(sendContactForm(inputs), {
        loading: 'Enviando',
        success: 'Enviado correctamente'
      })
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <div className="pt-24 w-full">
      <h1 className="text-center  text-3xl md:text-6xl font-bold pb-4 text-transparent bg-gradient-to-t from-amber-400 bg-clip-text to-neutral-600 ">
        Contáctame
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col m-auto max-w-sm pt-4"
      >
        <Input
          handlerChange={handlerChange}
          name="name"
          type="text"
          value={inputs.name}
          labelText="Nombre"
        />
        <Input
          handlerChange={handlerChange}
          value={inputs.email}
          type="email"
          name="email"
          labelText={'Email'}
        />
        <Input
          handlerChange={handlerChange}
          value={inputs.subject}
          type="text"
          name="subject"
          labelText="Asunto"
        />
        <div className="relative z-0 w-full mb-6 group">
          <textarea
            className="block py-2.5 px-0 w-full md:text-lg text-stone-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            // required
            onChange={handlerChange}
            value={inputs.message}
            name="message"
          ></textarea>
          <label
            htmlFor="message"
            className=" peer-focus:font-medium absolute md:text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Mensaje
          </label>
        </div>
        <button
          type="submit"
          className="md:w-fit text-white bg-stone-700 hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-500 font-medium rounded-lg md:text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-stone-800"
        >
          Enviar
        </button>
      </form>
      <Toaster toastOptions={{ className: 'bottom-4 left-4' }}/>
    </div>
  )
}
