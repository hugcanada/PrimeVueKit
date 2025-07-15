// 导出所有组件
import InputDateMask from './inputdatemask/InputDateMask.vue';

// 命名导出所有组件
export { InputDateMask };

// 如果有更多组件，在这里添加
// export { default as Button } from './button/Button.vue';
// export { default as Input } from './input/Input.vue';

// 所有组件的数组，用于批量注册
const components = [InputDateMask];

// 插件安装函数
const install = (app) => {
    // 批量注册所有组件
    components.forEach((component) => {
        if (component.name) {
            app.component(component.name, component);
        }
    });

    // 手动注册组件名称（如果组件没有定义 name 属性）
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
