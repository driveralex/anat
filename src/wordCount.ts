import * as fs from "fs";
import * as path from "path";

function readFile() {
  const fileContents = fs.readFileSync(
    path.join(__dirname, "typescriptWiki.txt"),
    {
      encoding: "utf-8",
    }
  );
  return fileContents
}

export function wordCount() {
    // words is the array of all the word in text
    // const words = 

    let resArray: {word: string, count: number}[] = [];
    return resArray;
}

