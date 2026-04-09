<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos para la siembra y establecimiento de cultivos urbanos',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión del aprendiz sobre los fundamentos de la siembra, manejo de herramientas, insumos agrícolas y condiciones edafoclimáticas.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el objetivo principal de la siembra?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Decorar espacios urbanos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Establecer cultivos para su desarrollo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir el uso de herramientas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar el uso de insumos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
        },
        {
          id: 2,
          texto: 'La siembra directa se caracteriza por:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Realizarse en semilleros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Requerir trasplante.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sembrarse en el lugar definitivo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Usar solo fertilizantes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
        },
        {
          id: 3,
          texto: '¿Cuál es una ventaja de la siembra en almácigos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mayor exposición a plagas',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Menor control del cultivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mejor control de germinación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Mayor uso de semillas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
        },
        {
          id: 4,
          texto: 'La profundidad de siembra depende principalmente de:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El clima.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El tamaño de la semilla.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El color del sustrato.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El tipo de herramienta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
        },
        {
          id: 5,
          texto: '¿Qué ocurre si una semilla se siembra muy profunda?',
          imagen: require('@/assets/actividad/imagen05.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Germina más rápido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mejora la producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Dificulta su emergencia.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'No necesita agua.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
        },

        {
          id: 6,
          texto: 'La densidad de siembra se refiere a:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cantidad de agua aplicada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Número de plantas por área.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tipo de fertilizante.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tamaño del contenedor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
        },

        {
          id: 7,
          texto: '¿Cuál es un beneficio de una adecuada distancia de siembra?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mayor competencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Menor crecimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mejor aprovechamiento de recursos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Menor ventilación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
        },

        {
          id: 8,
          texto: '¿Cuál es una herramienta manual?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tractor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fertilizante.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sistema de riego.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Pala.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
        },

        {
          id: 9,
          texto: 'El alistamiento de herramientas incluye:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Limpieza y revisión.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Uso inmediato.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Compra de nuevas herramientas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
        },

        {
          id: 10,
          texto: 'La desinfección de herramientas permite:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejorar color.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar enfermedades.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar peso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir costos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
        },

        {
          id: 11,
          texto: '¿Qué es un sustrato?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Herramienta agrícola.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tipo de semilla.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sistema de riego.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Medio de crecimiento de la planta.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
        },

        {
          id: 12,
          texto: '¿Cuál es un agro insumo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pala.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Agua.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Fertilizante.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Contenedor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
        },

        {
          id: 13,
          texto: 'Una buena práctica en el uso de agro insumos es:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicar en exceso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'No leer instrucciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Usar dosis recomendada.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Mezclar sin control.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
        },

        {
          id: 14,
          texto: '¿Qué factor edafo-climático corresponde al suelo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Temperatura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Humedad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'pH.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Viento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
        },

        {
          id: 15,
          texto: 'En agricultura urbana, los contenedores deben tener:',
          imagen: require('@/assets/actividad/imagen05.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Color específico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Drenaje adecuado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Gran tamaño siempre.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Uso único.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
        },

        {
          id: 16,
          texto: 'La línea de siembra permite:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Desorganizar el cultivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumentar plagas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir espacio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Distribuir plantas uniformemente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
        },

        {
          id: 17,
          texto: 'La orientación de la siembra debe considerar:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El color del suelo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La dirección del viento únicamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La luz solar.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El tamaño del contenedor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
        },

        {
          id: 18,
          texto: '¿Cuál es un error en la siembra?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Respetar distancias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Usar sustrato adecuado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'No considerar profundidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aplicar buenas prácticas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
        },

        {
          id: 19,
          texto: 'El manejo de microclimas incluye:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso de herramientas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Uso de maquinaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Compra de insumos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Control de sombra y riego.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
        },

        {
          id: 20,
          texto: 'La relación suelo-clima-cultivo permite:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir el uso de agua.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar el uso de semillas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Entender el desarrollo del cultivo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar herramientas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los fundamentos para la siembra y establecimiento de cultivos urbanos.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre los fundamentos para la siembra y establecimiento de cultivos urbanos.',
      mensaje_final_reprobado:
        'Mensaje cuando el porcentaje de respuestas correctas es inferior al 70 %	No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
