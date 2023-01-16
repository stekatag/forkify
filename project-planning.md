# Project planning and architecture in the Forkify App

## Project Planning

User Stories (1) ➡️ Features (2) ➡️ Flowchart (3) ➡️ Architecture (4) ➡️ Development (5)

### 1. User Stories

👉 **User story:** Description of the application’s functionality from the user’s perspective.\
👉 **Common format:** As a _[type of user]_, I want _[an action]_ so that _[a benefit]_

1. As a user, I want to **search for recipes**, so that I can find new ideas for meals
2. As a user, I want to be able to **update the number of servings**, so that I can cook a meal for different number of people
3. As a user, I want to **bookmark recipes**, so that I can review them later
4. As a user, I want to be able to **create my own recipes**, so that I have them all organized in the same app
5. As a user, I want to be able to **see my bookmarks and own recipes when I leave the app and come back later**, so that I can close the app safely after cooking

### 2. Features

User stories ➡️ Features

1. Search for recipes\
   👉 Search functionality: input field to send request to API with searched keyword\
   👉 Display results with pagination\
   👉 Display recipe with cooking time, servings and ingredients
2. Update the number of servings\
   👉 Change servings functionality: update all ingredients according to current number of servings
3. Bookmark recipes\
   👉 Bookmark functionality: display list of all bookmarked recipes
4. Create my own recipes\
   👉 User can upload recipes\
   👉 User recipes will automatically be bookmarked\
   👉 User can only see their recipes, not from other users
5. See my bookmarks and own recipes when I leave the app and come back later\
   👉 Local storage: store bookmark data using local storage\
   👉 On page load, read saved bookmarks from local storage and display them

### 3. Flowchart

Features ➡️ Flowchart
![Flowchart](https://i.imgur.com/xm3OKWv.png)

## Why worry about architecture?

- Like a house, software needs a structure: the way we **organize our coude**
- A project is never done! We need to be able to easily **change it in the future**
- We can use our own architecutre (Mapty project)
- We can use a well-established architecture pattern like MVC, MVP, Flux, etc (**this project**)
- We can use a framework like React, Angular, Vue, etc.
- We also need to be able to easily **add new features**

## Components of any architecture

| Business Logic                                                                 | State                                                                | HTTP Library                                                | Application Logic (Router)                                                     | Presentation Logic (UI Layer)                                       |
| ------------------------------------------------------------------------------ | -------------------------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| 👉 Code that **solves the actual business problem;**                           | 👉 Essentially **stores all the data about the application**         | 👉 Responsible for making and receiving AJAX requests       | 👉 Code that is only concerned about the **implementation of the app itselft** | 👉 Code that is concerned about the visible part of the application |
| 👉 Directly related to what business does and what it needs;                   | 👉 Should be the _single source of truth_                            | 👉 Optional, but almost always necessary in real-world apps | 👉 Handles navigation and UI events                                            | 👉 Essentially displays application state                           |
| 👉 **Example:** sending messages, storing transactions, calculating taxes, ... | 👉 UI should be kept in sync with the state 👉 State libraries exist |

## MVC Architecture

![MVC Architecture](https://i.imgur.com/OLQhjgf.png)

### Model, View and Controller in Forkify (recipe display only)

![MVC Architecture in Forkify](https://i.imgur.com/BRnkOXN.png)

### MVC Implementation (recipe display only)

![MVC Implementation in Forkify](https://i.imgur.com/bUq4UNE.png)
