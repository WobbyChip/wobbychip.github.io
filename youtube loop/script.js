$(".button").click(function() {
    if (!($(".input")[0].value.match(/^\w+$/))) { return; }
    
    if (window.location.href.includes("#")) {
        var loc = `${window.location.href.split("#")[0]}#${$(".input")[0].value}`;
    } else {
        var loc = `${window.location.href}#${$(".input")[0].value}`
    }

    location.replace(loc)
    $("#iframe")[0].src = `https://www.youtube.com/embed/${$(".input")[0].value}?autoplay=1&loop=1&playlist=${$(".input")[0].value}`
});


if (window.location.href.includes("#")) {
    var embed_code = window.location.href.split("#").pop();
    if (embed_code.match(/^\w+$/)) { 
        $(".input")[0].value = embed_code;
        $("#iframe")[0].src = `https://www.youtube.com/embed/${embed_code}?autoplay=1&loop=1&playlist=${embed_code}`
    }
} else {
    alert("Just click OK to bypass some browser security of autoplay.")
}