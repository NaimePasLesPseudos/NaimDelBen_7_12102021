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
      require('daisyui'),
      require('@tailwindcss/typography'),
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