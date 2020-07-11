const express = require('express');
const next = require('next');
const compression = require('compression');

// Setup ENV variables
const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'prod' && process.env.NODE_ENV !== 'production';


// Run the application
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(async () => {

    const server = express();

    server.use(express.static(__dirname + '/static'));
    server.use(express.json());
    server.use(compression());

    // server.get('/profile', (req, res) => {
    //     const actualPage = '/profile';
    //     app.render(req, res, actualPage);
    // });

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.post('*', (req, res) => {
        return handle(req, res);
    });


    server.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`NextJS is ready on port ${PORT}!`);
    });

}).catch((error) => {
    console.error(error.stack);
});