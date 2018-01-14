import { Injectable } from '@angular/core';

/**
 * Returns the user's local DOM window object.
 * @returns {Window}
 */
function getWindow(): Window {
  try {
    return window;
  } catch (exception) {
    console.log('Window does not exist in this environment.');
    return null;
  }
}

/**
 * StorageWindowRefService creates the ability to provide the
 * user's DOM window object as a singleton through Angular's
 * Dependency Injection mechanism.
 */
@Injectable()
export class StorageWindowRefService {

  /**
   * StorageWindowRefService creates the ability to provide the
   * user's DOM window object as a singleton through Angular's
   * Dependency Injection mechanism.
   */
  constructor() { }

  /**
   * Getter for returning the user's DOM window object.
   * @returns {Window}
   */
  get nativewindow(): Window {
    return getWindow();
  }

}
