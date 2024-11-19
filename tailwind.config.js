// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,ts,jsx,tsx}", // Your app folder
//     "./app/**/*.{js,ts,jsx,tsx}", // Catch additional files if you're using the `app` directory
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'main-avatar': 'float 3s infinite ease-in-out',
        'fall1': 'fall 1s ease-out forwards',
        'fall2': 'fall 1.2s ease-out forwards',
        'fall3': 'fall 1.4s ease-out forwards',
        'fall4': 'fall 1.6s ease-out forwards',
        'bounce': 'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        fall: {
          '0%': { transform: 'translateY(-100px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'bounce': 'bounce 1s infinite',
        'slide-in': 'slideIn 0.6s ease-out forwards',
      },
      keyframes: {
        slideIn: {
          '0%': { opacity: 0, transform: 'translateX(-50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
