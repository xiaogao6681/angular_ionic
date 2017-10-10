/**
 * Created by Mr.Song on 2016/11/26.
 */
myapp.controller('page1Ctrl',function($scope){
    $scope.play=false;
    $scope.btn=function(zz){
        $scope.play=!$scope.play;

    }
    if( $scope.play==false){
    $scope.music="<audio src='music/01.mp3' controls id='music'></audio>"
    }

});





//
//<i ng-bind-html="Mp3Path1 | to_trusted"></i>
//    <img id="mp3Img" src="../../images/msg.gif" ng-click="mp3Play('HSK','1')" />
//
//$scope.MP3click = function (HSK) {
//    $scope.HSKMp3Path1 = "<audio  controls='controls' id='Audio1'><source src='../../data/media/"+PY1+".mp3' type='audio/mpeg' /></audio>";
//};
//

















