const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Homepage route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Basic authentication logic (replace with your actual authentication logic)
    if (username === 'admin' && password === 'password') {
        // Successful login
        res.send('Login successful!');
    } else {
        // Failed login
        res.status(401).send('Invalid username or password');
    }
});

// Registration route
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    // Basic registration logic (replace with your actual registration logic)
    // Here, we're just echoing back the registration data
    res.send(`Registered: Username - ${username}, Email - ${email}, Password - ${password}`);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
