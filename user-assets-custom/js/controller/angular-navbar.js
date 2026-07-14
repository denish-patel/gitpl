angular.module('userGitpl').controller('MenuController', ['$scope', 'apiData', function ($scope, apiData) {
        //declaring objects
        $scope.menuList = {};
        $scope.mlSolutionFilter = {};
        $scope.mlServicesFilter = {};
        $scope.mlSolutionMenus = {};
        $scope.mlServicesMenus = {};
        $scope.mlSolutionSubMenus = {};
        $scope.mlServicesSubMenus = {};

        $(window).load(function () {
            $scope.init();  //function call
        });

       /* $('.sub-sub-menu-hs').css('display', 'none');
        $scope.filterClick = function (value) {
            //alert(value);
            $('.sub-sub-menu-hs').css('display', 'none');
            var a = ".filter-button." + value;
            var all = ".filter-button";
            var temp = "";

            if ($(all).hasClass(value)) {
                temp = value;
                if (temp !== '') {
                    if ($(a).hasClass('active')) {
                        value = "all";
                    }
                    $(all).removeClass("active");
                    $(a).addClass('active');
                }
            }
            if (value === "all") {
                $('.filter').show('1000');
                $(all).removeClass('active');
            } else {
                $(".filter").not('.' + value).hide('3000');
                $('.filter').filter('.' + value).show('3000');
            }

        };

        $scope.subfilterClick = function (value) {
            var a = ".sub-filter." + value;
            var all = ".sub-filter";
            var temp = "";


            if ($(all).hasClass(value)) {
                temp = value;
                if (temp !== '') {
                    if ($(a).hasClass('active')) {
                        value = "all";
                    }
                    $(all).removeClass("active");
                    $(a).addClass('active');
                }
            }
            if (value === "all") {
                $('.subfilter').css('display', 'none');
                $(all).removeClass('active');
            } else {
                $('.sub-sub-menu-hs').css('display', 'block');
                $(".subfilter").not('.' + value).hide('100');
                $('.subfilter').filter('.' + value).show('3000');
            }

        };*/

        /*$scope.init = function () {
            apiData.getapi().success(function (data) {
                if (data !== "") {
                    $scope.menuList = data;
                    
                    
                    $scope.mlSolutionFilter = data[0].SolutionFilter;
                    $scope.mlServicesFilter = data[0].ServicesFilter;

                    $scope.mlSolutionMenus = data[1].Solution.subMenus;
                    $scope.mlServicesMenus = data[1].Services.subMenus;

                    $scope.mlSolutionSubMenus = data[1].Solution.SubSubMenu;
                    $scope.mlServicesSubMenus = data[1].Services.SubSubMenu;

                    
                }
            });
        };*/
    }]);