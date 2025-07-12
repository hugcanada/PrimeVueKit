// InputDateMask 组件的单独入口文件
import InputDateMask from './InputDateMask.vue';

// 默认导出组件
export default InputDateMask;

// 命名导出
export { InputDateMask };

// 插件安装函数
const install = (app) => {
    app.component('InputDateMask', InputDateMask);
};

// 导出安装函数
export { install };
