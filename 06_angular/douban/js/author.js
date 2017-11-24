yike.controller("authorController",["$scope","$rootScope","$http",function($scope,$rootScope,$http){
    $rootScope.title="热门作者";
    $rootScope.loaded=false;
    //我通过$http 去获取.
    $http({
         url:"api/author.php",
         method:"get"
    }).success(function(data){
        console.log(data);
        $rootScope.loaded=true;
         $scope.data=data;
    })
}])