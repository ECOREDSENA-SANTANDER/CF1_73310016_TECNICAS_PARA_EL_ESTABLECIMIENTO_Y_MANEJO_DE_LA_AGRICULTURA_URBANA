<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Establecimiento del cultivo en contenedores

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        img(src="@/assets/curso/Tema2/img01.png")

    p El establecimiento del cultivo en contenedores representa una de las prácticas más utilizadas en la agricultura urbana, permitiendo la producción de alimentos en espacios reducidos y en condiciones controladas. Esta técnica facilita el aprovechamiento de áreas como terrazas, patios, balcones y azoteas, adaptando los sistemas productivos a entornos urbanos con limitaciones de suelo.

    #t_2_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 2.1 Siembra en agricultura urbana
    
    p La siembra en agricultura urbana se adapta a espacios reducidos utilizando recipientes como materas, cajas o botellas recicladas. El proceso requiere consideraciones especiales en técnicas, profundidad, densidad y distancias de siembra para garantizar cultivos exitosos en volúmenes limitados de sustrato.
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/mundo.svg")
            h3.bg1.py-2.w-card-text Técnicas
    
    .row.justify-content-center.align-items-stretch.mb-1(data-aos="zoom-in-left")
      .col-lg-3.col-7.mb-3.col-md-5
        img(src="@/assets/curso/Tema2/img02.png")
      .col-lg-9
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-5.d-flex.d-none.d-lg-block
            img.w-100.h-100(src='@/assets/curso/Tema2/img03.svg', alt='')
          .col-lg-7.bg9.d-flex.flex-column.justify-content-center.p-3
            h5.bg10 Uso de sustratos livianos
            p En sistemas urbanos no se utiliza suelo natural, sino mezclas de materiales que facilitan el crecimiento de las plantas. Un buen sustrato para agricultura urbana debe ser ligero para facilitar el manejo, retener humedad adecuada para mantener disponibilidad de agua, y permitir aireación suficiente para el desarrollo radicular. Estas características garantizan que las raíces se desarrollen sin compactación, que el sustrato mejore la absorción de nutrientes y que se favorezca el crecimiento general de la planta.

    .titulo-sexto.color-secundario(data-aos='fade-right')
      h5 Tabla 11.
      span Características de un buen sustrato y su importancia
    .tabla-a.color-acento-botones
      table.mb-4
        thead
          tr
            th.bg2 Características de un buen sustrato
            th.bg2 Importancia
        tbody
          tr.bg4
            td Ligero (fácil de manejar)
            td Favorece el desarrollo radicular
          tr.bg5
            td Buena retención de humedad
            td Evita compactación
          tr.bg4
            td Adecuada aireación
            td Mejora la absorción de nutrientes
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7.mb-3
        .titulo-icono
          img.icono(src="@/assets/curso/Tema1/icono.svg")
          h3 Drenaje adecuado
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src="@/assets/curso/Tema2/img04.png")
      .col-lg-7
        .row.justify-content-center.bg6.p-4
          .col-lg-2.col-4.mb-3.col-md-3
            img(src='@/assets/curso/Tema2/img05.svg', alt='')
          .col-lg-10
            p El drenaje permite la salida del exceso de agua, evitando problemas graves en las raíces. Un drenaje deficiente causa encharcamiento, que conduce a pudrición radicular y enfermedades fúngicas. En contenedores urbanos, el drenaje se mejora perforando agujeros en la base del recipiente, colocando capas de materiales filtrantes como grava o piedras, y usando sustratos con buena capacidad de drenaje. Estas medidas previenen encharcamientos, evitan la pudrición radicular y mejoran la oxigenación general del sustrato.

    .titulo-sexto.color-secundario(data-aos='fade-right')
      h5 Tabla 12.
      span Técnicas para mejorar el drenaje y su importancia
    .tabla-a.color-acento-botones
      table.mb-4
        thead
          tr
            th.bg2 Técnicas para mejorar el drenaje
            th.bg2 Importancia
        tbody
          tr.bg4
            td Perforar la base del contenedor
            td Previene encharcamientos
          tr.bg5
            td Colocar una capa de grava o piedras
            td Evita pudrición radicular
          tr.bg4
            td Usar materiales filtrantes
            td Mejora la oxigenación del sustrato

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7.mb-3
        .titulo-icono
          img.icono(src="@/assets/curso/Tema1/icono.svg")
          h3 Riego controlado

    .bloque-texto-g.bloque-texto-g--inverso.bg111.p-3.p-sm-4.p-md-5(data-aos="zoom-in-left").mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema2/img06.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El riego en agricultura urbana debe ser preciso, ya que el volumen de sustrato es limitado y los contenedores no tienen reservas grandes de agua. Un riego adecuado favorece la germinación inicial, mantiene una humedad constante que evita estrés hídrico en las plantas, y optimiza el uso del agua en espacios urbanos donde este recurso puede ser escaso. Las mejores prácticas incluyen regar en horas de la mañana o tarde (cuando hay menor evaporación), evitar exceso de agua que cause problemas radicales, y mantener humedad constante monitoreando el sustrato regularmente.
          br
          br
          | 

    .titulo-sexto.color-secundario(data-aos='fade-right')
      h5 Tabla 13.
      span Recomendaciones, métodos e importancia del riego controlado
    .tabla-a.color-acento-botones
      table.mb-4
        thead
          tr
            th.bg2 Recomendaciones
            th.bg2 Métodos
            th.bg2 Importancia
        tbody
          tr.bg4
            td Regar en horas de mañana o tarde
            td Regadera manual
            td Favorece germinación
          tr.bg5
            td Evitar exceso de agua
            td Riego por goteo
            td Evita estrés hídrico
          tr.bg4
            td Mantener humedad constante
            td Pulverización
            td Optimiza uso del agua


    .fondo01(data-aos="zoom-in-left")
        .row.mb-5.p-4.justify-content-center
          .col-lg-11
            p #[b #[em Pódcast:]] Para profundizar en las técnicas de siembra directa y almácigos, se recomienda escuchar el siguiente podcast donde se discute de forma práctica cuándo utilizar cada técnica, cuáles son sus ventajas y cómo elegir la más adecuada según el cultivo y el espacio disponible. 













































































</template>

<script>
export default {
  name: 'Tema2',
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
