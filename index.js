/**
 * Copyright (c) 2020-present, Rana Jahanzaib
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { isEmpty, isNotEmpty } from "./lib/checks/isEmpty.js";
import { isNull, isNotNull } from "./lib/checks/isNull.js";
import { is } from "./lib/checks/is.js";
import { random } from "./lib/number/index.js";

export const overcode = {
  random,
  check: {
    ifEmpty: isEmpty,
    ifNotEmpty: isNotEmpty,
    ifNull: isNull,
    ifNotNull: isNotNull,
  },
  isEmpty,
  isNotEmpty,
  isNull,
  isNotNull,
  is,
};

export { random, is, isEmpty, isNotEmpty, isNotNull, isNull };
export default overcode;
