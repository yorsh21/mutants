# Mutants
Determine if a person is mutant from their DNA
_Determinar si una persona es mutante analizando su DNA_

## Comenzando

_A continuación se muestran las instrucciones permitirán ejecutar una copia del proyecto para propósitos de desarrollo y pruebas._

### Pre-requisitos

_Se requieren los siguientes elementos para ejecutar el proyecto:_

* NodeJS 
* Git
* MongoDB


### Instalación

_A continuación se presentan los pasos para realizar la instalación del proyecto en una máquina local_

* Clonar Proyecto

```
git clone https://github.com/yorsh21/mutants.git
```

* Instalar dependencias

```
npm install
```

* Copiar archivo de configuración **env.json.example** a **env.json**

* Llenar los datos del archivo **env.json** con los de la base de datos en MongoDB

* Iniciar el servidor de express

```
npm start
```

* La aplicación estará disponible en el puerto 8080 del localhost: http://localhost:8080/

## Rutas de la aplicación:

_GET_

* https://mutants-265422.appspot.com 
* https://mutants-265422.appspot.com/stats

_POST_

* https://mutants-265422.appspot.com/mutant

```
{
    "dna": ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
}
```

## Ejecutando las pruebas 

_Para ejecutar las pruebas sobre la función *isMutant** se debe ejecutar:_

```
npm test
```


## Despliegue 

_El proyecto esta almacenado en **Google Cloud**, por lo que para hacer el despliegue se requiere la herramienta **Google Cloud SDK Shell**._

_Una vez instalado se debe configurar gcloud para el proyecto:_

```
gcloud config set project PROJECT_ID
```

_Una vez configuardo el proyecto, para hacer el despliegue se debe ejecutar:_

```
gcloud app deploy
```

Para más información visite la [documentación de google](https://cloud-dot-google-developers.appspot.com/nodejs/getting-started/) para proyectos construidos con Node.js


## Autor

**Jorge Villagrán** - *Desarrollo e implementación Inicial* - [yorsh21](https://github.com/yorsh21)
