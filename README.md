# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This project demonstrates the foundational principles of web development. Using HTML for structure, CSS for styling, and JavaScript for interactivity, I built a functional and visually appealing user interface that is fully responsive. This hands-on experience has been vital in my journey to create modern web applications.

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](./screenshot/Screenshot%202025-09-21%20113009.png)
![](./screenshot/Screenshot%202025-09-21%20113107.png)
![](./screenshot/Screenshot%202025-09-21%20113028.png)
![](./screenshot/Screenshot%202025-09-21%20114151.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

This project has been vital to my development journey, as I've learned how to effectively manipulate elements using HTML, CSS, and JavaScript.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.share-content {
  position: absolute;
  background-color: hsl(217, 19%, 35%);
  width: 260px;
  height: 55px;
  margin-left: 240px;
  /* margin-left: 350px;
    margin-bottom: 5px; */
  border-radius: 10px;
  /* margin: 20px; */
  justify-content: center;
  display: flex;
  margin-top: 6px;
  visibility: hidden;
  box-shadow: 0px 0px 10px;
}
```

```js
var btn = document.querySelector(".image");

const widBtn = function () {
  var checkingVisibility = document.querySelector(".share-content");

  if (checkingVisibility.style.visibility === "visible") {
    checkingVisibility.style.visibility = "hidden";
  } else {
    checkingVisibility.style.visibility = "visible";
  }
};

const repBtn = function () {
  var checkingVisibility = document.querySelector(".content");

  if (checkingVisibility.style.visibility === "hidden") {
    checkingVisibility.style.visibility = "visible";
  } else {
    checkingVisibility.style.visibility = "hidden";
  }
};

btn.addEventListener("click", widBtn);

var btn2 = document.querySelector(".foot-image");

btn2.addEventListener("click", repBtn);
```

### Continued development

Continuing my journey, I'll focus on mastering responsive design, a critical skill in this industry.

## Author

- Website - [Moriba Sahr Kondeh](https://www.your-site.com)
- Frontend Mentor - [@Kondeh1](https://www.frontendmentor.io/profile/Kondeh1)
- Twitter - [@KondehMe](https://www.twitter.com/KondehMe)

## Acknowledgments

In acknowledgment, i want to thank New Tamba Sam a gentle man who has been helping me to understand some core things not only in this project but in many projects and i want to acknowledgment my MOM for keep trusting and beleving in me by investing in me to learn more may God keep you alive so that all the investement you have invest in me you shall enjoy it in jesus name, I love you MOM 🥰
