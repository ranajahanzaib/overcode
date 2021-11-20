/**
 * Copyright (c) 2020-present, Rana Jahanzaib
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Performs a check on the given value.
 * @param  {} v
 * @return boolean true if the value is empty, false otherwise.
 */
export const isEmpty = (v) => {
  if (typeof v === null || typeof v === undefined) return typeof v;
  if (v !== "" && v !== {} && v !== []) {
    return false;
  }
  return true;
};

/**
 * Performs a check on the given value.
 * @param  {} v
 * @return boolean false if the value is empty, true otherwise.
 */
export const isNotEmpty = (v) => !isEmpty(v);
