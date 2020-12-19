import { tokenize } from "kuromojin";

interface AnalyzeNegaposiProps {
  text: string;
}

/** Analyze negaposi of Japanese text.  */
const analyzeNegaposi = async ({ text }: AnalyzeNegaposiProps) => {
  const tokens = await tokenize(text);

  let count = 0;

  tokens.forEach(({ surface_form }) => {
    console.log(surface_form);
  });

  return count / tokens.length;
};

export { analyzeNegaposi };
export type { AnalyzeNegaposiProps };
