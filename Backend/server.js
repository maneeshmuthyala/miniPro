const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "movies"
});


// Fetch all users
app.get("/posters", (req, res) => {
    const sql = "SELECT * FROM posters";
    db.query(sql, (err, data) => {
        if (err) return res.status(500).json({ error: "Error fetching users" });
        return res.json(data);
    });
});

app.get("/users", (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, data) => {
        if (err) return res.status(500).json({ error: "Error fetching users" });
        return res.json(data);
    });
});

app.get("/about_movie/:id", (req, res) => {
    const movieId = req.params.id;
    const query = `
        SELECT posters.id, posters.img_url,posters.movie_name,posters.rating,posters.language,
               about.description, about.hero_img,about.hero_name,about.heroine_img,about.heroine_name,about.director_name,about.director_img,about.producer_name,about.producer_img
        FROM posters
        JOIN about ON about.id = posters.id
        WHERE about.id = ?
    `;

    db.query(query, [movieId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: "Movie not found" });
        res.json(results[0]); // Return single movie details
    });
});


app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query error' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        const user = results[0];

       
        if (password === user.password) {
            return res.status(200).json({ message: 'Login successful!' });
        } else {
            return res.status(401).json({ message: 'Invalid password' });
        }
    });
});



app.get("/trailer/:id", (req, res) => {
    const movieId = req.params.id;
    const query = `
        SELECT trailer.id,trailer.url
        FROM trailer
        JOIN posters ON trailer.id = posters.id
        WHERE posters.id = ?
    `;

    db.query(query, [movieId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: "Movie not found" });
        res.json(results[0]); // Return the trailer URL for the movie
    });
});

app.get("/search", (req, res) => {
    const query = req.query.q || ""; // User input
    const sql = "SELECT * FROM posters WHERE movie_name LIKE ?";

    db.query(sql, [`%${query}%`], (err, results) => {
        if (err) {
            console.error("Error fetching Movies:", err.message);
            res.status(500).send("Error retrieving Movies.");
        } else {
            res.json(results); // Sending movie_name and image_url
        }
    });
});

// Signup Route (With 3-Second Delay)
app.post('/signup', (req, res) => {
    const { email, password } = req.body;
  
    // Check if email exists
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
      if (err) return res.status(500).json({ message: 'Database error' });
  
      if (results.length > 0) {
        return res.status(400).json({ message: 'Email already exists' });
      }
  
      // Store user with plain text password (Not Secure)
      db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, password], (err, result) => {
        if (err) return res.status(500).json({ message: 'Database error' });
  
        // Generate JWT token
  
        // 3-Second Delay Before Response
        setTimeout(() => {
          res.status(201).json({ message: 'User signup successful!' });
        }, 3000); // 3000ms = 3 seconds
      });
    });
  });
  
// Start the server
app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});
