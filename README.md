# Introduction to CodeceptJS + PuppeteerJS

There are a variety of tools in modern JavaScript which are focused on end to end testing. However, when you need to choose one tool you can take up for a week evaluating pros and cons of different tools. CodeceptJS is a testing framework. But unlike other testing tools for JavaScript, it uses most popular JS libraries to drive your browser and adds high-level API on top of them. That’s why a test written for webdriverio could be executed in Protractor or Puppeteer.The test is very easy to read. It can even be understood by the non-technical person.

CodeceptJS an execute on multiple driver with multiple configurations either parallelly or sequentially, with a little bit of customization with no extra code.

## CodeceptJS + PuppeteerJS installation
Only we need have installed a version equal or higher to **Node v11** in the machine.

Initially we create the directory of the project we are going to work on, and place ourselves in its path:
```
mkdir codeceptjs-puppeteerjs
cd codeceptjs-puppeteerjs
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

## Initiation
The next step will be to start codecept:
```
npx codeceptjs init
```
Then you'll see in the terminal:
```
npx: installed 311 in 24.011s

  Welcome to CodeceptJS initialization tool
  It will prepare and configure a test environment for you

Installing to /home/julian_villabona/Desktop/CodeceptJS
? Where are your tests located? (./*_test.js) 
```
Press enter key
```
? What helpers do you want to use? 
  WebDriver 
❯ Puppeteer 
  TestCafe 
  Protractor 
  Nightmare 
  Appium
```
Select in this case **Puppeteer** and press enter.
```
? Where should logs, screenshots, and reports to be stored? (./output)
```
Press key enter to select that you'll store your logs, screenshots and reports in `./output`.
```
? Do you want localization for tests? (See https://codecept.io/translation/) (Use arrow keys)
❯ English (no localization) 
  pt-BR 
  ru-RU 
  it-IT 
  pl-PL 
  zh-CN 
  zh-TW
```
Select English and press enter.
```
Configure helpers...
? [Puppeteer] Base url of site to be tested (http://localhost)
```
Enter de base url, in this case is: http://executeautomation.com/demosite
```
? [Puppeteer] Show browser window (Y/n)
```
Enter **Y** and press enter key.
```
Steps file created at ./steps_file.js
Config created at /home/julian_villabona/Desktop/CodeceptJS/codecept.conf.js
Directory for temporary output files created at './output'
Intellisense enabled in /home/julian_villabona/Desktop/CodeceptJS/jsconfig.json
TypeScript Definitions provide autocompletion in Visual Studio Code and other IDEs
Definitions were generated in steps.d.ts

 Almost ready... Next step:
Creating a new test...
----------------------
? Feature which is being tested (ex: account, login, etc)
```
Enter the feature name, in this case ***login***
```
? Filename of a test (login_test.js)
```
Press enter key to create the file ***login.test.js***
```
Test for login_test.js was created in /home/julian_villabona/Desktop/CodeceptJSlogin_test.js

--
CodeceptJS Installed! Enjoy supercharged testing! 🤩
Find more information at https://codecept.io
```
Finally CodeceptJS has been installed.

## BDD and Page Objects
To add gherkin (features & step_definitions):
```
npx codeceptjs gherkin:init
```
If you want running all the features:
```
npx codeceptjs run --features
```
To add page objects:
```
npx codeceptjs gpo
```

## General
When you run it for the first time, the **cypress** folder will be created, which contains the following folder structure:

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
