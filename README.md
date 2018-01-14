# Simple Angular 5 Storage

## Summary

Very simple, lightweight module that provides local and session storage to an Angular 5 application.

Page on npm: https://www.npmjs.com/package/simple-ng5-storage

## Getting Started

Adding the Simple Angular 5 Storage service could not be simpler!

1. To install from npm: `npm install --save simple-ng5-storage`.
2. Add the `SimpleNg5StorageModule` to the imports of your app.module.ts.
3. Add the storage service provider your component constructor:
	- For LocalStorage: `constructor(private localStorage: SNG5LocalStorageService)`.
	- For SessionStorage: `constructor(private sessionStorage: SNG5SessionStorageService)`.

## How to use Simple Angular 5 Storage

After you have added the storage service provider to your component, you can get started saving and retrieving values immediately. All of the examples below highlight examples for local storage.

If you would like to use session storage, just change the service in the constructor to:
`constructor(private sessionStorage: SNG5SessionStorageService)`

### Storing an item with `setItem`
To store an item, use the `setItem` method.

Example:
```typescript
export class MyComponent {

	constructor(private localStorage: SNG5LocalStorageService)

	addStringToStorage(myString: string): void {
		this.localStorage.setItem('myStorage', myString);
	}

}
```

### Retrieving an item with `getItem`
To return a saved item from storage, use the `getItem` method.

Example:
```typescript
export class MyComponent {

	constructor(private localStorage: SNG5LocalStorageService)

	getStringFromStorage(myString: string): void {
		return this.localStorage.getItem('myStorage');
	}

}
```

### Removing an item with `removeItem`
To remove an item from storage, use the simple `removeItem` method.

Example:
```typescript
export class MyComponent {

	constructor(private localStorage: SNG5LocalStorageService)

	removeStringFromStorage(myString: string): void {
		return this.localStorage.removeItem('myStorage');
	}

}
```

### Storing an Object with `setObject`
To save an object, it is important to use the `setObject` method.

Example:
```typescript
export class MyComponent {

	constructor(private localStorage: SNG5LocalStorageService)

	addMyObjectToStorage(): void {
		const myObject = {
			id: 5,
			message: 'Simple Angular 5 Storage rocks!!'
		};

		// Store Object
		this.localStorage.setObject('myStoredObject', myObject);
	}

}
```

### Retrieving an Object with `getObject`
To return an object, `getObject` will provide your saved item back as an object.

Example:
```typescript
export class MyComponent {

	constructor(private localStorage: SNG5LocalStorageService)

	addMyObjectToStorage(): any {
		return this.localStorage.getObject('myStoredObject');
	}

}
```

### Retrieving a TypedObject with `getTypedObject<T>`
To return a typedObject, you specify your type with the `getTypedObject` method.

Example:
```typescript
// Example Type
export interface MyCustomType {
	id: number;
	message: string;
}

export class MyComponent {

	constructor(private localStorage: SNG5LocalStorageService)

	getTypedObjectFromStorage(): MyCustomType {
		return this.localStorage.getTypedObject<MyCustomType>('myStoredObject');
	}

}
```

### Removing an Object with `removeItem`
To remove an object from storage, you use the same method you would use for removing a string. 

Example:
```typescript
export class MyComponent {

	constructor(private localStorage: SNG5LocalStorageService)

	removeStringFromStorage(myString: string): void {
		return this.localStorage.removeItem('myStorage');
	}

}
```

### Clear all LocalStorage with `clear`
To clear all local storage, use the `clear` method.

Example:
```typescript
export class MyComponent {

	constructor(private localStorage: SNG5LocalStorageService)

	clearAllLocalStorage(): void {
		this.localStorage.clear();
	}

}
```


## Development Environment Information

The base application for this project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

To run the tests, you must have a ChromeHeadless-compatible version of Google Chrome installed in your environment.   

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
