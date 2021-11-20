/**
 * Copyright (c) 2020-present, Rana Jahanzaib
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Returns a time object with the current time.
 * @param  {string} date Returns current date
 * @param  {string} time Returns current time
 * @param {string} timestamp Returns current timestamp
 */
const time = () => {
  const obj = {
    now: () => {
      return {
        time: new Date().toString(),
        date: new Date().toLocaleDateString(),
      };
    },
  };
  return obj;
};

export { time };
