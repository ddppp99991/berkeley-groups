!(function (win, doc) {
    var bridge;
    var versionTimeout;
    
    function LOOP() {

    }
    // ready
    LOOP.prototype.ready = function (callback) {
        setupWebViewJavascriptBridge(function (_bridge) {
            bridge = _bridge;
            callback('success');
        })
    }

    LOOP.prototype.getUserInfo = function (params) {    // 省略代码，举个例子，直接返回参数
        bridge.callHandler('login', { appName: params.param.appName, appId: params.param.appId }, function responseCallback(responseData) {
            params.success(responseData);
        });
    }

    LOOP.prototype.openUrl = function (url) {
        bridge.callHandler('openUrl', { url: url });
    }

    LOOP.prototype.openUrlBySafari = function (url) {
        bridge.callHandler('openUrlBySafari', { url: url });
    }

    LOOP.prototype.getVersion = function (callback) {
        versionTimeout = setTimeout(function () {
            let obj = {
                code: 0
            }
            callback(JSON.stringify(obj))
        }, 600)
        bridge.callHandler('getVersion', 'getVersion', function responseCallback(responseData) {
            if (versionTimeout) {
                clearTimeout(versionTimeout);
            }
            callback(responseData);
        });
    }

    LOOP.prototype.selectMyCreatedGroup = function (callback) {
        bridge.callHandler('selectMyCreatedGroup', 'selectMyCreatedGroup', function responseCallback(responseData) {
            callback(responseData);
        });
    }

    LOOP.prototype.setScrollEnabled = function (type, url) {
        bridge.callHandler('setScrollEnabled', type, { url: url });
    }

    // 直接进群并进入对应的会话
    LOOP.prototype.joinGroup = function (id, callback) {   
        bridge.callHandler('joinGroup', { id: id}, function responseCallback(responseData) {
            callback(responseData);
        });
    }

    function setupWebViewJavascriptBridge(callback) {
        // if (this.window.WebViewJavascriptBridge) { return callback(this.window.WebViewJavascriptBridge); }else {
        //     setTimeout(function () { setupWebViewJavascriptBridge(callback) }, 100)
        // }
        if (this.window.WVJBCallbacks) { return this.window.WVJBCallbacks.push(callback); }
        if (this.window.WebViewJavascriptBridge) { return callback(this.window.WebViewJavascriptBridge); }
        this.window.WVJBCallbacks = [callback];
        var WVJBIframe = document.createElement('iframe');
        WVJBIframe.style.display = 'none';
        WVJBIframe.src = 'https://__bridge_loaded__';
        document.documentElement.appendChild(WVJBIframe);
        setTimeout(function () { document.documentElement.removeChild(WVJBIframe) }, 0)
    }
    win.loop = new LOOP();

})(window, document);