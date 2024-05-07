const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(cors());

// Proxy rpc cosmos
app.get('/rpc-cosmos', async (req, res) => {
  try {
    const response = await axios.get('https://rpc-cosmos.kewrnode.com');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Proxy rpc osmo
app.get('/rpc-osmo', async (req, res) => {
  try {
    const response = await axios.get('https://rpc-osmo.kewrnode.com');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
