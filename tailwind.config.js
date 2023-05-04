/** @type {import('tailwindcss').Config} */

module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",

    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      display: ["group-hover"],
      keyframes: {
        blogBoxUp: {
          from: {
            opacity: 0,
            // transform: 'translate3d(0,100%,0)',
          },
          to: {
            opacity: 1,
            // transform: 'none',
          },
        },
        fadeOpacityCome: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeUpSlowCome: {
          from: {
            transform: "translateY(20px)",
            opacity: 0,
          },
          to: {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        mouldUpCome: {
          from: {
            transform: "translateY(-20px) perspective(600px) rotateX(20deg)",
          },
          to: {
            transform: "translateY(0) perspective(600px) rotateX(0)",
          },
        },
      },
      animation: {
        opacityAnimation: "fadeOpacityCome 1s ease-in-out",
        mouldUpAnimation: "mouldUpCome 1s ease-in-out",
        fadeUpAnimation: "fadeUpSlowCome 1s ease-in-out",
        blogUpAnimation: "blogBoxUp 1s ease-in out",
      },
      fontFamily: {
        inter: "var(--display-inter)",
        raleway: "var(--display-raleway)",
      },
      colors: {
        "theme-primary": {
          lighter: "#1C86EE",
          light: "#9CC8F3",
          main: "#575FF0",
          dark: "#1874CD",
          darker: "#86BCF1",
          contrastText: "#fff",
        },
        "theme-secondary": "#42beff",
        "light-shade-blue": "#0C1563",
        "shade-blue": "#030143",
        "light-grey": "#f3f3f3",
        "dark-grey": "#696969",
        golden: "#FFDC64",
        "dialog-success": "#4BB543",
        "dialog-error": "#FF0000",
        "dialog-warning": "#FFCC00",
        "home-content": "#464646",
        white: "#fff",
        pink: "#FFB1C8",
        "sky-blue": "#30BFFE",
        "light-blue": " #1488CC",
        "light-pink-opacity": "rgba(145,61,19,.1)",
        "theme-red": "#42beff",
        "light-white": "rgba(255, 255, 255, 0.6)",
        "light-border-blue": "#262a6c",
        "dark-blue": "#111B31",
        "clay-blue": "#002147",
        "transparent-custom": "transparent",
      },
      fontSize: {
        "custom-44": "44px",
        "custom-15": "15px",
        "custom-13": "13px",
      },
      fontWeight: {
        "custom-500": "500",
        "semi-medium": "550",
      },
      boxShadow: {
        "shadow-primary": "0px 0px 10px rgb(219, 219, 219)",
        "shadow-md": "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        "shadow-harco": "0px 4px 20px rgba(0, 0, 0, 0.12)",
        "shadow-inset": "linear-gradient(180deg,transparent 10%,#000 90.45%)",
        "shadow-light": "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        "shadow-medium": "0 1px 8px rgba(0,0,0,.1)",
        "shadow-detail": " rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
      },
      width: {
        "w-main": "86%",
      },
      height: {
        "custom-302": "302px",
      },
      borderRadius: {
        "4xl": "30px",
        "custom-14": "14px",
        "5xl": "36px",
        "6xl": "40px",
        "7xl": "44px",
        "8xl": "50px",
        "custom-90": "0px 0px 90px 90px",
      },
      minHeight: {
        "address-min": "180px",
      },
      maxHeight: {
        "address-max": "180px",
      },
      screens: {
        "custom-max-screen": "1800px",
      },
      backgroundImage: {
        "my-account-cover":
          "linear-gradient(to_right_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.7))",
      },
    },
  },
  plugins: [],
};
