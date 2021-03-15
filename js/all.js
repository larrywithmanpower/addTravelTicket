
// card information

let travelInfo = [
    {
        "id": 0,
        "name": "綠島自由行套裝行程",
        "imgUrl": "https://images.unsplash.com/photo-1454442124827-b7de573f10e0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRhaXdhbiUyMGRpdmluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        "area": "台北",
        "description": "嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合，提供台東綠島來回船票、綠島環島機車、綠島民宿住宿，行程加贈『綠島浮潛體驗』以及『綠島生態導覽』，讓你用輕鬆的綠島套裝自由行，也能深度認識綠島在地文化。",
        "group": 8,
        "price": 1280,
        "rate": 8.6
    },
    {
        "id": 1,
        "name": "清境高空觀景步道二日遊",
        "imgUrl": "https://images.unsplash.com/photo-1596037559964-638eccebcec9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vdXRhaW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        "area": "花蓮",
        "description": "清境農場青青草原數十公頃碧草，餵食著數以百計的綿羊和牛群，中央山脈最高的北三段群峰形成一堵如帶的高牆，攔住清晨的薄霧山嵐，成就了從花蓮翻山而來的雲瀑在濁水溪谷積成雲海，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。",
        "group": 12,
        "price": 2580,
        "rate": 8.2
    },
    {
        "id": 2,
        "name": "南庄度假村露營車二日遊",
        "imgUrl": "https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        "area": "台中",
        "description": "南庄雲水豪華露營車，快來擁有最愜意的露營體驗吧！ 一泊一食，輕鬆享受露營車樂趣。 獨立衛浴與私人戶外露臺。 入住豪華露營車還能使用戶外SPA大眾湯，感受美人湯魅力。",
        "group": 2,
        "price": 2480,
        "rate": 9.2
    },
    {
        "id": 3,
        "name": "山林悠遊雙人套票",
        "imgUrl": "https://images.unsplash.com/photo-1564500601744-d5dfe4e7ab72?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fHdhdGVyZmFsbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        "area": "台中",
        "description": "山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點，帶您飽覽南投瑰麗的自然環境，體驗變化無窮的地形景觀，喜歡挑戰高空的您一定不可錯過。 （含雙龍瀑布入場券 x2）",
        "group": 12,
        "price": 880,
        "rate": 9.3
    },
    {
        "id": 4,
        "name": "追尋藍眼淚～馬祖風情南北竿3天2夜",
        "imgUrl": "https://cdn2.ettoday.net/images/207/d207779.jpg",
        "area": "台南",
        "description": "馬祖列島以「媽祖」而得名，由南竿、北竿、莒光及東引等數十座島嶼所構成，為目前臺澎金馬自由地區最北端之領土，位於臺灣海峽西北西方，面臨閩江口、連江口及羅源灣，與大陸僅呎水之隔，在反共復國的年代，這裡更曾擔綱保衛臺澎的前哨，標語、坑道、阿兵哥，形塑了極特殊的戰地風貌。",
        "group": 68,
        "price": 3880,
        "rate": 9.8
    },
    {
        "id": 5,
        "name": "夜宿海生館‧小琉球沙灘度假三日",
        "imgUrl": "https://www.taiwan.net.tw/pic.ashx?qp=1/big_scenic_spots/pic_2344_11.jpg&sizetype=3",
        "area": "高雄",
        "description": "豐富的海底生物等著您一起來探索，幸運的話還有機會與海龜同游！切記請勿觸碰、騷擾海龜唷～",
        "group": 99,
        "price": 1880,
        "rate": 9.1
    },
];


const cardInfo = document.querySelector("#cardInfo");

let travelContent = "";

travelInfo.forEach(function (item) {  
    travelContent += `<div class="col-4 mb-40"> <div class="card">
    <span class="bg-secondary card-badgeBig">${item.area}</span>
    <a href="#" class="card-img-animation">
        <img src="${item.imgUrl}" class="card-img-top" alt="${item.name}">
    </a>
    <div class="card-body">
        <span class="bg-primary card-body-badgeSmall">${item.rate}</span>
        <h3 class="card-title">${item.name}</h3>
        <p class="text-muted">${item.description}</p>
        <div class="d-flex align-item-center">
            <span class="text-primary mr-auto"><i class="fas fa-exclamation-circle mr-5"></i>剩下最後${item.group}組</span>
        <span class="text-primary d-flex align-item-center mr-5">TWD <strong class="pl-5">$ ${item.price}</strong></span>
        </div>                        
    </div>
</div>
</div>`
});



cardInfo.innerHTML = travelContent;

