# Event Ease

Event Ease is a platform designed to simplify the process of event management booking system. Whether anyone can look for events and booking the events. This us a fullstack next js project with authentication and authorization, dynamic dashboard, and realtime notification system by socket.io.

## Features

- **User Authentication**: Secure user authentication system with login/register functionality.
- **Event Create**: Create event by user and admin.
- **User Dashboard**: User dashboard for view and booking events.
- **Admin Dashboard**: Admin dashboard for managing user accounts, Events, and associated content.

## Technologies Used

- **Frontend**: React.js, Next.js, Typescript, Material-UI, Axios, React Hook Form
- **Backend**: Node.js, Express.js, Typescript, Socket.io
- **Authentication**: JWT (JSON Web Tokens)
- **Database**: MongoDB
- **ORM**: Prisma
- **State Management**: Redux, Redux Toolkit
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (Backend), Vercel (Frontend)

## Getting Started

1. Clone the repository:

```
git clone <https://github.com/touhidcodes/Task-Event-Ease-Web>
```

2. Install dependencies:

```
cd Task-Event-Ease-Web
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory and add the following environment variables:

```
// Example .env file
NEXT_PUBLIC_BACKEND_URL=https://event-ease-server-alpha.vercel.app
NEXT_PUBLIC_LOCAL_URL=http://localhost:5000
```

4. Start the development server:

```
npm run dev
```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## User Login Credentials

```
# Admin Login:
· Username: admin
· Email: admin@eventease.com
· Password: admin@eventease

# User Login:
· Username: user
· Email: user@eventease.com
· Password: user@eventease

```

## Live URLs

#### Live Project URL: https://event-ease-web.vercel.app

#### Live API URL: https://event-ease-server-alpha.vercel.app

## Project Dependencies

#### Dependencies List

```
  "dependencies": {
    "@emotion/cache": "^11.14.0",
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.0",
    "@hookform/resolvers": "^3.10.0",
    "@mui/icons-material": "^6.3.1",
    "@mui/material": "^6.3.1",
    "@mui/material-nextjs": "^6.3.1",
    "@mui/styled-engine-sc": "^6.3.1",
    "@reduxjs/toolkit": "^2.5.0",
    "@types/js-cookie": "^3.0.6",
    "axios": "^1.7.9",
    "js-cookie": "^3.0.5",
    "jwt-decode": "^4.0.0",
    "next": "15.1.4",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-hook-form": "^7.54.2",
    "react-redux": "^9.2.0",
    "socket.io": "^4.8.1",
    "socket.io-client": "^4.8.1",
    "sonner": "^1.7.1",
    "styled-components": "^6.1.14",
    "zod": "^3.24.1"
```

#### Dev Dependencies List

```
   "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "15.1.4",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
```

## Contributing

Contributions are welcome! If you'd like to contribute to Event Ease, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature`)
6. Create a new Pull Request

## Contact Information

If you have any questions or feedback regarding Flat Mate Finder, feel free to contact us through the following channels:

- **Email**: [touhidcodes@gmail.com](mailto:touhidcodes@gmail.com)
- **Phone**: +1 (123) 456-7890
- **Social Media**:
  - [Facebook](https://www.facebook.com/mhrinkue)
  - [Linkedin](https://www.linkedin.com/in/touhidur-zaman/)

We look forward to hearing from you!
