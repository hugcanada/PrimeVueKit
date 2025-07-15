import { App } from 'vue';
import { InputDateMaskProps, InputDateMaskEmits } from './inputdatemask/InputDateMask.d';

// 导出所有组件的类型定义
export declare const InputDateMask: import('vue').DefineComponent<InputDateMaskProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, InputDateMaskEmits, string, import('vue').PublicProps, Readonly<InputDateMaskProps> & Readonly<InputDateMaskEmits>, {}>;

// 插件安装函数
export declare function install(app: App): void;

// 默认导出
declare const _default: {
    install: typeof install;
    InputDateMask: typeof InputDateMask;
};

export default _default;

// 组件类型导出
export { InputDateMaskProps, InputDateMaskEmits } from './inputdatemask/InputDateMask.d';

// 如果有更多组件，在这里添加类型导出
// export { ButtonProps, ButtonEmits } from './button/Button.d';
// export { InputProps, InputEmits } from './input/Input.d';
