// InputDateMask 组件的类型定义文件
import { App } from 'vue';
import { InputDateMaskProps, InputDateMaskEmits } from './InputDateMask.d';

declare const InputDateMask: import('vue').DefineComponent<InputDateMaskProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, InputDateMaskEmits, string, import('vue').PublicProps, Readonly<InputDateMaskProps> & Readonly<InputDateMaskEmits>, {}>;

export default InputDateMask;
export { InputDateMask };

// 插件安装函数
export declare function install(app: App): void;
