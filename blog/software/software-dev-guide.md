# Guía de supervivencia para desarrolladores de software

El desarrollo de software requiere un enfoque metodológico estructurado para garantizar calidad, funcionalidad y sostenibilidad.

Esta guía presenta un marco de trabajo para la creación de proyectos de software, estableciendo entregables clave y lineamientos para cada fase del ciclo de vida del desarrollo del producto.

# Ser profesional no es solo cuestión de título, sino de resultados.

Defino a una persona profesional como aquella que posee estas cuatro características:

1. Resultados consistentes: No basta con tener un buen desempeño ocasional. Un profesional se distingue porque entrega valor de manera continua, sin depender de la suerte o circunstancias ideales.

2. Calidad ajustada al propósito: No se trata de hacerlo todo perfecto, sino de generar resultados relevantes y útiles según los objetivos establecidos. La excelencia está en entender qué es lo que realmente importa.

3. Antifragilidad: Un verdadero profesional no se derrumba ante obstáculos menores. Puede operar dentro de sus condiciones mínimas y seguir adelante, adaptándose cuando las circunstancias cambian.

4. Aprendizaje continuo: La tecnología avanza a un ritmo vertiginoso. Un profesional se mantiene actualizado, aprendiendo constantemente y adaptándose a las nuevas tendencias y herramientas.

# Ciclo de vida del desarrollo de software

El desarrollo de software no es solo una cuestión de código, sino de visión, estrategia y evolución. Para garantizar el éxito de un proyecto de software, es necesario seguir un plan de trabajo que guíe el proceso de creación del producto.

A continuación se detallan las fases del ciclo de vida del desarrollo de software y los entregables clave de cada una de ellas.

# Análisis del problema

La fase de análisis es el punto de partida para todo proyecto de desarrollo de software.

Durante esta fase, comprende los procesos involucrados en el problema que deseas resolver, entiende cuál es el problema, entiende por qué es un problema y a quiénes afecta.

## Información compartida

- Crea un espacio compartido en Google Drive para almacenar y compartir la documentación del proyecto.

- La información del proyecto debe ser accesible para todos los miembros del equipo y los stakeholders involucrados en el proyecto. Teniendo una fuente compartida de información, se evitan malentendidos y se garantiza que todos estén al tanto de los avances y decisiones tomadas.

- Crea las siguientes carpetas para almacenar la documentación del proyecto:
    - **Información**: Para almacenar documentos, presentaciones, audios, vidios y otros materiales proporcionados por las personas externas al equipo.
    - **Reuniones**: Para almacenar las grabaciones de las reuniones.
    - **Requerimientos**: Para almacenar la documentación de los requerimientos del sistema.
    - **Diseño**: Para almacenar los diagramas y documentos de diseño del sistema.
    - **Manuales**: Para almacenar los manuales de usuario y otros documentos de soporte.

## Metodologías de recolección de información

- El primer paso para resolver un problema es entender el contexto en el que se encuentra. Utiliza encuestas y entrevistas para recolectar información de los involucrados.

- Antes de dar el salto a la automatización mediante software, comprende los procesos actuales, identifica a los involucrados, analiza los problemas que enfrentan y determina por qué representan un obstáculo. Este mapeo de procesos, actores y problemas te proporcionará el contexto necesario para diseñar una solución efectiva.

- Utiliza encuestas con preguntas tanto abiertas como cerradas para obtener información general sobre el problema y asemejarlo a soluciones que ya hayas implementado. Esto te permitirá identificar patrones que llevarán el problema a tu área de experiencia.

- Realiza entrevistas semiestructuradas con usuarios clave con el propósito de profundizar en los problemas específicos que enfrentan. Toma notas y graba las conversaciones para no perder detalles importantes.

- **NO PIENSES EN SOFTWARE AÚN**. Primero, entiende el contexto y el problema. El desarrollo de software no es sólo cuestión de código, es sobre todo empatía y comprensión de la situación para entregar la solución más adecuada.

## Entidades del Dominio

- El dominio es el área de conocimiento en la que se centra el sistema. Es decir, el conjunto de conceptos y reglas que rigen el funcionamiento del sistema.

- Las entidades del dominio son los elementos o conceptos clave que interactúan dentro del sistema.

- Crea un modelo del dominio usando un mapa mental para representar las entidades y sus interacciones. Este modelo servirá como base para el diseño del sistema.

- Las entidades del dominio se agrupan en módulos que representan áreas específicas del sistema. Cada módulo agrupa entidades que se relacionan para cumplir un propósito en común y define las reglas de negocio que rigen su interacción.

- **Ejemplo**: En un sistema de gestión bibliotecaria, un diagrama de mapa mental incluiría las entidades "Libro", "Usuario", "Préstamo" y "Devolución", conectadas con líneas que representen sus relaciones y dependencias. Los módulos serían "Inventario", "Usuarios" y "Préstamos".

## Reglas de Negocio

Las reglas de negocio se organizan en tres categorías fundamentales:

- **Restricciones:** Definen condiciones que deben cumplirse dentro del sistema. Son  reglas de inhabilitación para procedimientos.
  - **Ejemplo:** Un sistema bibliotecario establece que "Un usuario no puede tomar en préstamo más de cinco libros simultáneamente".
- **Políticas:** Son normas generales que guían la gestión y operación del sistema. Son reglas de habilitación para procedimientos.
  - **Ejemplo:** La biblioteca permite renovar un préstamo cuando el libro no tiene reservas activas por parte de otros usuarios.
- **Procedimientos:** Son las acciones detalladas para ejecutar una tarea específica.
  - **Ejemplo:** Para la devolución de libros, el sistema debe verificar la fecha límite, registrar la devolución y calcular posibles multas en caso de retraso.

## Lenguaje Ubícuo

- Crea un glosario compartido entre los miembros del equipo y las personas interesadas en la implementación del sistema para evitar ambigüedades.

- Para cada término, establece **una única** definición que debe ser utilizada de manera consistente en todas las conversaciones y documentación.

- Asegúrate de que todos los miembros del equipo estén familiarizados con el glosario, ya que los términos también deben estar presentes en los conceptos y el lenguaje utilizado durante la implementación del sistema.

### Stakeholders

- Los stakeholders son todas las personas o grupos que están interesados o involucrados de manera directa en el desarrollo del sistema. Pueden ser clientes, usuarios finales, administradores, desarrolladores, patrocinadores, etc.

## Contextos delimitados (Bounded Contexts)

- Cuando el sistema es grande y complejo, es útil dividirlo en contextos delimitados para facilitar su comprensión y desarrollo. Cada contexto delimitado representa un área específica del sistema y se enfoca en un conjunto de conceptos y reglas de negocio relacionados.

- Generalmente cuando una misma entidad tiene diferentes significados en distintos contextos, se recomienda dividir el sistema en contextos delimitados.

- **Ejemplo:** En un sistema de gestión de bibliotecas, un *libro* en el contexto de inventario puede ser un objeto tangible con características físicas, mientras que en el contexto de contabilidad puede ser un activo financiero con características enfocadas al valor monetario.

# Especificación de requerimientos

La fase de especificación de requerimientos es la base sobre la cuál se empezará a construir la solución.

Durante esta fase se identifica y traduce las necesidades en requerimientos para el sistema.

## Historias de Usuario

- Utiliza el formato de Historias de usuario para describir los requerimientos desde la perspectiva del usuario final. Esto facilita la comprensión y validación de los requerimientos.

- Valida cada requerimiento con los stakeholders al realizar las reuniones antes de la implementación. Nunca asumas que una funcionalidad o característica del sistema es obvia o innecesaria, o que todos entienden el requerimiento de la misma manera. Siempre es mejor confirmar antes de avanzar.

## Especificación de Casos de Uso

- Crea un diagrama de casos de uso por cada combinación de interacciones entre un actor (usuario) y un módulo definido en el mapa mental del dominio.

# Planeación del proyecto

La fase de planeación proyecta el trabajo a realizar, estableciendo el plan de trabajo y el cronograma de actividades.

Durante esta fase, establece los recursos necesarios, define los roles, asigna responsabilidades, crea un plan de trabajo que guíe el curso de acción y establece un cronograma de actividades que permita cumplir con las metas y objetivos del proyecto.

## Metodologías ágiles

- Considera lineamientos para metodologías como Scrum o Kanban en conjunto con el plan actual.

- Define la frecuencia de las iteraciones (Sprints en Scrum o ciclos en Kanban), los eventos de revisión y retrospectiva, y la forma de registrar y priorizar el trabajo.

- Ajusta las reuniones de coordinación a un calendario que permita hacer seguimiento continuo, promover la retroalimentación temprana y alinear al equipo con los objetivos generales del proyecto.

## Diagrama de Gantt

- Crea un diagrama de Gantt en Google Sheets que contemple el plazo de entrega del proyecto y los periodos de presentación de avances.

- Prioriza los requerimientos utilizando la metodología MoSCoW y asigna cada requerimiento al periodo de desarrollo correspondiente en el diagrama de Gantt. Ten en cuenta que alguans tareas pueden ser dependientes de otras y que el retraso en una puede afectar el desarrollo de otras.

- Estima tiempos con la técnica de evaluación y revisión de programas (PERT).

- Usa Google Calendar para programar reuniones y actividades del proyecto. Comparte el calendario con los miembros del equipo y los stakeholders para mantenerlos informados sobre los eventos y plazos importantes.

- Usa Google Tasks para asignar tareas a los miembros del equipo y hacer seguimiento de su progreso. Establece fechas límite y prioridades para cada tarea y mantén actualizado el estado de avance.

## Riesgos y contingencias

- Los proyectos de software pueden enfrentar riesgos que afecten su desarrollo y entrega. Los cambios de alcance, problemas técnicos y calamidades son algunos de los riesgos comunes a tener en cuenta.

# Diseño del sistema

La fase de diseño del sistema establece la arquitectura y estructura del sistema.

Durante esta fase, determina los detalles técnicos del sistema para su posterior implementación.

## Stack Tecnológico

- Define junto al equipo el stack tecnológico que usarán para la implementación del sistema.

- No sólo los lenguajes de programación y frameworks hacen parte del stack tecnológico. También considera entre otros:
    - Proveedor de dominio
    - Hosting y sistema operativo
    - Servidor web
    - Bases de datos
    - librerías y plugins
    - Repositorio de código
    - Herramienta de control de versiones

## Arquitectura del sistema

- Representa la infraestructura física del sistema y la arquitectura del software con un *Diagrama de Estructura Compuesta*.

- **Ejemplo**: Un diagrama de estructura compuesta mostraría la relación entre los módulos del sistema, como "Gestión de Usuarios", "Préstamos" y "Devoluciones", y cómo se comunican entre sí para cumplir con los requerimientos del sistema. También mostraría la disposición física del sistema, por ejemplo de los servidores.

## Diseño de Bases de Datos

- Si la base de datos es relacional, crea el modelo relacional de la base de datos mediante un diagrama.

- Aplica la normalización hasta la tercera forma normal para reducir redundancias y garantizar la integridad de los datos.

- Si la base de datos no es relacional, puedes usar un modelo de entidad-relación para representar las entidades y sus anidaciones.

- **Ejemplo**: La base de datos de un sistema de biblioteca incluiría tablas como "Usuarios", "Libros", "Préstamos" y "Devoluciones".

## Diseño de interfaces de programación de aplicaciones (API)

- Define los endpoints (URL) de la API y su funcionalidad según los lineamientos REST.

- Implementa estrategias de autenticación y autorización para garantizar seguridad en el acceso a los recursos.

- Documenta cada ruta usando Swagger y los lineamientos de Open API.

**Ejemplo**: En un sistema de gestión bibliotecaria, un endpoint como `GET /libros/{id}` debe retornar los detalles del libro solicitado, incluyendo su disponibilidad y ubicación en la biblioteca.

## Diseño de UI/UX

- El diseño de la interfaz y la experiencia de usuario debe priorizar la usabilidad, accesibilidad y eficiencia del sistema.

- Define una paleta de colores, tipografía y elementos gráficos consistentes para mantener una identidad visual coherente.

- Determina los tamaños de pantalla que el sistema debe soportar. Recuerda que el diseño debe partir desde el dispositivo más pequeño soportado y después adaptarse a pantallas más grandes.

- Crea prototipos llamados wireframes para definir la estructura visual de cada interfaz de usuario. Usa un diseño por columnas y bloques para organizar los elementos. Se suele usar como mínimo 4 columnas y como máximo 12.

- **Ejemplo**: En un sistema de gestión bibliotecaria, la interfaz debe permitir a los usuarios buscar libros por título o autor, visualizar disponibilidad y gestionar préstamos con un diseño intuitivo y accesible.

### Máquinas de Estados

- Crea un *Diagrama de Estados* para cada componente de la interfaz de usuario que contenga un estado interno. Este diagrama muestra los diferentes estados que puede tener un componente y las transiciones entre ellos.

## Diseño de algoritmos

- Por cada componente de software en el diagrama de componentes, crea un diagrama de clases que represente la estructura y relaciones entre las clases dentro de dicho componente.

- Describe los algoritmos para cada caso de uso del sistema. Puedes utilizar diagramas de flujo, pseudocódigo o texto estructurado para representar los algoritmos.

- Ten presente las librerías y tecnologías que utilizarás para implementar los algoritmos. Asegúrate de que las librerías dan solución efectiva a las necesidades y son compatibles con el stack tecnológico escogido.

## Diseño de pruebas de calidad

- Diseña pruebas para cada servicio de los módulos del software,  cada endpoint de las API, y cada componente de la interfaz de usuario.

- Para cada prueba identifica los posibles datos de entrada y salida, y los resultados esperados.

# Implementación de la solución

La fase de implementación es la etapa en la que se construye el sistema.

Durante esta fase, crea el código fuente que implementa el diseño previamente pactado y realiza pruebas de calidad para garantizar que el sistema cumple con los requerimientos sin errores.

## Control de Versiones

- Crea un repositorio Git para almacenar el código fuente del proyecto.

- Crea el archivo `.gitignore` para excluir archivos innecesarios en el repositorio.

- Determina la estrategia de control de versiones adecuada para el proyecto. Algunas opciones incluyen:
    - **Git Flow**: Ideal para desarrollo estructurado con ramas específicas para funcionalidades, correcciones y versiones estables.
    - **GitHub Flow**: Adecuado para despliegues continuos con integración frecuente a la rama principal.
    - **GitLab Flow**: Enfocado en la integración con CI/CD y gestión avanzada de entornos.
    - **Trunk-Based Development**: Permite desarrollo ágil con integración constante en una única rama principal.

- **Ejemplo**: Durante el desarrollo, crea una rama secundaria para implementar nuevas funciones. Una vez verificado su correcto funcionamiento, integra los cambios en la rama principal para mantener la estabilidad del proyecto.

## ¡Código!

- Como suelo decir, el momento de programar no es el momento de pensar. Si has llegado hasta aquí, es porque ya tienes claro qué hacer y cómo hacerlo. Ahora solo transforma en código lo que definiste en las fases previas. Esta etapa debe ser un proceso mecánico y, si surge algún imprevisto, es señal de que debes volver a la fase de diseño.

- Escribe docstrings en cada función y módulo para facilitar la documentación del código.

- Define los parámetros generales del sistema en archivos de configuración.

- Utiliza un archivo `.env` para gestionar variables de entorno del sistema. Incluye un archivo `.env.example` en el repositorio con los nombres de las variables de entorno, pero excluye el archivo `.env` agregándolo al `.gitignore` para evitar exponer información sensible.

- Una vez terminada la funcionalidad, ejecuta las pruebas planificadas para asegurar que el código cumple con los requisitos. Si se detecta un error, identifica la causa, corrige el módulo afectado y repite las pruebas hasta obtener resultados satisfactorios.

## Archivo README.md

- Documenta el proceso de instalación y configuración del sistema en un archivo llamado `readme.md` y ubícalo en la raíz del proyecto.

- Describe las dependencias y comandos necesarios para ejecutar el proyecto. (Por ejemplo, en un archivo package.json para proyectos Node.js).

# Despliegue

La fase de despliegue es la etapa en la que se pone en producción el sistema. Se le llama ambiente de producción al entorno en el que el sistema estará disponible para los usuarios finales.

Durante esta fase, instala el sistema en el ambiente de producción y realiza pruebas de disponibilidad para garantizar que el sistema está funcionando correctamente.

- Instala el proyecto con sus dependencias de producción en el hosting. Recuerda que el entorno de producción es diferente al de desarrollo, omite las dependencias de desarrollo.

- Define variables de entorno y asegúrate de que los archivos de configuración sean seguros y accesibles solo para el usuario propietario de los procesos del software dentro del sistema operativo.

- Instala los paquetes y servicios adicionales para el correcto funcionamiento del sistema.

- Enlaza el hosting y el dominio para que el sistema esté accesible en línea.

- Realiza pruebas de disponibilidad para evidenciar que el sistema funcione correctamente en el entorno productivo.

# Mantenimiento

La fase de mantenimiento es la etapa en la que se le brinda soporte al sistema, acompañando a los usuarios en el uso del sistema y corrigiendo errores que puedan surgir.

- Elabora un manual de usuario que describa las funcionalidades del sistema y cómo utilizarlas. Publica el manual en el espacio del proyecto en Gooogle Drive para que los usuarios puedan consultarlo en cualquier momento.
