import { userServicios } from "../servicios/user-service.js";

const nuevoUsuario = (name, email, password, id) => {
  const addUser = document.createElement("div");
  const cardUsers = `<div class="course">
          <div class="course-preview">
            <h6>Nombre:</h6>
            <h2>${name}</h2>
            <a href="adminProducts.html"
              >Administrador <i class="fas fa-chevron-right"></i
            ></a>
          </div>
          <div class="course-info">
            <h6>Email</h6>
            <h2>${email}</h2>
            <h6>Password</h6>
            <h2>${password}</h2>
            <div>
               <a
                href="../screens/edit-usuario.html?id=${id}"
                class="btn"
                data-editUser
                >Editar</a
              >
              <button class="btnDelete" id="${id}" type="button"  data-deleteUser>Eliminar</button>
            </div>
          </div>
        </div>`;
  addUser.innerHTML = cardUsers;
  // addUser.innerHTML = `
  //       <td class="td">${name}</td>
  //       <td>${email}</td>
  //       <td>${password}</td>
  //       <td>
  //         <ul class="table__button-control">
  //           <li>
  //             <a href="../screens/edit-usuario?id=${id}" class="simple-button simple-button--edit btn" data-editUser>
  //               Editar
  //             </a>
  //           </li>
  //           <li>
  //             <button class="simple-button simple-button--delete btn" type="button"  id="${id}" data-deleteUser>
  //               Eliminar
  //             </button>
  //           </li>
  //         </ul>
  //      </td>`;

  const deleteBtn = addUser.querySelector("[data-deleteUser]");
  deleteBtn.addEventListener("click", () => {
    if (id) {
      userServicios
        .deleteUser(id)
        .then((id) => {
          console.log(id);
          render();
        })
        .catch((err) => console.error("hubo un error", err));
    }
  });

  return addUser;
};

const user = document.querySelector("[data-user]");
console.log(user);

const render = async () => {
  try {
    const listaUsuarios = await userServicios.listaUsuarios();
    if (user) {
      user.innerHTML = "";
      listaUsuarios.forEach((elemento) => {
        user.insertAdjacentElement(
          "beforebegin",
          nuevoUsuario(
            elemento.name,
            elemento.email,
            elemento.password,
            elemento.id
          )
        );
      });
    }
  } catch (error) {
    console.error("Hubo un error", error);
  }
};

render();

const btnFloat = document.querySelector(".floating-btn");

btnFloat.addEventListener("click", (e) => {
  // alert("le didste click");
  if ("scrollTo" in window) {
    window.scrollTo(0, 0);
  }
});
