## This is a great React exrcise, based on this tutorial: https://www.youtube.com/watch?v=A71aqufiNtQ

To project was created using [Create React App](https://github.com/facebook/create-react-app).

### To work on it:
- `git clone` to clone the project
- `cd` to the app folder
- `npm start` to start the server on http://localhost:3000

### Main concepts in this app:

- The App contains a list of projects (static list) (Projects and Project components)
- The App contains a AddProject component, which allows adding a new Project to the list (using a callback function from AddProject.js i.e. child to App.js i.e. parent)
- Each project has a Delete function (another callback function from Project.js to Projets.js to App.js i.e. parent)
- The App contains a Todos list - this is a dynamic list based on an Ajax call to this development server: https://jsonplaceholder.typicode.com/
