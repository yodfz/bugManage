var bugManage = {
    //配置相关
    _config: {
        // 服务器根目录
        url: '',
        // 发送消息类型 image,ajax
        // ajax可能需要配置跨域
        pushType: 'image',
        // 应用ID
        appId: '',
        // 应用密匙
        appSecret: '',
        apiUrl: {
            push: '/pushMsg'
        }
    },
    //将error事件绑定
    bindEvent: function () {
        this._oldOnError = window.onerror;
        window.onerror = this.onerror;
    },
    // 发送消息
    pushMessage: function (_obj) {
        var _img = new Image();
        // 防止一些浏览器在image未执行完成就开始GC
        _img.onload = _img.onerror = function () {
            _img.onload = _img.onerror = null;
            _img = null;
        };
        var _msg = _obj.url + '\n\r' + _obj.lineno + ':' + _obj.colno + _obj.msg;
        _img.src = this._config.url + this._config.apiUrl.push + '?msg=' + encodeURIComponent(_msg);
    },
    // 挂接onerror内容
    onerror: function (msg, url, lineno, colno, error) {
        this._oldOnError && this._oldOnError.apply(null, arguments);
        this.pushMessage({
            msg: msg,
            url: url,
            lineno: lineno,
            colno: colno
        });
    }
};
bugManage.bindEvent();