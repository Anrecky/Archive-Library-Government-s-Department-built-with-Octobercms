jQuery(function () {

    var kearsipanService = $(".services__kearsipan");
    var perpustakaanService = $(".services__perpustakaan");
    var kearsipanCol = kearsipanService.children('.row').children('.services__col');
    var perpustakaanCol = perpustakaanService.children('.row').children('.services__col');


    kearsipanService.mouseenter(function () {
        $(this).css('flex-basis', '100%');
        $(this).removeClass('opacity');
        $(this).children('.row').children('.col-9').show();

        $(this).children('.row').children('.services__col').hasClass('col-md-12') ? ($(this).children('.row').children('.services__col').removeClass('col-md-12'), $(this).children('.row').children('.services__col').addClass('col-3')) : ($(this).children('.row').children('.services__col').hasClass('col-3') ? "" : $(this).children('.row').children('.services__col').addClass('col-3'));

        perpustakaanService.css('flex-basis', '20%');
        perpustakaanService.addClass('opacity');

        perpustakaanService.children('.row').children('.col-9').hide();

        perpustakaanCol.hasClass('col-3') ? (perpustakaanCol.removeClass('col-3'), perpustakaanCol.addClass('col-md-12')) : (perpustakaanCol.hasClass('col-md-12') ? "" : perpustakaanCol.addClass('col-md-12'));

    });

    perpustakaanService.mouseenter(function () {
        $(this).css('flex-basis', '100%');
        $(this).removeClass('opacity');
        $(this).children('.row').children('.col-9').show();

        $(this).children('.row').children('.services__col').hasClass('col-md-12') ? ($(this).children('.row').children('.services__col').removeClass('col-md-12'), $(this).children('.row').children('.services__col').addClass('col-3')) : ($(this).children('.row').children('.services__col').hasClass('col-3') ? "" : $(this).children('.row').children('.services__col').addClass('col-3'));


        kearsipanService.css('flex-basis', '20%');
        kearsipanService.addClass('opacity');

        kearsipanService.children('.row').children('.col-9').hide();

        kearsipanCol.hasClass('col-3') ? (kearsipanCol.removeClass('col-3'), kearsipanCol.addClass('col-md-12')) : (kearsipanCol.hasClass('col-md-12') ? "" : kearsipanCol.addClass('col-md-12'));


    });

    $('.services__wrapper').mouseleave(function () {
        perpustakaanService.add(kearsipanService).css('flex-basis', '50%');
        perpustakaanService.add(kearsipanService).removeClass('opacity');
        perpustakaanService.add(kearsipanService).children('.row').children('.col-9').show();

        perpustakaanCol.hasClass('col-md-12') ? perpustakaanCol.removeClass('col-md-12') : (perpustakaanCol.hasClass('col-3') ? "" : perpustakaanCol.addClass('col-3'));
        perpustakaanCol.hasClass('col-3') ? "" : perpustakaanCol.addClass('col-3');

        kearsipanCol.hasClass('col-md-12') ? kearsipanCol.removeClass('col-md-12') : (kearsipanCol.hasClass('col-3') ? "" : kearsipanCol.addClass('col-3'));
        kearsipanCol.hasClass('col-3') ? "" : kearsipanCol.addClass('col-3')

    });

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

})
