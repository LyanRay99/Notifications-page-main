$('.notification__user').on('click', function () {
    let checkNotify = $(this).css('backgroundColor');
    let setNotify = $(this);
    if (checkNotify == 'rgb(216, 249, 255)') {

        $(setNotify).css('backgroundColor', 'white');
        let setMark = $(this).find('span');
        $(setMark).css('visibility', 'hidden');
        console.log(setMark);
    }
});

$('.control__markAll').on('click', function () {
    let checkNotify = $('.notification__user').css('backgroundColor');
    if (checkNotify == 'rgb(216, 249, 255)') {
        $('.notification__user').css('backgroundColor', 'white');
        $('.notification__user__mark span').css('visibility', 'hidden');
    }
});