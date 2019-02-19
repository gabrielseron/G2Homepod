var $sliderHomepod = $('#sliderHomepod')
$sliderHomepod.carousel('pause')
var radioColors = document.querySelectorAll(".radio-color")
radioColors.forEach(function($color, index){
    $color.addEventListener('change', function() {
        if(this.checked) {
            $('#sliderHomepod').carousel(index)
        } 
    })
})

$('#sliderHomepod').carousel(1)