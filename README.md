# Determinar los tamaños de bus según grupos

El problema plantea la necesidad de encontrar todos los posibles tamaños de un bus que puede llevar a todos los grupos de amigos de manera simultánea, sin que ninguno de los grupos se separe, y cumpliendo con la capacidad máxima del autobús.

Para resolver este problema, se propone una función AWS Lambda, que recibe como entrada un arreglo de números separados por comas que representan el tamaño de cada grupo de amigos y devuelve un arreglo con todos los posibles tamaños del bus que pueden transportar a todos los grupos de amigos, cumpliendo con las restricciones mencionadas.

- [Determinar los tamaños de bus según grupos](#determinar-los-tamaños-de-bus-según-grupos)
  - [1. Descripción general](#1-descripción-general)
  - [2. Arquitectura de la solución](#2-arquitectura-de-la-solución)
  - [3. Documentación de Postman](#3-documentación-de-postman)
  - [4. Endpoint y parámetros](#4-endpoint-y-parámetros)
  - [5. Explicación detallada de la función](#5-explicación-detallada-de-la-función)
  - [6. Como llegué a la solución](#6-como-llegué-a-la-solución)

---

## 1. Descripción general
La solución presentada en el archivo index.mjs se basa en un algoritmo que itera desde 1 hasta la suma total de personas en todos los grupos. En cada iteración, se verifica si la capacidad del bus es divisible por el número total de personas en todos los grupos. Si es así, se realiza una segunda iteración para comprobar si el bus puede llevar a todos los grupos cumpliendo con las restricciones mencionadas.

Si el bus puede llevar a todos los grupos, se agrega el tamaño del bus al arreglo de tamaños de bus posibles. Al final de la iteración, se devuelve el arreglo de tamaños de bus posibles.

La función AWS Lambda está diseñada para ser expuesta como una API REST mediante el servicio AWS API Gateway. El archivo `API_Gateway_swagger_export.json` describe la configuración necesaria para el servicio AWS API Gateway en AWS.

## 2. Arquitectura de la solución
![](Serverless_App_Architecture.png)

## 3. Documentación de Postman
La documentación de la API REST y un ejemplo de cómo usarla en Postman se pueden encontrar en el siguiente enlace:
[https://documenter.getpostman.com/view/26664800/2s93RTSYkF](https://documenter.getpostman.com/view/26664800/2s93RTSYkF)


## 4. Endpoint y parámetros
**Link base:**
```
https://6mr0zq9t2b.execute-api.us-east-1.amazonaws.com/prod/calculatebus
```

**Parámetros Query**

groups &rarr; un string con la lista de grupos separados por coma (",")

*Nota: No cuenta con autenticación*

---
## 5. Explicación detallada de la función



## 6. Como llegué a la solución