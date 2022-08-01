# GameStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

# Frontend Challenge

Single Web Application using Angular. This case study requires you to create single page web application using Angular. You have 72 hours to complete this challenge.

## Task Description

• Create web application that user can be add new game and list created
games
• The app has two pages, a game list and game creation page.
• Game list page show games whose are added by user. User can filter and
delete games
• User can create new game on game creation page
• You can change component design and colors as you wish. It does not have
to be the same as the examples given

### 1. Game List

When user click the new game button navigate user to new game page.
Store game list data on client side. You can use Angular service class or
store management tools like ngrx

### 2. Game Creation Page

• Game creation form has game name, bundle, owner and icon fields
• Name, bundle, owner fields are string and icon field accept file input
• All fields are required
• Owner field should accept only valid email address
• Validate the bundle field with this regex: /^([A-Za-z]{1}[A-Za-z\d_]_\.)+[A-Za-z][a-za-z\d_]_$/
• Use Angular reactive forms or template driven forms
• Form validation
• After user submit game successfully, show message and redirect user to game list page

### 3. Design Pokemon details

You will notice that in the selected section, only the header is designed for you. You have free autonomy over how to design the details section, and you are encouraged to implement the details page yourself.

## What we are looking for

- Ability to create forms
- Ability to implement the various form states (field validation, error, success etc)
- Ability to implement style to spec
- Responsiveness
- Ability to use Graphql correctly
- Ability to integrate a real API
- Ability to implement a pagination API
- Clean-code and separation of component concerns
- Ability to design new UIs
