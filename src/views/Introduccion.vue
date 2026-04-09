<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .fondo01
      .row.justify-content-center.align-items-center.mb-5.p-4
        .col-lg-1
          img(src='@/assets/curso/portada/img01.svg', alt='')
        .col-lg-10
          p La agricultura ha sido históricamente una actividad esencial para la subsistencia humana. Sin embargo, el crecimiento acelerado de las ciudades y la reducción de espacios rurales han generado la necesidad de implementar nuevas estrategias productivas. 
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.mb-4
        img(src='@/assets/curso/portada/img02.png', alt='')
      .col-lg-7.mb-4
        p En este contexto, la agricultura urbana surge como una alternativa viable para el aprovechamiento de espacios reducidos, promoviendo sistemas de producción sostenibles, eficientes y adaptados a las condiciones de la ciudad. En las últimas décadas, la agricultura urbana ha cobrado relevancia como respuesta a problemáticas asociadas a la disponibilidad de alimentos y el cambio climático. Este tipo de agricultura no solo contribuye a la producción de alimentos frescos, sino que también favorece la educación ambiental y el fortalecimiento comunitario. No obstante, su implementación requiere de conocimientos técnicos específicos relacionados con el manejo de herramientas, la selección de insumos y la aplicación adecuada de técnicas de siembra.
        p El proceso de establecimiento de cultivos en sistemas urbanos implica comprender las particularidades del entorno, especialmente las condiciones edafoclimáticas. A diferencia de los sistemas tradicionales, la agricultura urbana hace uso de contenedores y sustratos artificiales, lo que exige una planificación detallada y un manejo técnico adecuado. La correcta preparación de herramientas e insumos constituye una fase fundamental en el proceso de siembra, ya que permite optimizar recursos, prevenir riesgos sanitarios y asegurar condiciones adecuadas para la germinación y el crecimiento vegetal. 
      .col-lg-12.mb-4
        img(src='@/assets/curso/portada/img03.png', alt='')
      .col-lg-12  
        p Este componente formativo tiene como propósito desarrollar en el aprendiz las competencias necesarias para preparar herramientas e insumos y ejecutar procesos de siembra en sistemas de agricultura urbana, considerando las condiciones edafoclimáticas y los principios técnicos que garantizan el adecuado establecimiento de los cultivos. A través del estudio teórico y la aplicación práctica, se busca fortalecer habilidades que permitan la implementación de sistemas productivos eficientes en contextos urbanos.
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
