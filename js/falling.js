$("#bg").on("mousemove", function (e) {
    let moveX = (e.pageX / $(this).width()) * 30 + 50;
    let moveY = (e.pageY / $(this).height()) * 30 + 50;
    $("#bg").css("background-position", moveX + "% " + (moveY + "%"));
});
