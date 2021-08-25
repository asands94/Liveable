# Liveable README <!-- omit in toc -->

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Liveable** is lorem ipsum dolor sit amet. Phasellus dapibus fermentum risus vitae bibendum. Integer vel ipsum mollis odio sollicitudin ornare eu vel ex. In quis fringilla velit, ac maximus quam. Etiam eget placerat neque. Aenean faucibus sem non nisi lobortis ullamcorper._


<br>

## MVP

> The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

_The **Project Title** MVP lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus fermentum risus vitae bibendum. Integer vel ipsum mollis odio sollicitudin ornare eu vel ex. In quis fringilla velit, ac maximus quam. Etiam eget placerat neque. Aenean faucibus sem non nisi lobortis ullamcorper._

<br>

### Goals

- _Lorem ipsum, dolor sit amet,_
- _consectetur adipiscing elit._
- _Phasellus dapibus fermentum risus vitae bibendum._
- _Integer vel ipsum mollis odio sollicitudin ornare eu vel ex._
- _etc._

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
| Axios | _Lorem ipsum dolor sit amet, consectetur._ |
|     bcrypt      | _Lorem ipsum dolor sit amet, consectetur._ |
|     Rails      | _Lorem ipsum dolor sit amet, consectetur._ |
|           | _Lorem ipsum dolor sit amet, consectetur._ |
|     rack-cors      | _Lorem ipsum dolor sit amet, consectetur._ |
|     jwt      | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![Dummy Link](https://i.imgur.com/XXd9LPB.png)

- Desktop/tablet horizontal Landing

![Dummy Link](https://i.imgur.com/FqJh665.png)

- Desktop/tablet horizontal Homepage Top (logged out)

![Dummy Link](https://i.imgur.com/tO1kCFh.png)

- Desktop/tablet horizontal Sign Up

![Dummy Link](https://i.imgur.com/IYrySKh.png)

- Desktop/tablet horizontal Login

![Dummy Link](https://i.imgur.com/aDa9hir.png)

- Desktop/tablet horizontal Homepage Top (logged in)

![Dummy Link](https://i.imgur.com/aLKClxV.png)

- Desktop/tablet horizontal Homepage Bottom (logged out)

![Dummy Link](https://i.imgur.com/JwruFTW.png)

- Desktop/tablet horizontal Homepage Bottom (logged in)

![Dummy Link](https://i.imgur.com/wSH6pSM.png)

- Desktop/tablet horizontal All Posts Page

![Dummy Link](https://i.imgur.com/NTNiZKv.png)

- Desktop/tablet horizontal All Posts page with detail modal

![Dummy Link](https://i.imgur.com/KiuaRsj.png)

- Desktop/tablet horizontal User Profile Page

![Dummy Link](https://i.imgur.com/YVI5mgP.png)

- Desktop/tablet horizontal About Page





![Dummy Link](https://i.imgur.com/LJiVZua.png)

- Mobile/tablet vertical Landing

![Dummy Link](https://i.imgur.com/OMYhpk4.png)

- Mobile/tablet vertical Homepage Top (logged out)

![Dummy Link](https://i.imgur.com/9Ro6VeV.png)

- Mobile/tablet vertical Sign Up

![Dummy Link](https://i.imgur.com/nbeMWcB.png)

- Mobile/tablet vertical Login

![Dummy Link]https://i.imgur.com/LscCoGs.png)

- Mobile/tablet vertical Homepage Top (logged in)

![Dummy Link](https://i.imgur.com/fDeITVG.png)

- Mobile/tablet vertical Homepage Bottom (logged out)

![Dummy Link](https://i.imgur.com/eNuGyt7.png)

- Mobile/tablet vertical Homepage Bottom (logged in)

![Dummy Link](https://i.imgur.com/XdKsboj.png)

- Mobile/tablet vertical All Posts Page

![Dummy Link](https://i.imgur.com/zEzxaSj.png)

- Mobile/tablet vertical All Posts page with detail modal

![Dummy Link](https://i.imgur.com/vBABNeN.png)

- Mobile/tablet vertical User Profile Page

![Dummy Link](https://i.imgur.com/ejy1Isr.png)

- Mobile/tablet vertical About Page

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. Include a link to your component tree

[Component Tree Sample](https://gist.git.generalassemb.ly/davidtwhitlatch/414107e2560ae0bb65e233570f2fe056#file-component-tree-png)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__App.jsx
|__index.js
|__ assets/
      |__ fonts
|__ components/
      |__ Layout/
          |__ Layout.css
          |__ Layout.jsx
      |__ Nav/
          |__ Nav.css
          |__ Nav.jsx
      |__ Footer/
          |__ Footer.css
          |__ Footer.jsx
      |__ PostCreate/
          |__ PostCreate.css
          |__ PostCreate.jsx
|__ Screens/
      |__ About/
          |__ About.css
          |__ About.jsx
      |__ Home/
          |__ Home.css
          |__ Home.jsx
      |__ Posts/
          |__ Posts.css
          |__ Posts.jsx
      |__ PostDetails/
          |__ PostDetail.css
          |__ PostDetail.jsx
      |__ PostEdit/
          |__ PostEdit.css
          |__ PostEdit.jsx
      |__ SignIn/
          |__ SignIn.css
          |__ SignIn.jsx
      |__ SignUp/
          |__ SignUp.css
          |__ SignUp.jsx
|__ services/
      |__ apiConfig.js
      |__ categories.js
      |__ locations.js
      |__ posts.js
      |__ users.js

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create backend schema, models, controllers    |    H     |      hrs      |      hrs     |     hrs    |
| Create services folder and connect frontend and backend   |    H     |      hrs      |      hrs     |     hrs    |
| Create container folder and make API calls |    H     |      hrs      |      hrs     |     hrs     |
| Navbar - signed in view |    H     |      hrs      |      hrs     |     hrs     |
| Navbar - signed out view |    H     |      hrs      |      hrs     |     hrs     |
| Sign Up JS |    H     |      hrs      |      hrs     |     hrs     |
| Login JS |    H     |      hrs      |      hrs     |     hrs     |
| Create posts functionality |    H     |      hrs      |      hrs     |     hrs     |
| Show posts functionality |    H     |      hrs      |      hrs     |     hrs     |
| Update posts functionality |    H     |      hrs      |      hrs     |     hrs     |
| Delete posts functionality |    H     |      hrs      |      hrs     |     hrs     |
| Create profile page |    H     |      hrs      |      hrs     |     hrs     |
| Home page - signed in view |    H     |      hrs      |      hrs     |     hrs     |
| Home page - signed out view |    H     |      hrs      |      hrs     |     hrs     |
| Global CSS |    H     |      hrs      |      hrs     |     hrs     |
| Create posts CSS |    H     |      hrs      |      hrs     |     hrs     |
| Show posts CSS |    H     |      hrs      |      hrs     |     hrs     |
| Update posts CSS |    H     |      hrs      |      hrs     |     hrs     |
| Delete posts CSS |    H     |      hrs      |      hrs     |     hrs     |
| Profile page CSS |    H     |      hrs      |      hrs     |     hrs     |
| Sign Up CSS |    H     |      hrs      |      hrs     |     hrs     |
| Login CSS |    H     |      hrs      |      hrs     |     hrs     |
| Phone media query  |    H     |      hrs      |      hrs     |     hrs     |
| Tablet media query  |    H     |      hrs      |      hrs     |     hrs     |
| Seed database and check backend routes |    H     |      hrs      |      hrs     |     hrs     |
| PMPV - Add share button |    H     |      hrs      |      hrs     |     hrs     |
| PMPV - users add image from computer |    H     |      hrs      |      hrs     |     hrs     |
| PMPV - generate random username on sign up |    H     |      hrs      |      hrs     |     hrs     |
| PMPV -  |    H     |      hrs      |      hrs     |     hrs     |
| PMPV -  |    H     |      hrs      |      hrs     |     hrs     |
| PMPV -  |    H     |      hrs      |      hrs     |     hrs     |
| PMPV -  |    H     |      hrs      |      hrs     |     hrs     |
| TOTAL               |          |      hrs      |      hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

[ERD Sample](https://drive.google.com/file/d/1kLyQTZqfcA4jjKWQexfEkG2UspyclK8Q/view)
<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
