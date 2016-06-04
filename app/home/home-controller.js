angular.module('sigaa')
	.controller('homeController',homeController)
	homeController.$inject = ["$stateParams"]

function homeController($stateParams){
	var vm = this;
	if($stateParams.message){
		vm.message = $stateParams.message;
	}else{
		vm.message = "Olá. Seja bem vind@!"
	}
	
}