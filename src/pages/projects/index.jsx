import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/utils/data'

export default function Projects () {
  return (
    <>
      <div className="text-center pt-24 w-full">
        <h1 className="text-3xl md:text-6xl font-bold pb-4 text-transparent bg-gradient-to-t from-amber-400 bg-clip-text to-neutral-600 ">
          Proyectos
        </h1>
        <div className="flex  snap-x snap-mandatory  m-auto overflow-x-auto gap-4">
          {projects.map(({ src, alt, text, title, techs, link, icon }, i) => (
            <>
              <div
                key={i}
                className="flex w-full flex-col snap-center shrink-0 overflow-hidden"
              >
                <h2 className="text-start text-xl md:text-3xl  font-semibold">
                  {title}
                </h2>
                <div className="flex justify-center w-full rounded-lg  overflow-hidden my-4">
                  <Link href={link}>
                    <Image
                    priority={true} layout="responsive"
                      className="object-cover aspect-video hover:scale-125 transition duration-300 w-full"
                      src={src}
                      alt={alt}
                      width="500"
                      height="300"
                    />
                  </Link>
                </div>
                <section className="gap-4 flex flex-col md:flex-row pb-4">
                  <div className="md:w-1/2 text-start">
                    <h3 className="text-lg md:text-2xl mb-2">Descripción</h3>
                    <p>{text}</p>
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-lg md:text-2xl mb-2">
                      Tecnologias usadas
                    </h3>
                    <div className="grid grid-cols-4 place-content-center gap-4">
                      {techs.map(({ src, name }, i) => (
                        <>
                          <Image
                            src={src}
                            alt={name}
                            width="50"
                            height="50"
                            className="m-auto hover:scale-110 hover:rotate-12 transition"
                          />
                        </>
                      ))}
                      {icon}
                    </div>
                  </div>
                </section>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}
