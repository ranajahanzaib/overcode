/**
 * Copyright (c) 2021-present, Rana Jahanzaib
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Performs a check on the given value if it's null or not
 * @param  {} v the value to check
 * @return boolean true if the value is null, false otherwise.
 */
export const isNull = (v) => {
  if (typeof v === null) return true;
  return false;
};

/**
 * Performs a check on the given value if it's null or not
 * @param  {} v the value to check
 * @return boolean false if the value is null, true otherwise.
 */
export const isNotNull = (v) => !isNull(v);
