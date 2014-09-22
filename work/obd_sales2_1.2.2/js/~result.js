// JavaScript Document
$(function () {
	linkageSelect("#list_carType", {
        dataArr: [fBrandJson, tBrandJson, yearTypeJson],
        optionArr: [
            {value: "id", text: "name"},
            {value: "id", text: "name"},
            {value: "id", text: "name"}
        ]
    });
})
