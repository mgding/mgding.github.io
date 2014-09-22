$(function () {
    var domOut = $("#list_carType").children("select");
    var url = postIp + 'reserve/brand/query';
    $.ajax({
        url: url,
        data: {
            level: 1
        },
        success: function (data) {
            if (data.rows instanceof Array) {
                var str = '<option>' + '--请选择车型--' + '</option>';
                data.rows.forEach(function (v, i) {
                    str += '<option value=' + v.brandId + '>' + v.brandName + '</option>'
                });
                domOut.eq(0).html(str);
            }
        }
    });
    domOut.eq(0).bind("change", function () {
        $.ajax({
            url: url,
            data: {
                level: 2,
                lastId: $(this).val()
            },
            success: function (data) {
                if (data.rows instanceof Array) {
                    var str = '<option>' + '--请选择车系--' + '</option>';
                    data.rows.forEach(function (v, i) {
                        str += '<option value=' + v.brandId + '>' + v.brandName + '</option>'
                    });
                    domOut.eq(1).html(str);
                }
            }
        });
    });
    domOut.eq(1).bind("change", function () {
        $.ajax({
            url: url,
            data: {
                level: 3,
                lastId: $(this).val()
            },
            success: function (data) {
                if (data.rows instanceof Array) {
                    var str = '<option>' + '--请选择年款--' + '</option>';
                    data.rows.forEach(function (v, i) {
                        str += '<option value=' + v.brandId + '>' + v.brandName + '</option>'
                    });
                    domOut.eq(2).html(str);
                }
            }
        });
    });
    function getlistTxt (dom) {
        var obj = document.getElementById(dom); //定位id
        var index = obj.selectedIndex; // 选中索引
        var text = obj.options[index].text; // 选中文本
        var value = obj.options[index].value; // 选中值
        return text;
    }
    $("#submit").bind("click", function () {
        var nVal = $("#name").val().replace(/\s+/g,"");
        var pVal = $("#phone").val().replace(/\s+/g,"");
        var qqVal = $("#QQ").val().replace(/\s+/g,"");
        var fVal = getlistTxt("fBrand");
        var tVal = getlistTxt("tBrand");
        var yVal =  getlistTxt("yModel");
        if(!nVal) {
            alert("姓名不能为空！")
            return false;
        } else if(!pVal) {
            alert("手机号不能为空！");
            return false;
        } else if(!qqVal) {
            alert("QQ号码不能空！");
            return false;
        } else if(fVal === '--请选择车型--') {
            alert("请选择车型！");
            return false;
        } else if(tVal === '--请选择车系--') {
            alert("请选择车系！");
            return false;
        } else if(yVal === '--请选择年款--') {
            alert("请选择车系！");
            return false;
        }

        $.ajax({url: postIp + "reserve/add",
            data: {
                contact: nVal,
                phone: pVal,
                qq: qqVal,
                fBrand: fVal,
                tBrand: tVal,
                yearModel: yVal
            },success :function (data) {
                // console.log(data)
                if(typeof data === 'string') {
                    data = eval("("+ data+")");
                }
                if(data.code === 200) {
                    window.location.href = 'order.html?contact='+data.contact+'&phone='+data.phone;
                } else if(data.code === 1200){
                    alert("您已预约过,可以直接优惠价购买");
                    window.location.href = 'order.html?contact='+data.contact+'&phone='+data.phone;
                } else {
                    alert("网络异常,未添加成功！");
                }
            } ,error : function () {
                alert("网络异常,未添加成功！")
            }
        })
    })
});