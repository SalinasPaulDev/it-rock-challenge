const colors = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#96CEB4",
  "#FECA57",
  "#FF9FF3",
  "#54A0FF",
  "#5F27CD",
  "#00D2D3",
  "#FF9F43",
  "#FF6348",
  "#2ED573",
  "#3742FA",
  "#A55EEA",
  "#26DE81",
  "#FD79A8",
  "#FDCB6E",
  "#E17055",
  "#74B9FF",
  "#00B894",
];

export const getNameColor = (fullname) => {
  if (!fullname) return colors[0];

  let hash = 0;
  for (let i = 0; i < fullname.length; i++) {
    hash = fullname.charCodeAt(i) + ((hash << 5) - hash);
  }

  const index = Math.abs(hash) % colors.length;
  return colors[index];
};
