# Mapi - Node.js Express API 🚀

**Mapi** es una API RESTful desarrollada como parte del aprendizaje en el ecosistema de **Node.js**. El proyecto aplica estándares de la industria para la creación de servidores escalables, organización de rutas y generación de datos sintéticos para pruebas.

---

## 🛠️ Stack Tecnológico

* **Runtime:** [Node.js](https://nodejs.org/)
* **Framework:** [Express.js](https://expressjs.com/)
* **Gestión de Dependencias:** npm
* **Datos de Prueba:** [Faker.js](https://www.npmjs.com/package/faker) (v5.5.3)
* **Calidad de Código:** ESLint & EditorConfig

---

## 🏗️ Configuración del Entorno

### Inicialización Profesional
El proyecto sigue un flujo de trabajo estándar:
1.  **Estructura:** Creación de carpeta raíz `Mapi`.
2.  **Package Control:** Generación de `package.json` mediante `npm init`.
3.  **Control de Versiones:** Inicialización con `git init` y uso de `.gitignore` (vía gitignore.io) para excluir `node_modules`.

### Estándares de Codificación
Para mantener la limpieza del código, se integraron:
* **EditorConfig:** Configuración universal de editores (identación, saltos de línea).
* **ESLint:** Reglas de validación para JavaScript moderno (ES6+).
    ```json
    { 
      "parserOptions": { "ecmaVersion": 2018 },
      "extends": [ "eslint:recommended", "prettier" ],
      "env": { "es6": true, "node": true, "jest": true },
      "rules": { "no-console": "warn" } 
    }
    ```

---

## 🛣️ Arquitectura de Rutas y Endpoints



### Versionamiento de API
Se implementó un sistema de rutas versionadas para permitir la evolución del software sin afectar a clientes antiguos:
* **Prefijo Base:** `/api/v1`

### Endpoints Implementados
| Método | Endpoint | Descripción | Parámetros |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/v1/products` | Lista todos los productos | N/A |
| **GET** | `/api/v1/products/:id` | Detalle de un producto único | `req.params.id` |
| **POST** | `/api/v1/products` | Crear nuevo recurso | `req.body` |
| **PATCH** | `/api/v1/products/:id` | Actualización parcial | `req.params`, `req.body` |
| **DELETE** | `/api/v1/products/:id` | Eliminar un recurso | `req.params.id` |

---

## 🧪 Generación de Datos (Faker)

Se utiliza la librería **Faker** para poblar la API con datos realistas (nombres de productos, precios, imágenes) de forma dinámica, facilitando el testeo de la interfaz y el rendimiento sin necesidad de una base de datos real en etapas tempranas.

```javascript
