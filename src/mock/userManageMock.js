define(function (require) {
    'use strict';

    /**
     * 设置响应超时时间
     */
    Mock.setup({
        timeout: 4000 - 5000
    });

    Mock.mock(/user\/list[\s\S]*?/, {
        "total": 30,
        "rows|1-30": [{
            'id|+1': 1,
            'username': '@name',
            'realName': '@cname',
            'description|1-10': 'fsafddsfsfdsfdsf45324fsafsfsf',
            'phoneNumber|+1': 18761692143,
            'createUser|2-5': 'adminh',
            'createTime': '@date("yyyy-MM-dd")',
            'updateUser|2-5': 'opratorww',
            'updateTime': '@date("yyyy-MM-dd")'
            // 'roles':[{
            //     "createUser": "admin",
            //     "createTime": null,
            //     "updateUser": null,
            //     "updateTime": null,
            //     "id": null,
            //     "roleName": null,
            //     "delFlag": "0",
            //     "description": "运营人员",
            //     "users": null,
            //     "menus": null
            // }]
        }]
    });

    // Mock.mock('http://localhost:8080/ccmp/user/list', {
    //     "total": 2,
    //     "rows": [
    //     {
    //         "createUser": "admin",
    //         "createTime": null,
    //         "updateUser": null,
    //         "updateTime": null,
    //         "id": 40,
    //         "delFlag": "0",
    //         "description": "运营人员",
    //         "idCardNo": null,
    //         "password": null,
    //         "realName": "mabin",
    //         "username": "easier",
    //         "phoneNumber": 18782952930,
    //         "roles": [
    //         {
    //             "createUser": "admin",
    //             "createTime": null,
    //             "updateUser": null,
    //             "updateTime": null,
    //             "id": null,
    //             "roleName": null,
    //             "delFlag": "0",
    //             "description": "运营人员",
    //             "users": null,
    //             "menus": null
    //         }],
    //         "users": null,
    //         "enabled": true,
    //         "accountNonLocked": true,
    //         "accountNonExpired": true,
    //         "credentialsNonExpired": true
    //     },
    //     {
    //         "createUser": "admin",
    //         "createTime": null,
    //         "updateUser": null,
    //         "updateTime": null,
    //         "id": 121,
    //         "delFlag": "0",
    //         "description": null,
    //         "idCardNo": null,
    //         "password": null,
    //         "realName": "qqq",
    //         "username": "qqq",
    //         "phoneNumber": null,
    //         "roles": [
    //         {
    //             "createUser": "admin",
    //             "createTime": null,
    //             "updateUser": null,
    //             "updateTime": null,
    //             "id": null,
    //             "roleName": null,
    //             "delFlag": "0",
    //             "description": null,
    //             "users": null,
    //             "menus": null
    //         }],
    //         "users": null,
    //         "enabled": true,
    //         "accountNonLocked": true,
    //         "accountNonExpired": true,
    //         "credentialsNonExpired": true
    //     }]
    // });

});