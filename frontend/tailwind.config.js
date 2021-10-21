module.exports = {
    purge: [],
    darkMode: false,
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('daisyui'),
    ],
    daisyui: {
      styled: true,
      themes: [
        'cupcake'
      ],
      base: true,
      utils: true,
      logs: true,
      rtl: false,
    },
  }