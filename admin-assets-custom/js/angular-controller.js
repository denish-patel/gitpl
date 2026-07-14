var App = angular.module('adminGitpl', ['angularUtils.directives.dirPagination']);
App.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
}]);
App.service('apiData', function ($http) {
    this.getapiweather = function () {
        return $http.get('http://api.openweathermap.org/data/2.5/forecast?q=pune,india&APPID=1306186b5264cac97d4e1509575cd39c&units=imperial');
    };

    this.getapiemployee = function () {
        return $http.get('../admin-assets-custom/js/emp.json');
    };

    this.getseoData = function (i) {
        return $http.get('../admin-assets-custom/js/emp.json?id=' + i);
    };

    Object.toparams = function ObjecttoParams(obj) {
        var p = [];
        for (var key in obj) {
            p.push(key + '=' + encodeURIComponent(obj[key]));
        }
        return p.join('&');
    };

    this.posthttpServiceslink = function (m, f, data) {
        var posturl = $http({
            method: m,
            url: 'http://localhost:3000/demoApi/api/' + f,
            data: Object.toparams(data),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return posturl;
    };

    this.gethttpServiceslink = function (m, fdata) {
        var getlink = $http({
            method: m,
            url: 'http://localhost:3000/demoApi/api/' + fdata,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return getlink;
    };
});

App.filter('unique', function () {
    return function (arr, field) {
        var o = {},
            i, l = arr.length,
            r = [];
        for (i = 0; i < l; i += 1) {
            o[arr[i][field]] = arr[i];
        }
        for (i in o) {
            r.push(o[i]);
        }
        return r;
    };
});

App.controller('headerController', ['$scope', function ($scope) {
    $scope.userDetails = {};
    $scope.userDetails.FullName = "Denish Patel";
    $scope.userDetails.username = "denishp83";
    $scope.userDetails.EmailID = "denish.patel@gitpl.com";
}]);

App.controller('asideController', ['$scope', function ($scope) {

}]);

App.controller('dashboardlistController', ['$scope', 'apiData', function ($scope, apiData) {
    $scope.weatherData = {};
    apiData.getapiweather().success(function (data) {
        if (data !== '') {
            $scope.weatherData = data;
        } else {
            $scope.employeeList = "No Record is found";
        }
    });
    $scope.formatDate = function (date) {
        var dateOut = new Date(date);
        return dateOut;
    };
}]);

App.controller('employeelistController', ['$scope', 'apiData', function ($scope, apiData) {
    $scope.employeeList = {};
    $scope.count = "";
  

    apiData.getapiemployee().success(function (data) {
        if (data !== '') {
            $scope.employeeList = data;
            $scope.count = Object.keys(data).length;
        } else {
            $scope.employeeList = "No Record is found";
        }
    });
    $scope.getCount = function (i) {
        var iCount = iCount || 0;
        for (var j = 0; j < $scope.employeeList.length; j++) {
            if ($scope.employeeList[j].role === i) {
                iCount++;
            }
        }
        return iCount;
    };

    
}]);

App.controller('seolistController', ['$scope', 'apiData', function ($scope, apiData) {
    $scope.seoData = {};
    $scope.setseoData = function (i) {
        apiData.getseoData(i).success(function (data) {
            $scope.seoData = data;
            $('#myModalSeoAdd').modal('toggle');
        });
    };
}]);

App.controller('feedbacklistController', ['$scope', 'apiData', function ($scope, apiData) {
    $scope.feedbackData = {}; //fetching data object for view
    $scope.addData = {}; //submitting form data object       

    //Onload function
    angular.element(document).ready(function () {
        $scope.FetchBook();
        $scope.btn = 'Save';
        //alert(svg);
    });

    //Get Data TESTED OK
    $scope.FetchBook = function () {
        apiData.gethttpServiceslink('GET', 'books').success(function (data) {
            if (data !== '') {
                $scope.feedbackData = data;
            } else {
                $.notify({
                    message: 'Record is not found'
                }, {
                    type: 'danger',
                    placement: {
                        from: "bottom",
                        align: "left"
                    }
                });
            }
        });
    };

    //Delete Data TESTED OK
    $scope.deleteBook = function (i, j) {
        $scope.del = {
            'id': i,
            'delFlag': j
        };
        apiData.posthttpServiceslink('PUT', 'deleteBook', $scope.del).success(function (data) {
            if (data === 'success') {
                $scope.FetchBook();
                if (j == false) {
                    $.notify({
                        message: 'Record Suspended'
                    }, {
                        type: 'success',
                        showProgressbar: true,
                        placement: {
                            from: "bottom",
                            align: "left"
                        }
                    });
                } else {
                    $.notify({
                        message: 'Record Activited'
                    }, {
                        type: 'success',
                        showProgressbar: true,
                        placement: {
                            from: "bottom",
                            align: "left"
                        }
                    });
                }
            } else {
                $.notify({
                    message: 'Record not Deleted'
                }, {
                    type: 'info',
                    showProgressbar: true,
                    placement: {
                        from: "bottom",
                        align: "left"
                    }
                });
            }
        });
    };

    //Inserting and Updating Data  TESTED OK
    $scope.submitForm = function () {
        if ($scope.btn === 'Save') {
            apiData.posthttpServiceslink('POST', 'addBook', $scope.addData).success(function (data) {
                if (data !== '') {
                    $scope.FetchBook();
                    $scope.addData = null;
                    $('#collapseExample').removeClass('show');
                    $.notify({
                        message: 'Record Inserted'
                    }, {
                        type: 'success',
                        showProgressbar: true,
                        placement: {
                            from: "bottom",
                            align: "left"
                        }
                    });
                } else {
                    $.notify({
                        message: 'Record not Inserted'
                    }, {
                        type: 'danger',
                        showProgressbar: true,
                        placement: {
                            from: "bottom",
                            align: "left"
                        }
                    });
                }
            });
        } else if ($scope.btn === 'Update') {
            apiData.posthttpServiceslink('PUT', 'updateBook', $scope.addData).success(function (data) {
                if (data !== '') {
                    $scope.FetchBook();
                    $scope.addData = null;
                    $('#collapseExample').removeClass('show');
                    $.notify({
                        message: 'Record Updated'
                    }, {
                        type: 'success',
                        showProgressbar: true,
                        placement: {
                            from: "bottom",
                            align: "left"
                        }
                    });
                } else {
                    $.notify({
                        message: 'Record not Updated'
                    }, {
                        type: 'danger',
                        showProgressbar: true,
                        placement: {
                            from: "bottom",
                            align: "left"
                        }
                    });
                }
            });
        }
    };

    //Fetching Particular Data TESTED OK
    $scope.bookByIsbn = function (i) {
        $scope.functionNm = 'bookByIsbn';
        $scope.findNm = 'isbn';
        $scope.fet = $scope.functionNm + '?' + $scope.findNm + '=' + i;
        $scope.btn = 'Update';

        apiData.gethttpServiceslink('GET', $scope.fet).success(function (data) {
            if (data[0] !== '') {
                $scope.addData = data[0];
                $('#collapseExample').addClass('show');
            } else {
                $.notify({
                    message: 'Record not found'
                }, {
                    type: 'danger',
                    showProgressbar: true,
                    placement: {
                        from: "bottom",
                        align: "left"
                    }
                });
            }
        });
    };

    //Cancel Collapse window  TESTED OK
    $scope.cancel = function () {
        $('#collapseExample').removeClass('show');
        $scope.addData = null;
        $scope.btn = 'Save';
    };

    //Clear $scope object Data  TESTED OK
    $scope.clear = function () {
        $scope.addData = null;
    };

    $scope.sort = function (keyname) {
        $scope.sortKey = keyname; //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    };

}]);


//        $scope.$watch('bookForm', function (bookForm) {
//            if (bookForm) {
//                $scope.formDebugText = 'Form in Scope';
//            } else {
//                $scope.formDebugText = 'Form is Undefined';
//            }
//        });