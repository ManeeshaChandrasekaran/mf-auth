# Booking Micro Frontend

A React-based micro frontend for User Login and displaying the logged in details 

## Tech Stack

- **Frontend Framework**: React 19.1.1 with TypeScript
- **UI Library**: Material-UI (MUI) v7.3.2 with Emotion styling
- **Build Tool**: Webpack 5 with Module Federation
- **Development Server**: Webpack Dev Server
- **Language**: TypeScript 4.9.5
- **Testing**: React Testing Library & Jest
- **Package Manager**: npm
- **State Management**: Redux

## Architecture

This micro frontend follows the **Module Federation** pattern, allowing it to be independently developed, deployed, and consumed by other applications in the micro frontend ecosystem.

### Key Architectural Components:

1. **Module Federation Setup**
   - Exposes `Login` and `UserProfile` components
   - Runs on port 3001
   - Shared React dependencies to prevent duplication

2. **Component Structure**
   - `Login`: Login Page for user
   - `UserProfile`: Display the Logged in User

3. **Integration Points**
   - Can be consumed by the host application (mf-host)
   - Uses the `host Store` to store the User details 
   - Communicates through shared state management
