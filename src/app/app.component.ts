import { Component } from '@angular/core';
import { SNG5LocalStorageService } from './simple-ng5-storage/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple Angular 5 Storage';

  baseStorageObject = testObject;
  baseStorageString = 'Hello world, I am testing you!';

  constructor(private localStorage: SNG5LocalStorageService) { }

  addItemToLocalStorage(): void {
    this.localStorage.setItem('testString', this.baseStorageString);
  }

  logItemFromLocalStorage(): void {
    const storedItem = this.localStorage.getItem('testString');
    alert('StoredItem:::' + storedItem);
  }

  clearAllStorage(): void {
    this.localStorage.clear();
  }

}

// Test Mock Data, Etc...
////////////////////////////////////////////////
export class TestObject {
  name: string;
  age: number;
}

export const testObject: TestObject = {
  name: 'bob',
  age: 33
};

export const testObjectString = '{"name":"bob","age":33}';
