# Assessment 1 - Make it Real - Solution by Aldhair Vera

## Project

![img](https://s3.amazonaws.com/makeitreal/images/classroom-prod/17586fea7030fb20d449b5561d9dbec9.gif)

## Questions
1. ¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?
- La ceremonía más importante de un Sprint es el daily, puesto que con ello se limpian posibles obstáculos y se ve el avance o retraso de las funcionalidades.
- Ceremonias:
  - Planeación: Marca el inicio de un sprint, es donde se revisan los entregables y se identifican las tareas a completar para cumplir con los entregables.
  - Daily: Reunión diaria, muy corta, para ver los avances y dificultades existentes por tarea.
  - Sprint Review: Al final del sprint, se inspecciona el incremento que se realizó.
  - Retrospectiva: Reunión interna del equipo, normalmente luego de Sprint Review, donde se identifican posibles cambios estratégicos para el siguiente sprint.

2. ¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.
- Los wireframes son representaciones a bajo nivel y sin usar fuentes, estilos o imágenes, de una página.
Sirven para dar una idea de los lugares que ocupan algunos componentes.
- Herramientas para hacer wireframes:
  - [Figma](https://www.figma.com)
  - [Mockflow](https://wireframepro.mockflow.com)
  - [Balsamiq](https://balsamiq.com)

3. Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará.
- A diferencia de var o let, const no puede cambiar su valor inicial.
- var puede cambiar su valor, y su scope es local
- let puede cambiar su valor, y vive en el bloque donde fue declarada.

4. ¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada rama-1?
- git checkout -b rama-1 (para crear la rama y cambiar a esta)
- git branch rama-1 (para crear la rama, pero no cambiar a esta)

5. Explicar la diferencia entre git merge y git rebase.
- Con git rebase, se reescribe la historia de la rama principal, integrando los commits de la rama secundaria en la rama principal
- Con git merge, mantienes a salvo la historia de la rama secundaria, puesto que crea un nuevo commit que une ambas ramas sin eliminarlas de la historia.

6. ¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?
- Un Pull Request sirve para comunicar que se ha hecho un cambio y que pase por revisión, previo a la unión de una rama con otra.
- Un git pull es un comando para descargar información del repositorio, usando como base la rama que pasamos luego de la dirección que guardamos del repositorio (git pull origin develop).

7. ¿Qué es el Virtual DOM?
- El virtual DOM es una representación del DOM guardada en memoria, que actua de intermediario entre los estados de la aplicación y los estados del DOM.
- Cuando ocurre un cambio en la aplicación web, el virtual DOM interpreta los cambios y calcula la manera más eficiente de actualizar el DOM para que renderice la menor cantidad de cambios posible.

8. [Use Flex to modify html code](https://codepen.io/burningal15/pen/RwLQQgV)