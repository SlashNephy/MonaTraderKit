// ==UserScript==
// @name         Zaifチャット キーワードミュート
// @namespace    https://slash.nephy.jp/
// @version      0.1
// @description  Zaifのチャットで特定のキーワードを含む投稿をミュートします
// @author       Slash Nephy
// @match        https://zaif.jp/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const muteWords = ["pepe"];

    const chatArea = document.getElementById("cc_area");
    if (chatArea === null) {
        return;
    }

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                const text = $(node)[0].children[0].children[1].children[1].children[0].innerText;
                muteWords.forEach((word) => {
                    if (~text.indexOf(word)) {
                        chatArea.removeChild(node);
                    }
                });
            });
        });
    });

    const config = {childList: true};
    observer.observe(chatArea, config);
})();
