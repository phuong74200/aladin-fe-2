export const requirements = [
  { re: /[0-9]/, label: "Bao gồm ít nhất 1 chữ số" },
  { re: /[a-z]/, label: "Bao gồm ký tự thường" },
  { re: /[A-Z]/, label: "Bao gồm ký tự HOA" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Bao gồm ký tự đặc biệt" },
];
