document.addEventListener('DOMContentLoaded', function() {
    fetch('data/eic-ar-data.json')
        .then(response => response.json())
        .then(data => {
            const swiperWrapper = document.querySelector('.swiper-wrapper');
            const template = document.querySelector('#swiper-slide-template').content;

            data.forEach(item => {
                const slide = document.importNode(template, true);
                slide.querySelector('.slide-title').textContent = `Dashboard ID: ${item.dashboard_id}`;
                slide.querySelector('video source').src = item.videoUrl;
                slide.querySelector('.slide-text').textContent = item.textDescription;
                slide.querySelector('.slide-additional').textContent = item.additionalText;
                slide.querySelector('img').src = item.imageUrl;

                const urlList = slide.querySelector('.url-list');
                item.urlList.forEach(url => {
                    const listItem = document.createElement('li');
                    const link = document.createElement('a');
                    link.href = url;
                    link.textContent = url;
                    listItem.appendChild(link);
                    urlList.appendChild(listItem);
                });

                swiperWrapper.appendChild(slide);
            });
        })
        .catch(error => console.error('Error loading JSON data:', error));
});
