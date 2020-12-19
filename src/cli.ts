import fs from "fs";
import { analyzeNegaposi } from "./module.js";

const text = fs.readFileSync(0, "utf-8");
const score = analyzeNegaposi({ text });
const judge =
  score < -0.6
    ? "😢"
    : score < -0.2
    ? "😧"
    : score < 0.2
    ? "😐"
    : score < 0.6
    ? "😃"
    : "😄";

console.log(`${score} ${judge}`);
