function shortenName(name) {
  if (name.length <= 55) {
    return name;
  }

  const array = name.split("");
  const shortenedName = array.splice(0, 55).join("");

  return `${shortenedName}...`;
}

export { shortenName };
