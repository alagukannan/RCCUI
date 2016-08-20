app.controller("registrationController",function($scope,$http,$location,$routeParams){
    
    $scope.params = $routeParams;
    $scope.isEventDataAvailable = false;
    var RCC_API_URI = "https://redlandscricketclub-developer-edition.na34.force.com/services/apexrest/alagukannan/registrations/v2";
    
    //get data from rcc-api
    $http.get(RCC_API_URI , {params: {"token" : $scope.params.token}}).then(function(response) {
        $scope.participant = response.data.participant;
        $scope.event = response.data.event;
        //setup status enum
        angular.forEach($scope.event.participants, function(value,key){
            setStatusEnum(value);
        });
        $scope.isEventDataAvailable = true;
    });
    //process form
    $scope.registerParticipant = function(){
        var postParams = angular.copy($scope.participant);
        postParams.token = $scope.params.token;
        postParams.fullname = undefined;
        $http.post(RCC_API_URI, postParams).then(function(response){
            //success handler
            $scope.formResponse = response;
            $scope.formResponse.isSuccess = true;
        },function(response){
            //error handler
            $scope.formResponse = response;
            $scope.formResponse.isSuccess = false;
        });      
    };

    function setStatusEnum(participant)
    {
        var _status = 0;       
        switch(participant.status)
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
        participant._status = _status;
    }
});