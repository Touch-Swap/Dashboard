"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-is";
exports.ids = ["vendor-chunks/unist-util-is"];
exports.modules = {

/***/ "(ssr)/./node_modules/unist-util-is/convert.js":
/*!***********************************************!*\
  !*** ./node_modules/unist-util-is/convert.js ***!
  \***********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = convert\n\nfunction convert(test) {\n  if (test == null) {\n    return ok\n  }\n\n  if (typeof test === 'string') {\n    return typeFactory(test)\n  }\n\n  if (typeof test === 'object') {\n    return 'length' in test ? anyFactory(test) : allFactory(test)\n  }\n\n  if (typeof test === 'function') {\n    return test\n  }\n\n  throw new Error('Expected function, string, or object as test')\n}\n\n// Utility assert each property in `test` is represented in `node`, and each\n// values are strictly equal.\nfunction allFactory(test) {\n  return all\n\n  function all(node) {\n    var key\n\n    for (key in test) {\n      if (node[key] !== test[key]) return false\n    }\n\n    return true\n  }\n}\n\nfunction anyFactory(tests) {\n  var checks = []\n  var index = -1\n\n  while (++index < tests.length) {\n    checks[index] = convert(tests[index])\n  }\n\n  return any\n\n  function any() {\n    var index = -1\n\n    while (++index < checks.length) {\n      if (checks[index].apply(this, arguments)) {\n        return true\n      }\n    }\n\n    return false\n  }\n}\n\n// Utility to convert a string into a function which checks a given node’s type\n// for said string.\nfunction typeFactory(test) {\n  return type\n\n  function type(node) {\n    return Boolean(node && node.type === test)\n  }\n}\n\n// Utility to return true.\nfunction ok() {\n  return true\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1pcy9jb252ZXJ0LmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZmluZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtaXMvY29udmVydC5qcz8wNGUxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnZlcnRcblxuZnVuY3Rpb24gY29udmVydCh0ZXN0KSB7XG4gIGlmICh0ZXN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gb2tcbiAgfVxuXG4gIGlmICh0eXBlb2YgdGVzdCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZUZhY3RvcnkodGVzdClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdGVzdCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJ2xlbmd0aCcgaW4gdGVzdCA/IGFueUZhY3RvcnkodGVzdCkgOiBhbGxGYWN0b3J5KHRlc3QpXG4gIH1cblxuICBpZiAodHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdGVzdFxuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBmdW5jdGlvbiwgc3RyaW5nLCBvciBvYmplY3QgYXMgdGVzdCcpXG59XG5cbi8vIFV0aWxpdHkgYXNzZXJ0IGVhY2ggcHJvcGVydHkgaW4gYHRlc3RgIGlzIHJlcHJlc2VudGVkIGluIGBub2RlYCwgYW5kIGVhY2hcbi8vIHZhbHVlcyBhcmUgc3RyaWN0bHkgZXF1YWwuXG5mdW5jdGlvbiBhbGxGYWN0b3J5KHRlc3QpIHtcbiAgcmV0dXJuIGFsbFxuXG4gIGZ1bmN0aW9uIGFsbChub2RlKSB7XG4gICAgdmFyIGtleVxuXG4gICAgZm9yIChrZXkgaW4gdGVzdCkge1xuICAgICAgaWYgKG5vZGVba2V5XSAhPT0gdGVzdFtrZXldKSByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG5cbmZ1bmN0aW9uIGFueUZhY3RvcnkodGVzdHMpIHtcbiAgdmFyIGNoZWNrcyA9IFtdXG4gIHZhciBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCB0ZXN0cy5sZW5ndGgpIHtcbiAgICBjaGVja3NbaW5kZXhdID0gY29udmVydCh0ZXN0c1tpbmRleF0pXG4gIH1cblxuICByZXR1cm4gYW55XG5cbiAgZnVuY3Rpb24gYW55KCkge1xuICAgIHZhciBpbmRleCA9IC0xXG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGNoZWNrcy5sZW5ndGgpIHtcbiAgICAgIGlmIChjaGVja3NbaW5kZXhdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vLyBVdGlsaXR5IHRvIGNvbnZlcnQgYSBzdHJpbmcgaW50byBhIGZ1bmN0aW9uIHdoaWNoIGNoZWNrcyBhIGdpdmVuIG5vZGXigJlzIHR5cGVcbi8vIGZvciBzYWlkIHN0cmluZy5cbmZ1bmN0aW9uIHR5cGVGYWN0b3J5KHRlc3QpIHtcbiAgcmV0dXJuIHR5cGVcblxuICBmdW5jdGlvbiB0eXBlKG5vZGUpIHtcbiAgICByZXR1cm4gQm9vbGVhbihub2RlICYmIG5vZGUudHlwZSA9PT0gdGVzdClcbiAgfVxufVxuXG4vLyBVdGlsaXR5IHRvIHJldHVybiB0cnVlLlxuZnVuY3Rpb24gb2soKSB7XG4gIHJldHVybiB0cnVlXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unist-util-is/convert.js\n");

/***/ })

};
;