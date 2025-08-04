# 🌐 HTTP/1.1 vs HTTP/2 in Node.js

## Overview

This summary explains the core differences between HTTP/1.1 and HTTP/2, the purpose of related Node.js modules, and when to use each module in real-world applications. It also includes example code for implementing secure servers using HTTPS and HTTP/2 in Node.js.

---

## 🔍 What Are HTTP/1.1 and HTTP/2?

**HTTP/1.1** is the older, widely-used version of the HTTP protocol. It sends one request per TCP connection and handles them sequentially. This can lead to performance issues like blocking when a single request delays the rest.

**HTTP/2**, released in 2015, improves performance by supporting features like multiplexing (multiple requests at once over one connection), server push, header compression, and prioritization. These enhancements help reduce latency and improve page load speed.

---

## 📦 Purpose of Each Node.js Module

- **`http`**: Used to create basic HTTP/1.1 servers without encryption. Useful for testing and internal tools.
- **`https`**: Extends `http` with SSL/TLS support, allowing you to build secure servers over HTTP/1.1. Essential for any production application that handles sensitive data.
- **`http2`**: Enables HTTP/2 support in Node.js. This module allows you to build high-performance, secure web servers that benefit from modern HTTP/2 features.
- **`fs`**: Used to read SSL certificate and key files from the filesystem. This is required to set up HTTPS or HTTP/2 with encryption.

---

## ⚙️ Key Technical Differences

In HTTP/1.1, requests are handled one at a time in sequence. If one request is slow or blocked, all others must wait. HTTP/2 solves this by allowing multiple requests and responses to be sent simultaneously over the same connection. This is called multiplexing.

HTTP/2 also introduces prioritization. Developers can assign weight to specific resources so more important ones (like main text or header images) load first. It also supports server push, which allows the server to proactively send resources to the client before they are requested.

Finally, HTTP/2 uses a more advanced method of header compression called HPACK, which reduces packet size and speeds up communication.

---

## 🧠 When to Use Each Module

Use the `http` module for simple, local development when encryption is not necessary. It’s best for internal tools or prototypes.

Use the `https` module when you need to serve content securely over HTTP/1.1. It’s a must for production environments where user data is involved.

Use the `http2` module when performance is critical. It’s ideal for modern web applications that require faster load times, multiple concurrent requests, and optimized content delivery.

Use the `fs` module when reading certificate files needed for setting up secure HTTPS or HTTP/2 servers.

---

## 🛠️ Examples: 

HTTPS with HTTP/1.1

```js
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end("Hello from HTTPS using HTTP/1.1");
}).listen(443);

---

 HTTPS with HTTP/2

```js
const http2 = require('http2');
const fs = require('fs');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

http2.createSecureServer(options, (req, res) => {
  res.stream.respond({ ':status': 200 });
  res.stream.end('Hello from HTTP/2 with HTTPS');
}).listen(443);
