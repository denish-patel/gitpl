angular.module('userGitpl').controller('contactController', ['$scope', '$http', function ($scope, $http) {
        $scope.contactData = {};
        $scope.contactFun = {};
        $scope.message = {};

        // console.log($location.absUrl());
        // console.log($location.protocol() + "://" + $location.host() + ":" + $location.port()); 

        //Get Data TESTED OK
        $scope.contactFun = function () {
            //console.log($scope.contactData.yourfullname);
            if ($scope.contactData.$valid) {
                $http.post('contact.php', $scope.contactData).success(function (data) {
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