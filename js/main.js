angular.module("foodage",['ngRoute'])
	.controller('headerMenu',function($scope){
	$scope.mainTitle = "Foodage"
	$scope.menuItems = [
		{
      "name":"Main",
		  "icon":"fa-home",
	    "subitems":[
    		{"name":"first"},
    		{"name":"second"},
    		{"name":"third"}
  		]
    },
  	{"name":"Recipes",
  		"icon":"fa-safari",
  		"subitems":[
    		{
          "name":"New",
          "route":"#recipes/page1"
        },
    		{
          "name":"Cookbook",
          "route":"#recipes/page2"
        },
    		{
          "name":"Search",
          "route":"#recipes/page3"
        }
      ]
    },
  		{"name":"Stores",
  		"icon":"fa-shopping-cart",
  	"subitems":[
  		{"name":"first"},
  		{"name":"second"},
  		{"name":"third"}
  	]
  },
  			{"name":"Pantry",
  		"icon":"fa-balance-scale",
  	"subitems":[
  		{"name":"first"},
  		{"name":"second"},
  		{"name":"third"}
  		]
  	},
  			{"name":"Storage",
  		"icon":"fa-dropbox",
  	"subitems":[
  		{"name":"first"},
  		{"name":"second"},
  		{"name":"third"}
  		]
  	},
  	{
      "name":"Planner",
  		"icon":"fa-calendar",
  	  "subitems":
      [
  		  {
          "name":"Daily",
          "route":"#planner/page1"
        }
  		]
  	},
  	{"name":"Grocery List",
  		"icon":"fa-list-ol",
  		"subitems":[
  		  {
          "name":"list",
          "route":"#lists/page1"
        }
  		]
  	}
	]
}).directive("menuitem",function(){
	return{
		templateUrl: 'mvc/view/menuItem.html'
	}
}).directive("tree",function(){
	return{
		restrict: "C",
		link: function(scope,element,attributes) {
			$(element).click(function () {
				$(element).parent().siblings().children('ul').css('display','none')
				$(element).siblings().toggle(200);
			});
		}
	}
}).config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'mvc/view/home.html'
  }).when('/recipes/page1',{
    templateUrl:'mvc/view/pages/recipe/new.html'
  }).when('/recipes/page2',{
    templateUrl:'mvc/view/pages/recipe/cookbook.html'
  }).when('/recipes/page3',{
    templateUrl:'mvc/view/pages/recipe/search.html'
  }).when('/planner/page1',{
    templateUrl:'mvc/view/pages/planner/daily.html'
  }).when('/planner/page2',{
    templateUrl:'mvc/view/pages/planner/cookbook.html'
  }).when('/planner/page3',{
    templateUrl:'mvc/view/pages/planner/search.html'
  }).when('/lists/page1',{
    templateUrl:'mvc/view/pages/list/list.html'
  });
}).controller('recipeGrabber',function($scope,$http) {
	$scope.recipe = {}
	$scope.grab = function() {
		$http({
			method:'GET',
			url: $scope.recipeUrl
		}).then(function(data){
			console.log($(data.data).find('[itemprop]'))
			prev = ''
			angular.forEach($(data.data).find('[itemprop]'),function(value) {
				if (!$scope.recipe[$(value).attr('itemprop')]) {
				$scope.recipe[$(value).attr('itemprop')]= []
				}
				if($(value).is('meta')){
					$scope.recipe[$(value).attr('itemprop')].push($(value).attr('content'))
				} else {
					$scope.recipe[$(value).attr('itemprop')].push($(value).text())
				}
			})
			angular.forEach($scope.recipe,function (value,key) {
				if(value.length==1) {
					$scope.recipe[key] = value[0]
				}
			})
		});
	}
}).directive('formInput',function() {
	return {
		restrict: 'E',
		template:'<div class="col-lg-6"><dl class="col-lg-12" ng-if="$odd" ng-repeat="(key,prop) in recipe"><dt>{{key}}</dt><dd>{{prop}}:{{prop.length}}</dd></dl></div><div class="col-lg-6"><dl class="col-lg-12" ng-repeat="(key,prop) in recipe" ng-if="$even && angular.isArray(prop)"><dt>{{key}}</dt><dd>{{prop}}</dd></dl><dl class="col-lg-12" ng-repeat="(key,prop) in recipe" ng-if="$even && angular.isArray(prop)"><dt>{{key}}</dt><dd ng-repeat="item in prop">{{item}}</dd></dl></div>',
		link: function(scope,element,attribute){
			console.log(scope)
		}
	}
});
