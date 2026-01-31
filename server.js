const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static('public'));

// Echo API endpoint
app.post('/api/echo', (req, res) => {
  const { message } = req.body;
  res.json({
    echo: message || '',
    timestamp: new Date().toISOString()
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Echo server is running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to use the application`);
});
