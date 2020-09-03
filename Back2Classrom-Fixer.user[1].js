// ==UserScript==
// @name         Back2Classrom Fixer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Fix some annoyances Back2Classrom
// @author       yak22
// @match        https://njit.back2classroom.app/
// @grant        none
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js
// ==/UserScript==

let interval = setInterval(() => {
    if($(".courseIndex0").length)
        main()
}, 100)



function main() {
    'use strict';

    clearInterval(interval);

    function convertToTwelve(time) {

        let hours = time.substring(0, 2);
        let minutes = time.substring(3);

        //It is pm if hours from 12 onwards
        let suffix = (hours >= 12) ? 'PM' : 'AM';
        //Only -12 from hours if it is greater than 12 (if not back at mid night)
        hours = (hours > 12) ? hours - 12 : hours;
        //if 00 then it is 12 am
        hours = (hours == '00') ? 12 : hours;

        return `${hours}:${minutes} ${suffix}`;
    }

    $(".startTime, .endTime").toArray().map((i)=>{
        i.innerText = convertToTwelve(i.innerText);
    });
};