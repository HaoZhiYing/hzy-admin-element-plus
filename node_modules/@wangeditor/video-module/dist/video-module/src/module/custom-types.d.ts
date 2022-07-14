/**
 * @description video element
 * @author wangfupeng
 */
declare type EmptyText = {
    text: '';
};
export declare type VideoElement = {
    type: 'video';
    src: string;
    width?: string;
    height?: string;
    children: EmptyText[];
};
export {};
