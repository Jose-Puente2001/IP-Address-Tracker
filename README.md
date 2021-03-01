<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://gatsby-persoanl.netlify.app/">
    <img alt="" src="" width="60" />
  </a>
</p>
<h1 align="center">
  IP Address Tracker
</h1>

   Una aplicación de seguimiento de direcciones IP a través de un mapa de geolocalización.
   
  
![Gif de como funciona el Proyecto](https://github.com/Jose-Puente2001/imagenes-de-proyectos/blob/main/vista-ejecucion.gif)
  
  
## 🚀 Pasos para clonar y correr la aplicación en una máquina local 

1.  **Clonar la aplicación.**

 

    ```
    git clone https://github.com/Jose-Puente2001/IP-Address-Tracker.git
    ```

2.  **Correr  la aplicación**

  Para ejecutar la aplicación ejecute:
  
        
    npm install
   
    
  seguido del comando:
  
        
    npm start
   
   
   
   
   O si desea  correr la aplicación en modo desarrollo ejecute:
	
   
    npm run dev
    
	
Esto comando hará que evitamos estar reiniciando el serividor después de cada cambio, esto es gracias al módulo instalado llamado nodemon https://www.npmjs.com/package/nodemon


1.  Al ejecutar cualquiera de estos dos comandos se abrira la aplicación 

     `http://localhost:3000`

   


## 🧐 Estructura del proyecto

La estructura que encontrarás en el proyecto
    
    ├── node_modules
    ├── public
    ├── .gitignore
    ├── README.md
    ├── index.js
    ├── package-lock.json
    ├── package.json
    

1.  **`node_modules`**: Este directorio contiene todos los módulos de código de los que depende su proyecto (paquetes npm) que se instalan automáticamente.

2.  **`public`**:Este directorio contiene todo el código relacionado con los archivos estaticos del proyecto los archivos del frontend de la aplicacion, en el encontrarás  subdirectorio como lo sera la carpeta images, la carpeta src que contiene todos los script del proyecto, la carpeta style que contiene la carpeta sass que tiene el archivo sass encargado de dar estilos al proyecto y la carpeta css con su arhivo css que es el resultado de la compilación del archivo sass y por último el index.html de la aplicación. 

3.  **`.gitignore`**: Este archivo le dice a git qué archivos no debe rastrear / no mantener un historial de versiones.

4. **`README.md`**: Un archivo de texto que contiene información de referencia útil sobre su proyecto.


4.  **`index.js`**: Este archivo se encargar de ejecutar el servidor de express que a su ve tiene como funciòn servir los archivos estaticos del proyecto.


5. **`package-lock.json`**: Este es un archivo generado automáticamente basado en las versiones exactas de sus dependencias npm que se instalaron para el proyecto.

6. **`package.json`**: Un archivo de manifiesto para proyectos de Node.js, que incluye cosas como metadatos (nombre del proyecto, autor, etc.). Este manifiesto es cómo npm sabe qué paquetes instalar para su proyecto.





## 🛠 Librería y Api usada en el proyecto

(LeafletJS) para la creación del mapa https://leafletjs.com/
  
(IPWHOIS) para obtener las direcciones IP https://ipwhois.io/


## 💫 Despligue

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/gatsbyjs/gatsby-starter-default)

