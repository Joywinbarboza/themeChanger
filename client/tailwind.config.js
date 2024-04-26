/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        skin: {
          "color-heading": "var(--color-heading)",
          "color-body": "var(--color-body)",
          "color-button1-text": "var(--color-button1-text)",
          "color-button2-text": "var(--color-button2-text)",
        },
      },
      backgroundColor: {
        skin: {
          "color-background": "var(--color-background)",
          "color-button1-background": "var(--color-button1-background)",
          "color-button2-background": "var(--color-button2-background)",
        },
      },
    },
  },
  plugins: [],
};
