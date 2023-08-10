$(document).on("click", ".page-scroll", function (e) {
    var tujuan = $(this).attr("href");
    var elemenTujuan = $(tujuan);
    $("html").animate(
        {
            scrollTop: elemenTujuan.offset().top - 60,
        },
        800,
        "easeInOutExpo"
    );

    e.preventDefault();
});

$(document).on("click", ".btn-join", function (e) {
    $("#emailModal").modal("show");
    e.preventDefault();
});

$(document).on("click", ".btn-close", function (e) {
    $("#emailModal").modal("hide");
    e.preventDefault();
});
