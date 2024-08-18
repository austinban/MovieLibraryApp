# Movie Library App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It is a simple movie library app that allows users to search for movies and view details about them. The app uses the [The Open Movie Database (OMDb) API](https://www.omdbapi.com/) to fetch movie data.

## Technical / Architectural Choices

**Tanstack React Query**: I used Tanstack React Query to manage the API calls to the OMDb API. I have found it is lightweight and gives 99% of the functionality I need out of the box. It also has a lot of built-in features like caching, pagination, and polling that make it easy to work with.

**Architecture**: My goal in building projects is to have the components and pages be structured in an intuitive way that mirrors the actual app itself. I have found that engineers navigate the codebase in the same way they navigate the app, so the closer they can match, the easier it is to find what you need in the codebase.

**Styling**: I went very simple with styling and just used SASS and component level styling. If I was to do this project again, I would implement tailwind to make it go faster and keep more consistency in things like CSS variables.

**Things I would change**: I would create an atom/molecule heirarchy in the components library to make it easier to reuse components and keep the main component library from getting too bloated.

**Incomplete work**: I did not finish all of the requested functionality! I reached the upper time limit and since I was making every component from scratch, didn't have the time to complete all that was requested, but hopefully showcased my abilities and philosophies.

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all the dependencies required for the project to run. This command should be run before running the app for the first time.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

