import fs from "fs";
import { analyzeNegaposi } from "./module.js";

const text = fs.readFileSync(0, "utf-8");

console.log(await analyzeNegaposi({ text }));
