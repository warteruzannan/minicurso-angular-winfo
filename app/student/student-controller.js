angular.module('sigaa')
	.controller('studentController',studentController)
	studentController.$inject = ['studentFactory','$state']

function studentController(studentFactory,$state){
	var vm = this;
	vm.listStudent = {};
	studentFactory.getStudents()
		.then(_successGetStudent)
		.catch(-_errorGetStudent)
	function _successGetStudent(data,status){
		vm.listStudent = data.data;		
	}

	function _errorGetStudent(data,status){
		console.log("Error:");
	}	

	vm.saveCall = function(){		
		for(i = 0; i < vm.listStudent.length; i++){
			if(vm.listStudent[i].present == "false"){
				vm.listStudent[i].faltas += 1;				
			}
		}

		studentFactory.updateStudents(vm.listStudent)		
			.then(_successUpdate)
			.catch(_errorUpdate);

						
		function _successUpdate(data,status){
			$state.go('home',{message:"Chamada realizada com sucesso!"})			
		}			
		function _errorUpdate(data,status){
			console.log("Error: Update");
		}			
	}
}	