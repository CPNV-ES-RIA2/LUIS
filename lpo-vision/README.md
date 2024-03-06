# lpo-vision

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

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
