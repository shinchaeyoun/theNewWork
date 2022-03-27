class ImageAnimation {
    constructor() {
        this.images = document.querySelectorAll('[data-image-scale]');
        this.options = {
            root: null,
            rootMargin: '400px',
            threshold: .4
        }
        this.handleIntersect = this.handleIntersect.bind(this);
        this.observer = new IntersectionObserver(this.handleIntersect, this.options);
        this.init();
    }

    init() {
        this.images.forEach(image => {
            this.observer.observe(image)
        });
    }

    handleIntersect(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
            // else{
            //     entry.target.classList.remove('animate');
            // }
        });
    }
}

new ImageAnimation();