var correct;
var current = 0;
var selected;
var chooseCount = 6;

function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

$('input[type="checkbox"]').on('keyup', function(e) {
    $("#submit").focus();
    $("#submit").click();
});

$('#submit').click(function(e){
    var elements = $('input[type="checkbox"]');
    $('input[type="checkbox"]').prop('style', 'outline: 2px solid red;');
    $(`#checkbox${correct}`).prop('style', 'outline: 2px solid green;');
});

$('#random').click(function(e){
    var size = $('input[type="checkbox"]').length;
    current = randomInt(signs.length);
    selected = signs[current];
    correct = randomInt(size)+1;

    prepareSelect(size);
});

$('#previous').click(function(e){
    var size = $('input[type="checkbox"]').length;

    if (current-1 >= 0) {
        current -= 1;
    }

    selected = signs[current];
    correct = randomInt(size)+1;

    prepareSelect(size);
});

$('#next').click(function(e){
    var size = $('input[type="checkbox"]').length;

    if (current+1 < signs.length) {
        current += 1;
    }

    selected = signs[current];
    correct = randomInt(size)+1;

    prepareSelect(size);
});

function prepareSelect(size) {
    $('#current')[0].innerHTML = current+1;
    $('#text')[0].innerHTML = selected.name;
    $('#type')[0].innerHTML = selected.type;
    $('#description')[0].innerHTML = selected.description;

    $('img').prop('src', '');
    $('input[type="checkbox"]').prop('style', '');
    $('input[type="checkbox"]').prop('checked', false);

    for (var i = 1; i < size+1; i++) {
        var sign = signs[randomInt(signs.length)];

        if (correct == i) {
            $(`label[for='checkbox${correct}']`)[0].children[0].src = selected.image;
        } else if ((sign.name != selected.name) && (selected.type == sign.type)) {
            $(`label[for='checkbox${i}']`)[0].children[0].src = sign.image;
        } else {
            i -= 1;
        }
    }
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

//generate choose option count
for (var i = 0; i < chooseCount; i++) {
    var after = $(`label[for='checkbox${i}']`)[0];
    if (i == 0) { after = $('#description')[0]; }

    var input = document.createElement('input');
    input.id = `checkbox${i+1}`;
    input.type = 'checkbox';
    insertAfter(after, input);

    after = $(`#checkbox${i+1}`)[0];

    var img = document.createElement('img');
    img.width = '48';
    img.height = '48';

    var label = document.createElement('label');
    label.htmlFor = `checkbox${i+1}`;
    label.appendChild(img);
    insertAfter(after, label);
}

$('input[type="checkbox"]').on('change', function() {
    $('input[type="checkbox"]').not(this).prop('checked', false);
});

$('#previous').click();

//preload all images
(async () => {
    var img = document.createElement('img');
    var counter = 0;

    img.onload = function() {
        counter += 1;
        if (counter >= signs.length) {
            img.remove();
        } else {
            img.src = signs[counter].image;
        }
    }

    img.src = signs[counter].image;
})();
