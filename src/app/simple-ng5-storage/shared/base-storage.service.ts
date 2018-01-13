import { ILocalStorage } from './local-storage.interface';
import { LocalStorageUtilities } from './local-storage.utilities';

export abstract class BaseStorageService implements ILocalStorage {

  window: Window;
  storageType: string;

  clear(): void {
    this._clear();
  }

  setItem(storageKey: string, storageValue: string): void {
    this._setItem(storageKey, storageValue);
  }

  getItem(storageKey: string): string {
    return this._getItem(storageKey);
  }

  removeItem(storageKey: string): void {
    this._removeItem(storageKey);
  }

  setObject(storageKey: string, storageValue: any): void {
    const objString = LocalStorageUtilities.objectToString(storageValue);
    this.setItem(storageKey, objString);
  }

  getObject(storageKey: string): any {
    const storageValue = this.getItem(storageKey);
    return LocalStorageUtilities.stringToObject(storageValue);
  }

  getTypedObject<T>(storageKey: string): T {
    const storageValue = this.getItem(storageKey);
    return LocalStorageUtilities.stringToTypedObject<T>(storageValue) as T;
  }

  /**
   * Invokes clear method for specified Window Storage.
   * @private
   */
  protected _clear(): void {
    try {
      if (LocalStorageUtilities.storageAvailableCheck(this.storageType, this.window)) {
        const windowStorage = this.window[this.storageType];
        windowStorage.clear();
      }
    } catch (exception) {
      console.error(exception);
    }
  }

  /**
   * Interfaces with specified storage setItem method.
   * @param {string} storageKey Storage key reference.
   * @param {string} storageValue Storage value.
   * @private
   */
  protected _setItem(storageKey: string, storageValue: string): void {
    try {
      if (LocalStorageUtilities.storageAvailableCheck(this.storageType, this.window)) {
        const windowStorage = this.window[this.storageType];
        windowStorage.setItem(storageKey, storageValue);
      }
    } catch (exception) {
      console.error(exception);
    }
  }

  /**
   * Interfaces with specified storage getItem method to return a value.
   * @param {string} storageKey Storage key reference.
   * @returns {string} Storage value.
   * @private
   */
  protected _getItem(storageKey: string): string {
    try {
      if (LocalStorageUtilities.storageAvailableCheck(this.storageType, this.window)) {
        const windowStorage = this.window[this.storageType];
        return windowStorage.getItem(storageKey);
      }
    } catch (exception) {
      console.error(exception);
    }
  }

  /**
   * Interfaces with specified storage removeItem method to clear a value defined by storageKey.
   * @param {string} storageKey Storage key reference.
   * @private
   */
  protected _removeItem(storageKey: string): void {
    try {
      if (LocalStorageUtilities.storageAvailableCheck(this.storageType, this.window)) {
        const windowStorage = this.window[this.storageType];
        windowStorage.removeItem(storageKey);
      }
    } catch (exception) {
      console.error(exception);
    }
  }
}
