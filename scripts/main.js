// Base API URL (targeting localhost:4000)
const apiBaseUrl = 'http://localhost:4000';

// Function to handle POST requests
async function postData(data) {
  console.log('data', data);
  try {
    const response = await fetch(apiBaseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // Send the data in the body
    });
    const result = await response.json();
    console.log('POST result:', result);
    return result;
  } catch (error) {
    console.error('Error during POST request:', error);
  }
}

// Function to handle GET requests
async function getData() {
  try {
    const response = await fetch(apiBaseUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    console.log('GET result:', result);
    return result;
  } catch (error) {
    console.error('Error during GET request:', error);
  }
}

// Function to handle PATCH requests
async function patchData(id, data) {
  try {
    const response = await fetch(`${apiBaseUrl}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // Send the data in the body
    });
    const result = await response.json();
    console.log('PATCH result:', result);
    return result;
  } catch (error) {
    console.error('Error during PATCH request:', error);
  }
}

// Function to handle DELETE requests
async function deleteData(id) {
  try {
    const response = await fetch(`${apiBaseUrl}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      console.log('DELETE successful');
    } else {
      console.error('DELETE failed');
    }
  } catch (error) {
    console.error('Error during DELETE request:', error);
  }
}

// Handle POST request from user input
function handlePost() {
  const name = document.getElementById('post-name').value; // this gets the data from the inputs based on id
  const age = document.getElementById('post-age').value;
  if (name && age) {
    postData({ name, age: Number(age) });
  } else {
    alert('Please fill out both name and age.');
  }
}

// Handle GET request
function handleGet() {
  console.log('Fetching data...');
  getData();
}

// Handle PATCH request from user input
function handlePatch() {
  const id = document.getElementById('patch-id').value;
  const age = document.getElementById('patch-age').value;
  if (id && age) {
    patchData(Number(id), { age: Number(age) });
  } else {
    alert('Please provide both ID and new age.');
  }
}

// Handle DELETE request from user input
function handleDelete() {
  const id = document.getElementById('delete-id').value;
  if (id) {
    deleteData(Number(id));
  } else {
    alert('Please provide an ID.');
  }
}
