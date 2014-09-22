//多级联动类
function linkageSelect(dom, opts) {
    /*var  initOpts = {
     dataArr : [ProJson,CityJson,DistrictJson],
     optionArr : [{value:"1",text:"测试1"},{value:"2",text:"测试2"},{value:"3",text:"测试3"}]
     }*/
    var domOut = $(dom).children("select");
    if (domOut.length === 0) {
        return;
    }
    var domLength = domOut.length;
    var firstSelect = domOut.eq(0);
    $.each(opts.dataArr[0], function (index, value) {
        var option = "<option value='" + value[opts.optionArr[0].value] + "'>" + value[opts.optionArr[0].text] + "</option>";
        firstSelect.append(option);
    });
    for (var i = 0; i < domLength; i++) {
        sf(i);
    }
    function sf(index) {
        var i = index;
        function loadOption(selValue) {
            var nextIndex = i + 1;
            var curSelect = domOut.eq(i);
            var nextSelect = domOut.eq(nextIndex);
            var nextData = opts.dataArr[nextIndex];
            if (nextSelect.length !== 0 && nextData) {
                nextSelect.find("option:gt(0)").remove();
                $.each(nextData, function (k, p) {
                    if (p.lastID == selValue) {
                        var option = "<option value='" + p[opts.optionArr[nextIndex].value] + "'>" + p[opts.optionArr[nextIndex].text] + "</option>";
                        nextSelect.append(option);
                    }
                    //if(nextSelect)
                });
            }
            var curOp = curSelect.find("option:selected");
            var nextOp = nextSelect.find("option").eq(1);
            if (curOp.text() === nextOp.text()) {
                nextOp.get(0).selected = true;
                nextOp.trigger("loaded",[nextOp.val()]);
                nextSelect.hide();
            } else {
                nextSelect.show();
            }
        }
        domOut.eq(i).change(function () {
            loadOption($(this).val());
        });
        domOut.eq(i).bind("loaded", function (e, data) {
            loadOption(data);
        });

    }
}