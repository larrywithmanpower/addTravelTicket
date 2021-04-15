

let travelData;

// 將屬性的部分改為中文，並將html的name及className以中文的型式對應
const constraints = {
    "名稱": {
        presence: {
            message: "是必填欄位"
        },
    },
    "網址": {
        presence: {
            message: "是必填欄位"
        },
        url: {
            schemes: ["http", "https"],
            message: "必須是正確的網址"
        }
    },
    "地區": {
        presence: {
            message: "是必填欄位"
        },
    },
    "價格": {
        presence: {
            message: "是必填欄位"
        },
        numericality: {
            greaterThan: 0,
            message: "必須大於 0"
        }
    },
    "組數": {
        presence: {
            message: "是必填欄位"
        },
        numericality: {
            greaterThan: 0,
            message: "必須大於 0"
        }
    },
    "星級": {
        presence: {
            message: "是必填欄位"
        },
        numericality: {
            greaterThanOrEqualTo: 1,
            lessThanOrEqualTo: 10,
            message: "必須符合 1-10 的區間"
        }
    },
    "描述": {
        presence: {
            message: "是必填欄位"
        },
    },
};

// 資料取得
function init() {
    axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json')
        .then(function (response) {
            travelData = response.data.data;
            renderC3();
            renderData();
        });
};

// 蒐集資料
// 並用c3呈現出圖表
function renderC3() {
    let dataObj = {};

    travelData.forEach((item, index) => {
        if (dataObj[item.area] == undefined) {
            dataObj[item.area] = 1;
        } else {
            dataObj[item.area] += 1;
        }
    })
    // 整理資料
    let newData = [];
    let area = Object.keys(dataObj);
    area.forEach((item) => {
        let ary = [];
        ary.push(item);
        ary.push(dataObj[item]);
        newData.push(ary);;
    });
    // 放入c3
    const chart = c3.generate({
        bindto: "#chart",
        data: {
            columns: newData,
            type: 'donut',
        },
        color: {
            pattern: ['#33B326', '#B1B326', '#26B39A']
        },
        donut: {
            title: "地區",
            label: {
                show: false
            },
            width: 25
        },
        size: {
            height: 160,
            width: 160
        }
    });
};

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

// 渲染初始資料
const cardInfo = document.querySelector(".cardInfo");
const selectNum = document.querySelector(".selectNum");

function renderData() {
    let str = "";
    let strSearchNum = "";
    let count = 0;

    travelData.forEach(function (item) {
        // 在forEach的函式內進行累加
        count++;
        str += addStr(item);
        strSearchNum = `本次搜尋共${count}筆資料`;
    });
    cardInfo.innerHTML = str;
    selectNum.textContent = strSearchNum;
}

init();


// 篩選資料
const selectLocation = document.querySelector(".selectLocation");
selectLocation.addEventListener("change", selectData);
function selectData(e) {
    if (e.target.value == "全部地區") {
        renderData();
        return;
    }
    let str = "";
    let strSearchNum = "";
    let count = 0;
    travelData.forEach(function (item) {
        // console.log(e.target.value == item["area"]);
        if (e.target.value == item["area"]) {
            count++;
            str += addStr(item);
            strSearchNum = `本次搜尋共${count}筆資料`;
        } 
        if (count === 0) {
            strSearchNum = `本次搜尋共0筆資料`;
        }
        cardInfo.innerHTML = str;
        selectNum.textContent = strSearchNum;
    });
};

// 新增資料DOM
const ticketName = document.querySelector("#ticketName");
const imgUrl = document.querySelector("#imgUrl");
const area = document.querySelector("#area");
const ticketCharge = document.querySelector("#ticketCharge");
const ticketNum = document.querySelector("#ticketNum");
const ticketRank = document.querySelector("#ticketRank");
const ticketDescription = document.querySelector("#ticketDescription");
const form = document.querySelector(".form-js");
const addBtn = document.querySelector(".btn-js");
// 驗證資料DOM
const messages = document.querySelectorAll('[data-msg]');
const inputs = document.querySelectorAll("input[type=text], input[type=url],input[type=number],select[id=area],textarea");

// 驗證
// 選取填寫後給予即時回饋
inputs.forEach(item => {
    item.addEventListener("change", function(e) {
        let errors = validate(form, constraints);
        item.nextElementSibling.textContent = "";
        if (errors) {
            renderErrors(errors);
            return;
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
        }
        
    });
})
// 點選新增按鈕時進行判斷
addBtn.addEventListener('click', e => { 
    let errors = validate(form, constraints);
    if (errors) {
        renderErrors(errors);
        return;
    }         
    // 表單清空使用.reset()
    form.reset();
    // 清空messages
    messages.forEach(item => {
        item.textContent = "";
    })
    // reset為全部地區
    selectLocation.options[0].selected = true;
    renderData();   
    renderC3();
})

// change驗證渲染(validat.js)
function renderErrors(errors) {
    messages.forEach(item => {
        item.textContent ="";
        item.textContent = errors[item.dataset.msg];
    })
}

