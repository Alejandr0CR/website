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

## Metodologías de recolección de información

- El primer paso para resolver un problema es entender el contexto en el que se encuentra. Utiliza encuestas y entrevistas para recolectar información de los involucrados.

- Antes de dar el salto a la automatización mediante software, comprende los procesos actuales, identifica a los involucrados, analiza los problemas que enfrentan y determina por qué representan un obstáculo. Este mapeo de procesos, actores y problemas te proporcionará el contexto necesario para diseñar una solución efectiva.

- Utiliza encuestas con preguntas tanto abiertas como cerradas para obtener información general sobre el problema y asemejarlo a soluciones que ya hayas implementado. Esto te permitirá identificar patrones que llevarán el problema a tu área de experiencia.

- Realiza entrevistas semiestructuradas con usuarios clave con el propósito de profundizar en los problemas específicos que enfrentan. Toma notas y graba las conversaciones para no perder detalles importantes.

- **NO PIENSES EN SOFTWARE AÚN**. Primero, entiende el contexto y el problema. El desarrollo de software no es sólo cuestión de código, es sobre todo empatía y comprensión de la situación para entregar la solución más adecuada.

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



# Especificación de requerimientos

La fase de especificación de requerimientos es la base sobre la cuál se empezará a construir la solución.

Durante esta fase se identifica y traduce las necesidades en requerimientos para el sistema.

# Planeación del proyecto

La fase de planeación proyecta el trabajo a realizar, estableciendo el plan de trabajo y el cronograma de actividades.

Durante esta fase, establece los recursos necesarios, define los roles, asigna responsabilidades, crea un plan de trabajo que guíe el curso de acción y establece un cronograma de actividades que permita cumplir con las metas y objetivos del proyecto.

# Diseño del sistema

La fase de diseño del sistema establece la arquitectura y estructura del sistema.

Durante esta fase, determina los detalles técnicos del sistema para su posterior implementación.

# Implementación de la solución

La fase de implementación es la etapa en la que se construye el sistema.

Durante esta fase, crea el código fuente que implementa el diseño previamente pactado y realiza pruebas de calidad para garantizar que el sistema cumple con los requerimientos sin errores.

# Despliegue

La fase de despliegue es la etapa en la que se pone en producción el sistema. Se le llama ambiente de producción al entorno en el que el sistema estará disponible para los usuarios finales.

Durante esta fase, instala el sistema en el ambiente de producción y realiza pruebas de disponibilidad para garantizar que el sistema está funcionando correctamente.

# Mantenimiento

La fase de mantenimiento es la etapa en la que se le brinda soporte al sistema, acompañando a los usuarios en el uso del sistema y corrigiendo errores que puedan surgir.
