// ==UserScript==
// @name         Zaif自動再接続
// @namespace    https://slash.nephy.jp/
// @version      0.2
// @description  ZaifでWebSocketsから切断されたら自動で再接続を試みます
// @author       Slash Nephy
// @match        https://zaif.jp/trade*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const state = document.getElementById("message");
    if (state === null) {
        return;
    }

    const observer = new MutationObserver((mutations) => {
        if (mutations[0].target.textContent === "error") {
            trade.reconnect();
        }
    });

    const config = {childList: true};
    observer.observe(state, config);
})();
