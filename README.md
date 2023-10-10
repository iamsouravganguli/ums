## User Management System (UMS)

### List of API Endpoints

1. **Sign In**: Allows users to authenticate and access their accounts.
2. **Sign Up**: Enables new users to create accounts within the system.
3. **Refresh Token**: Provides a mechanism for refreshing user tokens.
4. **User Profile**: Retrieves and manages user profiles.

### Technology Stack

UMS is built using a robust technology stack to ensure reliability and performance:

- **Database**: MySQL
- **Languages**: JavaScript & TypeScript
- **JavaScript Runtime Environment**: Node.js
- **API Framework**: Express.js
- **Database ORM**: TypeORM
- **JWT Hashing Algorithm**: RS256 (2048 bits)
- **Request Validation Library**: Zod
- **Testing Server**: Vercel

### Usage in Development Mode

To use UMS in development mode, follow these steps:

1. Clone the code repository.
2. Execute the following two commands in your terminal:
3. Postman Collection https://documenter.getpostman.com/view/13984733/2s9YJhyLT7#intro

```bash
npm run build:watch
npm start
```

### Environment Variables
UMS relies on environment variables to configure various settings. Here are the essential environment variables:

- **DATABASE_HOST**: The hostname for your MySQL database (e.g., localhost).
- **DATABASE_PORT**: The port on which your MySQL database is running (e.g., 3306).
- **DATABASE_USERNAME**: The username for database access (e.g., root).
- **DATABASE_PASSWORD**: The password for database access (leave empty if not set).
- **DATABASE_NAME**: The name of the database used by UMS (e.g., db_test).
- **DEBUG**: Set to true for debugging purposes, or false for production.





