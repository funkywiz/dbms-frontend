(function(){

    angular.module('dbms')
        .controller("CustomerController",CustomerController);
    CustomerController.$inject= ['MainService','$state','$window'];

    function CustomerController(MainService,$state,$window){

        var ctrl =this;
        ctrl.signup = function(){

            var data = {
                cust_name : ctrl.cust_name,
                cust_id : ctrl.cust_id,
                cust_city : ctrl.cust_city,
                cust_state: ctrl.cust_state,
                acc_type : ctrl.acc_type
            };
/*
            $state.go('addcard');
*/

            MainService.AddCustInfo(data).then(function(response){
                if(response.status==200){
                    console.log("Success");
                    $state.go('addcard');
                }
            })


        };

        ctrl.addcreditinfo = function() {
           /* $state.go('loan');*/
            var data = {
                cardno : ctrl.cardno,
                expdate : ctrl.expdate,
                cust_id :ctrl.cardcust_id
            };

            MainService.Credit(data).then(function(response){
              if(response.status == 200){
                  console.log("DONE");
                  $state.go('loan');
              }
            })

        }


        ctrl.addloaninfo = function(){
                $window.alert("All details added successfully");
            var data = {
                loanamt : ctrl.loanamt,
                loannumber : ctrl.loannumber,
                cust_id : ctrl.loancust_id
            };
            MainService.LoanInfo(data).then(function (response){
                if(response.status == 200){
                    $window.alert("All info added Succesfully");
                }
            })
        }

    }


})();