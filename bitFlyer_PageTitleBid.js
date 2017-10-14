// ==UserScript==
// @name         ページタイトルに売値を表示
// @namespace    https://slash,nephy.jp
// @version      0.1
// @description  bitFlyerのモナコインの売値をZaifのようにページタイトルに反映します
// @author       Slash Nephy
// @match        https://bitflyer.jp/ex/Altcoin/MonaPrice
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const originalTitle = document.title;

    const target = document.getElementsByClassName("bfPriceBid")[0];
    const observer = new MutationObserver((mutations) => {
        console.info(mutations[0].target.innerText);
        document.title = mutations[0].target.innerText + "円売りMONA | " + originalTitle;
    });

    observer.observe(target, {childList: true});
})();
