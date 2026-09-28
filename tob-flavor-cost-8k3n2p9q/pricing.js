/**
 * tob フレーバーコストシミュレーター 単価定数
 * ------------------------------------------------------------
 * この数値だけ書き換えれば、シミュレーターの計算結果が変わります。
 * 詳しくは README.md を参照。
 *
 * currentFlavorPricePerGram : 現在使用しているフレーバーの1gあたり単価（円）
 * frutasPricePerGram        : FRU+TAS（フルタス）の1gあたり単価（円）
 * gramsPerBox               : 1箱あたりのグラム数（単位切替UI用）
 * cupsPerGram               : 1gあたり提供できる杯数の目安（補助表示用）
 */
const PRICING = {
  currentFlavorPricePerGram: 40,
  frutasPricePerGram: 32,
  gramsPerBox: 50,
  cupsPerGram: 0.15,
};
