var menuTreeList: Array<any> = [
    // {
    //     "id": 0,
    //     "name": "首页",
    //     "componentName": "HomeIndexCom",
    //     "url": "views/home/Index.vue",
    //     "router": "/home",
    //     "jumpUrl": "/home",
    //     "icon": "Key",
    //     "close": false,
    //     "parentId": null,
    //     "children": []
    // },
    {
        "id": 1,
        // "name": "基础示例",
        name: "基础",
        "componentName": null,
        "url": null,
        "router": null,
        "jumpUrl": null,
        "icon": "Key",
        "close": true,
        "parentId": null,
        "type": 1,
        "children": [
            // {
            //     "id": 2,
            //     "name": "Antd Vue3.0组件库",
            //     "componentName": "AntdVueComponentsCom",
            //     "url": "views/AntdVueComponents.vue",
            //     "router": "/antd/vue/components",
            //     "jumpUrl": "/antd/vue/components",
            //     "icon": "Key",
            //     "close": true,
            //     "parentId": 1,
            //     "levelCode": "1.2",
            //     "type": 2,
            //     "children": []
            // },
            {
                "id": 33,
                "name": "Vxe-Table",
                "componentName": "VxeTableCom",
                "url": "views/VxeTable.vue",
                "router": "/vxe/table",
                "jumpUrl": "/vxe/table",
                "icon": "Key",
                "close": true,
                "parentId": 1,
                "levelCode": "1.33",
                "type": 2,
                "children": []
            },
            {
                "id": 34,
                "name": "图标库",
                "componentName": "IconsVue",
                "url": "views/Icons.vue",
                "router": "/icons",
                "jumpUrl": "/icons",
                "icon": "Key",
                "close": true,
                "parentId": 1,
                "levelCode": "1.34",
                "type": 2,
                "children": []
            },
            {
                "id": 3,
                "name": "按钮",
                "componentName": "ButtonCom",
                "url": "views/Button.vue",
                "router": "/button",
                "jumpUrl": "/button",
                "icon": "Key",
                "close": true,
                "parentId": 1,
                "levelCode": "1.3",
                "type": 2,
                "children": []
            },
            {
                "id": 4,
                "name": "图表 AntV G2",
                "componentName": null,
                "url": null,
                "router": null,
                "jumpUrl": null,
                "icon": "Key",
                "close": true,
                "parentId": 1,
                "levelCode": "1.4",
                "type": 1,
                "children": [
                    {
                        "id": 5,
                        "name": "基础图表",
                        "componentName": "ChartBaseCom",
                        "url": "views/chart/Base.vue",
                        "router": "/chart/base",
                        "jumpUrl": "/chart/base",
                        "icon": "Key",
                        "close": true,
                        "parentId": 4,
                        "levelCode": "1.4.5",
                        "type": 2,
                        "children": []
                    },
                    {
                        "id": 6,
                        "name": "更多图表",
                        "componentName": "ChartMoreCom",
                        "url": "views/chart/More.vue",
                        "router": "/chart/more",
                        "jumpUrl": "/chart/more",
                        "icon": "Key",
                        "close": true,
                        "parentId": 4,
                        "levelCode": "1.4.6",
                        "type": 2,
                        "children": []
                    }
                ]
            },
            {
                "id": 7,
                "name": "表格管理",
                "componentName": null,
                "url": null,
                "router": null,
                "jumpUrl": null,
                "icon": "Key",
                "close": true,
                "parentId": 1,
                "levelCode": "1.7",
                "type": 1,
                "children": [
                    {
                        "id": 8,
                        "name": "基础列表",
                        "componentName": "BaseListCom",
                        "url": "views/BaseList.vue",
                        "router": "/base/list",
                        "jumpUrl": "/base/list",
                        "icon": "Key",
                        "close": true,
                        "parentId": 7,
                        "levelCode": "1.7.8",
                        "type": 2,
                        "children": []
                    },
                    {
                        "id": 9,
                        "name": "标准表格",
                        "componentName": "ListIndexCom",
                        "url": "views/list/Index.vue",
                        "router": "/list",
                        "jumpUrl": "/list",
                        "icon": "Key",
                        "close": true,
                        "parentId": 7,
                        "levelCode": "1.7.9",
                        "type": 2,
                        "children": []
                    }
                ]
            },
            {
                "id": 10,
                "name": "富文本编辑器",
                "componentName": "EditorCom",
                "url": "views/Editor.vue",
                "router": "/editor",
                "jumpUrl": "/editor",
                "icon": "Key",
                "close": true,
                "parentId": 1,
                "levelCode": "1.7.8",
                "type": 2,
                "children": []
            },
            {
                "id": 11,
                "name": "跳转外部地址",
                "componentName": "ExternalJumpCom",
                "url": "components/ExternalJump.vue",
                "router": "/external/jump/:path(.*)",
                "jumpUrl": "https://antv.vision/zh",
                "icon": "Key",
                "close": true,
                "parentId": 1,
                "levelCode": "1.11",
                "type": 2,
                "children": []
            }
        ]
    },
    {
        "id": 100,
        "name": "更多组件",
        "componentName": null,
        "url": null,
        "router": null,
        "jumpUrl": null,
        "icon": "Key",
        "close": true,
        "parentId": null,
        "type": 1,
        "children": [
            {
                "id": 101,
                "name": "ElementPlus组件库",
                "componentName": "AppComponentsCom",
                "url": "views/AppComponents.vue",
                "router": "/app/components",
                "jumpUrl": "/app/components",
                "icon": "Key",
                "close": true,
                "parentId": 100,
                "levelCode": "100.101",
                "type": 2,
                "children": []
            },
            {
                "id": 102,
                "name": "X6",
                "componentName": "X6Com",
                "url": "views/x6/Index.vue",
                "router": "/x6",
                "jumpUrl": "/x6",
                "icon": "Key",
                "close": true,
                "parentId": 100,
                "levelCode": "100.102",
                "type": 2,
                "children": []
            }]
    },
];

export default menuTreeList

// allMenuList