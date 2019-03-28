export class Toast {

    constructor(options={}) {
        const defaultOptions = { //默认配置
            maxWidth: 16, //rem
            minWidth:8, //rem
            bgColor:`rgba(0,0,0,.5)`,
            color:'aliceblue',
            fontSize:1.2,//rem
            itemGap: 0.2, //rem
            delayTime:2000
        };
        this.bodyDom = document.querySelector('body');
        this.options = Object.assign({},defaultOptions,options);
        
        this.toastWrapper = document.createElement('div');
        this.toastWrapperId = this.getRandomId();
        this.toastWrapper.setAttribute('id',this.toastWrapperId);
        this.toastWrapper.style = `display:none;width: max-content;position: fixed;left: 50%;top: 50%;transform: translateX(-50%) translateY(-50%);font-size: ${this.options.fontSize}rem;color: ${this.options.color};z-index: 999;text-align: center;`;
        this.bodyDom.appendChild(this.toastWrapper);
    }

    showToast (msg,_option = {}) {
        let selfOption = Object.assign({},this.options,_option),
            toastItem = document.createElement('div'),
            toastItemId = this.getRandomId();
        toastItem.style = `max-width: ${selfOption.maxWidth}rem;min-width:${selfOption.minWidth}rem;color: ${selfOption.color};width: max-content;padding: .5rem;margin-bottom: ${selfOption.itemGap}rem;border-radius: .3rem;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;background-color: ${selfOption.bgColor};`;
        toastItem.setAttribute('id',toastItemId);
        toastItem.textContent = msg;
        this.toastWrapper.style.getPropertyValue('display') === 'none' && this.toastWrapper.style.setProperty('display' , 'block');

        this.toastWrapper.appendChild(toastItem);

        setTimeout( ()=> {
            this.hideToast(toastItemId)
        },selfOption.delayTime)
    }

    getRandomId () {
        return 'toast' + Math.floor(Math.random() * 100000);
    }

    hideToast (id) {
        let _toast = this.toastWrapper.querySelector(`#${id}`);
        this.toastWrapper.childElementCount == 1 && this.toastWrapper.style.setProperty('display' , 'none');
        _toast && this.toastWrapper.removeChild(_toast);
    }
}

// window.Toast = Toast;