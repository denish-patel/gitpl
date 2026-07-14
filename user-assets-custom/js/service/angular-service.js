
angular.module('userGitpl').service('apiData', function ($http) {

    Object.toparams = function ObjecttoParams(obj) {
        var p = [];
        for (var key in obj) {
            p.push(key + '=' + encodeURIComponent(obj[key]));
        }
        return p.join('&');
    };
    this.getapi = function () {
        return $http.get('http://localhost:3000/gitpls/user-assets-custom/js/JsonMenu.json');
    };
    this.getFetchdd = function (controller, method) {
        return $http({
            method: 'GET',
            url: baseUrl + controller + '/' + method,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
    };
    
    this.getAllhttpRequest = function (controller, method) {
        return $http({
            method: 'GET',
            url: baseUrl + controller + '/' + method,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
    };
    
    this.getSinglehttpRequest = function (controller, method, selection, data) {        
        return $http({
            method: 'GET',
            url: baseUrl + controller + '/' + method + '?' + selection + '=' + data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
    };
    
    this.postInserthttpRequest = function (controller, method, data) {        
        return $http({
            method: 'POST',
            url: baseUrl + controller + '/' + method,
            data: Object.toparams(data),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
    };
    
    this.postUpdatehttpRequest = function (controller, method, data) {
        return $http({
            method: 'PUT',
            url: baseUrl + controller + '/' + method,
            data: Object.toparams(data),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
    };
    
    this.postDeletehttpRequest = function (controller, method, data) {
        return $http({
            method: 'PUT',
            url: baseUrl + controller + '/' + method,
            data: Object.toparams(data),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
    };

});



angular.module('userGitpl').filter('unique', function () {
    return function (arr, field) {
        var o = {}, i, l = arr.length, r = [];
        for (i = 0; i < l; i += 1) {
            o[arr[i][field]] = arr[i];
        }
        for (i in o) {
            r.push(o[i]);
        }
        return r;
    };
});


