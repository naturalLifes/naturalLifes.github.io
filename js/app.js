var app = angular.module("app", []);

// home page
app.controller("serviceController",  ['$scope', function($scope) {
     $scope.items = [
       'Đốt lò sưởi sáng và tối',
       'Dùng cà phê, trà, bánh',
       'Ăn sáng',
       'Ăn trưa',
       'Ăn tối',
       'Bữa phụ',
       'Tiệc nướng',
       'Cắm trại',
       'Dịch vụ chăm trẻ'
     ];
   },
]);

app.controller("room",  ['$scope',
  function ($scope)
  {
   $scope.setSelected = function (prop) {
     $scope.selectedprop = prop;
   };
   $scope.props = [
     {label: "LỀU"},
     {label: "KHÁCH SẠN"},
     {label: "BUNGALOW"},
     {label: "BIỆT THỰ"}
   ];
  },
]);

app.controller("adult",  ['$scope',
  function ($scope)
  {
   $scope.setSelected = function (prop) {
     $scope.selectedprop = prop;
   };
   $scope.props = [
     {label: "1 Người lớn"},
     {label: "2 Người lớn"},
     {label: "3 Người lớn"},
     {label: "4 Người lớn"},
     {label: "5 Người lớn"},
     {label: "6 Người lớn"}
   ];
  },
]);

app.controller("children",  ['$scope',
  function ($scope)
  {
   $scope.setSelected = function (prop) {
     $scope.selectedprop = prop;
   };
   $scope.props = [
     {label: "1 Trẻ em"},
     {label: "2 Trẻ em"},
     {label: "3 Trẻ em"},
     {label: "4 Trẻ em"},
     {label: "5 Trẻ em"},
     {label: "6 Trẻ em"}
   ];
  },
]);
// room page
app.controller("utilities",  ['$scope',
  function ($scope)
  {
    $scope.icons = [
      {icon: "bath"},
      {icon: "bed"},
      {icon: "book"},
      {icon: "laptop"},
      {icon: "cutlery"},
      {icon: "feed"},
      {icon: "gamepad"},
      {icon: "television"},
    ];
  },
]);
