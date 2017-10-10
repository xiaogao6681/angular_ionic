/**
 * Created by hxsd on 2016/11/23.
 */
//创建主模板
var myapp=angular.module("myapp",['ionic']);

//配置路由
myapp.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state("page1",{
            url:"/page1",
            templateUrl:"templates/page1/page1.html",
            controller:"page1Ctrl"
        })
        .state("tour",{
            url:"/tour",
            templateUrl:"templates/tour/tour.html"
        })
        .state("tabs",{
            url:"/tabs",
            abstract:true,
            templateUrl:"templates/tabs/tabs.html"
        })
        .state("tabs.view1",{
            url:"/view1",
           views:{"tab-view1":{ templateUrl:"templates/view1/home.html"}}

        })
        .state("tabs.view2",{
            url:"/view2",
            views:{"tab-view2":{ templateUrl:"templates/view2/view2.html"}}
        })
        .state("tabs.page2",{
            url:"/page2",
            views:{"tab-view2":{ templateUrl:"templates/page2/page2.html"}}
        })
        .state("tabs.view3",{
            url:"/view3",
            views:{"tab-view3":{ templateUrl:"templates/view3/view3.html"}},
            controller:"view3Ctrl"
        })
        .state("tabs.view4",{
            url:"/view4",
            views:{"tab-view4":{ templateUrl:"templates/view4/view4.html"}}
        });
            //默认页面路由
            $urlRouterProvider.otherwise('/tour')
});