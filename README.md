# Simon Game 

This repository contains the code for the classic electronic Simon game, which was created using React. 

Wanna see it in action? You can play the [Simon game](https://sjdumas.com/simon-game) here.

## How It's Made

- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Setup Notes

### `App.js`

In the App.js file, you will need to change the basename to the path where your app will be hosted. For example:

- For **GitHub Pages**, set it to `/your-repo-name` (e.g., `/simon-game`).
- For a **custom domain** (e.g., `https://my-project-name.com/game`), set it to `/game`.

#### Paths inside `App.js`:

You will also need to set the path in the App.js file.

- The `/` path will match the `basename` (e.g., `/simon-game` for GitHub Pages).
- The `/game` path will be appended to the `basename` (e.g., `/simon-game/game`).

### `package.json`

In `package.json`, update the `"homepage"` field to reflect where your project will be deployed. Example: 

```json
"homepage": "https://your-username.github.io/your-repo-name"
```
### Installation

After you download or clone this GitHub project, do the following:

1. Navigate to the project directory via your terminal or command prompt.

```bash
cd /path/to/your/project
```

2. Install the necessary dependencies by typing `npm install` into the terminal or command prompt of the project directory.

```bash
npm install
```

### Starting the App

Use `npm start` to open the app in development mode via [http://localhost:3000](http://localhost:3000) in your browser. The app will auto-reload any changes you've made.

### Deploying the App

Use `npm run build` to build the app for production. Your production files for deployment will be located in the `build` folder of your project. 

Have any additional questions about deployment? Browse the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment).
