const profile = {
  name: "this name",
  id: "this is id",
  email: "this is email",
};

const { id, ...rest } = profile;
console.log(rest);
