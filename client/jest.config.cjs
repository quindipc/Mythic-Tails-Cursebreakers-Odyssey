require("@babel/register")({
  presets: ["@babel/preset-env"],
});

module.exports = {
    testEnvironment: "jsdom",
  
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
      "^.+\\.scss$": "jest-transform-scss",
    },
  
  };
  