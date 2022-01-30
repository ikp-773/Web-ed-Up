const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./routes/task_routes');


const app = express();

app.engine('hbs', exphbs.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');

app.use('/', routes);


app.listen(6969, () => console.log('server started'));