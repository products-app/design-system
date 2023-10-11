<div align="center">
  <a href="https://github.com/products-app/design-system">
    <img src="https://github.com/products-app/products-fe/assets/13439423/9f90454c-c622-4a20-8c3a-c739cd9a7f1b" width="100" /> 
  </a>

  <h3 align="center">Prompt - Shopping Cart (Design System)</h3>

  <p align="center">
    A reusable design system for the Prompt - Shopping Cart
    <br />
    <i>This is a project I'm building as a test, but it's also intended to create a basis for building how a real, scalable application would work.</i>
    <br />
    <a href="https://github.com/products-app/design-system"><strong>Explore the docs »</strong></a>
    <br />
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#npm">NPM</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#running-the-app">Running the app</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

The project consists of 3 sub-projects: design system, api and front-end.<br />
This project is the _design system_ .<br />
is responsible for creating a reusable design system in which components and styles can be implemented following a design pattern.<br />

[Link to preview the project](https://products-app.github.io/design-system/)<br />
[Npm Link packages](https://www.npmjs.com/~leticiabernardo)

### Features

This section lists all the mapped features of the design-system.

#### Common Styles

- [x] Colors
- [x] Fonts
- [x] Font Sizes
- [x] Font Weights
- [x] Space (to use: margin; padding; etc)

#### Components

- [x] Text
- [x] Heading
- [x] Card
- [x] Button
- [x] Checkbox
- [x] Text input
- [x] Text area
- [ ] Sidebar
- [ ] Badge
- [ ] List and List Item
- [ ] Modal
- [ ] Progress Bar
- [ ] Dropdown


Base Green Colors inspiration: [Material UI](https://m2.material.io/design/color/the-color-system.html#color-theme-creation)<br />
Base gray colors inspiration: [Image](https://a8cdesignsimple.files.wordpress.com/2021/03/s_a243c73d449d0c832f50a60059930accb200a4b1166bd37eb1aed423022edca1_1551478674381_artboardcopy9.png)

_New features will be added soon._

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
npm
```sh
npm install npm@latest -g
```

### Installation

1 - Clone the repo
```sh
git clone git@github.com:products-app/design-sytem.git
```
Enter the project folder
```sh
cd design-sytem
```

2 - Install packages
```sh
npm install
```

### Running the app

Running the library is simple, just follow the commands below:

Build the application:

```
npm run build
```

Build the application:<br />
(*with the configuration of observing files and directories*)

```
npm run dev
```

### NPM Submit

Prepare the app to deploy
```
npm run changeset
```

Create a new version to deploy
```
npm run version-packages
```

Submit the new version in npm
```
npm run release
```

## Installed Packages

In this section there is a list explaining the function of each installed package.

- [Typescript](https://www.typescriptlang.org/): strongly typed programming language that builds on JavaScript.
- [Tsup](https://github.com/egoist/tsup): Tool that compiles code into Javascript for use by other applications. Compatible with older applications. Additionally, it compiles faster than the Typescript tool.
- [Stitches](https://stitches.dev/): Run CSS in JS.
- [Vite-Storybook](https://github.com/storybookjs/builder-vite): a frontend workshop for building UI components and pages in isolation.
- [Storybook Deployer](https://www.npmjs.com/package/@storybook/storybook-deployer): deploy storybook
- [Changeset](https://github.com/changesets/action): responsible to publish in npm.

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


<!-- CONTACT -->
## Contact

Letícia Bernardo - [@letisgobabe](https://twitter.com/letisgobabe)

<p align="right">(<a href="#top">back to top</a>)</p>
