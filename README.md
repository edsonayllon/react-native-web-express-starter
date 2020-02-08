---
author: Edson Ayllon
category: starter code
tags: 
- react
- react-native
- node
- express
status: complete
twitter: https://twitter.com/relativeread
---

### Starter 2-2018 

# react-native-web-express-starter

## 1 | Description

Boilerplate for a React and React-Native app built with the same code, with an Express Node REST API server backend connection. 

To make the app compatible with React-Native and React, code the app as if it were a React-Native app. 

If coming from React, replace all `<div>` and text elements such as `<p>` and `<h1>` with `<View>` and `<Text>` elements respectively. For styling, use JSX style CSS with the `Stylesheet` module from React-Native. Examples found in `client/App.js`.

This version of React is currently using React Hooks and functional components. React class components are still compatible with this build. A Hooks examlpe is found in `client/App.js`. Comparing Hooks functional components to class components, functionality remains largely the same, however, syntax for component declaration, lifecycle functions, and state management have been updated. For questions involving React Hooks, please see the [React Hooks documentation](https://reactjs.org/docs/hooks-faq.html). 

Instead of `frontend` and `backend` being used, folders are divided by `client` and `server`. The deciding condition for this change was to accommodate blockchain inclusions to React, Express apps, such as Ethereum and EOS smart contracts. Because both the Node/Express server and smart contracts interacting with public blockchains are both considered backends, more descriptive terminology for each technology has been preferred. 


## 2 | Getting Started


### 2.1 Installing

1. Clone project

2. Install dependencies in both `./frontend` and `./backend`

```
yarn || npm install
```

### 2.2 Running

Run the backend first, then the frontend.

In `./server`:

```
npm run start || yarn start || 
npm run dev || yarn dev 
```

`dev` uses nodemon, allowing automatic recompiling on saved changes. `start` should be used in production. 


In `./client`:

```
npm run start || yarn start || exp start
```

Opens the expo client to run the React-Native app on mobile emulator.


```
npm run web || yarn web
```

Runs the React app on web browser.

### 2.3 Building

For build instructions for the client, please see [Expo documentation](https://docs.expo.io/versions/latest/distribution/building-standalone-apps/) for building. This project uses Expo SDK 33. 

Options include:
* `expo build:android` 
* `expo build:ios`
* `expo build:web`


## 3 | Structure

### 3.1 Ports

The back-end will be running in localhost:4000, while the front-end will be opened by the expo cli.

### 3.2 Requesting Data

To run the app on Expo for mobile, no proxy is used. Instead, the port is
written in the `fetch` requests

```
fetch('http://localhost:4000/users')
```

### 3.3 Server API

Backend Express REST API routes are found in `.server/routes/`. To add a new page, configure it in `.server/app.js`, similar to current pages.
