// ==UserScript==
// @name         Zaifチャット キーワードミュート
// @namespace    https://slash.nephy.jp/
// @version      0.2
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
                const text = $(node)[0].children[0].children[1].children[2].children[0].innerText;
                for (const word of muteWords) {
                    if (text.indexOf(word) !== -1) {
                        chatArea.removeChild(node);
                        break;
                    }
                }
            });
        });
    });

    const config = {childList: true};
    observer.observe(chatArea, config);
})();
