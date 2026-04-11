export default {
  global: {
    Name: 'Fundamentos para la siembra y establecimiento de cultivos urbanos',
    Description:
      'El establecimiento de cultivos urbanos requiere la preparación de herramientas e insumos y la aplicación de técnicas de siembra, considerando condiciones edafoclimáticas (clima y características del suelo). Este proceso demanda eficiencia en espacios reducidos, bajo criterios técnicos, sostenibles y adaptados al entorno urbano.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos para la preparación de la siembra',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Equipos y herramientas de siembra',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Insumos agrícolas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Agroinsumos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Fundamentos de la siembra',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Condiciones edafoclimáticas',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Establecimiento del cultivo en contenedores',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Siembra en agricultura urbana',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Línea de siembra',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Relación suelo-clima-cultivo',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Agroinsumos',
      significado:
        'Productos utilizados para la nutrición, protección y mejoramiento de los cultivos.',
    },
    {
      termino: 'Aireación',
      significado:
        'Proceso que permite la circulación de aire en el sustrato, favoreciendo el desarrollo radicular.',
    },
    {
      termino: 'Alistamiento',
      significado:
        'Conjunto de acciones previas para preparar herramientas, insumos y condiciones antes de la siembra.',
    },
    {
      termino: 'Contenedor',
      significado:
        'Recipiente utilizado en agricultura urbana para sembrar y cultivar plantas.',
    },
    {
      termino: 'Densidad de siembra',
      significado:
        'Cantidad de plantas establecidas en un área o volumen determinado.',
    },
    {
      termino: 'Desinfección',
      significado:
        'Proceso de eliminación de microorganismos para prevenir enfermedades en cultivos.',
    },
    {
      termino: 'Distancia de siembra',
      significado:
        'Espacio recomendado entre plantas para su adecuado crecimiento.',
    },
    {
      termino: 'Edafoclimático',
      significado:
        'Relativo a las condiciones del suelo y del clima que afectan el desarrollo del cultivo.',
    },
    {
      termino: 'Fertilización',
      significado:
        'Aplicación de nutrientes para mejorar el crecimiento y producción de las plantas.',
    },
    {
      termino: 'Germinación',
      significado:
        'Proceso mediante el cual una semilla inicia su desarrollo hasta convertirse en planta.',
    },
    {
      termino: 'Herramientas agrícolas',
      significado:
        'Instrumentos utilizados para facilitar las labores de siembra y manejo del cultivo.',
    },
    {
      termino: 'Insumos agrícolas',
      significado:
        'Materiales utilizados para favorecer el crecimiento y desarrollo de los cultivos.',
    },
    {
      termino: 'Línea de siembra',
      significado:
        'Distribución organizada de plantas siguiendo un patrón definido en el terreno o contenedor.',
    },
    {
      termino: 'Siembra',
      significado:
        'Proceso de colocar semillas o plantas en un medio adecuado para su desarrollo.',
    },
    {
      termino: 'Sustrato',
      significado:
        'Material que reemplaza el suelo en la agricultura urbana y permite el crecimiento de las plantas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alcaldía Mayor de Bogotá. (s. f.). Cartilla técnica: Agricultura urbana. Secretaría de Gobierno.',
      link: '',
    },
    {
      referencia:
        'Ambientum. (2025). Guía básica de agricultura urbana: Cultiva en la ciudad. Ambientum.',
      link: '',
    },
    {
      referencia:
        'Lara García, E. H., Herrera Guzmán, E. G., Cepeda Valencia, J., & Ramírez Caballero, J. E. (2022). Prácticas para establecer y manejar tu huerta: Una guía para agricultoras y agricultores urbanos y periurbanos. Jardín Botánico de Bogotá José Celestino Mutis; Organización de Estados Iberoamericanos para la Educación, la Ciencia y la Cultura.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2018). Guía técnica para cultivos en espacios urbanos. Dirección de Innovación y Tecnología.',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura. (s. f.). Agricultura urbana y periurbana. FAO.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Javier Pacheco Wandurraga',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Angélica Varón Quintero',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
