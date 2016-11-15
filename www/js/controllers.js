angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,masServices) {
  endofWeeks="2016-03,2016-04,2016-05,2016-06";
  var between="2016-03-01,2016-06-30";
  currency="myr_sgd_100";
masServices.getExchangeRates().then(function (resp){
  console.log(resp.result.records);
  var exchange_rates=resp.result.records;
  console.log(exchange_rates.usd_sgd);
  $scope.chart_data=[[parseFloat(exchange_rates[0].usd_sgd,2),parseFloat(exchange_rates[0].myr_sgd_100,2)],[parseFloat(exchange_rates[1].usd_sgd,2),parseFloat(exchange_rates[1].myr_sgd_100,2)],[parseFloat(exchange_rates[2].usd_sgd,2),parseFloat(exchange_rates[2].myr_sgd_100,2)],[parseFloat(exchange_rates[3].usd_sgd,2),parseFloat(exchange_rates[3].myr_sgd_100,2)]];
  $scope.chart_labels=["USD","Ringgit"];
  $scope.chart_series=["Mar 16","Apr 16","May 16","June 16"];

})
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
