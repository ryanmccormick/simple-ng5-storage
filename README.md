# Simple Angular 5 Storage

Very simple, lightweight module that provides local and session storage to an Angular 5 application.

## How to use

1. run `npm install --save simple-ng5-storage`.
2. Add the `SimpleNg5StorageModule` to the imports of you app.module.ts.
3. Add to your component constructor `constructor(private localStorage: SNG5LocalStorageService)`.
4. Use it in your component methods. To set an item `this.localStorage.setItem('itemKey', 'hello world!');`.

More documentation to come!


## Development Environment Information

The base application for this project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

To run the tests, you must have a ChromeHeadless-compatible version of Google Chrome installed in your environment.   

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

