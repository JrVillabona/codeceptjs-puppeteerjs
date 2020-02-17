# Introduction to CodeceptJS + PuppeteerJS
Supercharged End 2 End Testing

## CodeceptJS + PuppeteerJS installation
Only we need have installed a version equal or higher to **Node v11** in the machine.

Initially we create the directory of the project we are going to work on, and place ourselves in its path:
```
mkdir codecept-puppeteer-intro
cd codecept-puppeteer-intro
```
We created the package.json (where the dependencies will be):
```
npm init -y
```
Located on the project route we installed Codecept JS:
```
npm install codeceptjs puppeteer --save-dev
```
This way CodeceptJS will be installed in the **./node_modules**

## Execution
The next step will be to start codecept:
```
npx codeceptjs init
```

## General
Al ejecutarlo por primera vez, se creará la carpeta **cypress**, que contiene la siguiente estructura de carpetas:

- `Fixtures`: Datos estáticos que pueden ser utilizados para los tests.
- `Integration`: Lugar donde colocaremos los tests. Por defecto contiene una carpeta de tests de ejemplo.
- `Plugins`: Permiten acceder, modificar o ampliar el comportamiento interno de Cypress. (Ej: Plugin de Cucumber)
- `Support`: Lugar para colocar comportamientos reutilizables, como comandos personalizados o anulaciones globales, que estarán disponibles para todos los tests.

## Let's write our first test
Under construction...

## Let's run our first test
Now that we have our first test created, let's execute it!

The `run` command will run all the tests we have.
```
npx codeceptjs run --steps
```
In codecept.config.js add within config:
```
multiple: {
    basic: {
      browsers: ['chrome', 'firefox']
    },
```
We can also run the tests on multiple browsers.
```
npx codeceptjs run-multiple basic
```
## Now what's next?

- Codecept.io: https://codecept.io/
