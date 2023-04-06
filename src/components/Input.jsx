
export default function Input ({ handlerChange, value, type, name, labelText }) {
  return (
    <>
      <div className="relative z-0 w-full mb-6 group">
        <input
          onChange={handlerChange}
          value={value}
          type={type}
          name={name}
          className="block py-2.5  w-full md:text-lg text-stone-900 bg-transparent border-0 border-b-2  border-stone-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor={name}
          className="peer-focus:font-medium absolute md:text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          {labelText}
        </label>
      </div>
    </>
  )
}
