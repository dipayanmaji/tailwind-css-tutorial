/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: 10,
      },
      colors: {
        newColor: {
          100: "#2bd618",
          112: "#135e0a"
        },
        'tahiti': {
          light: '#67e8f9',
          DEFAULT: 'rgb(var(--primary))',
          dark: '#0e7490',
        },
      },
      spacing: {
        5: "100px"
      },
      borderWidth: {
        5: '5px'
      },
      fontFamily:{
        dipayan: ['Graphik']
      }
    },
  },
  plugins: [],
}

