<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La comprensión y aplicación de los fundamentos para el establecimiento de cultivos en agricultura urbana constituye un proceso esencial para desarrollar sistemas productivos eficientes, sostenibles y adaptados a entornos con limitaciones de espacio. La adecuada preparación de herramientas, insumos y condiciones de siembra permite optimizar el uso de recursos, garantizar la sanidad del cultivo y favorecer un desarrollo vegetal adecuado desde las etapas iniciales. Este componente formativo articula el manejo técnico de la siembra con la comprensión de las condiciones edafoclimáticas, reconociendo que la interacción entre sustrato, clima y características del cultivo determina el éxito productivo.
    p La implementación de prácticas adecuadas en el manejo de agroinsumos, la definición de densidades y distancias de siembra, y el control de factores como riego, ventilación y exposición solar permiten mejorar la eficiencia productiva y reducir riesgos asociados a plagas, enfermedades y condiciones ambientales adversas. Estas prácticas, fundamentadas en criterios técnicos rigurosos, promueven el uso racional de recursos y la minimización de impactos ambientales, consolidando un enfoque de agricultura urbana responsable y sostenible.
    p Finalmente, este componente formativo desarrolla competencias técnicas que permiten al aprendiz planificar, ejecutar y evaluar procesos de siembra en contextos urbanos, fortaleciendo su capacidad para implementar sistemas productivos sostenibles. De esta manera, se contribuye a la producción de alimentos en espacios urbanos, el aprovechamiento eficiente de recursos disponibles y la adopción de prácticas agrícolas responsables adaptadas a las dinámicas actuales del territorio.
 
    .row.justify-content-center
      .col-lg-11.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Descripción imagen")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
