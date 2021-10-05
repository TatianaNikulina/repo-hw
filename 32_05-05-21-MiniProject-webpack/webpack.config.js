const path = require("path"); //работа с файловой системой

module.exports = {
  entry: "./src/app.js", //основной файл берем и обработка его проходит по пути на 7 строчке
  mode: "development", //режим разработки, не production
  output: {
    path: path.resolve(__dirname, "js"), // создает путь - в текущей папке файла webpack создается путь к js директории. resolov-ом присоединяет в папке файл js
    filename: "bundle.js", // создается пакет-куча-связка bundle.js в папке js
  },
};
