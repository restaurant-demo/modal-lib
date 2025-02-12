const mainTailwindConfig = require("../main-mf/tailwind.config.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...mainTailwindConfig,
  theme: {
    extend: {
      ...mainTailwindConfig.theme?.extend,
      width: {
        ...mainTailwindConfig.theme?.extend?.width,
        '23vw': '23vw',
        '25vw': '25vw',
      },
      colors: {
        ...mainTailwindConfig.theme?.extend?.colors,
        'black-99': '#00000099',
      },
    }
  }
}
