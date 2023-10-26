import { readFile, writeFile } from "fs";

readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
  } else {
    writeFile("output.txt", data, "utf8", (err) => {
      if (err) {
        console.error("Error writing the file:", err);
      } else {
        console.log("File written successfully.");
      }
    });
  }
});
