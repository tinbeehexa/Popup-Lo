function showOncePageScroll (trigger, selector) {
    if (trigger.scrollPage.enable === true) {
        window.onscroll = () => {
            console.log(window.scrollY);
            activeScollPage();
        }
        function activeScollPage() {
            if (window.scrollY > trigger.scrollPage.height) {
                document.querySelector(selector).style.display = 'block';
            }
        }
    }
}

export default showOncePageScroll;