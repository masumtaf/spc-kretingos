;(function($){
    function mobileMneu() {
        var body = $('body');
        var navbarToggle = $('.header').find('.hamburger');
        var ModalOverlay = body.find('.modal-overlay');
        var offcanvasWrapper = $('body').find('.mobile-menu-wrap');

        $(".offcanvas-close").on('click', function(e) {
            ModalOverlay.removeClass('modal-active');
            navbarToggle.removeClass('active');
            offcanvasWrapper.removeClass('active');
            body.removeClass('modal-opened');
        });

        $('.header').on('click', '.hamburger', function (e) {
            e.preventDefault();
            body.addClass('modal-opened');
            offcanvasWrapper.addClass('active');
            ModalOverlay.addClass('modal-active');
        });

        ModalOverlay.click(function () {
            body.removeClass('modal-opened');
            $(this).removeClass('modal-active');
            offcanvasWrapper.removeClass('active');
            navbarToggle.removeClass('active');
        });
    }
    mobileMneu();
    function initMap() {
        let map;
        var mapTargetwrapper = $('.section-gmap').find(".gmap-wrap");
        var mapTarget = $(mapTargetwrapper).attr('id');
        var lat = 54.681225; 
        var lng = 25.298368; 
        var zoom = 17;
        var stdlGmapLatlng = new google.maps.LatLng(lat, lng);
        var styledMapType = new google.maps.StyledMapType([
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    { "color": "#e9e9e9" },
                    { "lightness": 17 }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    { "color": "#f5f5f5" },
                    { "lightness": 20 }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    { "color": "#ffffff" },
                    { "lightness": 17 }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    { "color": "#ffffff" },
                    { "lightness": 29 },
                    { "weight": 0.2 }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    { "color": "#ffffff" },
                    { "lightness": 18 }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    { "color": "#ffffff" },
                    { "lightness": 16 }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    { "color": "#f5f5f5" },
                    { "lightness": 21 }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    { "color": "#dedede" },
                    { "lightness": 21 }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    { "visibility": "on" },
                    { "color": "#ffffff" },
                    { "lightness": 16 }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    { "saturation": 36 },
                    { "color": "#333333" },
                    { "lightness": 40 }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    { "visibility": "off" }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    { "color": "#f2f2f2" },
                    { "lightness": 19 }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    { "color": "#fefefe" },
                    { "lightness": 20 }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    { "color": "#fefefe" },
                    { "lightness": 17 },
                    { "weight": 1.2 }
                ]
            }
        ], { name: "Styled Map" });

        map = new google.maps.Map(document.getElementById(mapTarget), {
            center: stdlGmapLatlng,
            zoom: zoom || 13,
            disableDefaultUI: false
        });
        map.mapTypes.set("styled_map", styledMapType);
        map.setMapTypeId("styled_map");

        new google.maps.Marker({
            position: { lat: lat, lng: lng },
            icon: "http://127.0.0.1:5500/assets/img/pin.png",
            map: map,
            title: "Test",
        });
    }
    window.initMap = initMap;
    initMap();
}(jQuery));