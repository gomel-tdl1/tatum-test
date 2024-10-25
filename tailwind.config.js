/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '320px',
        md: '640px',
        lg: '1200px',
        xl: '1500px',
      },
    },
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

