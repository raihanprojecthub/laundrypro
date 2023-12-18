const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize');
const ConfigDB = require('./database/ConfigDB');
const AuthenticationRouter = require('./routes/AuthenticationRouter');
const UserRouter = require('./routes/UserRouter');
const LaundryRouter = require('./routes/LaundryRouter');
const ReportRouter = require('./routes/ReportRouter');

const app = express();

(async () => {
  await ConfigDB.sync();
})();

const sessionStore = new SequelizeStore(session.Store);

const Store = new sessionStore({
  db: ConfigDB,
});

app.use(
  session({
    secret: 'IniPokoknyaRahasiaKita',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: 'auto',
      maxAge: 24 * 60 * 60 * 1000,
      // httpOnly: true,
    },
    store: Store,
  })
);

app.use(
  cors({
    credentials: true,
    origin: [
      'http://localhost:3000',
      'http://127.0.0.1:3000',
      'http://127.0.0.1:5173',
      'http://localhost:5173',
    ],
  })
);

//static file untuk image
app.use(express.static('assets'));

app.use(express.json());
app.use(AuthenticationRouter);
app.use(UserRouter);
app.use(LaundryRouter);
app.use(ReportRouter);

app.listen(process.env.APP_PORT, () => {
  console.log(`server running... ${process.env.APP_PORT}`);
});
