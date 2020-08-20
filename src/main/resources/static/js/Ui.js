function toggleLayers() {
    $('.layers').toggle();
}

var toastNotice = function(message) {
    $('#notice').text(message);
    var progress = document.getElementById('progress');
    progress.className = 'show';
    setTimeout(function(){ progress.className = progress.className.replace('show', ''); }, 3000);
}