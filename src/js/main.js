jQuery(function () {
    setTimeout(() => {
        $(".preloader__wrapper").hide();
    }, 1350);
    var kearsipanService = $(".services__kearsipan");
    var perpustakaanService = $(".services__perpustakaan");

    // News AJAX
    var successCount = 1;
    $('#loadmore').submit(function (event) {
        event.preventDefault();
        $(this).request('onLoadPost', {
            data: {
                nFetch: successCount
            },
            loading: $.oc.stripeLoadIndicator,
            success: function (data) {
                console.log(data.news);
                data.news.forEach(news => {
                    $(`<div class="col-md-3 my-2"><div class="card" style="width: 100%;"><img class="card-img-top" src="${news.featured_images[0].path}" alt="${news.featured_images[0].description}"><div class="card-body"><h5 class="card-title">${news.title}</h5><p class="card-text">${news.excerpt}</p></div></div></div>`).insertBefore('#loadmore');
                });
                successCount++;
            }
        });
    });

    $("#kearsipanBtn, #perpustakaanBtn").on("click", function () {
        $("#servicesContent").css('width', '100%');

    })
    $(".closeService").on("click", function () {
        $("#servicesContent").css('width', '0%');
        $("#servicesContent").css('overflow', 'hidden');

    })


})
