# React Component Tutorial

In this tutorial, you'll implement a React component.

## 1. Install @material-ui/core and Import a Button

> First, you'll need to install the material-ui React library with yarn.

Open up a terminal in your root project directory and run:

```bash
yarn add @material-ui/core
```

Then add the following Button import:

```javascript
import Button from "@material-ui/core/Button";
```

### 1.1 Run `yarn add @material-ui/core`

### 1.2 Import a material-ui button in App.js

#### HINTS

- You need to have yarn installed on your machine.

## 2. Add the Button to Your App

> Add the button to your App.js file.

In **App.js**:

Replace this line of code:

```html
<div>Welcome to CodeRoad</div>
```

With this:

```javascript
<Button variant="contained" color="primary">
  {" "}
  Hello World{" "}
</Button>
```

### 2.1 Replace the old div with the new Button
