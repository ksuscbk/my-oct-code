//1:将应用以模块化的方式去组织
var yike=angular.module("app",["ngRoute"]);
//2:我要去获取导航的数据.
yike.controller("navsController",["$scope",function($scope){
        //导航相关的数据
        $scope.navs=[
            {"text":"今日一刻","link":"/today","icon":"icon-home"},
            {"icon":"icon-file-empty","text":"往期内容","link":"/older"},
            {"icon":"icon-pencil","text":"热门作者","link":"/author"},
            {"icon":"icon-menu","text":"栏目浏览","link":"/category"},
            {"icon":"icon-heart","text":"我的喜欢","link":"/favourite"},
            {"icon":"icon-cog","text":"设置","link":"/setting"}
        ]
}]);
//3:导航的动画处理，因为点击菜单需要执行切换，点击导航也要切换，
//所以我们用的事件方法是同一个，所以我们需要把事件绑定在$rootScope 上面. run方法
yike.run(["$rootScope",function($rootScope){
    //点击一下，我要做类名切换, ng-class={collapse:false}
    $rootScope.collapsed=false;
    $rootScope.toggle=function(){
        //切换
        $rootScope.collapsed=!$rootScope.collapsed;
        //导航动画处理. dom 操作. angular 里面没有给我们提供dom 操作的相关api,只能自己使用原生的js+css3 去执行原生交互效果.
        //获取到所有的导航
        var navs=document.querySelectorAll(".navs dd");
        //导航需要展开的，折叠的
        if($rootScope.collapsed){
            for(var i=0;i<navs.length;i++){
                navs[i].style.transform="translate(0)";
                //过来的时候需要有过渡效果
                navs[i].style.transitionDuration=".6s";
                navs[i].style.transitionDelay=(i+1)*0.11+"s";
            }
        }else{
            //还是要操作dom 执行动画.
            for(var i=0;i<navs.length;i++){
                navs[i].style.transform="translate(-100%)";
                //过来的时候需要有过渡效果
                navs[i].style.transitionDuration=".6s";
                //控制延迟时间
                navs[navs.length-i-1].style.transitionDelay=(i+1)*0.11+"s";
            }
        }
    }
}]);
//4:配置路由
yike.config(["$routeProvider",function($routeProvider){

        $routeProvider.when("/today",{
               templateUrl:"views/today.html", //去获取豆瓣一刻数据,怎么获取,视图关联控制器，在控制器关联$scope ，通过$http 取数据
               controller:"todayController"
        }).when("/older",{
               templateUrl:"views/older.html",
               controller:"olderController"
        }).when("/author",{
               templateUrl:"views/author.html",
               controller:"authorController"
        }).when("/category",{

        }).when("/favourite",{

        }).when("/setting",{

        }).otherwise({
             redirectTo:"/today"
        })
}]);



/*往期内容，在添加一个控制器*/
