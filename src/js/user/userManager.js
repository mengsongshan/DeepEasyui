define(function (require, exports, module) {
    'use strict'

    function initDatagrid() {
        var $table;
        $("#pop_comp").append(templates['widget.addUser']);
        $table = $('#table').datagrid({
            url: 'user/list',
            method: 'GET',
            queryParmas: {},
            border: true, // 是否显示边框
            checkOnSelect: false,
            singleSelect: true,
            fitColumns: true,
            autoRowHeight: false,
            loadMsg: '正在加载,请稍后 !',
            striped: false,
            nowrap: true,
            pagination: true, //是否分页
            rownumbers: false, //显示列编号
            resizable: false, // ?
            resizeHandle: 'both',
            striped: true,
            pageNumber: 1, //初始化展示第1页
            pageSize: 10, // 每页显示的记录条数，默认为10
            pageList: [10, 20, 30, 40, 50, 60], // 可以设置每页记录条数的列表
            scrollbarSize: 0,
            rowStyler: function (index, row) {
                return 'height:80px;'
            },
            toolbar: [{
                    width: 100,
                    height: 50,
                    text: '新增',
                    iconCls: 'icon-add',
                    size: 'large',
                    handler: function () {
                        $("#fm").form();
                        $('#dlg').dialog().dialog('open').dialog('center').dialog('setTitle', 'New User');
                        $('#fm').form('clear');
                    }
                }, {
                    text: '修改',
                    iconCls: 'icon-edit',
                    handler: function () {
                        var row = $('#table').datagrid('getSelected');
                        if (row) {
                            $('#dlg').dialog('open').dialog('center').dialog('setTitle', 'Edit User');
                            $('#fm').form('load', row);

                        }
                    }
                },
                {
                    text: 'Delete',
                    iconCls: 'icon-remove',
                    handler: function () {
                        var row = $('#table').datagrid('getSelected');
                        if (row) {

                        }
                    }
                },
                {
                    text: 'Refresh',
                    iconCls: 'icon-reload',
                    handler: function () {
                        $('#table').datagrid('reload');
                    }
                }
            ],
            onClickRow: function () {

            },
            columns: [
                [{
                    field: 'ck',
                    resizable: false,
                    checkbox: true,

                }, {
                    field: 'id',
                    title: 'ID',
                    width: 80,
                    resizable: true,
                    align: 'center',
                    sortable: true
                }, {
                    field: 'username',
                    title: '用户名',
                    width: 80,
                    resizable: false,
                    align: 'center'
                }, {
                    field: 'phoneNumber',
                    title: '手机号码',
                    width: 80,
                    resizable: false,
                    align: 'center'
                }, {
                    field: 'createTime',
                    title: '创建时间',
                    width: 80,
                    resizable: false,
                    align: 'center'
                }]
            ],

            onLoadSuccess: function (data) {

            }
        });

        // 设置分页控件
        $table.datagrid('getPager').pagination({
            layout: ['list', 'prev', 'links', 'next'],
            links: 5
        });

        $('.pagination-page-list').addClass('form-control tbFrom');

    };


    return {
        openTab: function (target) {
            var tabName = target.innerText;
            if ($('#tt').tabs('exists', tabName)) {
                $('#tt').tabs('select', tabName);
            } else {
                $('#tt').tabs('add', {
                    href: 'fdf',
                    title: tabName,
                    closable: true,
                    loader: function (param, success, error) {
                        success(templates['page.userManager']);
                    },
                    onLoad: function () {
                        initDatagrid();
                    }
                });
            }
        }
    }
});