

// 마커를 표시할 위치와 title 객체 배열입니다 
// var positions = [
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
                    
                });
                marker.id = data[i].drain_id;

            }
        }
    });

    /*{
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
    }*/
//];

//https://apis.map.kakao.com/web/sample/multipleMarkerImage/
// 마커를 생성합니다
/*
for (var i = 0; i < positions.length; i ++) {
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    });
}
*/
// 마커가 지도 위에 표시되도록 설정합니다
//marker.setMap(map);

// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
// marker.setMap(null); 