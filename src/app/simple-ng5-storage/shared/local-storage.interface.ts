/**
 * Storage interface definition.
 */
export interface ILocalStorage {

  /**
   * Browser DOM Object.
   */
  window: Window;

  /**
   * Defines type of storage for the service.
   */
  storageType: string;

  /**
   * Clears all storage.
   */
  clear(): void;

  /**
   * Saves item to storage.
   * @param {string} storageKey Storage key reference.
   * @param {string} storageValue Storage value.
   */
  setItem(storageKey: string, storageValue: string): void;

  /**
   * Retrieves an item from storage.
   * @param {string} storageKey Storage key reference.
   * @returns {string}
   */
  getItem(storageKey: string): string;

  /**
   * Removes an item from storage.
   * @param {string} storageKey Storage key reference.
   */
  removeItem(storageKey: string): void;

  /**
   * Saves object to storage.
   * @param {string} storageKey Storage key reference.
   * @param {string} storageValue Storage value.
   */
  setObject(storageKey: string, storageValue: string): void;

  /**
   * Returns an object<any> from storage.
   * @param {string} storageKey Storage key reference.
   * @returns {any}
   */
  getObject(storageKey: string): any;

  /**
   * Returns a typed object object<T> from storage.
   * @param {string} storageKey Storage key reference.
   * @returns {T}
   */
  getTypedObject<T>(storageKey: string): T;
}
