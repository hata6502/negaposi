import { dictionary } from "./dictionary.js";

interface AnalyzeNegaposiProps {
  text: string;
}

const analyzeNegaposi = ({ text }: AnalyzeNegaposiProps) => {
  const normalizedText = text.normalize("NFKC");

  let parameter = 0;
  let score = 0;

  dictionary.forEach(({ word, point }) => {
    const normalizedWord = word.normalize("NFKC");

    let index = -1;

    while ((index = normalizedText.indexOf(normalizedWord, index + 1)) !== -1) {
      parameter++;
      score += point;
    }
  });

  return parameter === 0 ? 0 : score / parameter;
};

export { analyzeNegaposi };
export type { AnalyzeNegaposiProps };
