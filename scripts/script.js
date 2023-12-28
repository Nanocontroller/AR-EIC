let mySwiper, mySwiper2;

document.addEventListener('DOMContentLoaded', function() {
    const swiperElement = document.querySelector('.mySwiper');
    if (swiperElement) {
        mySwiper = new Swiper(swiperElement, {
            // Swiper configuration for mySwiper
            parallax: true,
            direction: 'horizontal',
            loop: false,
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        });
    }

    const swiper2Element = document.querySelector('.mySwiper2');
    if (swiper2Element) {
        mySwiper2 = new Swiper(swiper2Element, {
            // Swiper configuration for mySwiper2
            direction: 'horizontal',
            loop: false,
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        });
    }
    document.querySelector('.close-btn').addEventListener('click', function() {
        console.log("Close button clicked");
    
        // const swiperElement = document.querySelector('mySwiper');
        // const swiper2Element = document.querySelector('mySwiper2');
        const arScene = document.querySelector('#arScene');

        // Use the already selected swiperElement
        if (swiperElement) {
            swiperElement.style.display = 'none';
            console.log("Swiper element found and hidden.");
        } else {
            console.log("Swiper element not found.");
        }

        if (swiper2Element){
            swiper2Element.style.display = 'none';
            console.log("Swipwer element found and hidden.");
        } else {
            console.log("Swiper element (mySwiper2) not found");
        }
    
        // Check if arScene is not undefined
        if (arScene) {
            arScene.style.display = 'block';
            console.log("AR scene element found and displayed.");
        } else {
            console.log("AR scene element not found.");
        }
    });
    

    // detect target 
    const target0 = document.querySelector('#target-0');
    if (target0){
        target0.addEventListener('targetFound', function() {
            if (swiper2Element) {
                swiper2Element.style.display = 'block';
            }
        });
    }

    const marker = document.querySelector('a-marker');
    if (marker) {
        marker.addEventListener('markerFound', function() {
            if (swiper2Element) {
                swiper2Element.style.display = 'block';
            }
        });
        /*
        marker.addEventListener('markerLost', function() {
            // Fully hide the swiper when the marker is lost.
            // if (swiper2Element) {
            //     swiper2Element.style.display = 'none';

            // Time out to hide the swiper after x time
            setTimeout(function(){
                if (swiper2Element){
                    swiper2Element.style.display = 'none';
                }
            }, 5000); // 5000 ms = 5 seconds
        }); */
    }

    /* Scanner the AR content */
    // const markers = document.querySelectorAll('a-marker');
    // markers.forEach(marker => {
    //     marker.addEventListener('markerFound', function(){
    //         document.getElementById('scanning-overlay').style.display = 'none';
    //     });
    // });
    
});
