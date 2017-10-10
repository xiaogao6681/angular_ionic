/**
 * Created by Mr.Song on 2016/11/25.
 */
/**
 * Created by hxsd on 2016/11/23.
 */
angular.module("myapp")
    .controller("view3Ctrl",function($scope,$http){
        // 创建一些scope变量
        $scope.page = 0;    // 用来保存当前请求的页码
        $scope.total = 1;   // 用来保存总页数
        $scope.view3 = [];

        // 加载餐馆的方法
        $scope.getRestaurants = function () {
            $scope.page++;  // 页数++

            var url = "view3.json";   // 请求的url
            $http.get(url)
                .success(function (response) {
                    angular.forEach(response.view3, function (restaurant) {
                        $scope.view3.push(restaurant);
                    });

                    // 更新总页面数，基于API发送的值
                    $scope.total = response.totalPages; // 示例数据中为3页
                })
                .finally(function () {
                    // 广播事件，告诉无限滚动组件everything is done
                    $scope.$broadcast("scroll.infiniteScrollComplete");
                });
        };

        $scope.getRestaurants();    // 加载时，从API加载第一页餐馆数据


    });