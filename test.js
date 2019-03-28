import {Toast} from './toast';

window.onload = function () {
    var toast = new Toast({

    })

    toast.showToast('testtest',{});
    toast.showToast('testtest',{delayTime:5000,color:'red'});
    toast.showToast('testtest',{delayTime:1000});
}