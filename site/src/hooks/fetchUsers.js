export const userRequest = async (type, value) => {
  // Build header request
  const requestOptions = {
    method: type,
    headers: { "Content-Type": "application/json" },
    body: value && JSON.stringify({ name: value }),
  };

  //Call the API
  const res = await fetch("http://localhost:4545/users", requestOptions);
  return res;
};
