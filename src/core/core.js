import showAfter from "../triggers/showAfterXSeconds.js";
import showOncePageScroll from "../triggers/showOncePageScroll.js";
import closeAfter from "../triggers/closeAfterXSeconds.js";


class Popup {
    constructor(selector, userconfig) {
        this.selector = selector;
        this.config = userconfig;
        const trigger = userconfig.trigger;
        this.trigger = trigger;
        this.height
        this.registerables();
    }
    registerables = () => {
        const userCustomize = Object.keys(this.trigger ? this.trigger:'');
        const generalCustomize = Object.keys(this.config ? this.config:'');
        generalCustomize.forEach((callback) => {
            if (callback !== 'trigger')
                this.generalPopup()[callback]();
        })
        userCustomize.forEach((callback) => {
            this.triggerPopup()[callback]();
        })
    }
    generalPopup = () => {
        return {
            setPosition: () => {
                switch(this.config.setPosition) {
                    case "Middle Center": document.querySelector(this.selector).classList.add("middle-center");
                }
            },
            setColor: () => {
                document.querySelector(this.selector).style.color = this.config.setColor;
            },
            isDisable: () => {
                if (this.config.disable == false)
                    document.querySelector(this.selector).classList.add("hint");
            },
            setBackground: () => {
                console.log("setBackground Activate");
                const elementPopup = document.querySelector(this.selector);
                elementPopup.style.color = this.config.color;
            }
        }
    }
    triggerPopup = () => {
        return {
            clickShowPopup: () => {

                document.querySelector(this.trigger.clickShowPopup.popupBtn).onclick = () => {
                    document.querySelector(this.selector).style.display = 'block';
                    closeAfter(this.trigger, this.selector);
                    // console.log(this.trigger.closeAfter());
                    // setOverlay(this.config.setOverlay.enable);
                    // this.triggerPopup
                }
            },
            showAfter: () => showAfter(this.trigger, this.selector),
            scrollPage: () => showOncePageScroll(this.trigger, this.selector),
            closeAfter: () => closeAfter(this.trigger ,this.selector),
        }
    }
    
    optionsPopup = () => {
        
    }
};

export default Popup;
khi vào một cái page thì người ta chèn 1 cái class abc nào đó vào thẻ body thì popup sẽ hiển thị ở cái page đó
trong body mà có class cms-home thì sẽ show popup lên

cookie thì tồn tại cookie đó thì mới show
sau khi alow cookie thì sẽ có 1 cái cookie
có cookie với active cái condition popup
cookie exists thì kiểm tra đầu tiên 
set cookie thì cookie là ưu tiên 1 phải có body, cookie, element clickShowPopup

điều kiện đề active cái popup

- Anh ko cần quan tam làm sao cái website có cookie đó, anh cần quan tâm nenesu website của mình có cookie keyFor, nếu có tồn tại thì mới active tiếp tục
tương tự như vụ css class trong body, không cần quan tâm 
koong phải là 

hỗ trợ user behavior 
cookier
body class
click element
cookie name trong cookie website có tồn tại một cái cookie naem gì đó mà tồn tại trong hệ thống bên mình
