$(document).ready(function(){

    $('.search-tabs').tabs();


    /** FORMS START */

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
});
