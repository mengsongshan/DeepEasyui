define(function (require, exports, module) {
    'use strict'

    var api = require('js/api');
    var userManager = require('js/user/userManager');
    // api.getMenu(false, {
    //     success: function (menus) {
    //         $.when(
    //             $('#mm').append(templates['page.frame'](menus))
    //         ).then(function () {

    //             $('#root').layout();
    //         });
    //     },
    //     fail: function () {

    //     }
    // });

    var menus = [{
            iconCls: "icon-third-menu",
            cid: 152,
            name: "系统管理",
            url: "",
            children: [{
                    iconCls: "icon-third-menu",
                    cid: 1521,
                    name: "用户管理",
                    url: "/ccmp/page/system/userManage.html"
                },
                {
                    iconCls: "icon-third-menu",
                    cid: 1522,
                    name: "角色管理",
                    url: "/ccmp/page/system/authorityManage.html"
                },
                {
                    iconCls: "icon-third-menu",
                    cid: 1523,
                    name: "权限管理",
                    url: "/ccmp/page/system/menuManage.html"
                },
                {
                    iconCls: "icon-third-menu",
                    cid: 1524,
                    name: "系统设置",
                    url: "/ccmp/page/startingUpsetting/menuManage.html"
                },
                {
                    iconCls: "icon-third-menu",
                    cid: 1525,
                    name: "开机画面设置",
                    url: "/ccmp/page/startingPicture/menuManage.html"
                }
            ]
        },
        {
            iconCls: "icon-third-menu",
            cid: 153,
            name: "日志管理",
            children: [{
                iconCls: "icon-third-menu",
                cid: 1531,
                name: "操作日志管理",
                url: "/ccmp/page/logManagement/logManagement.html"
            }]
        }, {
            iconCls: "icon-third-menu",
            cid: 151,
            name: "营销活动管理",
            url: "",
            children: [{
                iconCls: "icon-third-menu",
                cid: 1511,
                name: "营销活动管理",
                url: "/ccmp/page/marketing/marketing.html"
            }]
        }, {
            iconCls: "icon-third-menu",
            cid: 154,
            name: "推送消息管理",
            url: "",
            children: [{
                iconCls: "icon-third-menu",
                cid: 1541,
                name: "推送消息管理",
                url: "/ccmp/page/pushMsg/pushMsg.html"
            }]
        }, {
            iconCls: "icon-third-menu",
            cid: 156,
            name: "产品管理",
            url: "",
            children: [{
                iconCls: "icon-third-menu",
                cid: 1561,
                name: "产品管理",
                url: "/ccmp/page/productList/productList.html"
            }]
        },
        {
            iconCls: "icon-third-menu",
            cid: 157,
            name: "栏目管理",
            url: "",
            children: [{
                    iconCls: "icon-third-menu",
                    cid: 1571,
                    name: "父栏目管理",
                    url: "/ccmp/page/programa/appPageManage.html"
                },
                {
                    iconCls: "icon-third-menu",
                    cid: 1572,
                    name: "子栏目管理",
                    url: "/ccmp/page/programa/childManage.html"
                }
            ]
        }
    ];

    // 初始化框架页
    $('#mm').append(templates['page.frame']({
        test: menus
    }));
    $('#root').layout();
    $('#t_menu').accordion();
    $('#tt').tabs();


    function contentBeautify() {
        $('#tt').tabs({
            onLoad: function (panel) {
                var plugin = panel.panel('options').title;
                panel.find('textarea[name="code-' + plugin + '"]').each(function () {
                    var data = $(this).val();
                    data = data.replace(/(\r\n|\r|\n)/g, '\n');
                    if (data.indexOf('\t') == 0) {
                        data = data.replace(/^\t/, '');
                        data = data.replace(/\n\t/g, '\n');
                    }
                    data = data.replace(/\t/g, '    ');
                    var pre = $('<pre name="code" class="prettyprint linenums"></pre>').insertAfter(this);
                    pre.text(data);
                    $(this).remove();
                });
                prettyPrint();
            }
        });
        var sw = $(window).width();
        if (sw < 767) {
            $('body').layout('collapse', 'west');
        }
        $('.navigation-toggle span').bind('click', function () {
            $('#head-menu').toggle();
        });
    }

    // 菜单事件绑定
    $('#t_menu a').click(function (event) {
        openTab(event.target);
    });

    function openTab(target) {
        userManager.openTab(target);
    }




});