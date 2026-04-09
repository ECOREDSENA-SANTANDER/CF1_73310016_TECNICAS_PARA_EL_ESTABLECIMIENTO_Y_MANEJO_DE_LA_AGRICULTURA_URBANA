<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Fundamentos para la preparación de la siembra
        
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5
          img(src='@/assets/curso/Tema1/img01.png', alt='')
        .col-lg-7
          .row.justify-content-center
            .col-lg-2
              img(src='@/assets/curso/Tema1/img01.svg', alt='')
            .col-lg-10
              p La preparación de la siembra constituye una etapa esencial en el establecimiento de cualquier sistema productivo agrícola, ya que de ella dependen en gran medida la germinación, el desarrollo inicial de las plantas y el rendimiento del cultivo. Este proceso implica la adecuada selección y alistamiento de herramientas, insumos y condiciones del entorno, bajo criterios técnicos que garanticen eficiencia y sostenibilidad.
          p En el contexto de la agricultura urbana, donde los espacios son limitados y las condiciones del medio pueden variar significativamente, la preparación de la siembra adquiere una mayor relevancia. El uso de contenedores, sustratos artificiales y recursos controlados exige una planificación cuidadosa y un manejo preciso de cada uno de los elementos involucrados en el proceso productivo.
  
      #t_1_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
          h2 1.1 Equipos y herramientas de siembra
      p Son instrumentos utilizados para facilitar las labores agrícolas, especialmente en la preparación del terreno y establecimiento del cultivo.
  
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/mundo.svg")
            h3.bg1.py-2.w-card-text Tipos
  
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-12
          img(src="@/assets/curso/Tema1/img02.png")
      p Los equipos y herramientas de siembra varían según el contexto productivo y las necesidades del cultivo. En agricultura urbana, donde los espacios son limitados y el manejo debe ser preciso, la selección adecuada de herramientas es crítica para optimizar recursos y garantizar eficiencia. Existen tres categorías principales de herramientas que se adaptan a las diferentes labores de preparación y siembra: herramientas manuales para tareas generales, herramientas de precisión para siembras uniformes, y equipos de riego básico para garantizar la disponibilidad de agua durante el proceso productivo.
  
      TabsA.color-acento-botones
        .tarjeta.color-acento-botones--borde.p-4(titulo="Herramientas manuales")
          p son las más utilizadas en agricultura urbana debido a su facilidad de manejo, bajo costo y adaptabilidad. 
          .titulo-sexto.color-secundario(data-aos='fade-right')
            h5 Tabla 1.
            span Herramientas manuales de siembra
          .tabla-a.color-acento-botones
            table.mb-4
              thead
                tr
                  th.w-25.bg2 Herramienta
                  th.bg2 Descripción
              tbody
                tr.bg4
                  td 
                    img(src="@/assets/curso/Tema1/pala.svg" alt="Pala" style="width:70px; margin-right:8px;")
                  td Utilizada para mezclar sustratos, llenar contenedores y realizar trasplantes.
                tr.bg5
                  td 
                    img(src="@/assets/curso/Tema1/azado.svg" alt="Azadón" style="width:100px; margin-right:8px;")
                  td Permite remover y airear el sustrato, facilitando la preparación del medio de siembra.
                tr.bg4
                  td 
                    img(src="@/assets/curso/Tema1/rastrillo.svg" alt="Rastrillo" style="width:160px; margin-right:8px;")
                  td Empleado para nivelar superficies y distribuir uniformemente el sustrato.
                tr.bg5
                  td 
                    img(src="@/assets/curso/Tema1/palin.svg" alt="Palín" style="width:90px; margin-right:8px;")
                  td Útil para trabajos de precisión en espacios pequeños.
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-6
                .tarjeta--boton.bg6.p-4
                  .row.justify-content-center.mb-3
                    .col-12
                      ul.lista-ul
                        li
                          i.fas.fa-angle-right
                          | #[b Ventajas]
                        li
                          i.mb-0
                          | Bajo costo.
                        li
                          i.mb-0
                          | Fácil transporte.
                        li
                          i.mb-0
                          | No requieren energía.
              .col-lg-6
                .tarjeta--boton.bg7.p-4
                  .row.justify-content-center.mb-3
                    .col-12
                      ul.lista-ul
                        li
                          i.fas.fa-angle-right
                          | #[b Limitaciones]
                        li
                          i.mb-0
                          | Mayor esfuerzo físico.
                        li
                          i.mb-0
                          | Menor rendimiento en grandes áreas. 

        .tarjeta.color-acento-botones--borde.p-4(titulo="Herramientas de precisión")
          .row.justify-content-center.align-items-center.p-4
            .col-lg-2
              img(src='@/assets/curso/Tema1/img03.svg', alt='')
            .col-lg-10
              p Permiten realizar siembras más uniformes y controladas, como los sembradores manuales de semillas pequeñas, dosificadores, marcadores de profundidad. Además, estas herramientas garantizan uniformidad en la germinación, reducen desperdicio de semillas y mejoran la eficiencia del cultivo.
        .tarjeta.color-acento-botones--borde.p-4(titulo="Equipos de riego básico")
          .row.justify-content-center.align-items-center.p-4
            .col-lg-2
              img(src='@/assets/curso/Tema1/img04.svg', alt='')
            .col-lg-10
              p Son esenciales para garantizar la disponibilidad de agua durante y después de la siembra, como la regadera manual, el sistema de riego por goteo y los pulverizadores. La función de estos equipos es humedecer el sustrato, mantener condiciones óptimas de germinación y aplicar agroinsumos líquidos.        
        
  
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/mundo.svg")
            h3.bg1.py-2.w-card-text Técnicas de alistamiento
  
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5
          img(src='@/assets/curso/Tema1/img03.png', alt='')
  
        .col-lg-7
          .row.justify-content-center
            .col-lg-2
              img(src='@/assets/curso/Tema1/img05.svg', alt='')
            .col-lg-10
              p Antes de utilizar cualquier herramienta o equipo, es fundamental prepararlos adecuadamente. El alistamiento de herramientas no es simplemente limpiar; es un proceso técnico que garantiza que cada instrumento esté en condiciones óptimas para su uso. Un alistamiento deficiente puede comprometer la calidad de la siembra, favorecer la propagación de enfermedades en los cultivos y exponer al operario a riesgos innecesarios. El proceso de alistamiento comprende tres etapas secuenciales: la limpieza previa que elimina contaminantes, la revisión del estado para identificar daños, y la desinfección para prevenir enfermedades fitosanitarias.
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-10
          PasosA.color-acento-contenido.mb-5(tipo="n")
            .row
              .col-md-8.mb-4.mb-md-0
                h3 Limpieza previa
                p Consiste en retirar residuos de tierra, materia orgánica o restos de cultivos anteriores. El procedimiento incluye cepillar la herramienta, lavar con agua y secar completamente. La importancia de esta técnica radica en que evita la contaminación cruzada y mejora la eficiencia del trabajo.
              .col-md-4
                figure
                  img(src='@/assets/curso/Tema1/img001.svg', alt='Texto que describa la imagen')
  

            .row
              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/Tema1/img002.svg', alt='Texto que describa la imagen')
              .col-md-8
                h3.text-izq Revisión de estado
                p.text-izq Se debe verificar que la herramienta esté en condiciones óptimas de uso. Los aspectos a evaluar son estado del filo, ajuste de mangos y presencia de grietas o corrosión.

            .row
              .col-md-8.mb-4.mb-md-0
                h3 Desinfección para evitar contaminación
                p La desinfección es fundamental para prevenir enfermedades en los cultivos, especialmente en herramientas de corte y antes de trabajar con nuevas plantas. Algunos métodos son la solución de hipoclorito (1-2%) o alcohol al 70%.
              .col-md-4
                figure
                  img(src='@/assets/curso/Tema1/img003.svg', alt='Texto que describa la imagen')

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/mundo.svg")
            h3.bg1.py-2.w-card-text Manual de operación y manejo

      .bg8.mb-4(data-aos="zoom-in-left")
        .row.justify-content-center.align-items-center
          .col-lg-5.col-md-8.col-12.mb-lg-0.mb-0(data-aos="fade-right")
            img.d-none.d-lg-block(src='@/assets/curso/Tema1/img05.png', alt='')
          .col-lg-7(data-aos="fade-left")
            .row.p-4
              .col-lg-2
                img.mb-3.img-t.d-none.d-lg-block(src='@/assets/curso/Tema1/img06.svg', alt='')
              .col-lg-12
                p La forma en que se utilizan las herramientas determina tanto la calidad del trabajo como la seguridad del operario. Un uso inadecuado no solo reduce la eficiencia, sino que incrementa significativamente el riesgo de accidentes y lesiones. En espacios urbanos, donde conviven múltiples usuarios y a menudo hay presencia de niños, los protocolos de seguridad adquieren mayor relevancia. El manejo correcto de herramientas abarca cuatro dimensiones fundamentales: el uso específico según la función de cada herramienta, la adopción de posturas ergonómicas que protejan la salud del operario, la utilización de equipos de protección personal (EPP) adecuados, y la organización segura del espacio de trabajo.


      .row.justify-content-center.align-items-center.mb-5
        .col-lg-3
          img(src='@/assets/curso/Tema1/img07.png', alt='')
        .col-lg-9
          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-5.d-flex
              img.w-100.h-100(src='@/assets/curso/Tema1/img08.svg', alt='')
            .col-lg-7.bg9.p-5.d-flex.flex-column.justify-content-center
              h4.bg10 Uso adecuado según función
              p Cada herramienta debe emplearse exclusivamente para el fin para el cual fue diseñada, por ejemplo, no usar una pala como palanca, no usar tijeras sin filo para poda.
          
          
          .row.justify-content-start.mb-4(data-aos="zoom-in-left")
            .col-sm-12.col-lg-7.mb-4
              .titulo-icono
                img.icono(src="@/assets/curso/Tema1/icono.svg")
                h3 Postura ergonómica
            p Una postura adecuada reduce el riesgo de lesiones musculoesqueléticas. Las recomendaciones incluyen mantener espalda recta, flexionar rodillas al levantar peso y alternar manos y movimientos.
            
      .fondo01
        .row.mb-5.p-4.justify-content-center
          .col-lg-11
            .row
              .col-sm-12.col-lg-7.mb-4
                .titulo-icono
                  img.icono(src="@/assets/curso/Tema1/icono.svg")
                  h3 Seguridad en el trabajo
              .col-lg-12
                p La seguridad en el trabajo es un aspecto fundamental en las actividades de siembra, ya que permite prevenir accidentes, proteger la salud del operario y garantizar condiciones adecuadas durante el desarrollo de las labores agrícolas, especialmente en espacios urbanos donde existen riesgos adicionales.
  
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-3
          img(src="@/assets/curso/Tema1/img09.png")
        .col-lg-9
          TabsA.color-acento-botones
            .tarjeta.color-acento-botones--borde.p-4(titulo="Guantes")
              .row.justify-content-center.align-items-center.p-4
                .col-lg-12
                  p El uso de guantes protege las manos contra cortaduras, ampollas, contacto con agentes contaminantes y posibles irritaciones causadas por insumos agrícolas. Se recomienda utilizar guantes resistentes y ajustados, cambiarlos cuando estén deteriorados, mantenerlos limpios y secos.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Calzado")
              .row.justify-content-center.align-items-center.p-4
                .col-lg-12
                  p El calzado adecuado evita lesiones por caída de objetos, contacto con herramientas y exposición a humedad o sustancias químicas. Se recomienda preferir botas con suela antideslizante, evitar el uso de sandalias o calzado abierto, verificar que estén en buen estado.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Protección en espacios urbanos")
              .row.justify-content-center.align-items-center.p-4
                .col-lg-12
                  p En entornos urbanos, es común la presencia de niños, por lo que se deben tomar medidas preventivas para evitar accidentes. Se recomienda guardar herramientas en lugares seguros, utilizar estantes o cajas cerradas, no dejarlas en zonas de paso o juego.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Almacenamiento")
              .row.justify-content-center.align-items-center.p-4
                .col-lg-12
                  p Las herramientas mal ubicadas representan un riesgo de tropiezos, caídas o lesiones. Se recomienda colocarlas en soportes o colgadores, organizar el área de trabajo después de cada actividad, mantener pasillos y zonas de tránsito despejados.
    
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/mundo.svg")
            h3.bg1.py-2.w-card-text Manual de mantenimiento
  
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          p El mantenimiento preventivo de herramientas y equipos es una inversión directa en la sostenibilidad económica y operativa del sistema productivo. Herramientas bien mantenidas funcionan más eficientemente, duran más tiempo y representan un costo total menor a largo plazo. Además, el mantenimiento adecuado garantiza que los equipos sean seguros de usar y que no se conviertan en vectores de transmisión de enfermedades entre cultivos. El mantenimiento de herramientas de siembra se estructura en dos actividades clave que deben realizarse de manera periódica: la limpieza después de cada uso, que es la base del cuidado preventivo, y la lubricación de partes móviles, que preserva la funcionalidad y prolonga la vida útil del equipo.
          ul.lista-ul.bg7.p-4
            li
              i.fas.fa-angle-right
              | #[b Limpieza después de uso:] la limpieza es la primera y más importante actividad de mantenimiento, ya que evita la acumulación de residuos que pueden deteriorar las herramientas. Consiste en retirar restos de tierra, raíces o materia orgánica con cepillo o espátula, lavar con agua si es necesario y secar completamente con un paño limpio o al aire. Esta actividad es importante porque previene la oxidación, evita la proliferación de microorganismos y reduce la transmisión de enfermedades entre cultivos. Se recomienda no almacenar herramientas húmedas, realizar limpieza inmediatamente después de su uso y prestar especial atención a herramientas de corte.
          ul.lista-ul.bg6.p-4
            li
              i.fas.fa-angle-right
              | #[b Lubricación:] la lubricación consiste en aplicar aceites o grasas en las partes metálicas o móviles para reducir la fricción y el desgaste, a elementos como articulaciones, bisagras, superficies metálicas expuestas. Se debe proceder limpiando previamente la herramienta, luego aplicar una capa ligera de aceite y distribuir uniformemente. La importancia de esta actividad radica en que evita la corrosión, mejora el funcionamiento y reduce el esfuerzo en su uso. La frecuencia de lubricación debe ser después de la limpieza (según uso) y antes de almacenamiento prolongado.
 
        .col-lg-4
          img(src="@/assets/curso/Tema1/img10.png")
      #t_1_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
          h2 1.2 Insumos agrícolas
      
      .bloque-texto-g.bg11.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema1/img11.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Los insumos agrícolas son todos aquellos materiales utilizados en los sistemas productivos para garantizar condiciones adecuadas de germinación, crecimiento, desarrollo y producción de los cultivos. En la agricultura urbana, su correcta selección y manejo es fundamental debido a la ausencia de suelo natural y a la necesidad de optimizar recursos en espacios reducidos.
            br

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/mundo.svg")
            h3.bg1.py-2.w-card-text Tipos       
  
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5
          img(src="@/assets/curso/Tema1/img12.png")
        .col-lg-7
          .row.justify-content-center
            .col-lg-2
              img(src="@/assets/curso/Tema1/img13.svg")
            .col-lg-10
              p En agricultura urbana existen tres categorías principales de insumos: los sustratos que reemplazan el suelo natural, los fertilizantes que aportan nutrientes esenciales, y las semillas que son la base del cultivo. Cada una de estas categorías cumple funciones específicas y debe seleccionarse según las necesidades del sistema productivo.
          p.bg7.p-4 #[b Sustratos:] en agricultura urbana, los sustratos reemplazan el suelo agrícola tradicional y constituyen el medio donde se desarrollan las raíces de las plantas. Las funciones principales de los sustratos incluyen proporcionar soporte físico a la planta, retener agua, garantizar disponibilidad de nutrientes y facilitar la aireación radicular.
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  </template>

<script>
export default {
  name: 'Tema1',
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
