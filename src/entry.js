seajs.config({
    // 系统根路径
    base: './',
    // 外部依赖别名
    alias: {
        'jquery': 'assets/jquery.1.12.4.min',
        'device': 'assets/device.min',
        'zepto': 'assets/zepto',
        'mock': 'assets/mock.js',
        'bootstrapjs': 'assets/bootstrap-3.3.0/js/bootstrap.min',
        'bootstrapValidator': 'assets/bootstrapVaildator/bootstrapValidator.min',
        'waves': 'assets/waves-0.7.5/waves.min',
        'jquery-mCustomScrollbar': 'assets/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min',
        'BootstrapMenu': 'assets/BootstrapMenu.min',
        'jquery-confirm': 'assets/jquery-confirm/jquery-confirm.min',
        'jquery-cookie': 'assets/jquery.cookie',
        'md5': 'assets/md5/md5',
    },
    paths: {
        'js': 'js',
        'mock': 'src/mock'
    },
    charset: 'utf-8',
    // 插件加载
    preload: [

        //     'jquery',
        //     'device',
        //     'mock',
        //     // 'bootstrapjs',
        //     // 'bootstrapValidator',
        //     'waves',
        //     // 'jquery-mCustomScrollbar',
        //     // 'BootstrapMenu',
        //     // 'jquery-confirm',
        //     // 'jquery-cookie',
        //     'md5'
    ]
});

/**
 * 需要全局遮罩，加载依赖完成后，去除全局遮罩
 * 项目初始，加载所有依赖，而后运行首页 
 */
seajs.use('js/frame', function () {
    console.log('load frame success ');
});