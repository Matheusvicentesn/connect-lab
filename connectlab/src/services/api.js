export function buscarPerfil(token, set) {
  return fetch(`http://localhost:3000/auth/signin`, {
    method: "get",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      set(data);
      return data;
    });
}

// check
export function buscarDispositivos(token, set) {
  return fetch("http://localhost:3000/devices", {
    method: "get",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      set(data);
      return data;
    });
}

// check
export function buscarLocais(token, set) {
  return fetch("http://localhost:3000/locals", {
    method: "get",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      set(data);
      return data;
    });
}
// check
export function salvarDispositivos(token, user, data, local, room) {
  console.log(`Minha Template Literal ${local}`);
  return fetch("http://localhost:3000/auth/linkdevice", {
    method: "POST",

    headers: new Headers({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    }),

    body: JSON.stringify({
      device_id: data.id,
      is_on: true,
      local,
      room,
    }),
  });
}
// check
export function buscarDispositivosUsuario(token, user, set) {
  return fetch(`http://localhost:3000/auth/searchdevices/`, {
    method: "get",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      set(data);
      return data;
    });
}
// check
export function atualizarDispositivoUsuario(token, user, set, device, toggle) {
  return fetch(`http://localhost:3000/auth/switchdevice/${device}`, {
    method: "PUT",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      is_on: toggle,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .then(() => {
      buscarDispositivosUsuario(token, user, set);
    });
}
export function buscaCep(cep) {
  return fetch(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
    return response.json();
  });
}
// Check
export function cadastrarUsuario(
  email,
  password,
  name,
  pic,
  phone,
  zipCode,
  adress,
  houseNumber,
  district,
  city,
  state,
  complement,
) {
  return fetch("http://localhost:3000/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      confirm_password: password,
      name,
      profile_pic: pic,
      phone,
      address: {
        zip_code: zipCode,
        street: adress,
        number: houseNumber,
        neighborhood: district,
        city,
        state,
        complement,
      },
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}

export function atualizarUsuario(
  email,
  password,
  newpassword,
  name,
  pic,
  phone,
  zipCode,
  adress,
  houseNumber,
  district,
  city,
  state,
  complement,
  token,
  id,
) {
  return fetch(`http://localhost:3000/auth/updateuser`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      email,
      password,
      newpassword,
      name,
      profile_pic: pic,
      phone,
      address: {
        zip_code: zipCode,
        street: adress,
        number: houseNumber,
        neighborhood: district,
        city,
        state,
        complement,
      },
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}

export function deletarDispositivo(token, device, set, user) {
  return fetch(`http://localhost:3000/auth/deleteuserdevice/${device}`, {
    method: "DELETE",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .then(() => {
      buscarDispositivosUsuario(token, user, set);
    });
}
