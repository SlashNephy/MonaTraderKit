// ==UserScript==
// @name         bitFlyer ページタイトルに買値/売値を表示
// @namespace    https://slash.nephy.jp
// @version      0.5
// @description  bitFlyerのモナコインの買値/売値をZaifのようにページタイトルに反映します
// @author       Slash Nephy
// @match        https://bitflyer.jp/ja-jp/ex/MonaPrice
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const ask = document.getElementsByClassName("bfPriceAsk")[0];
    const bid = document.getElementsByClassName("bfPriceBid")[0];
    if (ask === undefined || bid === undefined) {
        return;
    }
    const originalTitle = document.title;

    const observer = new MutationObserver((mutations) => {
        const askPrice = Number.parseFloat(ask.innerText.replace(",", "")).toFixed(1);
        const bidPrice = Number.parseFloat(bid.innerText.replace(",", "")).toFixed(1);
        if (isNaN(askPrice) || isNaN(bidPrice)) {
            window.location.reload();
            return;
        }
        document.title = `${askPrice} / ${bidPrice} | ${originalTitle}`;
    });

    const config = {childList: true};
    observer.observe(ask, config);
    observer.observe(bid, config);
})();
