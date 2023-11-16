const dark = {
  name: "dark",
  background: `
  linear-gradient(217deg,rgb(117 59 126 / 80%), rgb(53 104 61 / 39%) 70.71%),
  linear-gradient(127deg, rgb(0 0 0 / 90%), rgb(94 72 94 / 75%) 70.71%),
  linear-gradient(336deg, rgb(187 170 170 / 80%), rgb(212 212 56 / 60%) 70.71%)`,
  color: "white",
  menuColor: "#444",
};

const light = {
  name: "light",
  background: `linear-gradient(
    217deg,
    rgba(255, 79, 79, 0.8),
    rgba(255, 0, 0, 0) 70.71%
  ),
  linear-gradient(127deg, rgba(32, 117, 255, 0.8), rgba(0, 255, 0, 0) 70.71%),
  linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%)`,
  color: "black",
};

const theme = {
  light,
  dark,
};

export default theme;
