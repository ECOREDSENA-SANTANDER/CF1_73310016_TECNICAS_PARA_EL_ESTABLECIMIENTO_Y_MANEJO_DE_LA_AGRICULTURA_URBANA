<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Fundamentos para la preparación de la siembra
        
      .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
        .col-lg-5.col-11.mb-4.col-md-9
          img(src='@/assets/curso/Tema1/img01.png', alt='')
        .col-lg-7
          .row.justify-content-center
            .col-lg-2.col-4.mb-3.col-md-3
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
  
      .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
        .col-lg-12
          img(src="@/assets/curso/Tema1/img02.png")
      p Los equipos y herramientas de siembra varían según el contexto productivo y las necesidades del cultivo. En agricultura urbana, donde los espacios son limitados y el manejo debe ser preciso, la selección adecuada de herramientas es crítica para optimizar recursos y garantizar eficiencia. Existen tres categorías principales de herramientas que se adaptan a las diferentes labores de preparación y siembra: herramientas manuales para tareas generales, herramientas de precisión para siembras uniformes, y equipos de riego básico para garantizar la disponibilidad de agua durante el proceso productivo.
  
      TabsA.color-acento-botones(data-aos="zoom-in-left").mb-4
        .tarjeta.color-acento-botones--borde.p-4(titulo="Herramientas manuales")
          p Son las más utilizadas en agricultura urbana debido a su facilidad de manejo, bajo costo y adaptabilidad. 
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
              .col-lg-6.mb-4
                .tarjeta--boton.bg6.p-4
                  .row.justify-content-center.mb-3
                    .col-12.h-100.w-100
                      ul.lista-ul
                        li
                          i.fas.fa-angle-right2
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
                .tarjeta--boton.bg7.p-4.w-100.h-100
                  .row.justify-content-center.mb-3
                    .col-12
                      ul.lista-ul
                        li
                          i.fas.fa-angle-right2
                          | #[b Limitaciones]
                        li
                          i.mb-0
                          | Mayor esfuerzo físico.
                        li
                          i.mb-0
                          | Menor rendimiento en grandes áreas. 
                        li
                          i.mb-0
                          | 
                 

        .tarjeta.color-acento-botones--borde.p-4(titulo="Herramientas de precisión")(data-aos="zoom-in-left")
          .row.justify-content-center.align-items-center.p-4
            .col-lg-2
              img(src='@/assets/curso/Tema1/img03.svg', alt='')
            .col-lg-10
              p Permiten realizar siembras más uniformes y controladas, como los sembradores manuales de semillas pequeñas, dosificadores, marcadores de profundidad. Además, estas herramientas garantizan uniformidad en la germinación, reducen desperdicio de semillas y mejoran la eficiencia del cultivo.
        .tarjeta.color-acento-botones--borde.p-4(titulo="Equipos de riego básico")(data-aos="zoom-in-left")
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
  
      .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-5.mb-4
          img(src='@/assets/curso/Tema1/img03.png', alt='')
  
        .col-lg-7
          .row.justify-content-center
            .col-lg-2.col-4.mb-3.col-md-3
              img(src='@/assets/curso/Tema1/img05.svg', alt='')
            .col-lg-10
              p Antes de utilizar cualquier herramienta o equipo, es fundamental prepararlos adecuadamente. El alistamiento de herramientas no es simplemente limpiar; es un proceso técnico que garantiza que cada instrumento esté en condiciones óptimas para su uso. Un alistamiento deficiente puede comprometer la calidad de la siembra, favorecer la propagación de enfermedades en los cultivos y exponer al operario a riesgos innecesarios. El proceso de alistamiento comprende tres etapas secuenciales: la limpieza previa que elimina contaminantes, la revisión del estado para identificar daños, y la desinfección para prevenir enfermedades fitosanitarias.
      .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
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


      .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-3.col-6.mb-4.col-md-5
          img(src='@/assets/curso/Tema1/img07.png', alt='')
        .col-lg-9
          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-5.d-flex.d-none.d-lg-block
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
            
      .fondo01(data-aos="zoom-in-left")
        .row.mb-5.p-4.justify-content-center
          .col-lg-11
            .row
              .col-sm-12.col-lg-7.mb-4
                .titulo-icono
                  img.icono(src="@/assets/curso/Tema1/icono.svg")
                  h3 Seguridad en el trabajo
              .col-lg-12
                p La seguridad en el trabajo es un aspecto fundamental en las actividades de siembra, ya que permite prevenir accidentes, proteger la salud del operario y garantizar condiciones adecuadas durante el desarrollo de las labores agrícolas, especialmente en espacios urbanos donde existen riesgos adicionales.
  
      .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
        .col-lg-3.col-8.mb-3.col-md-6
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
  
      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
        .col-lg-8
          p El mantenimiento preventivo de herramientas y equipos es una inversión directa en la sostenibilidad económica y operativa del sistema productivo. Herramientas bien mantenidas funcionan más eficientemente, duran más tiempo y representan un costo total menor a largo plazo. Además, el mantenimiento adecuado garantiza que los equipos sean seguros de usar y que no se conviertan en vectores de transmisión de enfermedades entre cultivos. El mantenimiento de herramientas de siembra se estructura en dos actividades clave que deben realizarse de manera periódica: la limpieza después de cada uso, que es la base del cuidado preventivo, y la lubricación de partes móviles, que preserva la funcionalidad y prolonga la vida útil del equipo.
          ul.lista-ul.bg7.p-4
            li
              i.fas.fa-angle-right2
              | #[b Limpieza después de uso:] la limpieza es la primera y más importante actividad de mantenimiento, ya que evita la acumulación de residuos que pueden deteriorar las herramientas. Consiste en retirar restos de tierra, raíces o materia orgánica con cepillo o espátula, lavar con agua si es necesario y secar completamente con un paño limpio o al aire. Esta actividad es importante porque previene la oxidación, evita la proliferación de microorganismos y reduce la transmisión de enfermedades entre cultivos. Se recomienda no almacenar herramientas húmedas, realizar limpieza inmediatamente después de su uso y prestar especial atención a herramientas de corte.
          ul.lista-ul.bg6.p-4
            li
              i.fas.fa-angle-right2
              | #[b Lubricación:] la lubricación consiste en aplicar aceites o grasas en las partes metálicas o móviles para reducir la fricción y el desgaste, a elementos como articulaciones, bisagras, superficies metálicas expuestas. Se debe proceder limpiando previamente la herramienta, luego aplicar una capa ligera de aceite y distribuir uniformemente. La importancia de esta actividad radica en que evita la corrosión, mejora el funcionamiento y reduce el esfuerzo en su uso. La frecuencia de lubricación debe ser después de la limpieza (según uso) y antes de almacenamiento prolongado.
 
        .col-lg-4.col-6.col-md-5
          img(src="@/assets/curso/Tema1/img10.png")
      #t_1_2.titulo-segundo.mb-4(data-aos="zoom-in-left")
          h2 1.2 Insumos agrícolas
      
      .bloque-texto-g.bg11.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
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
  
      .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
        .col-lg-5.mb-3.col-md-9
          img(src="@/assets/curso/Tema1/img12.png")
        .col-lg-7
          .row.justify-content-center
            .col-lg-2.col-4.mb-3.col-md-3
              img(src="@/assets/curso/Tema1/img13.svg")
            .col-lg-10
              p En agricultura urbana existen tres categorías principales de insumos: los sustratos que reemplazan el suelo natural, los fertilizantes que aportan nutrientes esenciales, y las semillas que son la base del cultivo. Cada una de estas categorías cumple funciones específicas y debe seleccionarse según las necesidades del sistema productivo.
          p.bg7.p-4 #[b Sustratos:] en agricultura urbana, los sustratos reemplazan el suelo agrícola tradicional y constituyen el medio donde se desarrollan las raíces de las plantas. Las funciones principales de los sustratos incluyen proporcionar soporte físico a la planta, retener agua, garantizar disponibilidad de nutrientes y facilitar la aireación radicular.
  
      .titulo-sexto.color-secundario(data-aos='fade-right').mb-4
        h5 Tabla 2.
        span Tipos de sustratos para agricultura urbana
      .tabla-a.color-acento-botones(data-aos="zoom-in-left")
        table.mb-4
          thead
            tr
              th.bg2 Tipo
              th.bg2 Características
              th.bg2 Uso
          tbody
            tr.bg4
              td Tierra negra
              td Rica en materia orgánica
              td Cultivos generales
            tr.bg5
              td Compost
              td Alta fertilidad
              td Producción orgánica
            tr.bg4
              td Fibra de coco
              td Ligera y aireada
              td Semilleros
            tr.bg5
              td Cascarilla de arroz
              td Mejora drenaje
              td Mezclas
            tr.bg4
              td Turba
              td Alta retención de agua
              td Germinación  
        
      .cajon.color-secundario.p-4.mb-4(data-aos="zoom-in-left")
        h5 Recomendación
        p se recomienda una mezcla de 40 % tierra + 40 % compost + 20 % material que facilite la aireación, ajustada según el cultivo.
      
      .row.justify-content-center.mb-1(data-aos="zoom-in-left")
        .col-lg-3.col-7.mb-3.col-md-5
          img(src="@/assets/curso/Tema1/img14.png")
        .col-lg-9
          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-5.d-flex.d-none.d-lg-block
              img.w-100.h-100(src='@/assets/curso/Tema1/img15.svg', alt='')
            .col-lg-7.bg9.p-5.d-flex.flex-column.justify-content-center
              ul.lista-ul.bg10
                li
                  i.fas.fa-angle-right2
                  | #[b Fertilizantes]
              p son sustancias que aportan nutrientes esenciales para el desarrollo de las plantas. Se clasifican en tres tipos principales:
      TabsA.color-acento-botones(data-aos="zoom-in-left").mb-4
          .tarjeta.color-acento-botones--borde.p-4(titulo="Fertilizantes orgánicos")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-12
                p Son sustancias naturales como compost, lombricompost y estiércol que mejoran el suelo y son sostenibles.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Fertilizantes inorgánicos (químicos)")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-12
                p son productos elaborados industrialmente que aportan nitrógeno (N), fósforo (P) y potasio (K). Ofrecen rápida disponibilidad y alta concentración de nutrientes.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Biofertilizantes")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-12
                p son productos basados en microorganismos benéficos que mejoran la absorción de nutrientes.
        
      .fondo01(data-aos="zoom-in-left")
        .row.mb-5.p-4.justify-content-center
          .col-lg-11
            .row
              .col-sm-12.col-lg-5.mb-4
                .titulo-icono
                  img.icono(src="@/assets/curso/Tema1/icono.svg")
                  h3 Semillas
              .col-lg-12
                p Son el insumo base del proceso productivo.  
  
      .titulo-sexto.color-secundario(data-aos='fade-right')
        h5 Tabla 3.
        span Tipos de semillas para agricultura urbana
      .tabla-a.color-acento-botones(data-aos="zoom-in-left")
        table.mb-4
          thead
            tr
              th.bg2 Tipo
              th.bg2 Descripción
              th.bg2 Características
          tbody
            tr.bg4
              td Certificadas
              td Semillas producidas bajo estándares de calidad y regulaciones oficiales
              td Alta calidad genética
            tr.bg5
              td Criollas
              td Semillas locales desarrolladas y seleccionadas por agricultores a lo largo del tiempo
              td Adaptadas localmente
            tr.bg4
              td Híbridas
              td Semillas resultantes del cruzamiento controlado de dos variedades diferentes
              td Mayor rendimiento 
  
      p Los criterios de selección que se deben considerar son porcentaje de germinación, adaptación al clima y resistencia a plagas.
  
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-7
            .d-flex.align-items-center
              img.w-card-icon(src="@/assets/curso/Tema1/mundo.svg")
              h3.bg1.py-2.w-card-text Características
    
      .row.justify-content-center.mb-3(data-aos="zoom-in-left")
        .col-lg-1.col-4.mb-3.col-md-3
          img(src="@/assets/curso/Tema1/img16.svg")
        .col-lg-11
          p La selección adecuada de insumos en agricultura urbana no depende solo de conocer sus tipos, sino también de evaluar características clave que garanticen su pertinencia y eficacia. Toda decisión de compra o uso de insumos debe considerar tres aspectos fundamentales: la calidad del producto, su compatibilidad con el cultivo específico, y la disponibilidad en el mercado local. Estas características determinan directamente el éxito productivo y la viabilidad económica del sistema. 
      
      .tarjeta--container.row.mb-3(data-aos="zoom-in-left")
        .col-md.tarjeta.bg1.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/Tema1/img18.svg', alt='Texto que describa la imagen')          
          h3.text-center Calidad
          p Un insumo de calidad garantiza mejores resultados productivos e influye directamente en el éxito del cultivo. Los indicadores de calidad incluyen pureza del producto, ausencia de contaminantes y buen estado físico. Un insumo deficiente compromete todo el sistema productivo.
        
        .col-md.tarjeta.bg6.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/Tema1/img19.svg', alt='Texto que describa la imagen')          
          h3.text-center Compatibilidad con el cultivo
          p Cada cultivo requiere condiciones específicas que deben evaluarse cuidadosamente antes de seleccionar los insumos. Se debe considerar el tipo de planta, sus requerimientos nutricionales particulares y el sistema de producción que se va a implementar. Una mala selección genera desperdicio de recursos.
        
        .col-md.tarjeta.bg12.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/Tema1/img20.svg', alt='Texto que describa la imagen')          
          h3.text-center Disponibilidad
          p La disponibilidad se refiere al acceso a los insumos en términos de costo y facilidad de adquisición en el mercado local. Considera factores como acceso local, precio competitivo y estacionalidad del producto. La falta de disponibilidad puede limitar la ejecución del plan de producción.
        
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-7
            .d-flex.align-items-center
              img.w-card-icon(src="@/assets/curso/Tema1/mundo.svg")
              h3.bg1.py-2.w-card-text Función
      
      .row.justify-content-center.mb-5(data-aos="zoom-in-left")
        .col-lg-1.col-4.mb-4.col-md-3
          img(src="@/assets/curso/Tema1/img17.svg")
        .col-lg-11
          p Los insumos agrícolas cumplen tres funciones fundamentales en el sistema productivo: aportar nutrientes esenciales para el crecimiento vegetal, mejorar las condiciones físicas y químicas del sustrato o suelo, y facilitar los procesos de germinación y desarrollo inicial de las plantas. Sin insumos de calidad y adecuadamente seleccionados, no es posible garantizar la productividad ni la sostenibilidad del cultivo en agricultura urbana.
  
      #t_1_3.titulo-segundo.mb-4(data-aos="zoom-in-left")
        h2 1.3 Agroinsumos
  
      p Los agroinsumos son productos utilizados en los sistemas agrícolas con el propósito de nutrir, proteger y mejorar el desarrollo de los cultivos. Constituyen un subgrupo de los insumos agrícolas y su uso adecuado es determinante para lograr cultivos sanos, productivos y sostenibles.
  
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/mundo.svg")
            h3.bg1.py-2.w-card-text Tipos
  
  
      .fondo01(data-aos="zoom-in-left")
        .row.mb-5.p-4.justify-content-center
          .col-lg-11
            ul.lista-ul
              li
                i.fas.fa-angle-right2
                | #[b Agroinsumos orgánicos:] son aquellos provenientes de fuentes naturales, sin procesos químicos industriales, que contribuyen a mejorar la fertilidad del sustrato y la salud del cultivo. Los principales tipos incluyen compost, humus de lombriz, bocashi (abono fermentado) y extractos vegetales. Se caracterizan por una liberación lenta de nutrientes, mejoran la estructura del sustrato y favorecen la actividad microbiana.
      .titulo-sexto.color-secundario(data-aos='fade-right')
        h5 Tabla 4.
        span Ventajas y limitaciones de agroinsumos orgánicos
      .tabla-a.color-acento-botones(data-aos="zoom-in-left")
        table.mb-4
          thead
            tr
              th.bg2 Ventajas
              th.bg2 Limitaciones
          tbody
            tr.bg4
              td Bajo impacto ambiental
              td Respuesta más lenta
            tr.bg5
              td Aptos para agricultura ecológica
              td Requieren mayor volumen de aplicación
            tr.bg4
              td Mejoran la sostenibilidad del sistema
              td 
      .fondo01
        .row.mb-5.p-4.justify-content-center
          .col-lg-11
            ul.lista-ul
              li
                i.fas.fa-angle-right2
                | #[b Agroinsumos químicos (fertilizantes sintéticos):] son productos elaborados industrialmente para suministrar nutrientes o controlar plagas y enfermedades. Los principales tipos incluyen fertilizantes con macronutrientes primarios (Nitrógeno, Fósforo y Potasio), insecticidas y fungicidas. Se caracterizan por una alta concentración de nutrientes, una acción rápida y fácil dosificación.
  
      .titulo-sexto.color-secundario(data-aos='fade-right')
        h5 Tabla 5.
        span Ventajas y riesgos de agroinsumos químicos
      .tabla-a.color-acento-botones
        table.mb-4
          thead
            tr
              th.bg2 Ventajas
              th.bg2 Riesgos
          tbody
            tr.bg4
              td Resultados inmediatos
              td Contaminación del suelo y agua
            tr.bg5
              td Mayor control sobre la nutrición
              td Afectación a la salud humana
            tr.bg4
              td 
              td Dependencia del sistema productivo
    
      .fondo01(data-aos="zoom-in-left")
        .row.mb-5.p-4.justify-content-center
          .col-lg-11
            ul.lista-ul
              li
                i.fas.fa-angle-right2
                | #[b Agroinsumos biológicos (biofertilizantes):] son productos basados en microorganismos o sustancias naturales que favorecen el crecimiento y protección de las plantas. Los principales tipos incluyen biofertilizantes con bacterias fijadoras de nitrógeno, hongos benéficos como Trichoderma, y controladores biológicos. Se caracterizan por su interacción con procesos naturales, mejoran la absorción de nutrientes y controlan patógenos de forma natural.
  
  
      .titulo-sexto.color-secundario(data-aos='fade-right')
        h5 Tabla 6.
        span Características y ventajas de agroinsumos biológicos
      .tabla-a.color-acento-botones(data-aos="zoom-in-left")
        table.mb-4
          thead
            tr
              th.bg2 Características
              th.bg2 Ventajas
          tbody
            tr.bg4
              td Interacción con procesos naturales
              td Sostenibles
            tr.bg5
              td Mejoran la absorción de nutrientes
              td No contaminantes
            tr.bg4
              td Controlan patógenos de forma natural
              td Favorecen el equilibrio ecológico
    
    
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/mundo.svg")
            h3.bg1.py-2.w-card-text Mejores prácticas
      
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-12
          img(src="@/assets/curso/Tema1/img21.png")
      p.mb-5 El uso responsable y técnicamente fundamentado de agroinsumos es un pilar fundamental en agricultura urbana sostenible. No se trata solo de aplicar productos, sino de tomar decisiones informadas que equilibren la productividad con la protección del medio ambiente y la salud de quienes habitan en espacios urbanos. Las mejores prácticas en el manejo de agroinsumos comprenden tres aspectos críticos: la aplicación responsable que evita excesos innecesarios, el seguimiento riguroso de dosis técnicas recomendadas, y el compromiso permanente con la protección ambiental y la seguridad de la comunidad.
      
  
      .row.justify-content-center.mb-5(data-aos="zoom-in-left")
        .col-lg-9.position-relative
          .avatar
            figure
              img(src="@/assets/curso/Tema1/img22.png", alt="alt").img250
          
          .crd.crd--avatarHorizontal.crd--first.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/Tema1/img23.svg", alt="alt").img100
              .col
                h5 Uso responsable
                p Implica aplicar solo los productos necesarios, evitando el uso excesivo o innecesario. Para ello se debe diagnosticar antes de aplicar, evitar aplicaciones preventivas sin justificación y priorizar alternativas orgánicas o biológicas cuando sea posible.
          
          .crd.crd--avatarHorizontal.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/Tema1/img24.svg", alt="alt").img100
              .col
                h5 Aplicación según dosis recomendada
                p Cada agroinsumo debe aplicarse siguiendo las indicaciones técnicas del fabricante o recomendaciones agronómicas. De esta manera se evita toxicidad en las plantas, se reduce el desperdicio y se previene la contaminación del entorno.
          
          .crd.crd--avatarHorizontal.crd--last.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/Tema1/img25.svg", alt="alt").img100
              .col.text-white
                h5 Protección del medio ambiente
                p El manejo adecuado de agroinsumos minimiza impactos negativos. Por esto no se debe aplicar en exceso, se debe evitar vertimientos en fuentes de agua, disponer adecuadamente los envases y aplicar en horarios apropiados cuando las condiciones sean óptimas.
  
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/mundo.svg")
            h3.bg1.py-2.w-card-text Criterios de aplicación
  
      .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-5.mb-4.col-md-11
          img(src="@/assets/curso/Tema1/img26.png")
        .col-lg-7
          .row.justify-content-center
            .col-lg-2.col-4.mb-3.col-md-3
              img(src="@/assets/curso/Tema1/img27.svg")
            .col-lg-10
              p La efectividad de los agroinsumos no depende únicamente de su calidad o tipo, sino de decisiones técnicas precisas sobre cuándo, cómo y cuánto aplicarlos. En agricultura urbana, donde los recursos son limitados y los márgenes de error son estrechos, la aplicación basada en criterios técnicos es la diferencia entre un cultivo productivo y uno que fracasa. Tres factores fundamentales determinan el éxito: la naturaleza específica de cada especie vegetal, el momento exacto en el ciclo productivo del cultivo, y las condiciones climáticas del momento. Ignorar cualquiera de estos criterios compromete la inversión, reduce la productividad y aumenta el riesgo de contaminación ambiental.
  
      .row.mb-4(data-aos="zoom-in-left")
        .col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton.color-secu.p-4.w-100.h-100
            .row.justify-content-center.mb-3
              .col-4
                figure
                  img(src='@/assets/curso/Tema1/img28.svg', alt='Texto que describa la imagen')
            h4.text-center Tipo de cultivo
            p.text-small.mb-0 Cada especie vegetal tiene requerimientos específicos de nutrientes que varían según sus características fisiológicas y su ciclo productivo. Las hortalizas de hoja tienen una mayor necesidad de nitrógeno para favorecer el desarrollo foliar y la calidad del producto. En cambio, los cultivos de fruto demandan mayor concentración de fósforo y potasio para garantizar la formación, desarrollo y calidad de los frutos.

        .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in-left")
          .tarjeta--boton.color-secu.p-4.w-100.h-100
            .row.justify-content-center.mb-3
              .col-4
                figure
                  img(src='@/assets/curso/Tema1/img29.svg', alt='Texto que describa la imagen')
            h4.text-center Etapa de desarrollo
            p.text-small.mb-0 Las necesidades de agroinsumos cambian significativamente a lo largo del ciclo productivo del cultivo. Durante la germinación se requiere bajo uso de insumos, permitiendo que la semilla desarrolle su propio vigor. En la etapa de crecimiento hay una alta demanda de nutrientes para construir estructura vegetal y masa foliar. Durante la producción, la aplicación se enfoca en nutrientes específicos que sostienen la formación y calidad del producto final.

        .col-sm-6.col-lg-4.mb-4.mb-sm-0
          .tarjeta--boton.color-secu.p-4.w-100.h-100
            .row.justify-content-center.mb-3
              .col-4
                figure
                  img(src='@/assets/curso/Tema1/img30.svg', alt='Texto que describa la imagen')
            h4.text-center Condiciones climáticas
            p.text-small.mb-0 El clima influye significativamente en la efectividad de los  agroinsumos. Los factores clave a considerar son temperatura, humedad, lluvia y radiación solar. No se debe aplicar en horas de alta radiación solar, ya que el calor extremo reduce la efectividad del producto.  Tampoco se recomienda aplicar productos foliares antes de lluvias  fuertes, pues el agua puede lavar el agroquímico antes de su absorción por la planta.


      #t_1_4.titulo-segundo.mb-4(data-aos="zoom-in-left")
        h2 1.4 Fundamentos de la siembra
  
      .bloque-texto-g.bloque-texto-g--inverso.bg111.p-3.p-sm-4.p-md-5(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema1/img31.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La siembra es una de las actividades más importantes dentro del proceso agrícola, ya que marca el inicio del ciclo productivo de los cultivos. Consiste en la colocación de semillas o plántulas en un medio adecuado (suelo o sustrato), bajo condiciones controladas que permitan su germinación, establecimiento y desarrollo.
            br
            br
            | Una correcta siembra garantiza uniformidad en el cultivo, mejor aprovechamiento de los recursos y mayores probabilidades de éxito productivo. En agricultura urbana, este proceso requiere mayor precisión debido a las limitaciones de espacio y el uso de contenedores.
      
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/mundo.svg")
            h3.bg1.py-2.w-card-text Técnicas
      p Las técnicas de siembra varían según el tipo de cultivo, el espacio disponible y las condiciones del sistema productivo. En agricultura urbana existen dos métodos principales que se adaptan a diferentes necesidades y recursos.
  
      .fondo01(data-aos="zoom-in-left")
        .row.mb-5.p-4.justify-content-center
          .col-lg-11
            ul.lista-ul
              li
                i.fas.fa-angle-right2
                | #[b Siembra directa:] consiste en depositar la semilla directamente en el lugar definitivo donde se desarrollará la planta. No requiere trasplante posterior. Este método implica menor manipulación de la planta y reduce el estrés vegetal, lo que minimiza el riesgo de daño en las raíces. Se utiliza comúnmente en cultivos como cilantro, rábano y espinaca.
  
      .titulo-sexto.color-secundario(data-aos='fade-right')
        h5 Tabla 7.
        span Características, ventajas y desventajas de la siembra directa
      .tabla-a.color-acento-botones(data-aos="zoom-in-left")
        table.mb-4
          thead
            tr
              th.bg2 Características
              th.bg2 Ventajas
              th.bg2 Desventajas
          tbody
            tr.bg4
              td No requiere trasplante
              td Menor costo
              td Mayor consumo de semillas
            tr.bg5
              td Menor manipulación de la planta
              td Menor tiempo
              td Menor control inicial del cultivo
            tr.bg4
              td Reducción del estrés vegetal
              td Menor riesgo de daño en raíces
              td Mayor vulnerabilidad a factores ambientales
  
      .fondo01(data-aos="zoom-in-left")
        .row.mb-5.p-4.justify-content-center
          .col-lg-11
            ul.lista-ul
              li
                i.fas.fa-angle-right2
                | #[b Siembra en almácigos:] consiste en sembrar las semillas en un espacio reducido y controlado (bandejas, cajas o recipientes), para luego trasplantarlas al sitio definitivo. Este método permite mayor control de las condiciones ambientales y facilita la selección de las mejores plántulas antes del trasplante. Es especialmente útil en cultivos como tomate, lechuga y pimentón.
  
      .titulo-sexto.color-secundario(data-aos='fade-right')
        h5 Tabla 8.
        span Características, ventajas y desventajas de la siembra en almácigos
      .tabla-a.color-acento-botones(data-aos="zoom-in-left").mb-4
        table.mb-4
          thead
            tr
              th.bg2 Características
              th.bg2 Ventajas
              th.bg2 Desventajas
          tbody
            tr.bg4
              td Mayor control de condiciones
              td Ahorro de semillas
              td Requiere trasplante
            tr.bg5
              td Permite seleccionar mejores plántulas
              td Mejor porcentaje de germinación
              td Mayor manejo técnico requerido
            tr.bg4
              td Permite uniformidad inicial
              td Control sanitario mejorado
              td Mayor tiempo y mano de obra
  
      .row.justify-content-center.mb-3
        .col-lg-5.mb-4.col-md-10
          img(src="@/assets/curso/Tema1/img32.png")
        .col-lg-7
          .row.bg2.p-4.mb-3
            .col-lg-2.col-4.mb-3.col-md-3
              img(src="@/assets/curso/Tema1/img33.svg")
            .col-lg-10
              p La profundidad de siembra es el nivel al cual se ubica la semilla dentro del sustrato o suelo. Esta profundidad es crítica porque debe permitir que la semilla acceda a humedad, reciba oxígeno y logre una emergencia adecuada del epicótilo.
          p La regla general para determinar la profundidad de siembra es de 2 a 3 veces el tamaño de la semilla. Por ejemplo, una semilla de tomate muy pequeña requiere una profundidad de 5 a 10 milímetros, mientras que una semilla de frijol más grande requiere 3 a 4 centímetros.

      .cajon.color-secundario.p-4.mb-4
        h5 Errores comunes en la profundidad
        p si la semilla se coloca demasiado superficial, se presenta desecación o pérdida de la semilla por falta de contacto con humedad. Si se coloca demasiado profunda, dificulta la emergencia de la plántula porque agota las reservas energéticas de la semilla antes de alcanzar la superficie.
  
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/mundo.svg")
            h3.bg1.py-2.w-card-text Densidad y distancias
  
      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
        .col-lg-8
          p La densidad y las distancias de siembra determinan la distribución de las plantas en el espacio disponible y son factores determinantes en el éxito productivo.
          ul.lista-ul.bg7.p-4
            li
              i.fas.fa-angle-right2
              | #[b Densidad de siembra:] se refiere a la cantidad de plantas por unidad de área o volumen. Una densidad de siembra adecuada optimiza el uso del espacio, regula la competencia entre plantas por luz, agua y nutrientes, y permite un buen rendimiento productivo. Una densidad muy baja desperdicia espacio y recursos, mientras que una densidad muy alta genera competencia excesiva y reduce el tamaño y calidad de los productos.
          ul.lista-ul.bg6.p-4
            li
              i.fas.fa-angle-right2
              | #[b Distancia de siembra:] es el espacio que se deja entre plantas individuales y entre líneas o filas de siembra. Las distancias varían significativamente según la especie vegetal, su tamaño final y sus requerimientos de luz y nutrientes. La siguiente tabla presenta ejemplos de distancias recomendadas para cultivos comunes en agricultura urbana.
        .col-lg-4.col-7.col-md-5
          img(src="@/assets/curso/Tema1/img34.svg")
      .titulo-sexto.color-secundario(data-aos='fade-right')
        h5 Tabla 9.
        span Distancias de siembra recomendadas por cultivo
      .tabla-a.color-acento-botones(data-aos="zoom-in-left").mb-4
        table.mb-4
          thead
            tr
              th.bg2 Cultivo
              th.bg2 Distancia entre plantas
              th.bg2 Distancia entre filas
          tbody
            tr.bg4
              td Lechuga
              td 20 cm
              td 25 cm
            tr.bg5
              td Cilantro
              td 10 cm
              td 15 cm
            tr.bg4
              td Tomate
              td 40 cm
              td 60 cm
  
      #t_1_5.titulo-segundo.mb-4(data-aos="zoom-in-left")
        h2 1.5 Condiciones edafoclimáticas

      p Las condiciones edafoclimáticas son los factores relacionados con el suelo (edáficos) y el clima (climáticos) que influyen directamente en el desarrollo y éxito del cultivo. En agricultura urbana, donde los espacios son controlados pero limitados, la evaluación y manejo adecuado de estas condiciones es fundamental para lograr cultivos sanos y productivos.
  
      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
        .col-lg-9
          .tarjeta--container.row.mb-3
            .col-md.tarjeta.bg6.p-5
              .row.justify-content-center.mb-4
                .col-4
                  figure
                    img(src='@/assets/curso/Tema1/img35.svg', alt='Texto que describa la imagen')          
              h3.text-center Factores edáficos
              p Los factores edáficos son las características del suelo o sustrato que afectan el desarrollo de las plantas. Los principales incluyen la textura (proporción de arena, limo y arcilla), el pH (acidez o alcalinidad), y el contenido de materia orgánica. Una correcta evaluación de estos factores permite seleccionar o preparar sustratos adecuados para cada cultivo.
            
            .col-md.tarjeta.bg7.p-5
              .row.justify-content-center.mb-4
                .col-4
                  figure
                    img(src='@/assets/curso/Tema1/img36.svg', alt='Texto que describa la imagen')          
              h3.text-center Factores climáticos
              p Los factores climáticos son las condiciones atmosféricas que rodean la planta. Los principales incluyen temperatura (que afecta la velocidad de reacciones metabólicas), humedad relativa (que influye en la transpiración y absorción de nutrientes), y radiación solar (esencial para la fotosíntesis). En agricultura urbana, estos factores pueden ser parcialmente controlados mediante estructuras protegidas, sombreado o sistemas de riego.

      .titulo-sexto.color-secundario(data-aos='fade-right')
        h5 Tabla 10.
        span Factores edafoclimáticos, rangos óptimos y consecuencias
      .tabla-a.color-acento-botones(data-aos="zoom-in-left").mb-4
        table.mb-4
          thead
            tr
              th.bg2 Factor
              th.bg2 Tipo
              th.bg2 Rango óptimo
              th.bg2.w-50 Consecuencias si no se cumple
          tbody
            tr.bg4
              td Temperatura
              td Climático
              td 18-25°C
              td Germinación lenta, estrés vegetal, ralentización metabólica
            tr.bg5
              td pH del suelo
              td Edáfico
              td 6.0-7.0
              td Deficiencias nutricionales, toxicidad de elementos, absorción limitada de nutrientes
            tr.bg4
              td Humedad relativa
              td Climático
              td 60 - 80 %
              td Pudrición por exceso de humedad, desecación si es muy baja, estrés hídrico
            tr.bg5
              td Materia orgánica
              td Edáfico
              td 2-3%
              td Baja fertilidad, retención limitada de agua, deficiencia de nutrientes disponibles
            tr.bg4
              td Radiación solar
              td Climático
              td Mínimo 6 horas
              td Fotosíntesis insuficiente, plantas débiles, bajo rendimiento productivo


      .cajon.color-secundario.p-4.mb-4(data-aos="zoom-in-left")
        h5 Importancia para el cultivo
        p las condiciones edafoclimáticas determinan el éxito del cultivo y la productividad del sistema. Un manejo inadecuado de estos factores resulta en plantas débiles, enfermedades, bajo rendimiento y pérdidas económicas. En agricultura urbana, donde el control de estas variables es parcial pero posible, la evaluación diagnóstica antes de sembrar y el monitoreo continuo durante el ciclo productivo son prácticas fundamentales que garantizan cultivos sanos, productivos y sostenibles.

























  
  
  
  
  
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
