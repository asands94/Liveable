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

[**Liveable**](https://liveable.netlify.app/) is a fullstack application where users can share their experiences renting homes in New Zealand. Authorized users can to create, update, and delete their posts. All users (authorized or not) can read posts that other users have written. The goal of this application is to bring awareness to the unfavorable living conditions of rental properties in hopes of promoting the idea that homes (like cars) should have a warrant of fitness. This would assure that tenants are living in quality homes at reasonable prices. This application is built with Ruby on Rails on the backend and React.js on the frontend.


<br>

## MVP

The **Liveable** MVP is to allow authorized users to create, read, update, and delete their posts as well as see details of an individual post. Users will be able to use the applicatiion on desktop, mobile, or a tablet. Flexbox and grid will be used for styling. At least 8 rendered components. 
<br>

### Goals

- Users, posts, locations, and categories tables with associations
- Deployment with Surge and Heroku
- Full CRUD for posts
- Have a RESTful JSON API

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Frontend framwork |
|   React Router   | Client side routing |
| Axios | API interaction |
|     bcrypt      | Password security |
|     Rails      | Backend framwork |
|     rack-cors      | Cross-origin resource sharing |
|     jwt      | JSON webtoken for user authorization |
|     Material-UI      | Styling |
|     Faker      | Seed the database with fake information |

<br>

### Client (Front End)

#### Wireframes

<img src="https://i.imgur.com/XXd9LPB.png" width="300">

- Desktop/tablet horizontal Landing

<img src="https://i.imgur.com/FqJh665.png" width="300">

- Desktop/tablet horizontal Homepage Top (logged out)

<img src="https://i.imgur.com/tO1kCFh.png" width="300">

- Desktop/tablet horizontal Sign Up

<img src="https://i.imgur.com/IYrySKh.png" width="300">

- Desktop/tablet horizontal Login

<img src="https://i.imgur.com/aDa9hir.png" width="300">

- Desktop/tablet horizontal Homepage Top (logged in)

<img src="https://i.imgur.com/aLKClxV.png" width="300">

- Desktop/tablet horizontal Homepage Bottom (logged out)

<img src="https://i.imgur.com/0abIFr8.png" width="300">

- Desktop/tablet horizontal Homepage Bottom (logged in)

<img src="https://i.imgur.com/y6lSWL4.png" width="300">

- Desktop/tablet horizontal All Posts Page

<img src="https://i.imgur.com/btPOnQK.png" width="300">

- Desktop/tablet horizontal All Posts page with detail modal

<img src="https://i.imgur.com/KiuaRsj.png" width="300">

- Desktop/tablet horizontal User Profile Page

<img src="https://i.imgur.com/SD3vsYa.png" width="300">

- Desktop/tablet horizontal Edit Post Page

<img src="https://i.imgur.com/YVI5mgP.png" width="300">

- Desktop/tablet horizontal About Page

<img src="https://i.imgur.com/LJiVZua.png" height="300">

- Mobile/tablet vertical Landing

<img src="https://i.imgur.com/OMYhpk4.png" height="300">

- Mobile/tablet vertical Homepage Top (logged out)

<img src="https://i.imgur.com/9Ro6VeV.png" height="300">

- Mobile/tablet vertical Sign Up

<img src="https://i.imgur.com/nbeMWcB.png" height="300">

- Mobile/tablet vertical Login

<img src="https://i.imgur.com/LscCoGs.png" height="300">

- Mobile/tablet vertical Homepage Top (logged in)

<img src="https://i.imgur.com/fDeITVG.png" height="300">

- Mobile/tablet vertical Homepage Bottom (logged out)

<img src="https://i.imgur.com/gPBnLmo.png" height="300">

- Mobile/tablet vertical Homepage Bottom (logged in)

<img src="https://i.imgur.com/XdKsboj.png" height="300">

- Mobile/tablet vertical All Posts Page

<img src="https://i.imgur.com/zEzxaSj.png" height="300">

- Mobile/tablet vertical All Posts page with detail modal

<img src="https://i.imgur.com/vBABNeN.png" height="300">

- Mobile/tablet vertical User Profile Page

<img src="https://i.imgur.com/Fi9oiqH.png" height="300">

- Mobile/tablet vertical Edit Post Page

<img src="https://i.imgur.com/ejy1Isr.png" height="300">

- Mobile/tablet vertical About Page

#### Component Tree

<img src="https://i.imgur.com/Mlvddgu.png" width="500">

#### Component Architecture

``` structure

src
|__App.jsx
|__index.js
|__ assets/
      |__ fonts
      |__ images/
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
      |__ Login/
          |__ Login.css
          |__ Login.jsx
      |__ Posts/
          |__ Posts.css
          |__ Posts.jsx
      |__ PostDetails/
          |__ PostDetail.css
          |__ PostDetail.jsx
      |__ PostEdit/
          |__ PostEdit.css
          |__ PostEdit.jsx
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
| Create backend schema, models    |    H     |      1hrs      |      1hrs     |     hrs    |
| Create backend routes, controllers    |    H     |      2hrs      |      3hrs     |     hrs    |
| Create services folder and connect frontend and backend   |    H     |      3hrs      |      1.5hrs     |     hrs    |
| Create container folder and make API calls |    H     |      2hrs      |      1.5hrs     |     hrs     |
| Navbar - signed in view |    H     |      1hrs      |      .5hrs     |     hrs     |
| Navbar - signed out view |    H     |      1hrs      |      .5hrs     |     hrs     |
| Sign Up JS |    H     |      1hrs      |      1.5hrs     |     hrs     |
| Login JS |    H     |      1hrs      |      .5hrs     |     hrs     |
| Create posts functionality |    H     |      1hrs      |      7hrs     |     hrs     |
| Show posts functionality |    H     |      1hrs      |      2.5hrs     |     hrs     |
| Update posts functionality |    H     |      1hrs      |      .5hrs     |     hrs     |
| Delete posts functionality |    H     |      .5hrs      |      .5hrs     |     hrs     |
| Create profile page (JS) |    H     |      1hrs      |      2hrs     |     hrs     |
| Home page - signed in view |    H     |      1hrs      |      .5hrs     |     hrs     |
| Home page - signed out view |    H     |      1hrs      |      .5hrs     |     hrs     |
| Global CSS |    H     |      4hrs      |      4.5hrs     |     hrs     |
| Create posts CSS |    M     |      1hrs      |      1hrs     |     hrs     |
| Show posts CSS |    M     |      3hrs      |      3hrs     |     hrs     |
| Update posts CSS |    M     |      1hrs      |      1hrs     |     hrs     |
| Profile page CSS |    M     |      2hrs      |      2hrs     |     hrs     |
| Sign Up CSS |    M     |      2hrs      |      1hrs     |     hrs     |
| Login CSS |    M     |      2hrs      |      .5hrs     |     hrs     |
| Phone media query  |    H     |      3hrs      |      hrs     |     hrs     |
| Tablet media query  |    H     |      3hrs      |      hrs     |     hrs     |
| Seed database and check backend routes |    H     |      2hrs      |      1hrs     |     hrs     |
| PMPV - Add share button |    L     |      1hrs      |      hrs     |     hrs     |
| PMPV - users add image from computer |    L     |      5hrs      |      hrs     |     hrs     |
| PMPV - generate random username on sign up |    L     |      5hrs      |      hrs     |     hrs     |
| TOTAL               |          |      52.5hrs      |      35.5hrs     |     hrs     |

<br>

### Server (Back End)

#### ERD Model

<img src="https://i.imgur.com/qg4OKRF.png" width="300">
<br>

***

## Post-MVP

P-MVP goals are to add a share button to all posts, allow users to upload images from their computer using active storage, and to generate a random username for users upon sign up using the faker package. 

***

## Code Showcase

```
{
  'TBD': 'we shall see'
 }
```

## Code Issues & Resolutions

TBD
