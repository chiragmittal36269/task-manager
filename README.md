## For Running the project we need to follow these steps:-

### Step 1: Open terminal and navigate to your project directory

### Navigate to the project directory using the 'cd' command

### Step 1.1: Install Node.js modules (if not already installed)

### This command installs the necessary dependencies specified in your package.json file

npm install

### Step 2: After the installation is complete, start the React application

### Start the React application using the following command

npm start

### The 'npm start' command initiates the development server, converts React components to HTML,

### and opens the application in your default web browser.

### Note: Make sure you have Node.js and npm (Node Package Manager) installed on your system before running these commands.

### You can install them from https://nodejs.org/

### After executing these steps, you should see your React application running in your browser.

---

# Task Management Application

## Project Structure

The project follows a standard React project structure:

-   **src**: Contains the source code of the React application.
    -   **Components**: Individual React components (`AddTask.js`, `EditTask.js`, `Navbar.js`, `TaskList.js`).
    -   **styles.css**: Global styles for the application.
    -   **App.js**: Main component orchestrating routing and state management.
-   **public**: Holds static assets and the `index.html` file where the React app is mounted.

## Design Choices

### State Management

-   React Hooks (`useState`, `useEffect`) are used for component state management.
-   Local Storage is employed for persisting task data to ensure persistence after a page refresh.

### Routing

-   The application utilizes the `react-router-dom` library for routing.
-   Navigation links are provided through the `Navbar` component, with routing handled in `App.js`.

### Task Management

-   Tasks are represented as objects with properties such as `id`, `name`, `description`, `priority`, and `completed`.
-   Components like `AddTask`, `EditTask`, and `TaskList` handle various aspects of task management.

## Additional Features

-   **Task Prioritization**: Users can assign priorities to tasks (Low, Medium, High).
-   **Task Completion**: Tasks can be marked as completed, updating their visual appearance.
-   **Editing Tasks**: Users can edit existing tasks, including modifying their name, description, and priority.
-   **Deletion**: Tasks can be deleted individually.
-   **Confirmation Modal**: Implemented a custom confirmation modal in the `EditTask` component to confirm canceling changes.

## Running the Project

To run the project:

1. Open your terminal and navigate to the project directory.
2. Run `npm install` to install required Node modules.
3. Execute `npm start` to start the development server and open the application in your default web browser.

## Future Enhancements

-   User authentication for personalized task management.
-   Advanced styling and animations for an improved user experience.
-   Integration with backend services for cloud-based task storage and collaboration.
