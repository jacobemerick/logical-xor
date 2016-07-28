/**
 * Two-parameter xor function
 */
function simpleXor(a, b) {
  return ((!a && b) || (a && !b));
}

/**
 * Multi-parameter xor function
 */
function multiXor(parameters) {
  let result = parameters.shift();

  while (parameters.length) {
    result = simpleXor(result, parameters.shift());
  }

  return result;
}

/**
 * Accessible export
 */
module.exports = function exposedXor() {
  let parameters = Object.keys(arguments).map(key => arguments[key]);

  if (parameters.length < 1) {
    throw new Error('Must pass in at least one argument');
  }

  if (parameters.length === 1) {
    return parameters.shift();
  }

  return multiXor(parameters);
};
