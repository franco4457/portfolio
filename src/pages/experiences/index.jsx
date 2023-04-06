export default function Experiences () {
  return (
    <>
      <div className="text-center pt-24 w-full">
        <h1 className="text-3xl md:text-6xl font-bold pb-4 text-transparent bg-gradient-to-t from-amber-400 bg-clip-text to-neutral-600 ">
          Expreciencia
        </h1>
        <div className="flex flex-col text-start pt-4 mx-4 gap-2">
          <h2 className="text-xl md:text-3xl font-semibold pb-2 ">
            Asistente de enseñanza
          </h2>
          <h3 className="text-lg md:text-xl font-medium">
            Henry{' '}
            <span className="text-base md:text-lg text-zinc-500 font-normal">
              ~ mar. 2023 - actualidad
            </span>
          </h3>
          <h4 className="text-lg md:text-xl">
            Asistente de enseñanza (TA) para alumnos de Henry{' '}
          </h4>
          <h3 className="md:text-lg">Tareas principales:</h3>
          <ul className="text-sm pl-2 md:text-base">
            <li>
              • <strong>Coordinar</strong> el grupo de estudiantes con el objetivo de lograr su
              adaptación al programa.
            </li>
            <li>
              • <strong>Orientar</strong> a los estudiantes en los primeros pasos de la cursada y
              resolver sus inquietudes
            </li>
            <li>
              • <strong>Asistir y acompañar</strong> en la resolución de ejercicios y promover la
              colaboración grupal <strong>(Pair Programming)</strong>.
            </li>
            <li>
              • <strong>Proponer ideas</strong> para la mejora de los procesos del Bootcamp.
            </li>
            <li>• <strong>Promover</strong> la cohesión grupal y generar comunidad</li>
          </ul>
        </div>
      </div>
    </>
  )
}
