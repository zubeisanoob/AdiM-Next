const withTM = require("next-transpile-modules")([
  "@react-three/drei",
  "three",
]);

module.exports = withTM({
  images: { domains: ["adimahendru-admin.herokuapp.com"] },
});

//{images: { domains: ["https://adimahendru-admin.herokuapp.com"] }}

//withTM();
