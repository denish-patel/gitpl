angular.module('userGitpl').controller('careersController', ['$scope', '$http', function ($scope, $http) {
        $scope.careersData = {};
        $scope.message = {};

        
        // console.log($location.absUrl());
        // console.log($location.protocol() + "://" + $location.host() + ":" + $location.port()); 

        //Get Data TESTED OK
        $scope.careersFun = function () {
            console.log($scope.careersData);
            if ($scope.careersData.$valid) {                
                $http.post('contact.php', $scope.careersData).success(function (data) {
                    if (data === true) {
                        setTimeout(function () {
                            $scope.message = {'class': "alert-success", 'msg': "Sent Mail Successfully!"};
                        }, 2000);
                    } else {
                        setTimeout(function () {
                            $scope.message = {'class': "alert-danger", 'msg': "Failed to Sent Mail!"};
                        }, 2000);
                    }
                });
            } else {
                setTimeout(function () {
                    $scope.message = {'class': "alert-danger", 'msg': "All fields are Required"};
                }, 2000);
            }
        };
    }]);

//to file type data, this attributes is required
angular.module('userGitpl').directive('appFilereader', function ($q) {
    var slice = Array.prototype.slice;
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, element, attrs, ngModel) {
            if (!ngModel)
                return;
            ngModel.$render = function () {
            };
            element.bind('change', function (e) {
                var element = e.target;
                $q.all(slice.call(element.files, 0).map(readFile))
                        .then(function (values) {
                            if (element.multiple)
                                ngModel.$setViewValue(values);
                            else
                                ngModel.$setViewValue(values.length ? values[0] : null);
                        });
                function readFile(file) {
                    var deferred = $q.defer();
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        deferred.resolve(e.target.result);
                    };
                    reader.onerror = function (e) {
                        deferred.reject(e);
                    };
                    reader.readAsDataURL(file);
                    return deferred.promise;
                }
            }); //change
        } //link
    }; //return
});


angular.module('userGitpl').directive('validFile',function(){
    return {
        require:'ngModel',
        link:function(scope,el,attrs,ctrl){
            ctrl.$setValidity('validFile', el.val() != '');
            //change event is fired when file is selected
            el.bind('change',function(){
                ctrl.$setValidity('validFile', el.val() != '');
                scope.$apply(function(){
                    ctrl.$setViewValue(el.val());
                    ctrl.$render();
                });
            });
        }
    }
})