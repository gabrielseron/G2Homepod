$(document).ready(function () {
    // If on buy page execute this script
   if (window.location.pathname == '/buy.html') {
        // Select DOM slider
        var $sliderHomepod = $('#sliderHomepod')
        // Stop autoplay
        $sliderHomepod.carousel('pause')
        // Get all DOM radio buttons
        var radioColors = document.querySelectorAll(".radio-color")
        radioColors.forEach(function ($color, index) {
            // Listen to changes on each radio buttons
            $color.addEventListener('change', function () {
                // When this one is selected move to the correct slide
                if (this.checked) {
                    $('#sliderHomepod').carousel(index)
                }
            })
        })

        $sliderHomepod.carousel(1)
    }
})