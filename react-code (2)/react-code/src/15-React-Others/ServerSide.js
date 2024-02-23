// server.js (Node.js with Express)
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

// Your React application entry point
const App = require('./components/App'); 
const server = express();

server.get('/', (req, res) => {
  const appHtml = ReactDOMServer.renderToString(<App />);
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>SSR React App</title>
    </head>
    <body>
      <div id="root">${appHtml}</div>
    </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

