export function cadastrarUsuario(e) {
  e.preventDefault();
  return fetch("https://connectlab.onrender.com/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      email: "teste0000@teste.com.br",
      password: "12345678",
      fullName: "teste00000",
      photoUrl: "",
      phone: "(47) 99999-9999",
      userAddress: {
        zipCode: "85500-000",
        street: "Rua teste",
        number: "4",
        neighborhood: "Bairro XYZ",
        city: "Joinville",
        state: "Santa Catarina",
        complement: "Ap 204",
      },
    },
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    });
}

export function buscarPerfil(token, set) {
  return fetch(
    "https://connectlab.onrender.com/users/631fd7c1ee4b688499a77759",
    {
      method: "get",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    },
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      set(data);
      return data;
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}


