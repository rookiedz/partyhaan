module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: { sans: ["Prompt", "Roboto"] },
    extend: {
      colors: {
        salmon: "#fa726a",
        green: "#20C997",
      },
      minWidth: {
        form: "",
        button: "6.25rem",
        image: "7.5rem",
        party: "8rem",
      },
      maxWidth: {
        image: "7.5rem",
        party: "8rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
