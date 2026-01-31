# ECHO2

A simple web-based echo application built with Node.js and Express. This app echoes back any message you send to it with a timestamp.

## Features

- 🔊 Echo any text message back to you
- ⏱️ Timestamp for each echo response
- 🎨 Beautiful, responsive UI with gradient design
- 🚀 Easy to deploy on Replit

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone this repository:
```bash
git clone https://github.com/iriskokkoraki2-ai/ECHO2.git
cd ECHO2
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Usage

1. Type a message in the text area
2. Click the "Echo Message" button (or press Enter)
3. Your message will be echoed back with a timestamp

## API Endpoints

### POST /api/echo
Echo a message back to the client.

**Request Body:**
```json
{
  "message": "Your message here"
}
```

**Response:**
```json
{
  "echo": "Your message here",
  "timestamp": "2026-01-31T05:03:02.984Z"
}
```

### GET /api/health
Health check endpoint.

**Response:**
```json
{
  "status": "ok"
}
```

## Deployment on Replit

This app is pre-configured to run on Replit. Simply:

1. Import this repository to Replit
2. Click the "Run" button
3. Your app will be live!

## Technologies Used

- **Backend:** Node.js, Express
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Deployment:** Replit

## License

MIT