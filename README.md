# 🌍 BudgetTrip — AI-Powered Travel Guide & Trip Planner

Plan smarter. Explore more. Travel within your budget.

**BudgetTrip** is a web-based travel planning application designed to help users explore destinations, discover attractions, browse travel itineraries, and organize their travel experiences. The project includes user authentication, destination data, attraction information, and itinerary-related APIs.

🔗 **GitHub Repository:** [Vijayraj002/BudgetTrip](https://github.com/Vijayraj002/BudgetTrip)

---

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation and Setup](#-installation-and-setup)
- [Environment Configuration](#-environment-configuration)
- [Running the Application](#-running-the-application)
- [API Endpoints](#-api-endpoints)
- [Database Configuration](#-database-configuration)
- [Troubleshooting](#-troubleshooting)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)

## 🌟 About the Project

Planning a trip involves researching destinations, finding interesting attractions, organizing itineraries, and managing travel information. BudgetTrip aims to simplify this process through a centralized travel planning platform.

The application provides a web interface backed by a Node.js and Express server. MongoDB is used for destination-related data, while MySQL is used for user account operations in the supplied backend implementation.

The project is structured to support travel information management and can be extended with AI-powered recommendations and additional trip-planning capabilities.

## ✨ Features

### 🗺️ Destination Exploration
- Retrieve city and destination information.
- Filter cities by state.
- View destination details through dedicated pages.
- Retrieve attraction information associated with a city.

### 📅 Travel Itineraries
- Retrieve available itineraries.
- Access individual itineraries using their slugs.
- Organize travel information through itinerary-specific pages.

### 👤 User Authentication
- User registration with name, email, and password.
- Password hashing using bcrypt.
- Login using registered credentials.
- Session-based authentication.
- User profile updates.
- Logout functionality.

### 🏛️ Attraction Information
- Retrieve attractions for a particular city.
- Access individual attraction details.
- Display attraction information on dedicated pages.

### 🔌 Backend API
- REST-style endpoints for cities, itineraries, and attractions.
- JSON-based responses for data retrieval.
- Express middleware for handling incoming requests.

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime for the backend |
| Express.js | Server and API development |
| MongoDB | NoSQL database for travel-related data |
| Mongoose | MongoDB object modeling |
| MySQL | Relational database for user accounts |
| mysql2 | MySQL database connectivity |
| HTML, CSS, JavaScript | Web interface |
| bcryptjs | Password hashing |
| express-session | Session management |
| dotenv | Environment variable configuration |
| Axios | HTTP requests |
| OpenAI SDK | Available dependency for potential AI integration |
| Git & GitHub | Version control and source code hosting |

*Note: The presence of a dependency does not necessarily mean that every related feature is fully implemented.*

## 📂 Project Structure

```text
BudgetTrip/
│
├── config/
│   ├── db.js
│   └── mongo.js
│
├── controllers/
│
├── data/
│
├── models/
│   ├── city.js
│   ├── Itinerary.js
│   └── Attraction.js
│
├── public/
│   ├── index.html
│   ├── place.html
│   ├── itineary.html
│   └── attraction.html
│
├── routes/
│   └── cityRoutes.js
│
├── services/
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
├── seed-attractions.js
├── seed-city.js
├── seed-itineraries.js
├── netlify.toml
└── vercel.json
```

*This is an indicative structure. Some files may differ in your local copy, and the contents of folders such as `controllers`, `services`, and `data` depend on the repository's implementation.*

## ⚙️ Prerequisites

Before installing the project, ensure you have:

- [Node.js](https://nodejs.org/) installed.
- npm, which is included with Node.js.
- [Git](https://git-scm.com/downloads) installed.
- A MongoDB database, either local or hosted on MongoDB Atlas.
- A MySQL server and database configured for user authentication.

## 🚀 Installation and Setup

### Step 1: Clone the repository

Open a terminal and execute:

```bash
git clone https://github.com/Vijayraj002/BudgetTrip.git
```

### Step 2: Navigate to the project directory

```bash
cd BudgetTrip
```

### Step 3: Install dependencies

```bash
npm install
```

### Step 4: Configure environment variables

Create a `.env` file in the project's root directory, alongside `server.js`.

Add the required database connection settings and any other environment variables used by the application.

Refer to the [Environment Configuration](#-environment-configuration) section below.

### Step 5: Configure the databases

Ensure that MongoDB and MySQL are running and that the database credentials, database names, and required tables or collections are configured correctly.

### Step 6: Start the application

```bash
npm start
```

Alternatively, run:

```bash
node server.js
```

### Step 7: Open the application

Visit:

**http://localhost:3000**

The Express server serves the main page from the `public` directory.

## 🔐 Environment Configuration

The project uses `dotenv` to load environment variables from `.env`.

The following is an illustrative configuration template. **The variable names must match those referenced in your `config/mongo.js` and `config/db.js` files.**

```dotenv
# MongoDB
MONGO_URI=your_mongodb_connection_string

# MySQL
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=your_database_name

# OpenAI (only if required by the implemented features)
OPENAI_API_KEY=your_openai_api_key
```

Replace all example values with your actual configuration. Do not commit real passwords, API keys, or database credentials to GitHub.

If your project uses different variable names, update the template accordingly.

## 🔗 API Endpoints

The following endpoints are defined in the supplied `server.js` implementation.

### General Pages

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Serves the home page |
| GET | `/place/:slug` | Serves a destination page |
| GET | `/itinerary/:slug` | Serves an itinerary page |
| GET | `/attraction/:id` | Serves an attraction page |

### Cities

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/cities` | Retrieves cities |
| GET | `/api/cities?state=Maharashtra` | Filters cities by state |
| GET | `/api/place/:slug` | Retrieves a city by slug |

### Itineraries

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/itineraries` | Retrieves all itineraries |
| GET | `/api/itinerary/:slug` | Retrieves one itinerary by slug |

### Attractions

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/attractions` | Retrieves all attractions |
| GET | `/api/attractions/:citySlug` | Retrieves attractions for a city |
| GET | `/api/attraction/:id` | Retrieves an attraction by ID |

### User Authentication and Profile

| Method | Endpoint | Description |
|---|---|---|
| POST | `/signup` | Registers a user |
| POST | `/login` | Authenticates a user |
| GET | `/logout` | Ends the current session |
| GET | `/user` | Checks the current login session |
| PATCH | `/api/user/profile` | Updates the authenticated user's profile |

**Note:** The API tables document routes visible in `server.js`. Additional routes may be defined in the project's route and controller files.

## 🗄️ Database Configuration

BudgetTrip uses two database systems in the supplied backend implementation.

### MongoDB

MongoDB, accessed through Mongoose, stores travel-related records such as cities, itineraries, and attractions.

Ensure the MongoDB connection string is correctly configured before starting the application.

### MySQL

MySQL is used for account-related operations such as registration, login, and profile updates.

Ensure that the required database and `users` table exist and that the connection configuration matches your local environment.

## 🧰 Troubleshooting

### 1. `git is not recognized`

Install Git for Windows and reopen PowerShell or your VS Code terminal.

### 2. `Cannot find module`

Run the following command from the directory containing `package.json`:

```bash
npm install
```

Also confirm that the required source files exist.

### 3. MongoDB connection error

If you see an error such as:

```text
The `uri` parameter to `openUri()` must be a string, got "undefined".
```

Check that:
- The `.env` file exists in the project root.
- The MongoDB connection variable is correctly named.
- The connection string is populated.
- The MongoDB server or hosted database is accessible.

### 4. MySQL connection error

Check the MySQL service, credentials, database name, and required tables.

### 5. Port 3000 is already in use

Stop the process using port 3000 or configure the server to use another available port.

### 6. Missing page or data

Check that the required HTML files, model files, database collections, and seed data are present.

## 🔮 Future Enhancements

Potential improvements for the project include:

- AI-powered personalized travel recommendations.
- Budget-based trip planning and expense estimates.
- Interactive maps and route optimization.
- Weather information for travel destinations.
- More advanced search and filtering.
- Improved user dashboards and saved itineraries.
- Automated tests and API documentation.
- Stronger session security and production-ready error handling.
- Deployment with documented environment configuration.

These are proposed enhancements and should not be interpreted as features already implemented.

## 🤝 Contributing

Contributions and suggestions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test the changes locally.
5. Submit a pull request describing your improvements.

## 👨‍💻 Project Repository

Explore the source code and follow development here:

**[BudgetTrip on GitHub](https://github.com/Vijayraj002/BudgetTrip)**

---

*BudgetTrip — making travel planning more organized, accessible, and budget-conscious.*