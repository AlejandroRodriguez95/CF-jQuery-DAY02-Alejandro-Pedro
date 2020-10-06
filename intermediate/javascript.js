$(document).ready(function () {

    var jsonData = JSON.parse(images);
    // load the json data into the var called jsonData


    //create a div with id i, and class img-container for each image, the div includes an image, of which the src is loaded from the variable
    //that we previously parsed.

    //after creating the divs with the images, we select the id of the created image, and append the text as a span to it
    for (var i = 0; i < jsonData.length; i++) {
        $(".container").append(`<div id="${i}" class="img-container"><img id="img${i}"src='${jsonData[i].image}'></div>`);
        $(`#${i}`).append(`<br><span>Relation: ${jsonData[i].relation}</span>`);
        $(`#${i}`).append(`<br><span>Name: ${jsonData[i].name}</span><br>`);
    }


    //show information starts here

    $("#0").one('click', function () {
        $(this).append(`Aditional information: ${jsonData[0].information}`);
    });
    $("#1").one('click', function () {
        $(this).append(`Aditional information: ${jsonData[0].information}`)
    });
    $("#2").one('click', function () {
        $(this).append(`Aditional information: ${jsonData[0].information}`)
    });
    $("#3").one('click', function () {
        $(this).append(`Aditional information: ${jsonData[0].information}`)
    });
    $("#4").one('click', function () {
        $(this).append(`Aditional information: ${jsonData[0].information}`)
    });
    $("#5").one('click', function () {
        $(this).append(`Aditional information: ${jsonData[0].information}`)
    });

    $("#6").one('click', function () {
        $(this).append(`Aditional information: ${jsonData[0].information}`)
    });

    // show information ends here

    // hide starts here
    $("#0").on('dblclick', function () {
        $(this).hide();
    });
    $("#1").on('dblclick', function () {
        $(this).hide();
    });
    $("#2").on('dblclick', function () {
        $(this).hide();
    });
    $("#3").on('dblclick', function () {
        $(this).hide();
    });
    $("#4").on('dblclick', function () {
        $(this).hide();
    });
    $("#5").on('dblclick', function () {
        $(this).hide();
    });
    $("#6").on('dblclick', function () {
        $(this).hide();
    });

    //hide ends here




    // we loop every relation attribute, and check if its equal to different values. If it is, we add a border to said image, selecting it usind the
    // id that re previously assigned to said image.
    for (var i = 0; i < jsonData.length; i++) {
        if (jsonData[i].relation == 'father') {
            $(`#img${i}`).css("border", "blue 2px solid");
        }
        if (jsonData[i].relation == 'grandpa') {
            $(`#img${i}`).css("border", "yellow 2px solid");
        }
        if (jsonData[i].relation == 'dog') {
            $(`#img${i}`).css("border", "red 2px solid");
        }
        if (jsonData[i].relation == 'sister') {
            $(`#img${i}`).css("border", "green 2px solid");
        }

    }


});

