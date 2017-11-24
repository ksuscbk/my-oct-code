//5:J今日一刻的数据获取
yike.controller("todayController",["$scope","$http","$filter","$rootScope",function($scope,$http,$filter,$rootScope){
    //找到今日一刻的获取今日一刻的数据的接口，获取到数据，然后往$scope绑定，然后在today.html 编写模板进行解析.
    //https://moment.douban.com/api/stream/date/2016-08-20?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6
    //我在我的网站去获取今日一刻的数据，会出现什么问题,跨域.
    //1:jsonp callback=getInfo 服务器部支持jsonp
    //2:cors 服务器设置响应头，允许那些域名可以访问. 这个很明显不可取.
    //3:配代理，成本比较高，还需要单独的服务器.
    //4:交给后台处理 php 可以发送http 请求，它没有跨域的概念
    //定义加载的状态
    $rootScope.loaded=false;
    $rootScope.title="今日一刻";
    var date=new Date();  //2017-11-24 ，我就需要使用过滤器.
    date=$filter("date")(date,"yyyy-MM-dd");
    $http({
        url:"api/today.php",
        method:"get",
        params:{
            date:date
        }
    }).success(function(data){

        //数据加载完成
        $rootScope.loaded=true;

        $scope.data=data;
    })
}]);