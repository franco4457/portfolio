import { SiExpress } from 'react-icons/si'
export const projects = [
  {
    src: '/Bait.png',
    link: 'https://bait-one.vercel.app/',
    alt: 'BaitApp',
    title: 'Bait',
    text: (
      <>
        Trabajé en un equipo que desarrolló una aplicación Full Stack llamada
        Bait, utilizando <strong>metodologías ágiles</strong>. La plataforma
        permite a los usuarios crear reseñas de locales de comida y a los
        administradores validar las reseñas, asignar roles y verificar los
        locales. Mi papel en el proyecto incluyó la creación del back-end y la
        comunicación con el front-end, así como tareas como la subida de
        imágenes con <strong>Cloudinary</strong>, la autenticación de terceros
        con <strong>Firebase</strong>, la implementación de{' '}
        <strong>inteligencia artificial</strong> para analizar la toxicidad de
        los comentarios, la documentación de endpoints con{' '}
        <strong>Swagger</strong> y la creación de <strong>filtros y paginado</strong>.
      </>
    ),
    techs: [
      { src: '/react.png', name: 'React' },
      { src: '/nodeJS.png', name: 'NodeJS' },
      { src: '/postgreSQL.png', name: 'PostgreSQL' },
      { src: '/redux.png', name: 'Redux' },
      { src: '/cloudinary.png', name: 'Cloudinary' },
      { src: '/firebase-logo.png', name: 'firebase-logo' },
      { src: '/swagger-logo.png', name: 'swagger-logo' }
    ],
    icon: (
      <SiExpress className="w-12 h-12 m-auto hover:scale-110 hover:rotate-12 transition" />
    )
  },
  {
    src: '/ZooDogsAPP.png',
    link: 'https://pi-dogs-franco4457.vercel.app/',
    alt: 'AppZooDogs',
    title: 'ZooDogs',
    text: (
      <>
        Proyecto individual para bootcamp de SoyHenry. En el cual aprendí como
        hacer un stack <strong> PERN</strong>. En la app se pueden agregar
        razas, <strong>eliminar</strong> razas cradas, <strong>filtrar </strong>
        razas, <strong>ordenar</strong> y <strong>modificar</strong> razas
        cradas. Tiene
        <strong> traducción</strong> en español e ingles, un diseño
        <strong> resposive</strong> y subida de imagenes a
        <strong> Cloudinary</strong>
      </>
    ),
    techs: [
      { src: '/react.png', name: 'React' },
      { src: '/nodeJS.png', name: 'NodeJS' },
      { src: '/postgreSQL.png', name: 'PostgreSQL' },
      { src: '/sass.png', name: 'Sass' },
      { src: '/redux.png', name: 'Redux' },
      { src: '/cloudinary.png', name: 'Cloudinary' }
    ],
    icon: (
      <SiExpress className="w-12 h-12 m-auto hover:scale-110 hover:rotate-12 transition" />
    )
  },
  {
    src: '/RymAPP.png',
    link: 'https://rick-and-morty-app-chi-ochre.vercel.app/',
    alt: 'RymApp',
    title: 'Rick & Morty App',
    text: (
      <>
        Mi primer proyecto<strong> FullStack</strong> consistió en la creación
        del frontend con
        <strong> React, Redux y CSS puro</strong>, mientras que el backend se
        construyó con una
        <strong> REST API</strong> de <strong>Node.js</strong> creada con
        <strong> Express</strong> y una base de datos{' '}
        <strong>PostgreSQL</strong>. Aprendí a crear un{' '}
        <strong>registro de usuarios</strong>, implementar
        <strong> autenticación</strong> con
        <strong> hash de contraseñas</strong> mediante la biblioteca bcrypt para
        garantizar la seguridad de los datos de los usuarios,
        <strong> autorización</strong> mediante el uso de
        <strong> JsonWebTokens</strong> y mantener las sesiones de los usuarios
        mediante el uso del almacenamiento local (local storage).
      </>
    ),
    techs: [
      { src: '/react.png', name: 'React' },
      { src: '/nodeJS.png', name: 'NodeJS' },
      { src: '/postgreSQL.png', name: 'PostgreSQL' },
      { src: '/redux.png', name: 'Redux' }
    ],
    icon: (
      <SiExpress className="w-12 h-12 m-auto hover:scale-110 hover:rotate-12 transition" />
    )
  }
]

export const Pages = [
  { label: 'Sobre mí', page: 'about' },
  { label: 'Proyectos', page: 'projects' },
  { label: 'Experiencia', page: 'experiences' },
  { label: 'Contáctame', page: 'contact' }
]
