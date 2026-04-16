const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: 'student-college-secret',
    resave: false,
    saveUninitialized: true,
  })
);

const users = [];
const complaints = [];
const feedback = [];

function authRequired(req, res, next) {
  if (req.session.user) {
    return next();
  }
  res.redirect('/login');
}

app.get('/', (req, res) => {
  res.render('index', { user: req.session.user });
});

app.get('/login', (req, res) => {
  res.render('login', { error: null });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.render('login', { error: 'Invalid email or password.' });
  }

  req.session.user = { name: user.name, email: user.email };
  res.redirect('/dashboard');
});

app.get('/signup', (req, res) => {
  res.render('signup', { error: null });
});

app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  const existing = users.some((u) => u.email === email);

  if (existing) {
    return res.render('signup', { error: 'Email already registered.' });
  }

  users.push({ name, email, password });
  req.session.user = { name, email };
  res.redirect('/dashboard');
});

app.get('/dashboard', authRequired, (req, res) => {
  res.render('dashboard', {
    user: req.session.user,
    complaints,
    feedback,
  });
});

app.post('/complaint', authRequired, (req, res) => {
  const { subject, message } = req.body;
  complaints.push({ user: req.session.user.email, subject, message, date: new Date() });
  res.redirect('/dashboard');
});

app.post('/feedback', authRequired, (req, res) => {
  const { rating, comments } = req.body;
  feedback.push({ user: req.session.user.email, rating, comments, date: new Date() });
  res.redirect('/dashboard');
});

app.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
