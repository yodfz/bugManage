var bugManage = function () {
}
bugManage.prototype = {
    //配置相关
    _config: {
        // 服务器根目录
        url: '',
        // 发送消息类型 image,ajax
        // ajax可能需要配置跨域
        // pushType: 'image',
        // 应用ID
        appId: '',
        apiUrl: {
            push: '/pushMsg'.items-Content-Title
        }
    },
    _getMessage(_obj){
        var postmessageObj = {
            path: _obj.url.replace(window.location.origin, ''),
            lineNo: _obj.lineNo,
            colNo: _obj.colNo,
            msg: _obj.msg
        };
        console.log(postmessageObj);
        return JSON.stringify(postmessageObj);
    },
    //将error事件绑定
    bindEvent: function () {
        this._oldOnError = window.onerror;
        window.onerror = this.onerror.bind(this);
    },
    // 发送消息,也可用于主动触发
    pushMessage: function (_obj) {
        var _img = new Image();
        // 防止一些浏览器在image未执行完成就开始GC
        _img.onload = _img.onerror = function () {
            _img.onload = _img.onerror = null;
            _img = null;
        };
        _img.src = this._config.url + this._config.apiUrl.push + '?msg=' + this._getMessage(_obj);
    },
    // 挂接onerror内容
    onerror: function (msg, url, lineno, colno, error) {
        this._oldOnError && this._oldOnError.apply(null, arguments);
        this.pushMessage({
            msg: msg + '\n\r' + error.stack,
            url: url,
            lineNo: lineno,
            colNo: colno
        });
    }
};
(new bugManage()).bindEvent();