const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Helper function to handle fetch requests
async function fetchHandler(url, req, res) {
  try {
    const response = await fetch(url, {
      method: req.method,
      body: Object.entries(req.body).length ? JSON.stringify(req.body) : undefined,
      headers: req.headers,
    });

    if (response.ok) {
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const json = await response.json();
        return res.status(response.status).json(json);
      } else {
        const text = await response.text();
        return res.status(response.status).send(text);
      }
    } else {
      const errorText = await response.text();
      return res.status(response.status).send(errorText);
    }
  } catch (error) {
    console.error('Error fetching:', error);
    return res.status(500).send('Internal server error');
  }
}

// Proxy rpc osmosis
app.all('/rpc-osmo', (req, res) => {
  fetchHandler('https://rpc-osmosis-ia.cosmosia.notional.ventures', req, res);
});

// Proxy rpc cosmos
app.all('/rpc-cosmos', (req, res) => {
  fetchHandler('https://rpc-cosmoshub-ia.cosmosia.notional.ventures/', req, res);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
