define(function (require) {
    'use strict';

    Mock.setup({
        timeout: 200 - 400
    });

    Mock.mock('/user\/menu[\s\S]*?/', [{
            "iconCls": "icon-third-menu",
            "id": 152,
            "text": "系统管理",
            "url": "",
            "children": [{
                    "iconCls": "icon-third-menu",
                    "id": 1521,
                    "text": "用户管理",
                    "url": "/ccmp/page/system/userManage.html"
                },
                {
                    "iconCls": "icon-third-menu",
                    "id": 1522,
                    "text": "角色管理",
                    "url": "/ccmp/page/system/authorityManage.html"
                },
                {
                    "iconCls": "icon-third-menu",
                    "id": 1523,
                    "text": "权限管理",
                    "url": "/ccmp/page/system/menuManage.html"
                },
                {
                    "iconCls": "icon-third-menu",
                    "id": 1524,
                    "text": "系统设置",
                    "url": "/ccmp/page/startingUpsetting/menuManage.html"
                },
                {
                    "iconCls": "icon-third-menu",
                    "id": 1525,
                    "text": "开机画面设置",
                    "url": "/ccmp/page/startingPicture/menuManage.html"
                }
            ]
        },
        {
            "iconCls": "icon-third-menu",
            "id": 153,
            "text": "日志管理",
            "children": [{
                "iconCls": "icon-third-menu",
                "id": 1531,
                "text": "操作日志管理",
                "url": "/ccmp/page/logManagement/logManagement.html"
            }]
        }, {
            "iconCls": "icon-third-menu",
            "id": 151,
            "text": "营销活动管理",
            "url": "",
            "children": [{
                "iconCls": "icon-third-menu",
                "id": 1511,
                "text": "营销活动管理",
                "url": "/ccmp/page/marketing/marketing.html"
            }]
        }, {
            "iconCls": "icon-third-menu",
            "id": 154,
            "text": "推送消息管理",
            "url": "",
            "children": [{
                "iconCls": "icon-third-menu",
                "id": 1541,
                "text": "推送消息管理",
                "url": "/ccmp/page/pushMsg/pushMsg.html"
            }]
        }, {
            "iconCls": "icon-third-menu",
            "id": 156,
            "text": "产品管理",
            "url": "",
            "children": [{
                "iconCls": "icon-third-menu",
                "id": 1561,
                "text": "产品管理",
                "url": "/ccmp/page/productList/productList.html"
            }]
        },
        {
            "iconCls": "icon-third-menu",
            "id": 156,
            "text": "栏目管理",
            "url": "",
            "children": [{
                    "iconCls": "icon-third-menu",
                    "id": 1561,
                    "text": "父栏目管理",
                    "url": "/ccmp/page/programa/appPageManage.html"
                },
                {
                    "iconCls": "icon-third-menu",
                    "id": 1561,
                    "text": "子栏目管理",
                    "url": "/ccmp/page/programa/childManage.html"
                }
            ]
        }
    ]);
});