function closeAfter (trigger, selector) {
    if(trigger.showAfter.enable === false) trigger.showAfter.seconds = 0;
    const seconds = trigger.showAfter.seconds + trigger.closeAfter.seconds;

    if (trigger.closeAfter.enable && trigger.closeAfter.clickShowPopup) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'none';
        }, seconds);
    }
}

export default closeAfter;