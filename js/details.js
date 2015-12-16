$(function () {
    "use strict";
    $("body").on("click", "a", function (e) {
        var currentid = e.currentTarget.id;


        $.getJSON("data/data.json", function (data) {
            $.each(data, function () {
                $.each(this, function (key, value) {
                    var bossID = value.ReportTo;
                    if (value.id === currentid) {
                        $("#data").html("<img style='float: left; padding-right: 10px' src='" + value.img + "'>" + "<h3 style='padding-top:10px'>" + value.name + "</h3>" + value.title);
                        $("#data_list").html("<li>" + "<a href='#' id='" + value.ReportTo + "'>" + "View Manger" + "<br>" + "<span>" + data.workers[bossID - 1].name + "</span>" + "</a>" + "</li>" + "<li>" + "<a href='tel:" + value.cellNum + "'>" + "Cell Number" + "<br>" + "<span>" + value.cellNum + "</span>" + "</a>" + "</li>" + "<li>" + "<a href='tel:" + value.officeNum + "'>" + "Office Number" + "<br>" + "<span>" + value.officeNum + "</span>" + "</a>" + "</li>" + "<li>" + "<a href='mailto:" + value.email + "'" + ">" + "Email:" + "<br>" + "<span>" + value.email + "</span>" + "</a>" + "</li>");
                        $("#data_list").listview("refresh");
                    }


                });
            });
        });
    });
});