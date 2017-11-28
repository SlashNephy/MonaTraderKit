// ==UserScript==
// @name         Zaif リアルタイム時価総額更新
// @namespace    https://slash.nephy.jp/
// @version      0.1
// @description  Zaifで最終価格を基にリアルタイムに時価総額を更新します
// @author       Slash Nephy
// @match        https://zaif.jp/trade*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const parentId = "mona-total-parent";
    const spanId = "mona-total";

    const mona = document.getElementById("page__base__pcviews__normal_item");
    const price = document.getElementById("last_price");
    if (price === null) {
        return;
    }

    const observer = new MutationObserver((mutations) => {
        const lastPrice = mutations[0].target.textContent.replace("買い", "").replace("売り", "").replace(" ", "").replace("JPY", "");
        const totalPrice = lastPrice * mona.textContent;

        if (document.getElementById(parentId) === null) {
            const span = document.createElement("span");
            span.id = parentId;
            const span1 = document.createElement("strong");
            span1.textContent = "時価総額(現在の通貨):";
            const span2 = document.createElement("span");
            span2.id = spanId;
            span2.textContent = totalPrice;
            const span3 = document.createElement("strong");
            span3.textContent = "円";
            span.appendChild(span1);
            span.appendChild(span2);
            span.appendChild(span3);
            $("#header > div > p.pull-right")[0].insertBefore(
                span, $("#header > div > p.pull-right > span:nth-child(4)")[0]
            );
        } else {
            document.getElementById(spanId).innerText = totalPrice;
        }
    });

    const config = {childList: true};
    observer.observe(price, config);
})();
