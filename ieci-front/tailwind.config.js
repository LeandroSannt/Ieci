module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {  
    extend: {
      spacing: {
        '130': '30rem',
        '131':'16rem'
      },
      boxShadow: {
        '3xl': '0px 4px 8px rgba(0, 0, 0, 0.25);',
      },
      colors:{
      'purple200':"#EFDBFE",
      purple300:"#C69EEE",
      purple400:"#965FC1",
      purple800:"#6D42B5",
      purple900:"#62498A",

      gray10:"#EDE8F1",
      gray50:"#D8D8D8",
      gray100:"#B1B1B1",
      gray150:"#9F9F9F",
      gray200:"#929292",
      gray300:"#7D7D7D",

      backgroundPurple50:"#F9F1FF",
      backgroundPurple100:"#F4EDFA",
      backgroundPurple100:"#F4EDFA",
      backgroundPurple100:"#F4EDFA",
      backgroundPurple20:"#FAF7FC",
      backgroundGray80:"#DFDFDF",
      backgroundPurple150:"#E1CEFA",

      black100:"#6F6F6F",
      black150:"#666666",
      black180:"#575757",
      black220:"#414141",
      black900:"#2C2C2C",

      alertRed900:"#BE3C3C",
      alertRed800:"#E05858",
      alertRed800:"#E05858",
      alertBlue500:"#37A6D6",
      alertGreen700:"#62D41C",
      alertGren500:"#9BE36F",
    },

    },
  },
  daisyui: {
    themes: [
      'cupcake',
    ],
  },
  plugins: [require("daisyui")],
  
};
