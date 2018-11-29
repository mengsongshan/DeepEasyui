define(function (require, exports, module) {
    'use strict'

    var Log = require('js/log');

    var fetchUrl = '/';

    function fetch(type, url, params, callback) {

        $.ajax({
            type: type || "GET",
            url: fetchUrl + url,
            data: params || {},
            dataType: 'json'
        }).done(function (data) {
            try {
                callback && callback.success((typeof data === "string") ? JSON.parse(data) : data);
                Log.debug('Request Type : ' + type + ' Interface Name : ' + url + ' Params : ' + params + ' load sucessfully ....');
            } catch (error) {
                console.log(error);
                Log.debug('Request Type : ' + type + ' Interface Name : ' + url + ' Params : ' + params + ' Callback fail .....');
            }
        }).error(function (XMLHttpRequest, textStatus, errorThrown) {

            callback && callback.error(XMLHttpRequest, textStatus, errorThrown)
            Log.debug('Request Type : ' + type + ' Interface Name : ' + url + ' Params : ' + params + ' load fail ....');
        }).complete(function () {
            console.log('complete');
        });

    }

    return {
        /**
         * 获取菜单
         */
        getMenu: function (params, callback) {

            fetch('GET', 'system/menu', params, callback);
        },
        /**
         * 消息搜索接口
         */
        pushMsgLoad: function (params, callback) {
            return fetch('GET', 'tMsgPush/list/json', params, callback);
        },
        saveMsg: function (params, callback) {
            return fetch('POST', 'tMsgPush/save/json', params, callback);
        },
        msgEdl: function (params, callback) {
            return fetch('POST', 'tMsgPush/deleteById/json', params, callback);
        }
    }
});