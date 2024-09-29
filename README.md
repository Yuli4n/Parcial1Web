# Proyecto Parcial - Aplicación React con Internacionalización

## Paso a paso para la ejecución

1. Clonar el repositorio a su máquina local utilizando el comando:

`git clone (https://github.com/Yuli4n/parcial-1-web.git)`

2. Instalar las dependencias del proyecto:

`npm install`

3. Para iniciar el proyecto en modo de desarrollo, ejecute:

`npm start`

4. El proyecto se abrirá en el navegador predeterminado en la dirección `http://localhost:3000`.

## Decisiones durante el desarrollo

Durante el proceso de desarrollo del parcial, debido a limitaciones de tiempo, el primer entregable no cumplió con todos los requerimientos y no reflejó un producto de alta calidad.

Sin embargo, en una fase posterior, con más tiempo disponible, pude trabajar con diferentes tutoriales, tanto del curso como de terceros, para mejorar y completar el proyecto.

Los tutoriales sirvieron de base para estructurar el MVP (Producto Mínimo Viable) de la aplicación, sobre el cual posteriormente implementé características más avanzadas, como la internacionalización usando `react-intl`.

En un principio intenté dividir el proyecto en 3 carpetas de componentes:

1. Home

2. Login

3. Ejercicio

Ya que estas fueron las mencionadas en el documento, y dividiendo `Home` en los componentes `Profile` y `Sports` siendo "Profile" el banner con la información del cliente y "Sports" la Grilla con las imágenes de los deportes.

Durante el parcial no alcancé a implementar:

* La imagen de fondo del login

* El ícono del botón de mostrar y esconder la contraseña

* El detalle de los ejercicios

* Ningún tipo de css

* El mock en Mockaroo

Pero para seguir con una internacionalización de calidad, me aseguré de completar fuera del tiempo de parcial los requerimientos dados en el documento.

Aquí noté que el detalle no debería ser una carpeta aparte sino un sub-componente de la carpeta `Home`.

Una vez implementado el MVP (Que se puede ver en el commit "Fin Preparativos para Parcial en casa"), decidí revisar el tutorial de internacionalización del curso. De aquí tomé la librería que se requiere para la internacionalización `react-intl`, pero la estructura de implementación la obtuve de tutoriales de terceros.

Para ello creé la carpeta "locales" dentro de "components" en donde definí los json que se requieren para generar las traducciones entre diferentes idiomas.

Luego, importé intl en el index.js junto a los locales que definí previamente y reestructuré el index para acomodarlo al uso de internacionalización. 

Además, creé un nuevo componente llamado `LanguageSwitcher` que no es más que un botón que está arriba a la derecha de todas las pantallas y permite cambiar fácilmente de idioma de la aplicación.

Añadí este en App.js y empecé a llenar mis locales `es.json` y `en.json` con las traducciones necesarias según el índice de cada texto estático que hay en la app.

## Componentes y ambiente de desarrollo utilizados

1. **React**: La base del proyecto, utilizada para construir toda la interfaz de usuario de manera modular.

2. **react-bootstrap**: Utilizado para el diseño responsivo y la creación de componentes estilizados como `Card`, `Button`, `Container`, entre otros.

3. **react-intl**: Implementado para la funcionalidad de internacionalización, permitiendo cambiar el idioma entre inglés y español.

4. **fetch API**: Utilizado para realizar solicitudes a la API externa y obtener los datos de los usuarios y detalles de los ejercicios.

5. **react-router-dom**: Implementado para manejar la navegación entre diferentes rutas como el Login y el Home de la aplicación.

6. **npm**: Utilizado para gestionar las dependencias del proyecto.

7. **Git**: Herramienta de control de versiones usada para administrar los cambios en el proyecto.

## Proceso de desarrollo

El proyecto comenzó con una implementación básica de una aplicación de login y un dashboard que muestra datos deportivos. Para mejorar el alcance y la funcionalidad del proyecto, seguí tutoriales adicionales que me ayudaron a incorporar nuevas características como el modal para ver el detalle de los ejercicios, la estructura de componentes para manejar datos de diferentes deportes, y la posibilidad de cambiar entre los idiomas inglés y español.

El enfoque principal fue lograr un producto funcional que cumpliera con los requisitos básicos, incluyendo la internacionalización, a pesar de las limitaciones de tiempo. Mi trabajo se centró en crear una solución simple pero eficaz para cada uno de los requisitos planteados.
