#!/bin/bash

# Define the port number
PORT=8000

echo "Starting Python HTTP server on port $PORT..."

# Start the server in the background and capture its Process ID (PID)
python3 -m http.server "$PORT" &
SERVER_PID=$!

echo "Server started with PID $SERVER_PID"
echo "You can access the server in your browser at: http://localhost:$PORT"
echo "Press [ENTER] to stop the server..."

# Wait for user input
read -p ""

echo "Stopping server (PID $SERVER_PID)..."

# Kill the background process using its PID
kill "$SERVER_PID"

echo "Server stopped."

