$(function () {
    $("#list").hide();

    $("#search").on("input", function () {
        $("#list").show();
        $("#welcome").hide();

        if ($("#search").val() === "") {
            $("#list").hide();
            $("#welcome").show();
        }
    });

    $(".ui-input-search.ui-input-has-clear").on("click", function () {
        $("#welcome").show();
        $("#list").hide();
    });




    $.getJSON("data/data.json", function (data) {
        $.each(data, function () {
            $.each(this, function (key, value) {
                $("#list").append("<li>" + "<a href='#employdetail' id='" + value.id + "'>" + "<img src='" + value.img + "'>" + value.name + "<br>" + value.title + "<br>" + "</a>" + "</li>");
            });
        });
    });



});