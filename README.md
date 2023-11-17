# Hospital Data API

A Node.js application for managing hospital data with CRUD operations. 
This API allows you to perform basic operations such as adding, retrieving, updating, and deleting hospital information.

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installing Dependencies](#installing-dependencies)
  - [Running the Application](#running-the-application)
- [Testing CRUD Operations with Postman](#testing-crud-operations-with-postman)
  - [Adding a New Hospital (POST)](#adding-a-new-hospital-post)
  - [Getting All Hospitals (GET)](#getting-all-hospitals-get)
  - [Getting a Specific Hospital (GET)](#getting-a-specific-hospital-get)
  - [Updating a Hospital (PUT)](#updating-a-hospital-put)
  - [Deleting a Hospital (DELETE)](#deleting-a-hospital-delete)
 
## Getting Started

Make sure to have Node.js and npm installed on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installing Dependencies

```
npm install

```

### Running the Application
To get the output in terminal, use:
```
node app.js

```

To get the output in postman, use:
```
node server.js

```
The application will be running at http://localhost:3000.

## Testing CRUD Operations with Postman
### Adding a New Hospital (POST)
+ Open Postman.

+ Set the request type to POST.

+ Enter the URL: http://localhost:3000/hospitals.

+ Switch to the "Body" tab.

+ Choose "raw" and select JSON (application/json).

+ Enter the hospital data in the body. For example:
```
{
  "name": "Hospital A",
  "patientCount": 500,
  "location": "Place"
}

```
+ Click "Send."

### Getting All Hospitals (GET)
+ Open Postman.
  
+ Set the request type to GET.
  
+ Enter the URL: `http://localhost:3000/hospitals`.
  
+ Click "Send."
  
### Getting a Specific Hospital (GET)
+ Set the request type to GET.
  
+ Enter the URL for a specific hospital (replace hospital_name with the actual hospital name): `http://localhost:3000/hospitals/hospital_name`.

+ Click "Send."

### Updating a Hospital (PUT)
+ Set the request type to PUT.

+ Enter the URL for updating a specific hospital (replace hospital_name with the actual hospital name): `http://localhost:3000/hospitals/hospital_name`.

+ Switch to the "Body" tab.

+ Choose "raw" and select JSON (application/json).

+ Enter the updated hospital data in the body. For example:

``` 
{
  "name": "New Hospital",
  "patientCount": 1000,
  "location": "New Place"
}

```
+ Click "Send."
  
### Deleting a Hospital (DELETE)
+ Set the request type to DELETE.
  
+ Enter the URL for deleting a specific hospital (replace hospital_name with the actual hospital name): `http://localhost:3000/hospitals/hospital_name`.

+ Click "Send."
