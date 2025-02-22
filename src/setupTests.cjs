require("@testing-library/jest-dom");

if (typeof TextEncoder === "undefined") {
  const { TextEncoder, TextDecoder } = require("node:util");
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
  console.log("TextEncoder polyfilled!");
}
