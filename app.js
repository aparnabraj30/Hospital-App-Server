const fs = require('fs');
const path = require('path');
const http = require('http');
const port = 3000;

const jsonFilePath = path.join(__dirname, 'hospitalData.json');

// Fun 2 read data from JSON file
const readData = () => {
  try {
    const data = fs.readFileSync(jsonFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Fun 2 write data to JSON file
const writeData = (data) => {
  fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2), 'utf8');
};

// Create initial dataset
const initialData = [
  { name: 'Lifeline Multi Speciality Hospital', patientCount: 215007, location: 'Pathanamthitta' },
  { name: 'Ananthapuri Hospital', patientCount: 258761, location: 'Trivandrum' },
  { name: 'Amrita Hospital', patientCount: 75872, location: 'Kochi' },
  { name: 'Baby Memorial Hospital', patientCount: 57854, location: 'Kozhikode' },
  { name: 'KIMS Healthcare Group', patientCount: 83291, location: 'Kollam' },
  { name: 'Lakeshore Hospital and Research Centre', patientCount: 54783, location: 'Kochi' },
  { name: 'Aster Medicity', patientCount: 375861, location: 'Kochi' },
  
];


writeData(initialData);

// CRUD 

// GET
const getAllHospitals = () => {
  return readData();
};

// POST
const addHospital = (newHospital) => {
  const data = readData();
  data.push(newHospital);
  writeData(data);
};

// PUT
const updateHospital = (hospitalName, updatedInfo) => {
  const data = readData();
  const index = data.findIndex((hospital) => hospital.name === hospitalName);

  if (index !== -1) {
    data[index] = { ...data[index], ...updatedInfo };
    writeData(data);
    return true;
  }

  return false;
};

// DELETE
const deleteHospital = (hospitalName) => {
  const data = readData();
  const updatedData = data.filter((hospital) => hospital.name !== hospitalName);

  if (data.length !== updatedData.length) {
    writeData(updatedData);
    return true;
  }

  return false;
};



console.log('Initial Hospitals:', getAllHospitals());

// Adding a new hospital
addHospital({ name: 'Muthoot Hospital', patientCount: 14620, location: 'Pathanamthitta' });

console.log('Hospitals after adding a new one:', getAllHospitals());

// Updating hospital information
updateHospital('Aster Medicity', { patientCount: 80954 });

console.log('Hospitals after updating information:', getAllHospitals());

// Deleting a hospital
deleteHospital('Amrita Hospital');

console.log('Hospitals after deleting one:', getAllHospitals());


fs.writeFileSync('portNumber.txt', `Server is running on port ${port}`);