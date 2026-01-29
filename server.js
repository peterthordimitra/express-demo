const express = require('express');
const path = require('path');


const app = express();
const PORT = 3000;


// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


// API route
app.get('/api/message', (req, res) => {
res.json({
message: 'Hello from the Express API!'
});
});


// Error handler
app.use((err, req, res, next) => {
console.error(err.stack);
res.status(500).json({ error: 'Server error' });
});


app.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}`);
});