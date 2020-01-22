# Mutants
Determine if a person is mutant from their DNA
_Determinar si una persona es mutante analizando su DNA_

## Comenzando 🚀

_A continuación se muestran las instrucciones permitirán ejecutar una copia del proyecto para propósitos de desarrollo y pruebas._

### Pre-requisitos 📋

_Se requieren los siguientes elementos para ejecutar el proyecto:_

* NodeJS 
* Git
* MongoDB


### Instalación 🔧

_A continuación se presentan los pasos para realizar la instalación del proyecto en una máquina local_

* Clonar Proyecto_

```
git clone https://github.com/yorsh21/mutants.git
```

* Instalar dependencias

```
npm install
```

* Copiar archivo de configuración **env.json.example** a **env.json**

* Llenar los datos del archivo **env.json** con los de la base de datos en MongoDB

* Abrir el servidor de express

```
npm start
```


## Ejecutando las pruebas ⚙️

_Para ejecutar las pruebas sobre la función *isMutant** se debe ejecutar:_

```
npm test
```


## Despliegue 📦

_El proyecto esta almacenado en **Google Cloud**, por lo que para hacer el despliegue se requiere la herramienta **Google Cloud SDK Shell*.*_

_Una vez instalado se debe configurar gcloud para el proyecto:_

```
gcloud config set project PROJECT_ID
```

_Una vez configuardo el proyecto, para hacer el despliegue se debe ejecutar:_

```
gcloud app deploy
```

_Para más información visite la [documentación de google](https://cloud-dot-google-developers.appspot.com/nodejs/getting-started/) para proyectos construidos con Node.js_


## Autor

**Jorge Villagrán** - *Trabajo Inicial* - [villanuevand](https://github.com/yorsh21)
