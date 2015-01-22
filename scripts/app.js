/**
 * Created by sharadau on 1/22/2015.
 */
angular.module("todoApp",[])
.controller("MainCtrl",function($scope){
        $scope.todos=[];
        $scope.add=function(){
            console.log($scope.newTodo);
            $scope.todos.push($scope.newTodo);
            $scope.newTodo={};
        }
        $scope.delete=function(itemdel){
            var index=$scope.todos.indexOf(itemdel);
            $scope.todos.splice(index,1);
        }
        $scope.clearCompleted=function(){
            for(var index=$scope.todos.length-1;index>=0;index--){
                if($scope.todos[index].completed===true){
                    $scope.todos.splice($scope.todos.indexOf($scope.todos[index]),1); }
            }
        }
    });