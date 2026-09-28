# tob フレーバーコストシミュレーター（モック）

tob（シーシャフレーバー B2B EC）内で、店舗担当者が自己利用するコスト削減シミュレーター。
現在のフレーバー使用量と、FRU+TAS（フルタス）への切替率を入れると、年間コストダウン額がリアルタイムで表示される。

---

## 単価の書き換え手順

シミュレーターに表示される計算結果は、`pricing.js` の 4 つの数値だけで決まる。
コードを触る必要は一切ない。数字だけ書き換えれば OK。

### 1. `pricing.js` をテキストエディタで開く

（メモ帳・VS Code・任意のエディタで開ける）

### 2. 該当の数字を書き換える

```js
const PRICING = {
  currentFlavorPricePerGram: 40,   // 現在使用フレーバーの 1g 単価（円）
  frutasPricePerGram: 32,          // FRU+TAS の 1g 単価（円）
  gramsPerBox: 50,                 // 1 箱あたりのグラム数
  cupsPerGram: 0.15,               // 1g あたり提供杯数の目安
};
```

- `//` から後ろの部分（コメント）は消しても消さなくても OK
- 数字は半角で入力すること
- 単位（円 / g / 杯）は表示側に埋め込み済み。数字だけ差し替える

### 3. 保存する

保存したら、`index.html` を再読み込みするだけで数字が反映される。

---

## ローカル動作確認

`index.html` をダブルクリックしてブラウザで開けば動く。
サーバー起動は不要。

## 公開先

GitHub Pages（`taiseikirikane-hue/fb-share` リポジトリ配下）で URL 発行済み。

- 配信 URL: https://taiseikirikane-hue.github.io/fb-share/tob-flavor-cost-8k3n2p9q/
- 配信元パス: `fb-share/tob-flavor-cost-8k3n2p9q/`
- 検索エンジン非公開（リポジトリ直下の `robots.txt` で全体拒否）

差し替えを反映したい場合は、リポジトリ `fb-share` の `tob-flavor-cost-8k3n2p9q/pricing.js` を編集して push すれば数分で反映される。

（当初想定していた Gist + raw.githack.com は 2026-09 時点で Gist ホスティングが機能停止しているため、GitHub Pages に一本化）

---

## ファイル構成

| ファイル | 役割 |
|---|---|
| `index.html` | UI + 計算ロジック（触らない） |
| `pricing.js` | 単価定数（**ここだけ書き換える**） |
| `README.md` | この手順書 |

---

## 計算式（参考）

```
年間削減額 = (現状単価 − FRU+TAS単価) × 月間使用量g × 切替率 × 12ヶ月
```

補助表示（1 杯あたり / 1 箱あたり削減額、切替前後の年間コスト比較）も同じロジックから自動算出。

---

## 今後の差し替えポイント

- 実運用に入るタイミングで `pricing.js` を実データに更新
- ブランド名の綴り「**FRU+TAS**（フルタス）」は変更しない
- tob は小文字表記で統一
