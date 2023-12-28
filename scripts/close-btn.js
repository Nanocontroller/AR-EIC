document.querySelector('.close-btn').addEventListener('click', function() {
    // Hide the instruction swiper
    document.querySelector('.mySwiper').style.display = 'none';

    // Show and activate the AR scene
    var arScene = document.querySelector('#arScene');
    arScene.style.display = 'block';
    
    // Optionally, you might need to restart the AR scene if it doesn't activate automatically
    // arScene.sceneEl.systems.arjs._arSessionStart();
});
