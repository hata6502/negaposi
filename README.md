<h1 align="center">Welcome to negaposi 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/negaposi" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/negaposi.svg">
  </a>
  <a href="https://github.com/hata6502/negaposi/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/hata6502" target="_blank">
    <img alt="Twitter: hata6502" src="https://img.shields.io/twitter/follow/hata6502.svg?style=social" />
  </a>
</p>

> A Japanese negaposi analyzer.

## Install

```sh
yarn add negaposi
```

## Usage

### CLI

```sh
$ echo "今日は良い天気です。" | yarn negaposi
0.5 😃
$ echo "今日は悪い天気です。" | yarn negaposi
-0.5 😧
```

### Module

Please see [src/module.ts](https://github.com/hata6502/negaposi/blob/main/src/module.ts)

## Run tests

```sh
yarn test
```

## Author

<img alt="hata6502" src="https://avatars.githubusercontent.com/hata6502" width="48" /> **Tomoyuki Hata <hato6502@gmail.com>**

- Twitter: [@hata6502](https://twitter.com/hata6502)
- Github: [@hata6502](https://github.com/hata6502)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/hata6502/negaposi/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Tomoyuki Hata <hato6502@gmail.com>](https://github.com/hata6502).<br />
This project is [MIT](https://github.com/hata6502/negaposi/blob/main/LICENSE) licensed.

## Disclaimer

The following creations are included in this product:

- [日本語評価極性辞書（用言編）ver.1.0（2008 年 12 月版）/ Japanese Sentiment Dictionary (Volume of Verbs and Adjectives) ver. 1.0](http://www.cl.ecei.tohoku.ac.jp/index.php?Open%20Resources%2FJapanese%20Sentiment%20Polarity%20Dictionary#b019bc19)
  - 著作者: 東北大学 乾・岡崎研究室 / Author(s): Inui-Okazaki Laboratory, Tohoku University
  - 参考文献: 小林のぞみ，乾健太郎，松本裕治，立石健二，福島俊一. 意見抽出のための評価表現の収集. 自然言語処理，Vol.12, No.3, pp.203-222, 2005. / Nozomi Kobayashi, Kentaro Inui, Yuji Matsumoto, Kenji Tateishi. Collecting Evaluative Expressions for Opinion Extraction, Journal of Natural Language Processing 12(3), 203-222, 2005.
- [日本語評価極性辞書（名詞編）ver.1.0（2008 年 12 月版）/ Japanese Sentiment Dictionary (Volume of Nouns) ver. 1.0](http://www.cl.ecei.tohoku.ac.jp/index.php?Open%20Resources%2FJapanese%20Sentiment%20Polarity%20Dictionary#eadb3a09)
  - 著作者: 著作者: 東北大学 乾・岡崎研究室 / Author(s): Inui-Okazaki Laboratory, Tohoku University
  - 参考文献: 東山昌彦, 乾健太郎, 松本裕治, 述語の選択選好性に着目した名詞評価極性の獲得, 言語処理学会第 14 回年次大会論文集, pp.584-587, 2008. / Masahiko Higashiyama, Kentaro Inui, Yuji Matsumoto. Learning Sentiment of Nouns from Selectional Preferences of Verbs and Adjectives, Proceedings of the 14th Annual Meeting of the Association for Natural Language Processing, pp.584-587, 2008.

Please see also [DISCLAIMER.md](https://github.com/hata6502/negaposi/blob/main/DISCLAIMER.md).

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
