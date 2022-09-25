export function buscarPerfil(token, user, set) {
  return fetch(`https://connectlab.onrender.com/users/${user}`, {
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

export function buscarDispositivos(token, user, set) {
  return fetch("https://connectlab.onrender.com/devices", {
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

export function buscarLocais(token, set) {
  return fetch("https://connectlab.onrender.com/locals", {
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

export function salvarDispositivos(token, user, data, local, room) {
  return fetch("https://connectlab.onrender.com/userDevices", {
    method: "POST",

    headers: new Headers({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    }),

    body: JSON.stringify({
      user,
      device: data,
      is_on: true,
      local,
      room,
    }),
  });
}

export function buscarDispositivosUsuario(token, user, set) {
  return fetch(`https://connectlab.onrender.com/userDevices/user/${user}`, {
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

export function atualizarDispositivoUsuario(token, user, set, device, toggle) {
  return fetch(`https://connectlab.onrender.com/userDevices/${device}`, {
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
  return fetch("https://connectlab.onrender.com/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      fullName: name,
      photoUrl: pic,
      phone,
      userAddress: {
        zipCode,
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
  return fetch(`https://connectlab.onrender.com/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      email,
      password,
      fullName: name,
      photoUrl: pic,
      phone,
      userAddress: {
        zipCode,
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

export function deletarDispositivo(token,user, device, set, ) {
  return fetch(`https://connectlab.onrender.com/userDevices/${device}`, {
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