/**
 * Copyright (c) 2021-present, Rana Jahanzaib
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Returns a random element from the given array. If the array is empty, returns null.
 * @param  {} ...args
 */
export const either = (...args) => {
  if (args.length === 0) return null;
  const rand = Math.random();
  const index = Math.floor(rand * args.length);
  return args[index];
};

export default either;
