angular.module('sigaa')
	.factory('studentFactory',studentFactory)
	studentFactory.$inject = ['$http','urlconfig']

function studentFactory($http,urlconfig){
	return {
		getStudents: _getStudents,
		updateStudents: _updateStudents
	}

	function _getStudents(){
		return $http({
			method:"GET",
			url: urlconfig.baseurl + 'bins/pdvm',						
		});		
	}

	function _updateStudents(students){
		return $http({
			url: urlconfig.baseurl + 'bins/pdvm',							
			method:"PUT",
			data:students
		});	
	}
}

	