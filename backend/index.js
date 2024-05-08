const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json())

// Proxy rpc cosmos
app.all('/rpc-osmo', async (req, res) => {
  const body = req.body
  const method = req.method
  const response = await fetch('https://rpc-osmo.kewrnode.com', {
    method,
    body: Object.entries(body).length ? JSON.stringify(body) : undefined
  })

  if (response.ok) {
    const contentType = response.headers.get('content-type')
    if (contentType === 'text/html') {
      return await res.send(await response.text())
    }

    const json = await response.json()
    return await res.send(json)
  }

  return await res.send(response.json())
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
