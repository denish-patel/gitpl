
angular.module('userGitpl', ['ngMessages']);

angular.module('userGitpl').config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    }]);
var baseUrl = 'http://localhost:3000/gitpls/';

angular.module('userGitpl').service('BaseUrl', function () {
    var baseurl = "http://localhost:3000/gitpls/";
    return baseurl;
});