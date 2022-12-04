var target = $("#sidebar");

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(35.89099350000003, 128.61230809650215), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
var positions = [];


const getData = async () => {
    const res = await fetch("http://127.0.0.1:8000/drains/")
    return res.text();
}

const init = async () => {
    const data = JSON.parse(await getData());
    console.log(data);
    console.log(data.length);
    for(var i = 0; i<data.length;i++){
        console.log("first for clause "+i);
        console.log(data[i])
        positions.push(
            {
                title: data[i].ctgry,
                latlng: new kakao.maps.LatLng(data[i].drain_lati, data[i].drain_longti)
            }
        );
    }
    console.log(positions);
    for (var i = 0; i < data.length; i++) {
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커를 표시할 위치
            title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        });
    
        marker.id = data[i].drain_id;
        kakao.maps.event.addListener(marker, 'click', makeClickListener(map, marker, data[i]));
    }
            
    function makeClickListener(map, marker, data) {
        return function() {
          adress = document.querySelector('#drainAdr');
          adress.innerText = data.drain_adr.toString();
          pollution = document.querySelector('#drainPollut');
          switch(data.pollution) {
            case 3:
              pollution.innerText = '위험';
              break;
            case 2:
              pollution.innerText = '주의';
              break;
            case 1:
              pollution.innerText = '보통';
              break;
          }
          $('#sidebar').show();
        }
    }
}

init();

$(document).ready(function () {
  // 사이드바 외부를 클릭하면 사이드바 닫힘
  $(document).mouseup(function (e) {
    if (target.has(e.target).length == 0) {
      target.hide();
      // target.removeClass('emphasized');
    }
  });
});