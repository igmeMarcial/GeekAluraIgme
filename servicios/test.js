// async function getDat(url) {
//   try {
//     const response = await fetch(url);
//     console.log(response);
//     if (
//       !response?.ok ||
//       response.headers.get("Content-type") !== "aplication/json"
//     ) {
//       throw new Error("El servidor falló");
//     }
//     const data = await response.json();

//     console.log(data);
//   } catch (error) {
//     console.log("ocurrio un error" + error);
//   }
// }
// getDat("https://jsonplaceholder.typicode.com/users");

// const datos = () => {
//   fetch("http://localhost:3000/productos")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       let authors = data;

//       console.log(data);
//     });
// };

// datos();

const mamada = () => {
  fetch("http://localhost:3000/productos")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
};
mamada();
