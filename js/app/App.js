angular
  .module('Wedding.App', ["ui.router"])
  .config(Config)
  .run(Run)
  .controller('MainCtrl', MainCtrl)
  .directive('validatePhone', function () {
    return {
      require: 'ngModel',
      link: function (scope, element, attr, mCtrl) {
        function myValidation(value) {
          var value2 = value.replace(/[\(\)]/gi, '')
          mCtrl.$setValidity(
            'charE',
            /((\+[\d]{1,3})([\d]{10}))|([\d]{11})/g.test(value2),
          )
          //   if (value.indexOf("e") > -1) {
          //     mCtrl.$setValidity('charE', true);
          //   } else {
          //     mCtrl.$setValidity('charE', false);
          //   }
          console.log(value)
          return value
        }

        mCtrl.$parsers.push(myValidation)
      },
    }
  })

function MainCtrl($rootScope, $scope, $window) {
  var vm = this

  function mobileAndTabletCheck() {
    return ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) );
  }

  if (mobileAndTabletCheck()) {
    //   alert("here")
    angular.element("#music-holder-id").addClass("toggle-music-box");
  }

  vm.rsvpForm = {
    event: 'The wedding ceremony',
  }
  vm.rsvpFormData = {
    event: 'The wedding ceremony',
  }
  vm.phonePattern = '((\\+[1-9][\\d]{0,2})([d]{10}))|([d]{11})'

  vm.maids = [
    {
      url: 'images/bridesmaid/img-1.jpg',
      style: { backgroundImage: 'url(images/bridesmaid/img-1.jpg)' },
      name: 'Tosin',
      title: 'Chief Bridesmaid',
    },
    {
      url: 'images/bridesmaid/img-2.jpg',
      style: { backgroundImage: 'url(images/bridesmaid/img-2.jpg)' },
      name: 'Tolutope',
      title: 'Friend',
    },
    {
      url: 'images/bridesmaid/img-3.jpg',
      style: { backgroundImage: 'url(images/bridesmaid/img-3.jpg)' },
      name: 'Tolulope',
      title: 'Friend',
    },
    {
      url: 'images/bridesmaid/img-4.jpg',
      style: { backgroundImage: 'url(images/bridesmaid/img-4.jpg)' },
      name: 'Subomi',
      title: 'Friend',
    },
    {
      url: 'images/bridesmaid/img-5.jpg',
      style: { backgroundImage: 'url(images/bridesmaid/img-5.jpg)' },
      name: 'Queen',
      title: 'Friend',
    },
    {
      url: 'images/bridesmaid/img-6.jpg',
      style: { backgroundImage: 'url(images/bridesmaid/img-6.jpg)' },
      name: 'Amaka',
      title: 'Friend',
    },
    {
      url: 'images/bridesmaid/queen.jpeg',
      style: { backgroundImage: 'url(images/bridesmaid/queen.jpeg)' },
      name: 'Queen',
      title: 'Friend',
    },
    {
      url: 'images/bridesmaid/biodun.jpeg',
      style: { backgroundImage: 'url(images/bridesmaid/biodun.jpeg)' },
      name: 'Biodun',
      title: 'Friend',
    },
    {
      url: 'images/bridesmaid/ifeoma.jpeg',
      style: { backgroundImage: 'url(images/bridesmaid/ifeoma.jpeg)' },
      name: 'Ifeoma',
      title: 'Friend',
    },
  ]

  vm.men = [
    {
      url: 'images/groomsmen/img-1.jpg',
      style: { backgroundImage: 'url(images/groomsmen/img-1.jpg)' },
      name: 'Ibukun',
      title: 'Bestman',
    },
    {
      url: 'images/groomsmen/img-2.jpg',
      style: { backgroundImage: 'url(images/groomsmen/img-2.jpg)' },
      name: 'Emeka',
      title: 'Friend',
    },
    {
      url: 'images/groomsmen/img-3.jpg',
      style: { backgroundImage: 'url(images/groomsmen/img-3.jpg)' },
      name: 'Kingsley',
      title: 'Friend',
    },
  ]

  vm.SubmitRSVP = function (event) {
    var submitData = {}
    angular.forEach(vm.rsvpFormData, function (value, key) {
      submitData[key] = value == undefined ? '' : value;

    });
    console.log(submitData, vm.rsvpFormData);

    // submitData.phone = `${submitData.phone}`.replace(/\s/gi, '')

    if (/^([0][\d]{10})$/.test(submitData.phone)) {
      submitData.phone = `+234${submitData.phone.substring(1)}`
    }

    submitData.time = new Date().toISOString()
    var key = `${submitData.phone}-${submitData.name.replace(
      /\s/gi,
      '',
    )}`.toLowerCase()
    db.collection('rsvp')
      .doc(key)
      .set(submitData)
      .then(function (docRef) {
        // $window.localStorage.setItem(key, docRef.id);

        // console.log(docRef.doc())
        angular.element('#rsvp-modal').modal({
          show: true,
          backdrop: 'static',
        })

        vm.rsvpFormData = {}
        vm.rsvpForm.$setPristine()
        $scope.$apply()
      })
      .catch(function (error) {
        console.error('Error adding document: ', error)
      })
  }

  return vm
}
MainCtrl.$inject = ['$rootScope', '$scope', '$window']

function Run($rootScope) {}
Run.$inject = ['$rootScope']

function Config($stateProvider) {
  var helloState = {
    name: 'hello',
    url: '/hello',
    template: '<h3>hello world!</h3>'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
}

Config.$inject = ['$locationProvider', '$stateProvider']

// angular.element(document).ready(function () {
//     angular.bootstrap(document, ['Wedding.App']);
// });

var myApp = angular.module('helloworld', ['ui.router']);

myApp.config(function($stateProvider) {
  var helloState = {
    name: 'hello',
    url: '/hello',
    template: '<h3>hello world!</h3>'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
});