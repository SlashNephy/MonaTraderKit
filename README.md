# MonaTraderKit もなトレーダーキット
ブラウザでのMonacoinの取引が便利になるような自作ユーザスタイルシート/スクリプトのリポジトリです.  
自分用に作ってあるのでChrome以外での動作は確認していません. また, 私はこれらのユーザスタイルシート/スクリプトを使用して発生した損害の責任を負いません.  
MITライセンスで公開しています. ご自由にどうぞ.

## 公開物一覧
### Zaif_DarkTheme.css / v0.2 - [[ダウンロード]](https://raw.githubusercontent.com/SlashNephy/MonaTraderKit/master/Zaif_DarkTheme.css)
<img src="https://raw.githubusercontent.com/SlashNephy/MonaTraderKit/master/img/Zaif_DarkTheme.png"><br>
[Stylish](https://chrome.google.com/webstore/detail/stylish-custom-themes-for/fjnbnpbmkenffdnngjfgmeleoegfcffe?hl=ja)等で適用先を`https://zaif.jp/*`に設定すると 目に優しい(?)ダークテーマになります.  
おまけ要素として, 不要だと思われる部分を削除してあります.  
現行verは一部不完全な部分があります. 今後のアップデートで修正します.

#### 更新履歴
- v0.2 - [Widget_zaif](https://chrome.google.com/webstore/detail/widgetzaif/igoecdicmkohhcfjonhfidhkdjhhcgae?hl=ja)拡張機能に対応
- v0.1 - 初版公開

---

### bitFlyer_PageTitleBid.js / v0.2 - [[ダウンロード]](https://raw.githubusercontent.com/SlashNephy/MonaTraderKit/master/bitFlyer_PageTitleBid.js)
<img src="https://raw.githubusercontent.com/SlashNephy/MonaTraderKit/master/img/bitFlyer_PageTitleBid.png"><br>
[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ja)等でスクリプトを追加したのち `https://bitflyer.jp/ex/Altcoin/MonaPrice`を開いておくとページタイトルに売値が表示されるようになります.

#### 更新履歴
- v0.2 - 要素の存在を確認するように修正
- v0.1 - 初版公開

---

### Zaif_ChatKeywordMute.js / v0.2 - [[ダウンロード]](https://raw.githubusercontent.com/SlashNephy/MonaTraderKit/master/Zaif_ChatKeywordMute.js)
[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ja)等でスクリプトを追加したのち `muteWords` の配列に設定したワードを含む投稿をミュートします.

#### 更新履歴
- v0.2 - 正常に投稿を取り除けない問題を修正
- v0.1 - 初版公開
