# WealthHealth, Financial Company HR Application

This is a React Typescript project bootstrapped with [Vite](https://github.com/vitejs/vite).

## 1. STACK TECHNIQUE

The project is only front-end. For server-side mocking, json-server has been used.

### 1.1 Frameworks

<ul>
<li>Node 16.20.0</li>  
<li>React ^18.2.0</li>  
</ul>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>
<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="NodeJS" /></a>

### 1.2 Main Librairies

<ul>
<li>typescript</li>
<li>react-router-dom</li>
<li>redux/toolkit</li>
<li>react-hook-form</li>
<li>zod</li>
<li>styled-components</li>
<li>json-server</li>
</ul>

## 2 Installation guide

### 2.1 Node.js

The project uses Node packages and uses `pnpm`, so the installation of Node.js in your IDE is required

> [Install Node.js](https://nodejs.org/en/)

### 2.2 Clone repo

Once Node.js has been successfully added to your IDE, you'll need to:

<ol>
<li>Fork the Front-end repository</li>
<li>Clone it locally using <code>git clone</code></li>
</ol>

### 2.3 Dependencies

Afterwards you'll need to install all the project dependencies with `pnpm install`

#### react-datatable-ne
This library is not mandatory. It is our custom library whose purpose is to display data in a customizable table <br/>
If you want to test it, install it (if you have run `pnpm install`, then it is already installed) and then go to the tsx file named 'ViewEmployees.tsx' located here: <br/>

```
oc-wealthhealth/
|-...
|- src/
|   |- ...
|   |- features
|   |   |- ...
        |- ViewEmployees
|   |   |   |- ...
|   |   |   |- ViewEmployees.tsx
```

Comment this line: 
```js
import DisplayTable from '../utils/DisplayTable.tsx'
```

and uncomment the line below:
```
// import DisplayTable from 'react-datatable-ne'
```


## 3 Scripts

In the project directory, you can run:

### 3.1 `npm run dev`

Runs the app in the development mode.
It should launch automatically the web application in your default browser.
If not, you can copy paste this link :
[http://localhost:5173](http://localhost:5173) to view it in your browser.<br/>
*⚠ Replace 5173 with the corrected port used by vite *⚠

The page will reload when you make changes.You may also see any lint errors in the console.

### 3.2 `npm run build`

- A [build command](https://vitejs.dev/guide/build.html) that bundles your code with [Rollup](https://rollupjs.org), pre-configured to output highly optimized static assets for production.
  The built will be placed at dist. You can use the property build.outDir in your config file to change the directory.

### 3.3 `npm run preview`

Once the built is done, you can preview it locally running this script.
It should be served at [http://localhost:4173](http://localhost:4173).
But you can replace this port by passing the --port flag as an argument in your package json:

```js
{
  "scripts": {
    "preview": "vite preview --port 8080"
  }
}
```

## 4 API

### 4.1 Json-server

Once the library is installed, you can serve the API and Database running this command
`npx json-server -p 3500 -w app/data/db.json`
*⚠ If 3500 is already used, replace with another available port *⚠

### 4.2 Endpoints

#### Root

Firstly, if your API root endpoint is different than http://localhost:3500, go to the typescript file named 'apiSlice.ts' located here:

```
oc-wealthhealth/
|-...
|- src/
|   |- ...
|   |- features
|   |   |- ...
        |- api
|   |   |   |- ...
|   |   |   |- apiSlice.ts
```

And update the line below accordingly to the url of your backend.

```js
const BASE_URL = 'http://localhost:3500'
```

#### Routes

There are currently three routes → `employees`, `states` and `departments`
Here are below the responses if the request succeeded.

| HTTP Verb | Endpoints    | Body of the request                                                                                                                                                                                | Body of the response                                                                                                                                                                                                             | Description of the info received                 |
| --------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| GET       | /employees   |                                                                                                                                                                                                    | {"data": [{ "id": [string], "firstName": [string], "lastName": [string], "startDate": [string], "department": [string], "birthdate": [string], "street": [string], "city": [string], "state": [string], "zipcode": [string] }]}, | Retrieves the list of employees                  |
| POST      | /employees   | {"firstName": [string], "lastName": [string], "startDate": [string], "department": [string], "birthdate": [string], "street": [string], "city": [string], "state": [string], "zipcode": [string] } | {"data":{"isSuccess":[boolean], "isError":[boolean]}}                                                                                                                                                                            | Creates a user in the database                   |
| GET       | /states      |                                                                                                                                                                                                    | {"data":[{"name": [string],"abbreviation":[string]}]}                                                                                                                                                                            | Retrieves the list of states                     |
| GET       | /departments |                                                                                                                                                                                                    | {"data":[{"value": [string],"label":[string]}]}                                                                                                                                                                            | Retrieves the list of departments in the company |
