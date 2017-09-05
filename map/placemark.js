ymaps.ready(init);

function balloon(label, cost, link, phone, address, notices){
	var result = '<a href="' + link + '">' + label + '</a>' + ' (	' + cost + ')' + '<br/>'+
//             '<a href="mailto:' + mail + '">' + mail + '</a><br/>' +
            phone + '<br/>' + 
            address;
            
	if ( notices ){
		result += '<br/><br/>' + '<b>' + notices + '</b>';
	}
    return result;
}

function place(longitude, latitude, label, cost, link, phone, address, notices){
	return new ymaps.Placemark([longitude, latitude], {
            balloonContent: balloon(label, cost,  link, phone, address, notices)
        }, {
            preset: 'islands#dotIcon',
//             iconColor: '#3b5998'
			iconColor: '#000000'
        });
}

function two_places(longitude, latitude, 
	label1, cost1, link1, phone1, address1, notices1,
	label2, cost2, link2, phone2, address2, notices2){
	
	return new ymaps.Placemark([longitude, latitude], {
            balloonContent: 
            		balloon(label1, cost1,  link1, phone1, address1, notices1)
            	  + "<br/><br/>"
            	  + balloon(label2, cost2, 	link2, phone2, address2, notices2)
        }, {
            preset: 'islands#dotIcon',
//             iconColor: '#3b5998'
			iconColor: '#000000'
        });
}

function four_places(longitude, latitude, 
	label1, cost1, link1, phone1, address1, notices1,
	label2, cost2, link2, phone2, address2, notices2,
	label3, cost3, link3, phone3, address3, notices3,
	label4, cost4, link4, phone4, address4, notices4){
	
	return new ymaps.Placemark([longitude, latitude], {
            balloonContent: 
            		balloon(label1, cost1,  link1, phone1, address1, notices1)
            	  + "<br/><br/>"
            	  + balloon(label2, cost2, 	link2, phone2, address2, notices2)
		  + "<br/><br/>"
            	  + balloon(label3, cost3, 	link3, phone3, address3, notices3)
		  + "<br/><br/>"
            	  + balloon(label4, cost4, 	link4, phone4, address4, notices4)
        }, {
            preset: 'islands#dotIcon',
//             iconColor: '#3b5998'
			iconColor: '#000000'
        });
}

function init () {
    
    var myMap;
    function createMap (state) {
        myMap = new ymaps.Map('map', state);
        
    	myMap.geoObjects
			.add( two_places (55.806884, 37.588533,
				"Tree-studio",'400-800 руб/час',"http://www.tree-studio.ru","+7(962)990-02-04",'ул. Новодмитровская, д. 5А стр. 2, 2-ой этаж, офис 224', '',
				"Fotofabrika",'500-600 руб/час',	'http://foto-fabrika.ru/price.html','+7(963)777-75-70',	'ул. Новодмитровская, д. 5А, стр. 2, Здание типографии "Молодая Гвардия", офис 430'))
			.add( place (55.745113, 37.520511,
				"Fusion",'400-1000 руб/час','http://www.fusion-foto.ru/photographic-studio-rent',"+7(909)999-0-666, +7(916)999-99-04",'Кутузовский пр-д 16,территория "Фили кровля"',"Минимальное время аренды - 2 часа" ) )
			.add( four_places (55.786584, 37.704145,
				"Fotograf",'500-900 руб/час',"'http://fotograf-da.ru/index.php/photo/arenda","+7(916)676-73-64",	'ул. Электрозаводская, д. 21, 3-я проходная (Мраморная), 3 этаж, loft №389.Фотостудия ФОТОГРАФ','Минимальное время аренды – 2 часа, а в выходные и праздничные дни – 3 часа',
				"Naked studio",'700-1000 руб/час',	'http://www.nakedstudios.ru/#!rent/c41b','"+7(495)961-88-63, +7(966)025-25-00',	'Электрозаводская, д. 21, 3-я проходная (Мраморная), 4 этаж','',
				"Sunlight studio",'600-3000 руб/час',"http://sunlightstudio.ru/","+7(499)340-40-51 (залы 1-8), +7(495)223-10-72 (залы 9-20)",'ул. Электрозаводская, д. 21','',
				"Cross studio",'900-1800 руб/час',"http://www.krosphoto.ru/arenda2/index.php?id=51","+7(968)801-08-82",'ул. Электрозаводская, д. 21, стр. 1 (вход слева от  проходной №3 Электрозавода)'))
			.add( place (55.860614, 37.65452,
				"QuattroFashion",'600-900 руб/час','http://ostudios.ru/?id=16','+7(903)624-85-55','ул. Енисейская, д. 3, корп. 4, стр. 1, НИИ Биотехника, 2 этаж'))
			.add( place (55.749574, 37.594463,
				"Promopoto",'900-1300 руб/час',"http://promofoto.net/studio/","+7(495)795-58-35",'Арбат, Староконюшенный переулок, д. 43'))
			.add( place (55.726866, 37.678547, 
				"Pride Photo",'600-1300 руб/час','http://pridephoto.ru/6627-2/','+7(495)540-43-13','ул. Сосинская, д. 43',"Цены указаны при аренде фотостудии от 2-х часов. При заказе аренды на 1 час, а также в период с 22:00 до 06:00 – стоимость аренды возрастает  на 30%"))
			.add( place (55.756182, 37.56193, 
				"PTstudio",'600-1300 руб/час','http://ptstudio.ru/main.html#studio','+7(495)640-56-60', 'ул. Рочдельская, д. 15,стр. 41',"Минимальное время аренды - 2 часа"))
			.add( place (55.768647, 37.656264, 
				"Студия Веранда",'1100-1400 руб/час',"http://air-rooms.ru/studiya-veranda/","+7(925)356-31-47, +7(962)954-63-63",'ул. Новая Басманная д. 10 стр. 1, подъезд 6, этаж 6,5'))
			.add( place (55.648155, 37.540938, 
				"Cocoon",'1000-1200 руб/час',"http://cocoon-studio.ru/work.html","+7(926)228-69-99",'ул. Бутлерова д. 17б'))
			.add( place (55.734767, 37.626013, 
				"White studios",'1100-1500 руб/час',"http://www.whitestudios.ru/projects/%20-%20loft-1905/#white-studio","+7(926)092-70-79, +7(926)575-19-79",'Большой Ордынский переулок д. 4'))
			.add( place (55.788082, 37.58389, 
				"Cross studio",'900-1500 руб/час',"http://www.krosphoto.ru/index.php/rentaphotostudio/rulesprices.html","+7(495)120-02-08, +7(499)136-99-33,+7(495)646-99-33",' ул. Правды д. 24 стр. 3'))
			.add( place (55.807109, 37.588545, 
				"Dada studio",'1100-1600 руб/час',"http://en.dadastudio.ru/#portfolio/23","+7(909)979-13-99",' ул. Новодмитровская, д. 5а, стр. 2'))
			.add( place (55.722651, 37.690602, 
				"Лемур",'1500-1800 руб/час',"http://fotolemur.ru/arenda/inter-ery-fotostudii-lemur","+7(499)409-09-42",' Волгоградский проспект, д. 32 стр. 8'))

        	
        ;
    }
    
    ymaps.geolocation.get().then(function (res) {
        var mapContainer = $('#map'),
            bounds = res.geoObjects.get(0).properties.get('boundedBy'),
            // Рассчитываем видимую область для текущей положения пользователя.
            mapState = ymaps.util.bounds.getCenterAndZoom(
                bounds,
                [mapContainer.width(), mapContainer.height()]
            );
        createMap(mapState);
    }, function (e) {
        // Если место положение невозможно получить, то просто создаем карту.
        createMap({
            center: [55.76, 37.64],
            zoom: 10
        });
    });
}
