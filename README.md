# Real-time Chat Application

## Description
This repository contains a Real-time Chat Application built using React, Node.js, Socket.IO, MongoDB, Tailwind CSS, Zustand for state management, and Shards React UI library. The application enables users to chat in real-time with each other, storing messages in MongoDB and managing application state using Zustand.

### Features
- **Real-time Messaging:** Instant messaging between users using Socket.IO for real-time communication.
- **User Authentication:** Secure login and registration using JWT (JSON Web Tokens).
- **Message Storage:** Messages stored in MongoDB for persistence.
- **State Management:** Zustand used for managing application state.
- **Responsive Design:** Built with Tailwind CSS and Shards React UI for responsive and modern UI components.

## Technologies Used
- **Frontend:**
  - React.js
  - Zustand (State management)
  - Tailwind CSS
  - Shards React (UI library)
  
- **Backend:**
  - Node.js
  - Express.js
  - Socket.IO
  - MongoDB (with Mongoose ORM)
  
- **Other Technologies:**
  - JSON Web Tokens (JWT) for authentication
  - WebSocket (for real-time communication)
  
## Setup Instructions
To run this project locally, follow these steps:

### Prerequisites
- Node.js (version >= 12.x)
- npm (Node Package Manager) or yarn
- MongoDB installed and running locally or a remote database instance with credentials

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/gharamiananda/react-node-chat-app.git
   ```

   Navigate into the project directory:

bash
Copy code
cd chat-app
Navigate to the frontend directory:

bash
Copy code
cd frontend
Install frontend dependencies using npm or yarn:

bash
Copy code
npm install
# or
yarn install
Navigate back to the root directory:

bash
Copy code
cd ..
Navigate to the backend directory:

bash
Copy code
cd backend
Install backend dependencies using npm or yarn:

bash
Copy code
npm install
# or
yarn install
Database Setup
Create a .env file in the backend directory and configure MongoDB connection string:
env
Copy code
MONGODB_URI="mongodb://localhost:27017/chat_app"
Replace mongodb://localhost:27017/chat_app with your MongoDB connection string.
Running the Project
Start the backend server (from the backend directory):

bash
Copy code
npm start
# or
yarn start
Start the frontend development server (from the frontend directory):

bash
Copy code
npm start
# or
yarn start
Open your browser and navigate to http://localhost:3000 to view the Chat Application.

Customize and Extend
Authentication: Enhance authentication with additional features like password reset and email verification using JWT.
Enhance UI/UX: Customize UI further using Tailwind CSS and Shards React components.
Extend Functionality: Add features like multimedia messaging, group chats, or message search functionality.
Contributing
Feel free to fork this repository, make improvements, and submit pull requests. Contributions are welcome!


