import { promises as fs } from "fs";

const readFileAsync = (path, options) => {
  return fs.readFile(path, options);
};

readFileAsync("input.txt", "utf8")
  .then((data) => {
    console.log("This file contains:", data);
  })
  .catch((err) => {
    console.error("Error reading the file:", err);
  });
