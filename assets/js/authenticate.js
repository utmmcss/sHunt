const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

window.onload = function () {
    const scene = params.id;
    if (scene) {
        $('#scene').toggleClass('aos-init');
        $('#scene').toggleClass('aos-animate');
        $('#challengenum').toggleClass('aos-init');
        $('#challengenum').toggleClass('aos-animate');
        $('#notes').toggleClass('aos-init');
        $('#notes').toggleClass('aos-animate');
        $('#challengeimage').toggleClass('aos-init');
        $('#challengeimage').toggleClass('aos-animate');
        $('#form').toggleClass('aos-init');
        $('#form').toggleClass('aos-animate');
        // API request scene details
        if (true) { // When valid
            setTimeout(() => {
                $('#noscene').css('display', 'none');
                $('#scene').css('display', 'initial');
                $('#scene').toggleClass('aos-init');
                $('#challengenum').toggleClass('aos-init');
                $('#notes').toggleClass('aos-init');
                $('#challengeimage').toggleClass('aos-init');
                $('#form').toggleClass('aos-init');
                AOS.refresh();
            }, 0);
        }
    }
};