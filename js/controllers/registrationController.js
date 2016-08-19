app.controller("registrationController",function($scope,$http,$location,$routeParams){
    $scope.params = $routeParams;
    var RCC_API_URI = "https://redlandscricketclub-developer-edition.na34.force.com/services/apexrest/alagukannan/";
    //get data from rcc-api
    $http.get(RCC_API_URI + "registrations/v2", {params: {"token" : $scope.params.token}}).then(function(response) {
        console.log(response);
        $scope.params = response.data.participant;
        $scope.event = response.data.event;

        //setup status enum
        angular.forEach($scope.event.participants, function(value,key){
            var _status = 0;
            
            switch(value.status)
            {
                case "Yes":
                    _status = 3;
                break;
                case "Maybe":
                    _status = 2;
                break
                case "No":
                    _status = 1;
                break;
            }
            value._status = _status;
        });
    });
    //console.log($scope);
});