export const numberInputStyle = () => ({
  input: {
    height: "1.356rem",
    minHeight: "1.356rem",
    padding: 0,
  },
});

export const textInputStyle = () => ({
  input: {
    height: "1.356rem",
    minHeight: "1.356rem",
    padding: 0,
    "&[disabled]": {
      opacity: 1,
      color: "initial",
    },
  },
});
