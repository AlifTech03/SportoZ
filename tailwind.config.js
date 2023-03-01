module.exports = {
  theme: {
    extend: {
      gradientColorStops: (theme) => ({
        mainColor: "#13171A",
        secondary: "#2B3038",
      }),
      colors: {
        transparent: "transparent",
        current: "currentColor",
        mainColor: "#13171A",
        secondary: "#2B3038",
        flashOrange: "#FF7401",
        white: "#FFFFFF",
        "font-main": "#959595",
        "font-secondary": "#6B6B6B",
        "font-gray": "#E5E5E5",
        "bar-Color": "#0077EB",
        "border-color": "#9E9E9E38",
      },
    },
  },
  content: [
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
};
