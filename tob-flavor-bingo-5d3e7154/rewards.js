/**
 * FRU+TAS フレーバービンゴ リワード定義
 * ------------------------------------------------------------
 * ライン達成本数・全マス達成でクーポン発火。
 * 金額・ラベルはここを書き換えるだけで変わる。差し替え手順は README.md を参照。
 *
 * oneLine    : 1 ライン達成で発火
 * threeLines : 3 ライン以上達成で発火
 * complete   : 62 マス全埋め（コンプリート）で発火
 *
 * discountYen : クーポン割引額（円）
 * label       : ポップアップ・バッジに表示する文言
 */
const REWARDS = {
  oneLine:    { linesRequired: 1, discountYen: 500,   label: "¥500 OFF クーポン獲得" },
  threeLines: { linesRequired: 3, discountYen: 2000,  label: "¥2,000 OFF クーポン獲得" },
  complete:   { allCells: true,   discountYen: 10000, label: "全 62 種コンプリート ¥10,000 OFF" },
};
