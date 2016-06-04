angular.module('sigaa')
	.config(routerConfig)
	routerConfig.$inject = ['$stateProvider','$urlRouterProvider']

function routerConfig($stateProvider, $urlRouterProvider){
	$stateProvider
	.state("listStudents",{
		url:"/listStudents",
		templateUrl:"app/student/student-view.html",
		controller:'studentController',
		controllerAs:'vm'
	})
	.state("performClassroomCall",{
		url:"/performClassroomCall",
		templateUrl:"app/student/classroom-call.html",
		controller:'studentController',
		controllerAs:'vm'
	})
	.state("home",{
		url:"/home:message",
		templateUrl:"app/home/home.html",
		controller:'homeController',
		controllerAs:'vm'
	})
	$urlRouterProvider.otherwise("/home")
}	


