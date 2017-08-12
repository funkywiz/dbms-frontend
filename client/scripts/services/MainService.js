(function() {

    angular.module('dbms')
        .factory("MainService", MainService);
    MainService.$inject = ['$http'];
    function MainService($http) {

        var service = {};
        service.AddCustInfo = AddCustInfo;
        service.LoanInfo = LoanInfo;
        service.Credit = Credit;
        return service;

        function LoanInfo(params) {
           return $http.post('http://localhost:8081/web/api/loaninfo', params).then(handleSuccess, handleRemoteError);
        };


        function Credit(params) {
            return $http.post('http://localhost:8081/web/api/credit', params).then(handleSuccess, handleRemoteError);
        };


        function AddCustInfo(params) {
            return $http.post('http://localhost:8081/web/api/addcustomer', params).then(handleSuccess, handleRemoteError);
        }


        function handleSuccess(data) {
            console.log("HANDLE SUCCESS")
            return data;
        }

        function handleRemoteError(data) {
            return data;
        }

    }
})();