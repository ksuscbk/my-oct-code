yike.controller("olderController",["$scope","$rootScope","$http",function($scope,$rootScope,$http){
        $rootScope.title="往期内容";
        //使用$http 去发送请求，然后绑定在$scope 上面，在older.html 去进行更新.
        $rootScope.loaded=false;
        $http({
             url:"api/older.php",
             method:"get"
        }).success(function(data){
             $rootScope.loaded=true;
             $scope.data=data;
        });
}])