var modaalVenObj = (function(){
    
    var $window = $(window);
    var $Venster = $('<div class="modaal-venster"/>');
    var $Inhoud = $('<div class="modaal-inhoud"/>');
    var $close = $('<span class="sluit-knop">&#10005;</span>');
    
    $Venster.append($Inhoud);
    
    return {
        centrenen: function() {
            var links = Math.max($window.width()-$Inhoud.width(), 0)/2;
            var rechts = Math.max($window.width()-$Inhoud.width(), 0)/2;
            var up = Math.max($window.height()-$Inhoud.height(), 0)/2;
            $Inhoud.css({left: links, top: up, right: rechts});
        },
        openen: function(instellingen) {
            $Inhoud.append(instellingen.inhoud, $close);
            $Inhoud.css({width: instellingen.breedte+'px' || 'auto',
                              height: instellingen.hoogte+'px' || 'auto'}).on('click', function(e){e.stopPropagation()});
            $Venster.appendTo('body').on('click', modaalVenObj.sluiten);
            modaalVenObj.centrenen();
            $close.on('click', modaalVenObj.sluiten);
            
            
        },
        sluiten: function() {
            $Inhoud.empty().off('click', modaalVenObj.sluiten);
            $Venster.detach();
        }
    }
}());