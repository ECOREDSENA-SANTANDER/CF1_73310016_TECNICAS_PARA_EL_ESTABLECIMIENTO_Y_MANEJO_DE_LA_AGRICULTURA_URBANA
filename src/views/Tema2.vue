<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Establecimiento del cultivo en contenedores

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        img(src="@/assets/curso/Tema2/img01.png")

    p El establecimiento del cultivo en contenedores representa una de las prácticas más utilizadas en la agricultura urbana, permitiendo la producción de alimentos en espacios reducidos y en condiciones controladas. Esta técnica facilita el aprovechamiento de áreas como terrazas, patios, balcones y azoteas, adaptando los sistemas productivos a entornos urbanos con limitaciones de suelo.
    separador
    #t_2_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 2.1 Siembra en agricultura urbana
    
    p La siembra en agricultura urbana se adapta a espacios reducidos utilizando recipientes como materas, cajas o botellas recicladas. El proceso requiere consideraciones especiales en técnicas, profundidad, densidad y distancias de siembra para garantizar cultivos exitosos en volúmenes limitados de sustrato.
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/mundo.svg")
            h3.bg1.py-2.w-card-text Técnicas
    
    .row.justify-content-center.align-items-stretch.mb-1(data-aos="zoom-in-left")
      .col-lg-3.col-6.mb-3.col-md-5
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
    .tabla-a.color-acento-botones.mb-4
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
          h3.px-2 Drenaje adecuado
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.mb-4
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
    .tabla-a.color-acento-botones.mb-4
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
          h3.px-2 Riego controlado

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
    .tabla-a.color-acento-botones.mb-4
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
    .row.justify-content-center.mb-4
      .col-lg-12
        img.w-100(
          src='@/assets/curso/Tema2/podcast.svg'
          alt='Texto que describa la imagen'
          data-aos="zoom-in-left"
        )
      .col-lg-12
        .tarjeta.clr--pink.p-4.rounded-0.h-100.bg14
          .tarjeta.bg-white.p-4
            TarjetaAudio.color-acento-contenido(
              texto="<i>Pódcast</i>: Para profundizar en las técnicas de siembra directa y almácigos"
              :audio="require('@/assets/curso/Tema2/podcast.svg')"
            )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.mt-3.mb-0
              em.color 

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/mundo.svg")
            h3.bg1.py-2.w-card-text Profundidad, densidad y distancia
        
    p En la agricultura urbana, estos factores deben ajustarse cuidadosamente debido al espacio limitado de los contenedores. Una mala planificación de profundidad, densidad y distancias resulta en plantas débiles, competencia excesiva por nutrientes y bajo rendimiento productivo.

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-4
      .row(titulo="Profundidad de siembra")
        .col-md-6.mb-2.mb-md-0
          p La profundidad depende del tipo de cultivo y del tamaño del contenedor disponible. Seguir la regla general de 2–3 veces el tamaño de la semilla es fundamental, especialmente en contenedores pequeños donde el espacio vertical es limitado. Evitar siembras muy profundas en contenedores pequeños garantiza que la plántula emerja correctamente sin agotar las reservas de la semilla.
        .col-md-6
          figure
            img(src='@/assets/curso/Tema2/img07.png', alt='Texto que describa la imagen')
         
      .row(titulo="Densidad de siembra")
        .col-md-6.mb-0.mb-md-0
          p Se refiere a la cantidad de plantas por contenedor. Esta decisión debe considerar el tamaño del recipiente, el tipo de cultivo y el sistema de siembra. Una densidad inadecuada genera competencia excesiva por nutrientes, luz y espacio, resultando en plantas débiles y bajo rendimiento.
          p Ejemplos de densidad según contenedor:
          ul.lista-ul
            li.d-flex.align-items-start
              i.fas.fa-angle-right2
              p.mb-0 Una matera pequeña: 1 planta de tomate (requiere espacio y nutrientes abundantes). 
            li.d-flex.align-items-start
              i.fas.fa-angle-right2
              p.mb-0 Una caja grande: varias plantas de lechuga (cultivo compacto que permite mayor densidad).
        .col-md-6
          figure
            img(src='@/assets/curso/Tema2/img08.png', alt='Texto que describa la imagen')
    
      .row(titulo="Distancia de siembra")
        .col-md-6.mb-0.mb-md-0
          p Es el espacio que se deja entre plantas dentro del contenedor. Esta distancia es importante para evitar competencia excesiva por nutrientes y para permitir buena circulación de aire entre las plantas. Una circulación adecuada de aire facilita el crecimiento, reduce el riesgo de enfermedades fúngicas y permite que cada planta acceda a luz solar suficiente. En contenedores pequeños, estas distancias deben ser más reducidas que en campo abierto, pero sin sacrificar el crecimiento de las plantas.
        .col-md-6
          figure
            img(src='@/assets/curso/Tema2/img09.png', alt='Texto que describa la imagen')
    separador
    #t_2_2.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 2.2 Línea de siembra

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .row
          .col-lg-2.col-4.mb-3.col-md-3
            img(src='@/assets/curso/Tema2/img11.svg', alt='Texto que describa la imagen')
          .col-lg-10
            p La línea de siembra es una técnica que consiste en la distribución organizada y planificada de las plantas dentro del espacio de cultivo, ya sea en suelo o en contenedores. Su correcta implementación permite optimizar el uso del área disponible, mejorar la exposición a la luz, facilitar las labores de manejo y aumentar la productividad del sistema agrícola.
        p En la agricultura urbana, donde los espacios son limitados, la línea de siembra adquiere mayor relevancia, ya que permite organizar de manera eficiente los cultivos en balcones, terrazas, camas elevadas o recipientes.

      .col-lg-5
        img(src='@/assets/curso/Tema2/img10.png', alt='Texto que describa la imagen')

    TabsC.color-primario.mb-3
      .py-3.py-md-4(titulo="Técnicas de trazado")
        .row
          .col-md-4.mb-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/Tema2/img12.png', alt='Texto que describa la imagen')
          .col-md-12.mb-4.mb-md-0.col-lg-8
            p El trazado de la línea de siembra es el proceso mediante el cual se define la ubicación exacta donde se establecerán las plantas. Existen varias técnicas que facilitan este proceso con precisión.
            ul.lista-ul
              li.d-flex.align-items-start
                i.fas.fa-angle-right2
                p.mb-0 #[b Uso de cuerdas o reglas:] consiste en utilizar elementos de medición para garantizar líneas rectas y uniformes. Esta técnica es simple pero efectiva para mantener orden en el cultivo.
              li.d-flex.align-items-start
                i.fas.fa-angle-right2
                p.mb-0 #[b Procedimiento paso a paso:] definir el área de siembra según el espacio disponible, colocar una cuerda tensa o regla sobre el sustrato como referencia, marcar la línea siguiendo la guía (se puede usar cal o marcador) y realizar la siembra sobre la marca establecida.
              li.d-flex.align-items-start
                i.fas.fa-angle-right2
                p.mb-0 #[b Ventajas de esta técnica:] esta técnica proporciona mayor precisión en la ubicación de plantas, garantiza uniformidad en la distribución espacial, y permite un mejor aprovechamiento del espacio disponible. Cultivos ordenados facilitan también el monitoreo de plagas, enfermedades y labores de cosecha.
              li.d-flex.align-items-start
                i.fas.fa-angle-right2
                p.mb-0 #[b Marcación previa:] se realiza antes de la siembra para delimitar puntos específicos donde se ubicarán las semillas o plántulas. Este método es especialmente útil en contenedores y espacios pequeños.
      .py-3.py-md-4(titulo="Técnicas de marcación")
        .row
          .col-md-4.mb-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/Tema2/img13.png', alt='Texto que describa la imagen')
          .col-lg-8.mb-4.mb-md-0
            p Las técnicas de marcación complementan el trazado de líneas y permiten delimitar con precisión los puntos específicos donde se ubicarán las semillas o plántulas. Este método es especialmente útil en contenedores y espacios pequeños donde cada centímetro cuenta. Una marcación previa evita errores durante la siembra y asegura que las plantas se establezcan en las ubicaciones exactas planeadas.
            ul.lista-ul
              li.d-flex.align-items-start
                i.fas.fa-angle-right2
                p.mb-0 #[b Uso de estacas o palillos:] se clavan en el sustrato para marcar el exacto donde irá cada semilla o plántula. Evita errores en la ubicación y es rápido de implementar.  
              li.d-flex.align-items-start
                i.fas.fa-angle-right2
                p.mb-0 #[b Marcadores de profundidad:] herramientas especiales que indican la profundidad correcta según el cultivo. Facilita el trabajo y reduce variabilidad. 
              li.d-flex.align-items-start
                i.fas.fa-angle-right2
                p.mb-0 #[b Moldes o plantillas:] dispositivos que permiten marcar múltiples puntos simultáneamente. Permite mantener distancias adecuadas y uniformes entre plantas.
      .py-3.py-md-4(titulo="Criterios de orientación")
        .row
          .col-md-4.mb-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/Tema2/img14.png', alt='Texto que describa la imagen')
          .col-lg-8.mb-4.mb-md-0
            p La orientación de la línea de siembra influye directamente en el crecimiento y desarrollo de las plantas. Dos factores son críticos: la dirección de la luz solar y la ventilación.
            h5 Dirección de la luz solar
            p La luz es uno de los factores más importantes para la fotosíntesis y el crecimiento vegetal. Una orientación adecuada de las líneas de siembra asegura que todas las plantas reciban luz suficiente durante el día.
            h5 Recomendaciones prácticas
            ul.lista-ul
              li.d-flex.align-items-start
                i.fas.fa-angle-right2
                p.mb-0 #[b Orientar las líneas de siembra en dirección norte-sur:] esta orientación permite una distribución más uniforme de la luz a lo largo del día. Las plantas reciben iluminación tanto por la mañana como por la tarde, mejorando el crecimiento y la producción.  
              li.d-flex.align-items-start
                i.fas.fa-angle-right2
                p.mb-0 #[b Evitar sombras entre plantas:] ubicar plantas más pequeñas en la parte frontal y cultivos más altos en la parte posterior. Esto reduce la competencia por luz y previene que unas plantas sombreen a otras.  
              li.d-flex.align-items-start
                i.fas.fa-angle-right2
                p.mb-0 #[b Ubicar cultivos más altos en la parte posterior:] cultivos como tomate o maíz requieren más espacio y deben estar donde no causen sombra a plantas vecinas. Esto favorece la producción total del sistema.
      
      .py-3.py-md-4(titulo="Ventilación")
        .row
          .col-md-4.mb-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/Tema2/img15.png', alt='Texto que describa la imagen')
          .col-lg-8.mb-4.mb-md-0
            p Una adecuada circulación de aire es fundamental para la salud del cultivo. Sin ventilación suficiente, se acumula humedad excesiva que favorece enfermedades fúngicas y debilita las plantas. Una adecuada ventilación:
            ul.lista-ul
              li.d-flex.align-items-start
                i.fas.fa-angle-right2
                p.mb-0 #[b Reduce la humedad excesiva:] una circulación de aire constante evita la acumulación de agua en las hojas y el sustrato, previniendo pudrición y enfermedades.
              li.d-flex.align-items-start
                i.fas.fa-angle-right2
                p.mb-0 #[b Disminuye la aparición de enfermedades:] el flujo de aire evita que se formen microclimas húmedos que favorecen hongos patógenos como mildiu y oídio.  
              li.d-flex.align-items-start
                i.fas.fa-angle-right2
                p.mb-0 #[b Fortalece las plantas:] el movimiento del aire estimula el engrosamiento del tallo y desarrollo de plantas más robustas y resistentes.
            h5 Recomendaciones para mejorar ventilación
            ul.lista-ul
              li.d-flex.align-items-start
                i.fas.fa-angle-right2
                p.mb-0 #[b Evitar espacios cerrados sin ventilación:] en balcones o terrazas, asegurar que el aire circule libremente alrededor de los cultivos.  
              li.d-flex.align-items-start
                i.fas.fa-angle-right2
                p.mb-0 #[b Mantener distancias adecuadas entre plantas:] no agrupar demasiado los recipientes o cultivos. Dejar espacio entre líneas facilita la circulación del aire.  
              li.d-flex.align-items-start
                i.fas.fa-angle-right2
                p.mb-0 #[b Ubicar los cultivos en lugares aireados:] preferentemente en espacios con brisa natural o donde el aire pueda fluir constantemente. Evitar rincones cerrados o espacios muy protegidos.
    separador
    #t_2_3.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 2.3 Relación suelo-clima-cultivo 
       
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-3
        img(src='@/assets/curso/Tema2/img16.png', alt='Texto que describa la imagen')
      .col-lg-7
        .row
          .col-lg-2.col-4.col-md-3.mb-3.d-none.d-lg-block
            img(src='@/assets/curso/Tema2/img17.svg', alt='Texto que describa la imagen')
          .col-lg-10
            p La relación suelo-clima-cultivo es uno de los principios fundamentales de la producción agrícola, ya que el desarrollo, crecimiento y productividad de las plantas dependen de la interacción dinámica entre estos tres factores. Comprender esta relación permite tomar decisiones técnicas acertadas para garantizar el establecimiento exitoso de los cultivos.
        p En términos generales, el suelo (o sustrato en agricultura urbana) proporciona soporte físico y nutrientes, el clima regula las condiciones ambientales, y el cultivo responde a estas condiciones según sus características biológicas y requerimientos específicos.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7.mb-3
        .titulo-icono
          img.icono(src="@/assets/curso/Tema1/icono.svg")
          h3.px-2 Aplicación en agricultura urbana
    p En la agricultura urbana, esta relación debe gestionarse de manera más precisa, ya que no se cuenta con condiciones naturales ideales y es necesario intervenir para optimizar el sistema productivo.
    
    TabsA.color-acento-botones(data-aos="zoom-in-left").mb-4
          .tarjeta.color-acento-botones--borde.p-4(titulo="Selección de especies adaptadas")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-12
                p Elegir cultivos adecuados al entorno urbano es fundamental. Se debe considerar la adaptación al clima local para aprovechar condiciones naturales ya existentes, la tolerancia a espacios reducidos buscando cultivos compactos que no requieran mucho volumen de sustrato, el ciclo corto de producción que permite obtener cosechas frecuentes durante el año, y la resistencia a plagas para reducir la necesidad de agroquímicos. Una selección acertada desde el inicio garantiza cultivos vigorosos con menores costos de manejo.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Uso de sustratos adecuados")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-12
                p En agricultura urbana, el suelo es reemplazado por sustratos que deben cumplir funciones específicas. El sustrato debe proporcionar soporte físico a la planta permitiendo que las raíces se desarrollen adecuadamente, retener humedad en cantidades adecuadas sin llegar al encharcamiento, permitir aireación radicular asegurando que las raíces respiren, y suministrar disponibilidad de nutrientes conteniendo o facilitando acceso a macro y micronutrientes esenciales. Un sustrato inadecuado compromete todo el sistema, resultando en plantas débiles, enfermedades y bajo rendimiento.


          .tarjeta.color-acento-botones--borde.p-4(titulo="Manejo de microclimas")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-12
                p Los microclimas son condiciones ambientales específicas que se generan en espacios reducidos y pueden modificarse mediante prácticas de manejo. En agricultura urbana, su control es fundamental para optimizar crecimiento, mejorar productividad y reducir riesgos sanitarios. Tres aspectos clave del manejo de microclimas son la regulación de luz mediante sombra, el manejo preciso del riego, y el aseguramiento de ventilación adecuada. Cada uno de estos factores requiere estrategias específicas según la ubicación y características del cultivo.
    .fondo02
      .row.justify-content-center.p-5
        .col-lg-12
          .tarjeta.fondosly.p-4
            SlyderA(tipo="b")
              .row
                .col-md-12.mb-4.mb-md-0
                  h5 Control de sombra
                  p El control de sombra consiste en regular la radiación solar que reciben los cultivos, evitando tanto el exceso como la deficiencia de luz. Ambas situaciones son perjudiciales, pero de formas diferentes.
                .col-lg-6.mb-3
                  .tarjeta--boton2.p-4
                    h5 ❌ Problemas por exceso de luz
                    p El exceso de radiación solar causa estrés térmico por aumento excesivo de temperatura en hojas y tallos, deshidratación por pérdida rápida de agua por transpiración, y quemaduras en hojas por muerte de tejidos expuestos a radiación intensa. Estos problemas se presentan especialmente en zonas urbanas con reflexión de luz en superficies claras como concreto y vidrio.

                .col-lg-6.mb-3
                  .tarjeta--boton2.p-4
                    h5 ❌ Problemas por déficit de luz
                    p El déficit de luz causa crecimiento débil con etiolación donde las plantas se alargan y debilitan buscando luz, baja producción por fotosíntesis insuficiente, y desarrollo inadecuado sin estructura robusta. Estos problemas ocurren en espacios urbanos sombreados por edificios, árboles o estructuras permanentes.
                .col-lg-12.mb-3
                  .tarjeta--boton3.p-4
                    h5 ✓ Métodos de control de sombra
                    p Existen varias opciones para controlar la cantidad de luz que reciben los cultivos. Las mallas de sombreo reducen la radiación solar entre un 30 % y 80 % según su densidad y son ajustables y reutilizables, permitiendo control flexible según la estación y el cultivo. Los techos o cubiertas utilizan plásticos, polisombra o materiales reciclados para crear espacios semicontrolados que protegen de exceso de radiación mientras permiten ventilación. La ubicación estratégica consiste en colocar cultivos en zonas con sombra parcial natural como paredes o árboles grandes, siendo la opción más económica, pero menos flexible.
              
              .row
                .col-md-12.mb-4.mb-md-0
                  h5 Manejo del riego
                  p El riego es el suministro de agua necesario para el desarrollo de los cultivos, siendo uno de los factores más críticos en la agricultura urbana. El agua permite el transporte de nutrientes desde el sustrato hasta las raíces, el desarrollo celular necesario para crecimiento, y la regulación de la temperatura de la planta a través de transpiración. Sin riego adecuado, es imposible producir en espacios urbanos.
                .col-lg-6.mb-3
                  .tarjeta--boton2.p-4
                    h5 ❌ Problemas por exceso de agua
                    p El exceso de agua causa encharcamiento donde el sustrato queda saturado sin aire, pudrición de raíces por necrosis e hipoxia con ataque de patógenos, y aparición de hongos en ambiente húmedo que favorece enfermedades fúngicas. Estos problemas son especialmente graves en contenedores sin drenaje adecuado.
                .col-lg-6.mb-3
                  .tarjeta--boton2.p-4
                    h5 ❌ Problemas por déficit de agua
                    p El déficit de agua causa marchitez por pérdida de turgencia celular, disminución del crecimiento porque la fotosíntesis se ve limitada por cierre estomático, y bajo rendimiento debido a plantas débiles que producen poco. En contenedores pequeños con sustrato ligero, el déficit de agua es especialmente rápido.
                .col-lg-12.mb-3
                  .tarjeta--boton3.p-4
                    h5 ✓ Recomendaciones para riego adecuado
                    p Monitorear el sustrato regularmente insertando el dedo 2 centímetros para evaluar humedad. El riego debe ser diario en clima cálido y cada 2 a 3 días en clima templado. Regar preferentemente en horas tempranas de la mañana permite que la planta absorba agua antes del calor del día y reduce pérdidas por evaporación. Usar métodos eficientes como riego por goteo que minimiza pérdida de agua, regadera manual que permite control preciso, o pulverización para plántulas delicadas. evitar riego superficial que moja solo la superficie sin humedecer el sustrato completamente.
              
              .row
                .col-md-12.mb-4.mb-md-0
                  h5 Control de ventilación
                  p Una circulación de aire constante es fundamental para la salud del cultivo. Ubicar cultivos en zonas aireadas evitando espacios cerrados reduce humedad excesiva y disminuye enfermedades fúngicas. Una circulación de aire constante fortalece las plantas y previene problemas sanitarios.
                .col-lg-6.mb-3
                  .tarjeta--boton4.p-4
                    h5 Balcones
                    p Ubicar plantas donde circule el aire naturalmente, evitando rincones cerrados o entre paredes. Distribuir contenedores en forma abierta permitiendo paso de brisa. Si es posible, mantener espacios entre plantas para que el aire fluya libremente.
                .col-lg-6.mb-3
                  .tarjeta--boton4.p-4
                    h5 Terrazas
                    p Evitar acumulación excesiva de contenedores en un solo punto. Espaciar plantas dejando que el aire circule entre ellas. Preferentemente ubicar cultivos en zonas donde hay brisa constante y no hay obstáculos que bloqueen el movimiento del aire.
                .col-lg-12.mb-3
                  .tarjeta--boton3.p-4
                    h5 Invernaderos pequeños
                    p Incluir ventilación lateral mediante aberturas en paredes y ventilación superior con ventiladores o aberturas cenitales. monitorear humedad relativa regularmente con higrómetro, manteniendo niveles entre 60 y 80%. Ajustar aberturas según condiciones climáticas para mantener circulación constante sin crear corrientes secas excesivas.
             
                





















































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
