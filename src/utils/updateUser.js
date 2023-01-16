import * as yup from "yup";
export const validacoes = {
  name: yup
    .string()
    .required("O título é obrigatório")
    .max(40, "O título precisa ter menos de 40 caracteres"),
  email: yup
    .string()
    .email("Formato de e-mail inválido")
    .required("O email é obrigatório")
    .max(100, "O e-mail precisa ter menos de 100 caracteres"),
  pic: yup
    .string()
    .max(500, "O link da foto precisa ter menos de 500 caracteres"),
  phone: yup
    .string()
    .max(14, "O número de telefone precisa ter menos de 14 caracteres"),

  password: yup
    .string()
    .required("A senha é obrigatória")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      "Senha deve conter ao menos um dos seguintes elementos letra maiscula minuscula numeral e caractere especial",
    ),
  newPassword: yup
    .string()
    .required("A confirmação de senha é obrigatória")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      "A nova senha deve conter ao menos um dos seguintes elementos letra maiscula minuscula numeral e caractere especial",
    ),

  zipCode: yup
    .string()
    .required("O CEP é obrigatório")
    .min(8, "O CEP precisa ter pelo menos 8 caracteres no formato 00000-000")
    .max(9, "O CEP precisa ter menos de 9 caracteres formato 00000-000"),
  adress: yup
    .string()
    .required("O Endereço é obrigatório")
    .max(100, "O Endereço precisa ter menos de 100 caracteres"),
  city: yup
    .string()
    .required(" A Cidade é obrigatória")
    .max(29, "A Cidade precisa ter menos de 29 caracteres"), // cidade com maior nome no Brasil São José do Vale do Rio Preto 29 caracteres
  complement: yup
    .string()
    .max(15, "O complemento precisa ter menos de 5 caracteres"),
  houseNumber: yup
    .string()
    .required("O Número é obrigatório")
    .max(5, "O Número precisa ter menos de 5 caracteres"),
  district: yup
    .string()
    .required("O bairro é obrigatório")
    .max(100, "O conteúdo precisa ter menos de 500 caracteres"),
  state: yup
    .string()
    .required("O Estado é obrigatório")
    .max(19, "O Estado precisa ter menos de 2 caracteres"), // estado com maior nome no Brasil Rio Grande do Norte 19 caracteres
};
