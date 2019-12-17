let result = function ($) {

    $('.item').click(function () {
        $('.item').each(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            }
        });
        $(this).addClass('active');
    });
};

export default result;
