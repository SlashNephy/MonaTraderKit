// ==UserScript==
// @name         bitFlyer ページタイトルに売値を表示
// @namespace    https://slash.nephy.jp
// @version      0.2
// @description  bitFlyerのモナコインの売値をZaifのようにページタイトルに反映します
// @author       Slash Nephy
// @match        https://bitflyer.jp/ex/Altcoin/MonaPrice
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const target = document.getElementsByClassName("bfPriceBid")[0];
    if (target === null || target === undefined) {
        return;
    }

    const originalTitle = document.title;
    const observer = new MutationObserver((mutations) => {
        document.title = mutations[0].target.innerText + "円売りMONA | " + originalTitle;
    });

    const config = {childList: true};
    observer.observe(target, config);
})();
