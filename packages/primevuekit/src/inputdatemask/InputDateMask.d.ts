import { DefineComponent } from 'vue'

/**
 * InputDateMask 组件的 Props 类型
 */
export interface InputDateMaskProps {
    /** 日期格式模式，默认: 'yyyy/mm/dd' */
    dateFormat?: string
    /** 输入框 ID */
    inputId?: string
    /** 占位符文本，默认: 'YYYY/MM/DD' */
    placeHolder?: string
}


/**
 * 值变化事件的数据类型
 */
export interface ValueChangeData {
    /** 原始日期值 */
    value: Date | null
    /** 格式化后的字符串 */
    formattedString: string
    /** 数据库格式的日期字符串 (yyyy-MM-dd) */
    dateString: string
    /** 格式是否有效 */
    isFormatValid: boolean
}

/**
 * InputDateMask 组件的 Emits 类型
 */
export interface InputDateMaskEmits {
    /** 更新日期有效性状态 */
    'update:isValidDate': [isValid: boolean]
    /** 值变化时触发 */
    'valueChange': [data: ValueChangeData]
}

/**
 * InputDateMask 组件的 Slots 类型
 */
export interface InputDateMaskSlots {
    /** 自定义日历图标插槽 */
    icon?: () => any
    /** 自定义输入框前缀 */
    prefix?: () => any
    /** 自定义输入框后缀 */
    suffix?: () => any
}

/**
 * InputDateMask 组件的实例类型
 */
export interface InputDateMaskInstance {
    /** 切换日期选择器显示状态 */
    toggle: (event: Event) => void
    /** 显示日期选择器 */
    show: () => void
    /** 隐藏日期选择器 */
    hide: () => void
    /** 清空日期值 */
    clear: () => void
    /** 获取当前格式化的日期字符串 */
    getFormattedDate: () => string | null
    /** 获取数据库格式的日期字符串 */
    getDateString: () => string | null
    /** 检查当前日期格式是否有效 */
    isValid: () => boolean
}

/**
 * InputDateMask 组件类型定义
 */
declare const InputDateMask: DefineComponent<
    InputDateMaskProps,
    InputDateMaskEmits,
    InputDateMaskSlots
>

export default InputDateMask

/**
 * 全局组件类型声明
 */
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        InputDateMask: typeof InputDateMask
    }
}

/**
 * 导出组件相关的工具类型
 */
export type {
    ValueChangeData as InputDateMaskValueChangeData,
    InputDateMaskProps as InputDateMaskDateFormatOptions
}
