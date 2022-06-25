# <h1 align="center">Specialized Redux Bootcamp - Capstone Project</h1>

<p align="center">
    <a href="https://academy.wizeline.com/">
    <img src="public/academylogo.png"
         alt="Academy" style="height: 18px; border-radius: 4px">
</p>

<p align="center">
  <a href="#overview">Overview</a> •
  <a href="#project">Project</a> •
  <a href="#instructions">Instructions</a> •
  <a href="#deliverables">Deliverables</a> 
</p>

---

## Overview

<table>
<tr>
<td>

The purpose of this project is for you to demonstrate your knowledge acquired in the **Specialized Redux Bootcamp**.

With this E-commerce project, you will have the opportunity to show your [**React**](https://reactjs.org/docs/getting-started.html) skills by adding functionality and applying [**Redux Toolkit**](https://redux-toolkit.js.org/introduction/getting-started), the toolset for global state management that you have learned in this Bootcamp.

Here you will find all the instructions to complete and deliver your **Redux Capstone Project**.

</td>
</tr>
</table>

## Project

<table>
<tr>
<td>

This repository contains the minimum structure of an E-commerce called **WizeStore** with three modules:

1. Login
1. Products
1. Cart

Here is the [link](https://redux-shopping-cart-gules.vercel.app/login) to the demo application. `username: wizeline` and `password: Rocks!`
<img width="960" alt="WizeStore" src="https://user-images.githubusercontent.com/88999796/175117974-122bcd92-21a8-4b08-8eab-6f536c1cd7c0.png">

</td>
</tr>
</table>

## Instructions

<table>
<tr>
<td>
    
Before starting:

1. Fork this repository to your **GitHub** account and make it a public repository.
1. Invite your mentor as a contributor to your **GitHub** project.
1. Now that you have cloned this repository in your local environment, run the following command to install all modules that are listed on the `package.json` file and their dependencies:
    
    `npm install`

    After that, run the app in the development mode:
    
    `npm start`
1. You can message your mentor to have 1:1 sessions, or you can use the [**Slack channel**](https://wizelineacademy.slack.com/archives/C03KCQ0CPDM) if you feel stuck, want to share your progress, or need some feedback.
1. Get started with the requirements specified below.

</td>
</tr>
</table>

## Deliverables

<table>
<tr>
<td>

All deliverables are cumulative, and for each delivery:

- Use [**React Hooks**](https://reactjs.org/docs/hooks-intro.html) in your components.
- Use [**styled-components**](https://styled-components.com/docs) for component styles or any other _CSS_ library or framework like [**Material UI**](https://mui.com/material-ui/getting-started/overview/) or [**Bootstrap**](https://react-bootstrap.github.io/getting-started/introduction).
- Ensure that your application does not log warnings and errors in the browser console.
- Create a _pull request_ (_PR_) for each _deliverable_ to merge into your `main` **GitHub** branch.
- Add your mentor as a reviewer of your _PRs._ Your mentor will review and leave feedback on your progress.

</td>
</tr>
</table>

<table>
<tr>
<td>

### Dates

You must submit three deliverables on the following dates:

1. The **first delivery** is before 10 AM (CST) on Monday, July 4th, 2022.
1. The **second delivery** is before 10 AM (CST) on Monday, July 11th, 2022.
1. The **third delivery** is before midnight (CST) on Friday, July 15th, 2022.

</td>
</tr>
</table>

### First delivery

In this assignment, you will create the **Products** module.

<table>
<tr>
<td>

#### Requirements of the first deliverable.

1. Create a new branch with the name `feat/deliverable1` derived from `main` on your forked repository.
1. Create the **Products** module and fill it with data obtained from this [mock file](http://public/data/products.json).
    Design your user interface (_UI_). You can base it on the layout proposed in this [demo](https://redux-shopping-cart-gules.vercel.app/products), or if you want, implement any other design, but include the following elements:

    1. A grid of products, and for each element on the grid, show the following elements:

        - [x] One _image_ of the product.
        - [x] The product _name_.
        - [x] The first _category_.
        - [x] The product _price_.
        - [x] A _button_ without functionality with the text "**Add to cart"**.

1. Deploy your app on [**Netlify**](https://www.netlify.com/), [**Firebase**](https://firebase.google.com/products-build), [**Heroku**](https://www.heroku.com/), [**GitHub Pages**](https://pages.github.com/), or any other hosting service you prefer.
1. When you meet all _Acceptance Criteria_ of this first deliverable, fill out this [form](https://docs.google.com/forms/d/e/1FAIpQLSeXxiqrN2BjLTVF79xI6OdCedGgaw_6pxWOrNEoxDkEaExEWA/viewform) and add the _URL_ of your _PR_ and the _URL_ of your deployment.
    
</td>
</tr>
</table>

#### Acceptance criteria for the first deliverable

The following is the list of acceptance criteria (_AC_) and points for completing your first deliverable:

| **AC** | **Description** | **Points** |
| :--- | :--- | ---: |
| 1 | :ballot_box_with_check: Your **Products** module reads data products correctly from this [mock](http://public/data/products.json)[ file](http://public/data/products.json). | 30 |
| 2 | :ballot_box_with_check: Your **Products** module displays your _CSS styles_ correctly. | 20 |
| 3 | :ballot_box_with_check: For each product, the following elements render correctly:<br>&nbsp;&nbsp;• One _image_ of the product.<br>&nbsp;&nbsp;• The product _name_.<br>&nbsp;&nbsp;• The first _category_.<br>&nbsp;&nbsp;• The product _price_.<br>&nbsp;&nbsp;• The "**Add to cart**" _button_ without functionality. | 50 |

### Second delivery

In this assignment, you will create both the **Cart** and **Login** module.

<table>
<tr>
<td>

#### Requirements of the second deliverable

1. Create a new branch with the name `feat/deliverable2` derived from `main` on your forked repository.
1. Create the **Cart** module and fill it with data obtained from the same [mock file](http://public/data/products.json) used in the first delivery. Just take a few products and add the quantity of one to each.
    Design your _UI_. You can base it on the layout proposed in this [demo](https://redux-shopping-cart-gules.vercel.app/cart), or if you want, implement any other design, but include the following elements:

    1. A _heading_ with the text "**Shopping Cart"**.
    1. A grid with the products of the cart, and for each product on the grid, show the following elements:

        - [x] A _label_ with the text "**Product details"**.
        - [x] At least one _image_ of the product.
        - [x] The product _name_.
        - [x] An _input_ field with a numeric _type_ for the _quantity_ of the product and its label "**Quantity"**.
        - [x] The product _price_ and its label "**Price"**.
        - [x] The _total_ by multiplying the _quantity_ by the product _price._ And its label "**Total"**.
        - [x] A _button_ without functionality with the text "**Remove"**.
    1. The summary section with the following elements:
        - [x] A _heading_ with the text "**Summary"**.
        - [x] The _total items_ in the cart and its label "**Items**".
        - [x] The _total cost_ of the items in the cart and its label "**Total cost**".
        - [x] A _button_ without functionality with the text "**Checkout"**.

1. Create the **Login** module and design your _UI_. You can base it on the layout proposed in this [demo](https://redux-shopping-cart-gules.vercel.app/login), or if you want, implement any other design, but include the following elements:
    1. A _heading_ with the text "**Welcome to the WizeStore!**".
    1. An _input_ field with a text _type_ for the username and its label "**Username**".
    1. An _input_ field with a password _type_ and its label "**Password**".
    1. A _button_ with the text "**Login".**
1. On the **Login** module, authenticate your user using the **loginApi** function located on `src/utils/api.js`. If the users are not authenticated, redirect them to the **Login** module.
1. Deploy your app on [**Netlify**](https://www.netlify.com/), [**Firebase**](https://firebase.google.com/products-build), [**Heroku**](https://www.heroku.com/), [**GitHub Pages**](https://pages.github.com/), or any other hosting service you prefer.
1. When you meet all _AC_ of this second deliverable, fill out this [form](https://docs.google.com/forms/d/e/1FAIpQLSeXxiqrN2BjLTVF79xI6OdCedGgaw_6pxWOrNEoxDkEaExEWA/viewform) and add the _URL_ of your _PR_ and the _URL_ of your deployment.

</td>
</tr>
</table>

#### Acceptance criteria for the second deliverable

The following is the list of acceptance criteria (_AC_) and points for completing your second deliverable:

| **AC** | **Description** | **Points** |
| :--- | :--- | ---: |
| 1 | :ballot_box_with_check: Your **Cart** module reads products correctly from this [mock](http://public/data/products.json) file. | 10 |
| 2 | :ballot_box_with_check: Your **Cart** module displays your _CSS styles_ correctly. | 10 |
| 3 | :ballot_box_with_check: For each product, the following elements render correctly:<br>&nbsp;&nbsp;• One _image_ of the product.<br>&nbsp;&nbsp;• The product _name_ and its _label_ "**Product details"**.<br>&nbsp;&nbsp;• The _quantity input_ and its label "**Quantity"**.<br>&nbsp;&nbsp;• The product _price_ and its _label_ "**Price"**.<br>&nbsp;&nbsp;• The _total_ amount and its _label_ "**Total"**.<br>&nbsp;&nbsp;• The "**Remove**" _button_ without functionality.| 15 |
| 4 | :ballot_box_with_check: The "**Quantity"** _input_ only allows positive numbers and affects the _total_ cost of the product, the total _items_, and the _total cost_ in the "**Summary"** section. | 10 |
| 5 | :ballot_box_with_check: For the "**Summary"** section, the following elements render correctly:<br>&nbsp;&nbsp;• The _heading_ with the text "**Summary".**<br>&nbsp;&nbsp;• The _total items_ in the cart and its label "**Items"**.<br>&nbsp;&nbsp;• The _total cost_ of the items in the cart and its label "**Total cost"**.<br>&nbsp;&nbsp;• The "**Checkout"** _button_ without functionality. | 15 |
| 6 | :ballot_box_with_check: Your **Login** module displays your _CSS styles_ correctly. | 10 |
| 7 | :ballot_box_with_check: Your **Login** module render correctly the following elements:<br>&nbsp;&nbsp;• The _heading_ with the text "**Welcome to the WizeStore!**".<br>&nbsp;&nbsp;• The _username input_ and its label "**Username**".<br>&nbsp;&nbsp;• The _user password input_ and its label "**Password**".<br>&nbsp;&nbsp;• The "**Login"** _button_. | 15 |
| 8 | :ballot_box_with_check: Your **Products** and **Cart** modules redirect to the **Login** module if the user is not authenticated. | 15 |

### Third and last delivery

In this final assignment, you will fetch the [**API**](https://62ace26a720b29256841ed36--cheery-quokka-c3476d.netlify.app/#/) and add [**Redux Toolkit**](https://redux-toolkit.js.org/introduction/getting-started) to manage the state of your application.


Stay tuned on [**Slack**](https://wizelineacademy.slack.com/archives/C03KCQ0CPDM) because we will send you your **API key** on Friday, July 8th, 2022, so you will be allowed access to the [API](https://wizeline-academy-react-redux-api.netlify.app/).


<table>
<tr>
<td>

#### Requirements of the third deliverable

1. Create a new branch with the name `feat/deliverable3` derived from `main` on your forked repository.
1. Add [**Redux Toolkit**](https://redux-toolkit.js.org/introduction/getting-started) to your project to simplify your _store_ setup, your _reducers_, and your _update logic_.
1. On the **Products** module, instead of reading from the **mock file**, now use `createAsyncThunk` and your _API Key_ to fetch data _asynchronously_ from the `/products` endpoint of this [API](https://62ace26a720b29256841ed36--cheery-quokka-c3476d.netlify.app/#/).
1. Save products and quantities in the **Redux** _store_ when the user clicks on the "**Add to cart**" buttons in the **Products** module.
1. Read those products and quantities from the **Redux** _store_ and allow updates and deletes when the user interacts with the "**Quantity"** _input_ and the "**Remove"** _button_ in the **Cart** module.
1. Allow the user to click the "**Checkout**" button only if there are items in the cart, and when that happens, use `createAsyncThunk` and your _API Key_ to post an order using the `/orders` endpoint of this [API](https://62ace26a720b29256841ed36--cheery-quokka-c3476d.netlify.app/#/default/post_orders). Show the _API_ response, the error if something goes wrong, or the "**order**" and "**message"** if the post is successful.
1. Deploy your app on [**Netlify**](https://www.netlify.com/), [**Firebase**](https://firebase.google.com/products-build), [**Heroku**](https://www.heroku.com/), [**GitHub Pages**](https://pages.github.com/), or any other hosting service you prefer.
1. When you meet all _AC_ of this third deliverable, fill out this [form](https://docs.google.com/forms/d/e/1FAIpQLSeXxiqrN2BjLTVF79xI6OdCedGgaw_6pxWOrNEoxDkEaExEWA/viewform) and add the _URL_ of your _PR_ and the _URL_ of your deployment.

</td>
</tr>
</table>

#### Acceptance criteria for the third deliverable

The following is the list of acceptance criteria (_AC_) and points for completing your third deliverable:

| **AC** | **Description** | **Points** |
| :--- | :---- | ---: |
| 1 | :ballot_box_with_check: Your **Products** module fetches the [API](https://62ace26a720b29256841ed36--cheery-quokka-c3476d.netlify.app/#/) | 15 |
| 2 | :ballot_box_with_check: Your project uses **Redux Toolkit** for its global state management. | 25 |
| 3 | :ballot_box_with_check: On the **Products** module, the **"Add to cart"** _buttons_ allow adding products to the **Cart** module. | 15 |
| 4 | :ballot_box_with_check: On the **Cart** module, the "**Quantity"** _input_ updates the **Redux** _store_ and affects the totals of that product and the "**Summary**" totals. | 15 |
| 5 | :ballot_box_with_check: On the **Cart** module, the "**Remove"** _buttons_ allow removing products from the **Cart** module and affect the "**Summary"** totals. | 15 |
| 6 | :ballot_box_with_check: On the **Cart** module, the "**Checkout"** _button_ displays the _API_ response on another page if there are items in the cart. | 15 |

### Bonus

The bonus is a plus that helps us know you better and increments your final score. Consider the following:

| **Bonus** | **Description** | **Points** |
| :--- | :--- | ---: |
| 1 | :ballot_box_with_check: Use _unit testing_ to validate your components using [**Jest**](https://jestjs.io/docs/getting-started), [**React Testing Library**](https://testing-library.com/docs/), and/or [**Mock Service Worker**](https://mswjs.io/). | 10 |
| 2 | :ballot_box_with_check: Utilize third-party authentication providers for your **Login** module like [**Auth0**](https://auth0.com/docs/). | 10 |
| 3 | :ballot_box_with_check: Add a _search bar_ functionality to the **Products** module. | 10 |
| 4 | :ballot_box_with_check: Add products to the **Favorites** module. | 10 |
