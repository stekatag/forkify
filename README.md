<!-- PROJECT LOGO -->

<br />
<p align="center">
  <a href="https://forkify-stekatag.netlify.app/">
    <img src="./src/img/logo.png" alt="Logo" width="85%" height="85%">
  </a>

  <h3 align="center">Forkify</h3>

  <p align="center">
    A recipe search application made with Vanilla JS.
    <br />
    <a href="#about-the-project"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://forkify-stekatag.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/stekatag/forkify/issues">Report Bug</a>
    ·
    <a href="https://github.com/stekatag/forkify/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://forkify-stekatag.netlify.app/)

Forkify is a vanilla JavaScript application that interacts with the Forkify API to fetch and display recipe food data. This app uses modern JavaScript tools, such as Parcel to bundle the modules, and Babel to convert ES6+ features back to ES5.

### Features

- Search and save recipes
- Adjust serving sizes
- View nutritional info
- Access original recipe website
- Bookmark favorite recipes
- Create shopping list
- Make weekly meal plan

### Built With

This app is built with Vanilla JavaScript, HTML and Sass. It's using Parcel as module bundler and NPM as package manager.

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [SCSS](https://sass-lang.com/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript)
- [Parcel](https://parceljs.org/)
- [NPM](https://www.npmjs.com/)

<!-- GETTING STARTED -->

## Getting Started

To get started with project just simply fork this repo or download locally on your System.

To get a local copy up and running follow these simple example steps.

### Prerequisites

Start with the latest version of NPM to avoid any errors:

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [Forkify API_KEY](https://forkify-api.herokuapp.com/v2)
2. Clone the repo
   ```sh
   git clone https://github.com/stekatag/forkify.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```JS
   const KEY = "ENTER YOUR API";
   ```

<!-- USAGE EXAMPLES -->

## Usage

1. The Forkify Recipe App allows users to search for recipes.

2. Users can view the recipe along with the cook time and also
   increase or decrease the amount of servings they need.

3. Bookmarked recipes are stored in local storage so no database was
   required for this application.

4. Create a shopping list of all the ingredients you need for your recipes to make grocery shopping easier and more efficient.

5. Plan your meals for the week by selecting recipes and adding them to your weekly meal plan, helping you stay organized and save time.

_For more examples, please refer to the [Documentation](https://forkify-api.herokuapp.com/v2)_

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/stekatag/forkify/issues) for a list of proposed features (and known issues).

### Proposed features

1. Number of pages between the pagination buttons. ✅

2. Shopping list feature: button on recipe to add ingredients to a list. ✅

3. Weekly meal planning feature: assign recipes to the next 7 days and show
   on a weekly calendar. ✅

4. Nutrition data on each ingredient from spoonacular API (https://
   spoonacular.com/food-api) and calculate total calories of recipe. ✅

5. Dark mode. ✅

6. Responsive design. ✅

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AwesomeNewFeature`)
3. Commit your Changes (`git commit -m 'Add some AwesomeNewFeature'`)
4. Push to the Branch (`git push origin feature/AwesomeNewFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See [license]([license-url]) for more information.

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [The Complete JavaScript Course](https://www.udemy.com/course/the-complete-javascript-course/)
- [Img Shields](https://shields.io)
- [Netlify](https://www.netlify.com/)
- [Google Fonts](https://fonts.google.com/)

<!-- MARKDOWN LINKS & IMAGES -->

[license-url]: https://github.com/stekatag/forkify/LICENSE.txt
[product-screenshot]: ./src/img/screenshot.png
