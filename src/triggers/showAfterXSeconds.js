function showAfter(trigger, selector) {

    if (trigger.showAfter.enable === true) {
        window.onload = () => {
            setTimeout(() => {
                document.querySelector(selector).style.display = 'block';
            }, trigger.showAfter.seconds);
        }
    }
}

export default showAfter;


