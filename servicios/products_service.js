const getProducts = () => {
  fetch("https://alurageek-api.vercel.app/product").then((response) =>
    response.json()
  );
};

export const prodcutServiceIgme = {
  getProducts,
};
