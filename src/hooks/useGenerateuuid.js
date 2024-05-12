const useGenerateuuid = () => {
  let firstNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let secondNumbers = [11, 12, 13, 14, 15, 16, 17, 18, 19];
  let lowerCaseLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let uppercaseCaseLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let selectedSpecialCharacters = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "+",
    "-",
    ".",
    "~",
    "|",
    "<",
    ">",
    "=",
    "-",
    "_",
    "/",
    ":",
    ";",
    "?",
    "[",
    "]",
    "{",
    "}",
    "~",
  ];

  const generateuiid = () => {
    const characters = [
      ...firstNumbers,
      ...secondNumbers,
      ...lowerCaseLetters,
      ...uppercaseCaseLetters,
      ...selectedSpecialCharacters,
    ];

    let uiid = "";
    const length = 25; // UIID uzunligi

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      uiid += characters[randomIndex];
    }

    return uiid;
  };

  return { generateuiid };
};

export default useGenerateuuid;
