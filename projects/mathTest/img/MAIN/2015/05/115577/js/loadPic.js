$(function () {
  var picdata = new PicData();
  var picUrlArr = ['btn1.png', 'btn2.png', 'cat1.png', 'cat2.png', 'fd.jpg', 't1.gif', 't1.png', 't2.gif', 't2.png', 't3.gif', 't3.png', 't4.png'];

  var curInd = 0;

  function allCom() {
    //$('.abcdef').append($('#OtherDOM').html());
    $('#mydiv').hide();
    $(".fm").show();
    //an_page();
  }

  function oneCom(curInd) {
    var bl = Math.ceil((curInd + 1) / picUrlArr.length * 10) + "%";
    $(".loading-num").html(bl);
    $(".loading-progress").animate({
      width: bl
    }, 2);

  }

  picdata.loadPicArr(picUrlArr, allCom, oneCom);
})
