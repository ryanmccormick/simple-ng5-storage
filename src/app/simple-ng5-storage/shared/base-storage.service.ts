import { ILocalStorage } from './local-storage.interface';
import { LocalStorageUtilities } from './local-storage.utilities';

export abstract class BaseStorageService implements ILocalStorage {

  /**
   * User's local DOM window object.
   */
  window: Window;

  /**
   * Storage type definition.
   */
  storageType: string;

  /**
   * Clears all storage (local or session defined by storageType).
   */
  clear(): void {
    this._clear();
  }

  /**
   * Saves an item to storage.
   * @param {string} storageKey
   * @param {string} storageValue
   */
  setItem(storageKey: string, storageValue: string): void {
    this._setItem(storageKey, storageValue);
  }

  /**
   * Returns an item from storage.
   * @param {string} storageKey
   * @returns {string}
   */
  getItem(storageKey: string): string {
    return this._getItem(storageKey);
  }

  /**
   * Removes an item from storage.
   * @param {string} storageKey
   */
  removeItem(storageKey: string): void {
    this._removeItem(storageKey);
  }

  /**
   * Saves an object to storage.
   * @param {string} storageKey
   * @param storageValue
   */
  setObject(storageKey: string, storageValue: any): void {
    const objString = LocalStorageUtilities.objectToString(storageValue);
    this.setItem(storageKey, objString);
  }

  /**
   * Returns an object from storage.
   * @param {string} storageKey
   * @returns {any}
   */
  getObject(storageKey: string): any {
    const storageValue = this.getItem(storageKey);
    return LocalStorageUtilities.stringToObject(storageValue);
  }

  /**
   * Returns a typed object from storage.
   * @param {string} storageKey
   * @returns {T}
   */
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
