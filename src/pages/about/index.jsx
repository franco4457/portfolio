import Image from 'next/image'

export default function About () {
  return (
    <>
      <>
        <div className="flex flex-col space-y-4 pt-24 px-6 md:px-0  sm:pt-28 md:space-y-0">
          <h1 className="bg-gradient-to-t from-amber-400  to-neutral-600 bg-clip-text text-4xl font-bold text-transparent  md:pb-4 md:text-6xl text-center">
            Sobre mí
          </h1>
          <div className="flex flex-col space-y-5 items-center  md:flex-row md:space-y-0 md:space-x-4">
            <div className="md:mt-2 md:w-1/2">
              <Image
              loading='lazy'
                src="/selfis.jpg"
                alt="ImageMe"
                width="350"
                height="350"
                className="rounded-lg"
              />
            </div>
            <div className=" text-center md:text-left md:mt-2 md:w-1/2">
              <p className="text-lg leading-7">
                Hola, mi nombre es
                <span className="font-semibold"> Franco Gutierrez</span>!
                Soy Desarrollador Full Stack y vivo en <span className="font-semibold">Chaco, Argentina</span>
              </p>
              <br />
              <p className="text-lg leading-7">
                Siempre con ganas de aprender <span className="font-semibold">nuevas tecnologias</span> y desafiarme a mi mismo,
                ya sea comenzando un nuevo<span className="font-semibold"> proyecto</span> o desarrollando un nueva <span className="font-semibold">habilidad</span>
                . Siempre buscando la forma de ampliar mis {'\n'}<span className="font-semibold">horizontes🙂</span>
              </p>
            </div>
          </div>
        </div>
      </>
    </>
  )
}
