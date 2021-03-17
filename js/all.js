
// card information

let travelData = [
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
        "name": "藍眼淚～馬祖風情南北竿3天2夜",
        "imgUrl": "https://cdn2.ettoday.net/images/207/d207779.jpg",
        "area": "離島",
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
    {
        "id": 6,
        "name": "探索台東綠色公路",
        "imgUrl": "https://i1.wp.com/blog.kkday.com/wp-content/uploads/batch_shutterstock_1523235686.jpg?w=900&quality=80&strip=all&ssl=1",
        "area": "台東",
        "description": "台東位於北迴歸線附近，一年四季如夏，西鄰中央山脈，東邊則是太平洋，擁有絕佳的天然景致。花蓮與台東這兩大城市，有著名的東海岸線（台11線）與縱谷線（台9線），這兩條公路的最後交會點就是台東，東海岸線主要玩的地區是從長濱一路延伸至台東市，縱谷線則是從池上到卑南的範圍。",
        "group": 39,
        "price": 5140,
        "rate": 9.4
    },
    {
        "id": 7,
        "name": "２人成行►【澎湖花火節】",
        "imgUrl": "https://image.cdn-eztravel.com.tw/XweeROulogsDnkRtgnnfMZNJYXbO3daj6r5Jd8tiQu4/rs:fit:600:300:1/g:ce/aHR0cHM6Ly90cmlwLmNkbi1lenRyYXZlbC5jb20udHcvaW1nL0dSVC9zdW1tZXIxNS5qcGc.jpg",
        "area": "離島",
        "description": "在台灣的離島當中，賦予著海洋的魅力，並列選為『世界最美麗海灣組織』和『10大秘密島嶼』，還有寂寞星球雜誌(Lonely Planet)認證『全球2011年非去不可的地方』。澎湖也是台灣國人夏日戲水最熱門的旅遊景點，還有和海洋結合的天然美景，像雙心石滬、吉貝嶼、走路沙灘和天堂路，一定讓旅人發現澎湖海灣的魅力。",
        "group": 88,
        "price": 8400,
        "rate": 9.9
    },
    {
        "id": 8,
        "name": "龜山島登島、壯圍濱海生態之旅一日遊",
        "imgUrl": "https://www.taiwan.net.tw/pic.ashx?qp=1/big_scenic_spots/pic_C100_164_22.jpg&sizetype=3",
        "area": "離島",
        "description": "搭船登上座落在太平洋上形似烏龜的火山島一探究竟，並近距離欣賞因海底溫泉行程的牛奶海，再乘坐拉拉車遊覽美麗的壯圍海岸線。",
        "group": 100,
        "price": 500,
        "rate": 9.1
    },
];

// 顯示初始資料
const cardInfo = document.querySelector(".cardInfo");

function init() {
    let str = "";
    travelData.forEach(function (item) {
        str += `<div class="col-4 mb-40">
                    <div class="card">
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
    cardInfo.innerHTML = str;
}
init();

// 篩選
const selectLocation = document.querySelector(".selectLocation");
const selectNum = document.querySelector(".selectNum");
selectLocation.addEventListener("click", function (e) {
    // console.log(e.target.value);
    if (e.target.value == undefined) {
        console.log('請重新選擇');
        return;
    }
    let str = "";
    let strSearchNum = "";
    let count = 0;
    travelData.forEach(function (item, index) {
        // console.log(e.target.value == item["area"]);
        if (e.target.value == item["area"]) {
            count++;
            str += `<div class="col-4 mb-40">
                <div class="card">
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
            </div>`;
            strSearchNum = `本次搜尋共${count}筆資料`;
        } else if (e.target.value == "全部") {
            str += `<div class="col-4 mb-40">
            <div class="card">
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
                    <span class="text-primary d-flex align-item-center mr-5"><samll>TWD</small> <strong class="pl-5">$${item.price}</strong></span>
                    </div>                        
                </div>
            </div>
        </div>`;
        }
        cardInfo.innerHTML = str;
        selectNum.textContent = strSearchNum;
    });
});


// 新增
const ticketName = document.querySelector("#ticketName");
const imgUrl = document.querySelector("#imgUrl");
const area = document.querySelector("#area");
const ticketCharge = document.querySelector("#ticketCharge");
const ticketNum = document.querySelector("#ticketNum");
const ticketRank = document.querySelector("#ticketRank");
const ticketDescription = document.querySelector("#ticketDescription");
const formReset = document.querySelector(".formReset");

const addBtn = document.querySelector(".btn");

addBtn.addEventListener("click", addCard);
function addCard() {
    let str = "";
    if (ticketName.value == "" || imgUrl.value == "" || area.value == "" || ticketRank.value == "") {
        alert("資料不齊全，無法資料新增");
    } else {
        travelData.push({
            "id": Date.now(),
            "name": ticketName.value,
            "imgUrl": imgUrl.value,
            "area": area.value,
            "description": ticketDescription.value,
            "group": Number(ticketNum.value),
            "price": Number(ticketCharge.value),
            "rate": Number(ticketRank.value)
        });
    }
    init();
    formReset.reset();
    console.log(travelData.id);
}