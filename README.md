### This is a great React exercise, based on this tutorial: [React crash course in youtube](https://www.youtube.com/watch?v=A71aqufiNtQ)

To project was originally created using [Create React App](https://github.com/facebook/create-react-app)

#### To start working on it:
- `git clone` to clone the project
- `cd` to the app folder
- `npm install` to install all dependencies into the app folder
- `npm start` to start the server on http://localhost:3000
- open the project using Atom or any other IDE

#### The main concepts used in this app:

- The App contains a list of projects (static list) (Projects and Project components)
- The App contains a AddProject component, which allows adding a new Project to the list (using a callback function from AddProject.js i.e. child to App.js i.e. parent)
- Each project has a Delete function (another callback function from Project.js to Projets.js to App.js i.e. parent)
- The App contains a Todos list - this is a dynamic list based on an Ajax call to this development server: https://jsonplaceholder.typicode.com/
