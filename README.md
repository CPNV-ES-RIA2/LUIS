# RIA2 - LUIS

[TOC]

## Description

This project is part of the RIA2 course at the Centre Professionnel du Nord Vaudois (CPNV). The goal of this project is to create a Rich Internet Application (RIA) that will interact with the microservices created in the last semester BI1 course ([see repository here](https://github.com/lpodev/BI-Project)).

The user will be able to submit an image analyse request to the microservices to obtain the labels of the image.

## Getting Started

Beware that this documentation is made for MacOS users. If you are using another OS, you will need to adapt the commands or the installation process.

### Pre-requisites

- Node.js (version 10.2.4 or higher)
- Visual Studio Code (or any other IDE) (version 1.85.1 or higher)
- Docker (25.0.3 or higher)

### Configuration

In order to develop, you will need to install the dependencies with the following command:

```bash
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Docker

Make sure you are in the `lpo-vision` folder for the following commands and chose the build according to your environment.

When running the docker container, the web application will be accessible at [localhost:8080](http://localhost:8080).

#### Development build

- Build the Docker image:

```bash
docker build --target development -t "lpo-vision:dev" .
```

- Run the Docker container:

```bash
docker run -p 8080:8080 lpo-vision:dev
```

#### Production build

- Build the Docker image:

```bash
docker build --target production -t "lpo-vision:prod" .
```

- Run the Docker container:

```bash
docker run -p 8080:8080 lpo-vision:prod
```

## Testing

### Cypress

You can find Cypress tests at `cypress/e2e` folder.

#### Cypress tests running

First launch your server with npm:

```bash
npm run dev
````

Then run the Cypress tests headlessly:

```bash
npx cypress run
```

### Vitest

You can find Vitest tests inside a `__tests__` folder close to their respective component (for example, `view/analyes/__tests__`).

#### Vitest tests running

Run tests with npm:

```bash
npm run test
```

## Directory Structure

```bash
.
├── LICENSE
├── README.md
├── documentation
│   ├── architecture
│   │   ├── architecture_BI-Project.excalidraw
│   │   └── architecture_BI-Project.png
│   └── design
│       ├── lpo-vision-wireframe.fig
│       └── lpo-vision-wireframe.png
└── lpo-vision
    ├── Dockerfile
    ├── README.md
    ├── cypress
    │   ├── e2e
    │   │   └── form.spec.cy.js
    │   ├── fixtures
    │   │   └── porto-lineup.jpg
    │   ├── screenshots
    │   └── support
    │       ├── commands.js
    │       └── e2e.js
    ├── cypress.config.js
    ├── index.html
    ├── jsconfig.json
    ├── package-lock.json
    ├── package.json
    ├── public
    │   └── favicon.ico
    ├── src
    │   ├── App.vue
    │   ├── components
    │   │   ├── TheLocaleDropdown.vue
    │   │   ├── __tests__
    │   │   │   └── TheLocaleDropdown.spec.js
    │   │   └── layout
    │   │       ├── TheHeader.vue
    │   │       └── __tests__
    │   │           └── TheHeader.spec.js
    │   ├── i18n
    │   │   ├── index.js
    │   │   └── languages
    │   │       ├── de.json
    │   │       ├── en.json
    │   │       ├── fr.json
    │   │       └── pt.json
    │   ├── main.js
    │   └── views
    │       └── analyses
    │           ├── TheAnalyseForm.vue
    │           ├── TheAnalyseResult.vue
    │           └── __tests__
    │               ├── TheAnalyseForm.spec.js
    │               └── TheAnalyseResult.spec.js
    └── vite.config.js

21 directories, 34 files
```

## Collaborate

If you want to collaborate to this project, you can fork it and create a pull request. You can also contact me at [lpodev@proton.me](mailto:lpodev@proton.me). Please respect the following guidelines:

- Every commit message must be written in English and must be clear and concise. You can use [this guide](https://chris.beams.io/posts/git-commit/) to help you write your commit messages.
- To push, you will need to follow the [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) guidelines. As explained in the repository wiki in the branch strategy section, you will need to create a feature branch from the `develop` branch and create a pull request to merge your feature branch into the `develop` branch. For example, if you want to add a new feature, you will need to create a `feature/your-feature` branch from the `develop` branch.
- Please respect the naming conventions for the files and the code explained in the repository wiki in the code conventions section.

## License

This project is under the [MIT](/LICENSE) license.

## Contact

You can contact me at [lpodev@proton.me](mailto:lpodev@proton.me) or create an issue on the repository.
