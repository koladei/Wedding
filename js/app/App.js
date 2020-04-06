angular.module("Wedding.App", [])
    .config(Config)
    .run(Run)
    .controller("MainCtrl", MainCtrl);

function MainCtrl($rootScope, $scope) {
    var vm = this;
    vm.rsvpForm = {};
    vm.rsvpFormData = {};

    vm.maids = [{
        url: "images/bridesmaid/img-1.jpg",
        style: { backgroundImage: "url(images/bridesmaid/img-1.jpg)" },
        name: "Tosin",
        title: "Chief Bridesmaid"
    }, {
        url: "images/bridesmaid/img-2.jpg",
        style: { backgroundImage: "url(images/bridesmaid/img-2.jpg)" },
        name: "Tolulope",
        title: "Friend"
    }, {
        url: "images/bridesmaid/img-3.jpg",
        style: { backgroundImage: "url(images/bridesmaid/img-3.jpg)" },
        name: "Tolulope",
        title: "Friend"
    }, {
        url: "images/bridesmaid/img-4.jpg",
        style: { backgroundImage: "url(images/bridesmaid/img-4.jpg)" },
        name: "Subomi",
        title: "Friend"
    }, {
        url: "images/bridesmaid/img-5.jpg",
        style: { backgroundImage: "url(images/bridesmaid/img-5.jpg)" },
        name: "Queen",
        title: "Friend"
    }, {
        url: "images/bridesmaid/img-6.jpg",
        style: { backgroundImage: "url(images/bridesmaid/img-6.jpg)" },
        name: "Amaka",
        title: "Friend"
    }]

    vm.men = [{
        url: "images/groomsmen/img-1.jpg",
        style: { backgroundImage: "url(images/groomsmen/img-1.jpg)" },
        name: "Ibukun",
        title: "Bestman"
    }, {
        url: "images/groomsmen/img-2.jpg",
        style: { backgroundImage: "url(images/groomsmen/img-2.jpg)" },
        name: "Emeka",
        title: "Friend"
    }, {
        url: "images/groomsmen/img-3.jpg",
        style: { backgroundImage: "url(images/groomsmen/img-3.jpg)" },
        name: "Kingsley",
        title: "Friend"
    }];

    vm.SubmitRSVP = function (event) {

        var submitData = {};
        angular.forEach(vm.rsvpFormData, function (value, key) {

            submitData[key] = value == undefined ? "" : value;
        });

        db.collection("rsvp").add(submitData)
            .then(function (docRef) {

                console.log(docRef.doc())
                angular.element("#rsvp-modal").modal({
                    show: true,
                    backdrop: "static"
                });

                vm.rsvpFormData = {};
                vm.rsvpForm.$setPristine();
                $scope.$apply();
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    }

    return vm;
}
MainCtrl.$inject = ["$rootScope", "$scope"];

function Run($rootScope) {

}
Run.$inject = ["$rootScope"];

function Config() {
}

Config.$inject = ['$locationProvider'];

// angular.element(document).ready(function () {
//     angular.bootstrap(document, ['Wedding.App']);
// });