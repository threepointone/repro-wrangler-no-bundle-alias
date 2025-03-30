import value from "does-not-exist";

console.log(value);

export default {
  fetch(request) {
    return new Response(value);
  },
};
