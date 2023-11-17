const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;
const JSON_FILE = 'hospitalData.json';

app.use(bodyParser.json());

// Read hospital data from the JSON file
const readData = () => {
  try {
    const data = fs.readFileSync(JSON_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Write hospital data to the JSON file
const writeData = (data) => {
  fs.writeFileSync(JSON_FILE, JSON.stringify(data, null, 2), 'utf8');
};

// Get all hospitals
app.get('/hospitals', (req, res) => {
  const hospitals = readData();
  res.json(hospitals);
});

// Get a specific hospital
app.get('/hospitals/:name', (req, res) => {
  const hospitals = readData();
  const hospital = hospitals.find((h) => h.name === req.params.name);

  if (!hospital) {
    res.status(404).json({ error: 'Hospital not found' });
  } else {
    res.json(hospital);
  }
});

// Add a new hospital
app.post('/hospitals', (req, res) => {
  const hospitals = readData();
  const newHospital = req.body;

  hospitals.push(newHospital);
  writeData(hospitals);

  res.json(newHospital);
});

// Update a hospital
app.put('/hospitals/:name', (req, res) => {
    const hospitals = readData();
    const updatedHospital = req.body;
    const index = hospitals.findIndex((h) => h.name === req.params.name);
  
    if (index === -1) {
      // Hospital not found, add it to the dataset
      hospitals.push(updatedHospital);
    } else {
      // Hospital found, update it
      hospitals[index] = updatedHospital;
    }
  
    writeData(hospitals);
    res.json(updatedHospital);
  });

// Delete a hospital
app.delete('/hospitals/:name', (req, res) => {
  const hospitals = readData();
  const index = hospitals.findIndex((h) => h.name === req.params.name);

  if (index === -1) {
    res.status(404).json({ error: 'Hospital not found' });
  } else {
    const deletedHospital = hospitals.splice(index, 1)[0];
    writeData(hospitals);
    res.json(deletedHospital);
  }
});

// Start the server
app.listen(PORT, function () {
    console.log('Server is running on http://localhost:' + PORT);
  });