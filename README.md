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
This way Cypress will be installed in the **./node_modules**

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
Escribir tests en CodeceptJS es muy sencillo. El objetivo de este primer test será navegar a la página oficial de **Cypress.io**, ir a la sección de **Support** y verificar que en la URL esté la ruta correspondiende a la página de **Support**. Para ello, en primer lugar crearémos un archivo Javascript dentro de la carpeta **Integration** lo podríamos llamar `support.spec.js` y dentro del archivo escribirémos el siguiente código:
```
describe('Test web oficial de cypress.io', () => {
  it('Visitar sección Support', ()=> {
    cy.visit('https://www.cypress.io/')
    cy.get(':nth-child(2) > :nth-child(1) > .header__NavLink-xi2ch0-6').click()
    cy.url().should('include', '/support')
  } )
} )
```
Analicemos línea a línea:
```
describe('Test web oficial de cypress.io', () => {
```
Esta línea define nuestro suite de tests, es importante darle un nombre descriptivo.
```
it('Visitar sección Support', ()=> {
```
Primera línea de un nuevo test dentro de nuestro suite de tests.
```
cy.visit('https://www.cypress.io/')
```
El comando **cy.visit** accede a la URL especificada.
```
cy.get(':nth-child(2) > :nth-child(1) > .header__NavLink-xi2ch0-6').click()
```
El comando **cy.contains** busca el elemento que contenga el texto que se le ha pasado como parámetro, y después hace click en él.
```
cy.url().should('include', '/support')
```
A través del comando **cy.url** nos aseguramos de que la ruta a la que accedemos es la correcta.

## Let's run our first test
Now that we have our first test created, let's execute it!

The `run` command will run all the tests we have.
```
npx codeceptjs run --steps
```
We can also run the tests on multiple browsers.
```
npx codeceptjs run-multiple basic
```
## Now what's next?

- Codecept.io: https://codecept.io/
