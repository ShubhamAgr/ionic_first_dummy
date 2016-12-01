angular.module('starter.services', [])
.factory('apiService',function($http) {

	return {
		getNewsData : function() {
			return $http.get('http://e44a2dfb.ngrok.io');
		}
	}
});