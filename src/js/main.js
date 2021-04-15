'use strict';

let url = "https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json";

fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        document.getElementById("targetArea").textContent = data.targetArea;
    })
    .catch(error => {
        console.log("失敗しました");
    });