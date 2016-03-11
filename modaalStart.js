$(document).ready(function(){
    var splatterInhoud = $('#splatter').detach();
    var snorkelInhoud = $('#snorkel').detach();
    var vesInhoud = $('#ves').detach();
    var redInhoud = $('#red').detach();
    
    
    //modaal venster plaatsen
    $('#splatterThumb').on('click', function(){
        modaalVenObj.openen({inhoud : splatterInhoud, breedte: 520});
    });
    $('#snorkelThumb').on('click', function(){
        modaalVenObj.openen({inhoud : snorkelInhoud, breedte: 520});
    });
    
    $('#vestThumb').on('click', function(){
        modaalVenObj.openen({inhoud : vesInhoud, breedte: 520});
    });
    
    $('#redThumb').on('click', function(){
        modaalVenObj.openen({inhoud : redInhoud, breedte: 520});
    });
});