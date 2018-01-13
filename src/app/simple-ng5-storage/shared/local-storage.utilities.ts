import { LocalStorageMessage } from './local-storage.message';

/**
 * Static method utilities for supporting the LocalStorageModule and Service.
 */
export class LocalStorageUtilities {

  /**
   * Function that tests whether the specified type of storage is
   * supported and available. Example adapated from mozilla.org:
   * https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
   * @param {string} type Storage Type
   * @param {Window} window DOM Window Object
   * @returns {boolean}
   */
  public static storageAvailableCheck(type: string, window: Window): boolean {
    let storage: any;

    if (window === null) {
      throw new Error(LocalStorageMessage.WINDOW_UNAVAILABLE);
    }

    try {
      storage = window[type];
      const storageTestKey = '__storage_test__';

      storage.setItem(storageTestKey, storageTestKey);
      storage.removeItem(storageTestKey);
      return true;
    } catch (exception) {
      return exception instanceof DOMException && (
          // everything except Firefox
        exception.code === 22 ||
        // Firefox
        exception.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        exception.name === 'QuotaExceededError' ||
        // Firefox
        exception.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage.length !== 0;
    }
  }


}
