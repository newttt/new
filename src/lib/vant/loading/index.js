import Loading from "./index.vue";

import Vue from "vue";

class LoadingComponent{
    constructor() {
        this.init();
    }
    init() {
        // 继承
        let Vm = Vue.extend(Loading);
        this.vm = new Vm({
            el:document.createElement("div")
        })
    }
    open(parent) {
        if (this.vm.$mount().$el) {
            parent.appendChild(this.vm.$mount().$el)
        }
    }
    close() {
       if (this.vm.$mount().$el.nodeType === 1)  {
           this.vm.$mount().$el.remove();

       }
    }
}

export default new LoadingComponent();














