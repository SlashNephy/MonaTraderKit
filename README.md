# MonaTraderKit もなトレーダーキット
ブラウザでのMonacoinの取引が便利になるような自作ユーザスタイルシート/スクリプトのリポジトリです.  
自分用に作ってあるのでChrome以外での動作は確認していません. また, 私はこれらのユーザスタイルシート/スクリプトを使用して発生した損害の責任を負いません.  
MITライセンスで公開しています. ご自由にどうぞ.

もし, 気に入ってくれたら投げ銭して下さると嬉しいです.  
Monacoin: `MPBEH2iqHihDicmf59MWdp8C4EkJcdSAvp`  
Bitcoin: `1GeZ15sZykgGTz9snmQudBsNJ4idruTVNU`

## 公開物一覧
### Zaif_DarkTheme.css / v0.3 - [[ダウンロード]](https://raw.githubusercontent.com/SlashNephy/MonaTraderKit/master/Zaif_DarkTheme.css)
<img src="https://raw.githubusercontent.com/SlashNephy/MonaTraderKit/master/img/Zaif_DarkTheme.png"><br>
[Stylish](https://chrome.google.com/webstore/detail/stylish-custom-themes-for/fjnbnpbmkenffdnngjfgmeleoegfcffe?hl=ja)等で適用先を`https://zaif.jp/*`に設定すると 目に優しい(?)ダークテーマになります.  
おまけ要素として, 不要だと思われる部分を削除してあります.  
現行verは一部不完全な部分があります. 今後のアップデートで修正します.

#### 更新履歴
- v0.3 - Widget_zaifの変更を追従
- v0.2 - [Widget_zaif](https://chrome.google.com/webstore/detail/widgetzaif/igoecdicmkohhcfjonhfidhkdjhhcgae?hl=ja)拡張機能に対応
- v0.1 - 初版公開

---

### bitFlyer_PageTitle.js / v0.4 - [[ダウンロード]](https://raw.githubusercontent.com/SlashNephy/MonaTraderKit/master/bitFlyer_PageTitle.js)
<img src="https://raw.githubusercontent.com/SlashNephy/MonaTraderKit/master/img/bitFlyer_PageTitle.png"><br>
[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ja)等でスクリプトを追加したのち `https://bitflyer.jp/ja-jp/ex/MonaPrice`を開いておくとページタイトルに買値/売値が表示されるようになります.

#### 更新履歴
- v0.4 - 売値/買値が更新されていないときにリロードするように変更
- v0.3 - 買値も表示するように変更
- v0.2 - 要素の存在を確認するように修正
- v0.1 - 初版公開

---

### Zaif_ChatKeywordMute.js / v0.2 - [[ダウンロード]](https://raw.githubusercontent.com/SlashNephy/MonaTraderKit/master/Zaif_ChatKeywordMute.js)
[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ja)等でスクリプトを追加したのち `muteWords` の配列に設定したワードを含む投稿をミュートします.

#### 更新履歴
- v0.2 - 正常に投稿を取り除けない問題を修正
- v0.1 - 初版公開

---

### Zaif_AutoReconnect.js / v0.2 - [[ダウンロード]](https://raw.githubusercontent.com/SlashNephy/MonaTraderKit/master/Zaif_AutoReconnect.js)
[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ja)等でスクリプトを追加したのち WebSocketsから切断された際に再接続されるようになります.

#### 更新履歴
- v0.2 - 監視対象のテキストを修正
- v0.1 - 初版公開

---

### Zaif_UpdateTotalValueRealtime.js / v0.1 - [[ダウンロード]](https://raw.githubusercontent.com/SlashNephy/MonaTraderKit/master/Zaif_UpdateTotalValueRealtime.js)
[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ja)等でスクリプトを追加したのち 最終価格が更新されるたびに時価総額が更新されるようになります.

#### 更新履歴
- v0.1 - 初版公開
