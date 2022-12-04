var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(35.89099350000003, 128.61230809650215), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커를 표시할 위치와 title 객체 배열입니다 
var positions = [
/*
    $.ajax({
        url:"{% url 'drains' %}",
        dataType: "json",
        sucess: function(data) {
            for(var i = 0; i<data.length;i++){
                var positions = [
                    {
                        title: data[i].fields.ctgry,
                        latlng: new kakao.maps.Latlng(data[i].fields.drain_lati, data[i].fields.drain_longti)
                    }
                ];
            }

            for (var i = 0; i < positions.length; i ++) {
    
                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    map: map, // 마커를 표시할 지도
                    position: positions[i].latlng, // 마커를 표시할 위치
                    title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                    clickable: true,
                });

                //marker.id = data[i].fields.drain_id;
                marker.id = i;
                kakao.maps.event.addListener(marker, 'click', makeClickListener(map, marker));
            }
            
            function makeClickListener(map, marker) {
                return function() {
                    console.log(marker.id);
                }
            }
        }
    });

*/
    {
        title: '융복', 
        latlng: new kakao.maps.LatLng(35.88806662416403, 128.6113406825891)
    },
    {
        title: '북문', 
        latlng: new kakao.maps.LatLng(35.892273866473985, 128.60940485058308)
    },
    {
        title: '정문', 
        latlng: new kakao.maps.LatLng(35.88520125084622, 128.6146766565606)
    },
    {
        title: '택문',
        latlng: new kakao.maps.LatLng(35.89254429886677, 128.614767639031)
    },
    {
        title: '동문', 
        latlng: new kakao.maps.LatLng(35.8884842498836, 128.6164736307415)
    },
    {
        title: '농장문', 
        latlng: new kakao.maps.LatLng(35.89499718889639, 128.61228685058074)
    }
];

//https://apis.map.kakao.com/web/sample/multipleMarkerImage/
// 마커를 생성합니다

for (var i = 0; i < positions.length; i ++) {
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        clickable: true
    });

    marker.id = i;
    var infowindow = new kakao.maps.InfoWindow({
        content: positions[i].title // 인포윈도우에 표시할 내용
    });

    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
}            

function makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker);
        console.log(marker.id);
    };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
function makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    };
}

// 마커가 지도 위에 표시되도록 설정합니다
//marker.setMap(map);

// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
// marker.setMap(null); 


// // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
// var iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
//     iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

// // 인포윈도우를 생성합니다
// var infowindow = new kakao.maps.InfoWindow({
//     content : iwContent,
//     removable : iwRemoveable
// });

// // 마커에 클릭이벤트를 등록합니다
// kakao.maps.event.addListener(marker, 'click', function() {
//       // 마커 위에 인포윈도우를 표시합니다
//       infowindow.open(map, marker);  
// });