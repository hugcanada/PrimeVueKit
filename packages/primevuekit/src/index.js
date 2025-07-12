// 导出所有组件
import InputDateMask from './inputdatemask/InputDateMask.vue';

export { InputDateMask };

// 如果有更多组件，在这里添加
// export { default as Button } from './button/Button.vue';
// export { default as Input } from './input/Input.vue';

// 插件安装函数
const install = (app) => {
    // 注册全局组件
    app.component('InputDateMask', InputDateMask);

    // 如果有更多组件，在这里注册
    // app.component('Button', Button);
    // app.component('Input', Input);
};

// 默认导出
export default {
    install,
    InputDateMask
};

// 支持 Vue.use() 方式安装
export { install };
