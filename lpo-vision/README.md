# lpo-vision

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
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

## Docker setup

### Development

- Build the Docker image:

```bash
docker build --target development -t "lpo-vision:dev" .
```

- Run the Docker container:

```bash
docker run -p 8080:8080 lpo-vision:dev
```

### Production

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
