🔐 Genhash

Genhash is a lightweight, browser-based SHA-256 file hashing tool built with pure HTML, CSS, and JavaScript.
It allows users to generate secure file hashes and compare them directly in the browser — no uploads, no servers, no dependencies.

✨ Features

🔒 Generate SHA-256 hash of any file

📋 Copy hash to clipboard

💾 Download hash as a .txt file

🔍 Compare two hashes instantly

🌙 Clean dark UI

⚡ 100% client-side (uses Web Crypto API)

📱 Responsive design (mobile friendly)

🖥️ Preview
Hash Generator

Select a file

Generate SHA-256 hash

Copy or download result

Hash Comparison

Paste two hashes

Instantly check if they match

🚀 How It Works

Genhash uses the browser's built-in Web Crypto API:

crypto.subtle.digest('SHA-256', buffer)


The file is converted into an ArrayBuffer, hashed using SHA-256, then transformed into a hexadecimal string for display.

Everything runs locally in your browser — your files are never uploaded anywhere.

📦 Installation / Usage
Option 1 — Direct Use

Download the HTML file.

Open it in your browser.

Start hashing files immediately.

Option 2 — Deploy on GitHub Pages

Create a new repository.

Upload the HTML file as index.html.

Enable GitHub Pages in repository settings.

Access your live hashing tool.

🛡️ Security

Uses SHA-256 cryptographic hashing.

Fully client-side processing.

No external libraries or network requests.

🧩 Tech Stack

HTML5

CSS3

Vanilla JavaScript

Web Crypto API

📱 Responsive Design

The layout adapts to smaller screens using media queries for improved mobile experience.

📄 License

This project is open-source.
You can use, modify, and distribute it freely.

👤 Author

Created with simplicity and security in mind.
