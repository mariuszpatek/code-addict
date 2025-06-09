// Image Lightbox Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create lightbox overlay
    const lightboxOverlay = document.createElement('div');
    lightboxOverlay.className = 'lightbox-overlay';
    lightboxOverlay.innerHTML = `
        <span class="lightbox-close">&times;</span>
        <div class="lightbox-content">
            <img class="lightbox-image" src="" alt="">
        </div>
    `;
    document.body.appendChild(lightboxOverlay);

    const lightboxImage = lightboxOverlay.querySelector('.lightbox-image');
    const closeButton = lightboxOverlay.querySelector('.lightbox-close');

    // Function to open lightbox
    function openLightbox(imageSrc, imageAlt) {
        lightboxImage.src = imageSrc;
        lightboxImage.alt = imageAlt;
        lightboxOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    // Function to close lightbox
    function closeLightbox() {
        lightboxOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Add click event to all images in article content - try multiple selectors
    const selectors = [
        '.page-content img',
        'article img', 
        'main img',
        'img'
    ];
    
    let foundImages = false;
    
    for (let selector of selectors) {
        const images = document.querySelectorAll(selector);
        if (images.length > 0) {
            foundImages = true;
            images.forEach(function(img) {
                // Only add click handler to images that aren't already processed
                if (!img.hasAttribute('data-lightbox-enabled')) {
                    img.setAttribute('data-lightbox-enabled', 'true');
                    img.style.cursor = 'pointer';
                    img.addEventListener('click', function(e) {
                        e.preventDefault();
                        openLightbox(this.src, this.alt);
                    });
                }
            });
            break; // Stop after finding images with the first working selector
        }
    }

    // Close lightbox when clicking overlay
    lightboxOverlay.addEventListener('click', function(e) {
        if (e.target === lightboxOverlay) {
            closeLightbox();
        }
    });

    // Close lightbox when clicking close button
    closeButton.addEventListener('click', closeLightbox);

    // Close lightbox with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightboxOverlay.style.display === 'flex') {
            closeLightbox();
        }
    });
});
