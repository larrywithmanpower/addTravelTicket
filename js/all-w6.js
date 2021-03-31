
// card information
// 利用axios來完成以下的物件
// ! LV1
let travelData;

// axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json')
//     .then(function (response) {
//         // console.log(response);
//         travelData = response.data;
//         // console.log(travelData);
//         init();
//     });


// ! LV2
axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json')
    .then(function (response) {
        // console.log(response);
        travelData = response.data.data;
        // console.log(travelData);
        init();
    });



// 將累加的html結構設為函式
function addStr(item) {
    str = `<div class="col-4 mb-40">
            <div class="card">
                <span class="bg-secondary card-badgeBig">${item.area}</span>
                <a href="#" class="card-img-animation">
                    <img src="${item.imgUrl}" class="card-img-top" alt="${item.name}">
                </a>
                <div class="card-body">
                    <span class="bg-primary card-body-badgeSmall">${item.rate}</span>
                    <h3 class="card-title">${item.name}</h3>
                    <p class="text-muted">${item.description}</p>
                </div>                        
                    
                <div class="d-flex align-item-center card-footer">
                    <span class="text-primary mr-auto"><i class="fas fa-exclamation-circle mr-5"></i>剩下最後${item.group}組</span>
                    <span class="text-primary mr-5"><samll  class="d-flex align-item-center">TWD</small> <strong class="pl-5">$${item.price}</strong></span>
                </div>
            </div>
        </div>`;
    return str;
}

// 顯示初始資料
const cardInfo = document.querySelector(".cardInfo");
const selectNum = document.querySelector(".selectNum");

function init() {
    let str = "";
    let strSearchNum = "";
    let count = 0;
    travelData.forEach(function (item) {
        // 在forEach的函式內進行累加
        count++;
        str += addStr(item);
    });
    strSearchNum = `本次搜尋共${count}筆資料`;
    cardInfo.innerHTML = str;
    selectNum.textContent = strSearchNum;
}


// 篩選
const selectLocation = document.querySelector(".selectLocation");
// const selectNum = document.querySelector(".selectNum");
selectLocation.addEventListener("change", function (e) {
    let str = "";
    let strSearchNum = "";
    let count = 0;
    travelData.forEach(function (item) {
        // console.log(e.target.value == item["area"]);
        if (e.target.value == item["area"]) {
            count++;
            str += addStr(item);
        } else if (e.target.value == "全部地區") {
            count++;
            str += addStr(item);
        }
        // 沒有資料的顯示搜尋為0筆
        if (count === 0 && e.target.value !== "全部地區") {
            strSearchNum = `本次搜尋共0筆資料`;
        }
        strSearchNum = `本次搜尋共${count}筆資料`;
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
    if (ticketName.value == "" || imgUrl.value == "" || area.value == "" || ticketRank.value == "" || ticketCharge.value == "" || ticketNum.value == "") {
        alert("資料不齊全，無法資料新增");
    } else {
        travelData.push({
            id: Date.now(), //產出亂數
            name: ticketName.value,
            imgUrl: imgUrl.value,
            area: area.value,
            description: ticketDescription.value,
            group: Number(ticketNum.value), //使用Number()轉型
            price: Number(ticketCharge.value),
            rate: Number(ticketRank.value)
        });
        // 表單清空使用.reset()
        formReset.reset();
    }
    init();
}
