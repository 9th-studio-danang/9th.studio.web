/**
 * Function to transform the social chat buttons
 */
function transformSocialChatButtons() {
    // activeX = true ==> EXPAND
    // activeX = false ==> COLLAPSE
    var active1 = false;
    var active2 = false;
    var active3 = false;

    $('.social-chat-container').on('click', function() {
        if (!active1) {
            $(this).find('.facebook-box').css({
                'background-color': '#0099FF',
                'transform': 'translate(0px, -125px)',
            });
        } else {
            $(this).find('.facebook-box').css({
                'background-color': 'gray',
                'transform': 'none'
            });
        }

        if (!active2) {
            $(this).find('.instagram-box').css({
                'background': 'linear-gradient(45deg, #f9ce34, #ee2a7b, #6228d7)',
                'transform': 'translate(-78px, -85px)'
            });
        } else {
            $(this).find('.instagram-box').css({
                'background-color': 'gray',
                'transform': 'none'
            });
        }

        if (!active3) {
            $(this).find('.mail-box').css({
                'background-color': '#a10101',
                'transform': 'translate(-120px, 0px)'
            });
        } else {
            $(this).find('.mail-box').css({
                'background-color': 'gray',
                'transform': 'none'
            });
        }

        active1 = !active1;
        active2 = !active2;
        active3 = !active3;
    });
};

window.addEventListener('load', function() {
    transformSocialChatButtons();
});
