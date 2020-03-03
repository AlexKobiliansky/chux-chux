$(document).ready(function(){

    /** MAIN-MNU START */
    $('.hamburger').click(function(){
        $('.main-mnu-container').toggleClass('active');

        $('.main-mnu').slideToggle()

        // setTimeout(function(){
        //     $('.main-mnu').slideToggle()
        // }, 300)
    });
    /** MAIN-MNU END */

    $('.search-tabs').tabs();

    function heightses() {
        if ($(window).width()>480) {
            $('.news-item-title').height('auto').equalHeights();
        }

        $('.pop-item-top').height('auto').equalHeights();
    }

    $(window).resize(function() {
        heightses();
    });

    heightses();

    $('.res-route-slider').owlCarousel({
        loop:false,
        nav: true,
        items: 3,
        margin: 10,
        dots: false,
        startPosition: 1,
        center: true,
        navText: ["",""],
    });

    /** RANGES START*/

    var initialStartMinute = 0,
        initialEndMinute = 10080,
        step = 60;

    var convertToHour = function(value){
        return Math.floor(value / 60);
    };
    var convertToMinute = function(value,hour){
        return value - hour * 60;
    };
    var formatHoursAndMinutes = function(hours,minutes){
        if(hours.toString().length == 1) hours = '0' + hours;
        if(minutes.toString().length == 1) minutes = '0' + minutes;
        return hours+':'+minutes;
    };

    var days = [
        'вс', //Sunday starts at 0
        'пн',
        'вт',
        'ср',
        'чт',
        'пт',
        'сб',
        'вс',
        'пн',
        'вт',
        'ср',
        'чт',
        'пт',
        'сб'
    ];


    //DEPARTURE RANGE
    departureMinDate = $('#range-departure').data('date');

    departureMinDate = new Date(departureMinDate);
    departureMinDay = departureMinDate.getDay();
    $('#day-departure-min').text(days[departureMinDay]);

    var departureMaxDate = new Date();
    departureMaxDate.setDate(departureMinDate.getDate() + 7);
    departureMaxDay = departureMaxDate.getDay();

    var convertValuesToTime = function(values,handle){
        var hours = 0,
            minutes = 0;

        if(handle === 0){
            hours = convertToHour(values[0]);
            minutes = convertToMinute(values[0],hours);

            $('#day-departure-min').text(days[departureMinDay]);

            if(hours > 24) {
                hours = hours - 24;
                $('#day-departure-min').text(days[departureMinDay + 1] );
            }

            if(hours > 24) {
                hours = hours - 24;
                $('#day-departure-min').text(days[departureMinDay + 2] );
            }

            if(hours > 24) {
                hours = hours - 24;
                $('#day-departure-min').text(days[departureMinDay + 3] );
            }

            if(hours > 24) {
                hours = hours - 24;
                $('#day-departure-min').text(days[departureMinDay + 4] );
            }

            if(hours > 24) {
                hours = hours - 24;
                $('#day-departure-min').text(days[departureMinDay + 5] );
            }

            if(hours > 24) {
                hours = hours - 24;
                $('#day-departure-min').text(days[departureMinDay + 6] );
            }

            departureMin.innerHTML = formatHoursAndMinutes(hours,minutes);
        } else {
            hours = convertToHour(values[1]);
            minutes = convertToMinute(values[1],hours);
            $('#day-departure-max').text(days[departureMaxDay]);



            if(hours > 24) {
                hours = hours - 24;
                $('#day-departure-max').text(days[departureMaxDay - 5] );
            }

            if(hours > 24) {
                hours = hours - 24;
                $('#day-departure-max').text(days[departureMaxDay - 4] );
            }

            if(hours > 24) {
                hours = hours - 24;
                $('#day-departure-max').text(days[departureMaxDay - 3] );
            }

            if(hours > 24) {
                hours = hours - 24;
                $('#day-departure-max').text(days[departureMaxDay - 2] );
            }

            if(hours > 24) {
                hours = hours - 24;
                $('#day-departure-max').text(days[departureMaxDay - 1] );
            }

            if(hours > 24) {
                hours = hours - 24;
                $('#day-departure-max').text(days[departureMaxDay] );
            }

            departureMax.innerHTML = formatHoursAndMinutes(hours,minutes);
        }
    };

    if($('#range-departure').length) {

        var rangeDeparture = document.getElementById('range-departure');

        var departureMin = document.getElementById('time-departure-min'),
            departureMax = document.getElementById('time-departure-max');

        noUiSlider.create(rangeDeparture, {
            start: [initialStartMinute,initialEndMinute],
            connect: true,
            step: step,
            range: {
                'min':initialStartMinute,
                'max':initialEndMinute
            }
        });

        rangeDeparture.noUiSlider.on('update',function(values,handle){
            convertValuesToTime(values,handle);
        });
    }
    //END DEPARTURE RANGE














    //ARRIVAL RANGE
    arrivalMinDate = $('#range-arrival').data('date');

    arrivalMinDate = new Date(arrivalMinDate);
    arrivalMinDay = arrivalMinDate.getDay();
    $('#day-arrival-min').text(days[arrivalMinDay]);

    var arrivalMaxDate = new Date();
    arrivalMaxDate.setDate(arrivalMinDate.getDate() + 7);
    arrivalMaxDay = arrivalMaxDate.getDay();

    var convertValuesToTimeForARRIVAL = function(values,handle){
        var hours = 0,
            minutes = 0;

        if(handle === 0){
            hours = convertToHour(values[0]);
            minutes = convertToMinute(values[0],hours);

            $('#day-arrival-min').text(days[arrivalMinDay]);

            if(hours > 24) {
                hours = hours - 24;
                $('#day-arrival-min').text(days[arrivalMinDay + 1] );
            }

            if(hours > 24) {
                hours = hours - 24;
                $('#day-arrival-min').text(days[arrivalMinDay + 2] );
            }

            if(hours > 24) {
                hours = hours - 24;
                $('#day-arrival-min').text(days[arrivalMinDay + 3] );
            }

            if(hours > 24) {
                hours = hours - 24;
                $('#day-arrival-min').text(days[arrivalMinDay + 4] );
            }

            if(hours > 24) {
                hours = hours - 24;
                $('#day-arrival-min').text(days[arrivalMinDay + 5] );
            }

            if(hours > 24) {
                hours = hours - 24;
                $('#day-arrival-min').text(days[arrivalMinDay + 6] );
            }

            arrivalMin.innerHTML = formatHoursAndMinutes(hours,minutes);
        } else {
            hours = convertToHour(values[1]);
            minutes = convertToMinute(values[1],hours);
            $('#day-arrival-max').text(days[arrivalMaxDay]);



            if(hours > 24) {
                hours = hours - 24;
                $('#day-arrival-max').text(days[arrivalMaxDay - 5] );
            }

            if(hours > 24) {
                hours = hours - 24;
                $('#day-arrival-max').text(days[arrivalMaxDay - 4] );
            }

            if(hours > 24) {
                hours = hours - 24;
                $('#day-arrival-max').text(days[arrivalMaxDay - 3] );
            }

            if(hours > 24) {
                hours = hours - 24;
                $('#day-arrival-max').text(days[arrivalMaxDay - 2] );
            }

            if(hours > 24) {
                hours = hours - 24;
                $('#day-arrival-max').text(days[arrivalMaxDay - 1] );
            }

            if(hours > 24) {
                hours = hours - 24;
                $('#day-arrival-max').text(days[arrivalMaxDay] );
            }

            arrivalMax.innerHTML = formatHoursAndMinutes(hours,minutes);
        }
    };

    if($('#range-arrival').length) {

        var rangeArrival = document.getElementById('range-arrival');

        var arrivalMin = document.getElementById('time-arrival-min'),
            arrivalMax = document.getElementById('time-arrival-max');

        noUiSlider.create(rangeArrival, {
            start: [initialStartMinute,initialEndMinute],
            connect: true,
            step: step,
            range: {
                'min':initialStartMinute,
                'max':initialEndMinute
            }
        });

        rangeArrival.noUiSlider.on('update',function(values,handle){
            convertValuesToTimeForARRIVAL(values,handle);
        });
    }
    //END ARRIVAL RANGE
    /** RANGES END */

    $('#checkall').on('click', function(e){
        e.preventDefault();

            $('.filter-stations-list label').each(function(){
                $(this).find('.jq-checkbox').addClass('checked');
                $(this).find('input').prop('checked', true);
            })
    });

    $('#clearall').on('click', function(e){
        e.preventDefault();

        $('.filter-stations-list label').each(function(){
            $(this).find('.jq-checkbox').removeClass('checked');
            $(this).find('input').prop('checked', false);
        })
    });



    $('.preloader').fadeOut();

    /** FORMS START */

    $.validate({
        form : 'form',
        scrollToTopOnError: false
    });

    //Переключение радио-кнопок "В одну строну"/"Туда и обратно"
    $('input[type="radio"][name="numWays"]').change(function() {
        var th = $(this),
            form = th.parents('form'),
            returnTrip = form.find('.return-trip');

        if (th.val() === 'oneway') {
            console.log('1');
            returnTrip.removeClass('active');
        }
        else if (th.val() === 'roundtrip') {
            returnTrip.addClass('active');
        }
    });

    //поменять местами направления отбытия и прибытия
    $('.change-routes').click(function(){
        var th = $(this),
            wrapper = th.parents('.form-labels-wrap'),
            departure = wrapper.find('.departure'),
            arrival = wrapper.find('.arrival');

       departureValue = departure.val();
       arrivalValue = arrival.val();

       departure.val(arrivalValue);
       arrival.val(departureValue);
    });

    var cities = ["Москва-1", "Москва-2", "Москва-3", "Москва-4", "Москва-5",
        "Москва-6", "Москва-7", "Москва-8", "Москва-9", "Москва-10"];

    $('.input-station-label input').autocomplete({
        source: cities,
        minLength: 3,
        change: function (event, ui) {
            if(!ui.item){
                //http://api.jqueryui.com/autocomplete/#event-change -
                // The item selected from the menu, if any. Otherwise the property is null
                //so clear the item for force selection
                $(this).val("");
            }

        }
    });

    $('input[type="radio"], select, input[type="checkbox"]').styler();

    function formatDate(date) {
        var monthNames = [
            "01", "02", "03",
            "04", "05", "06", "07",
            "08", "09", "10",
            "11", "12"
        ];

        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();

        return day + '.' + monthNames[monthIndex] + '.' + year;
    }

    var today = new Date();
    today = formatDate(today);
    //
    // console.log(formatDate(new Date()));
    // alert(formatDate(date))

    //date-picker custom
    $( ".date-picker" ).datepicker({
        dayNames: [ "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота" ],
        dayNamesMin: [ "Вс", "Пн", "Вт", "Ср", "Чтв", "Пн", "Сб" ],
        monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
        monthNamesShort: [ "Янв", "Феф", "Мар", "Апр", "Май", "Инь", "Иль", "Авг", "Сен", "Окт", "Нбр", "Дек" ],
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        showButtonPanel: true,
        closeText: "OK",
        currentText: today,
        // beforeShow: function (input, inst) {
        //     setTimeout(function () {
        //         inst.dpDiv.css({
        //             top: 100,
        //             left: 200
        //         });
        //     }, 0);
        // }
    });


    $('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);
        }, 'xml');
    });

    $(window).scroll(function() {
        if($(this).scrollTop() > 13) {
            $('#page-container').addClass('sticky');
        } else {
            $('#page-container').removeClass('sticky');
        }
    });

    //E-mail Ajax Send
    $(".contact-form").submit(function() { //Change
        var th = $(this);

        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {

        });
        return false;
    });
    /** FORMS END */

    $('#totop').click(function() {
        $('body,html').animate({scrollTop:0},600);
    });
});
