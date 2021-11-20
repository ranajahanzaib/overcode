/**
 * Copyright (c) 2020-present, Rana Jahanzaib
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export { random };
