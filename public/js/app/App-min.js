"use strict";function MainCtrl(e,i,r){var a=this;return a.rsvpForm={event:"The wedding ceremony"},a.rsvpFormData={event:"The wedding ceremony"},a.phonePattern=/^((\+[1-9][\d]{0,2})([\d]{10}))|([\d]{11})$/,a.maids=[{url:"images/bridesmaid/img-1.jpg",style:{backgroundImage:"url(images/bridesmaid/img-1.jpg)"},name:"Tosin",title:"Chief Bridesmaid"},{url:"images/bridesmaid/img-2.jpg",style:{backgroundImage:"url(images/bridesmaid/img-2.jpg)"},name:"Tolulope",title:"Friend"},{url:"images/bridesmaid/img-3.jpg",style:{backgroundImage:"url(images/bridesmaid/img-3.jpg)"},name:"Tolulope",title:"Friend"},{url:"images/bridesmaid/img-4.jpg",style:{backgroundImage:"url(images/bridesmaid/img-4.jpg)"},name:"Subomi",title:"Friend"},{url:"images/bridesmaid/img-5.jpg",style:{backgroundImage:"url(images/bridesmaid/img-5.jpg)"},name:"Queen",title:"Friend"},{url:"images/bridesmaid/img-6.jpg",style:{backgroundImage:"url(images/bridesmaid/img-6.jpg)"},name:"Amaka",title:"Friend"},{url:"images/bridesmaid/queen.jpeg",style:{backgroundImage:"url(images/bridesmaid/queen.jpeg)"},name:"Queen",title:"Friend"},{url:"images/bridesmaid/biodun.jpeg",style:{backgroundImage:"url(images/bridesmaid/biodun.jpeg)"},name:"Biodun",title:"Friend"},{url:"images/bridesmaid/ifeoma.jpeg",style:{backgroundImage:"url(images/bridesmaid/ifeoma.jpeg)"},name:"Ifeoma",title:"Friend"}],a.men=[{url:"images/groomsmen/img-1.jpg",style:{backgroundImage:"url(images/groomsmen/img-1.jpg)"},name:"Ibukun",title:"Bestman"},{url:"images/groomsmen/img-2.jpg",style:{backgroundImage:"url(images/groomsmen/img-2.jpg)"},name:"Emeka",title:"Friend"},{url:"images/groomsmen/img-3.jpg",style:{backgroundImage:"url(images/groomsmen/img-3.jpg)"},name:"Kingsley",title:"Friend"}],a.SubmitRSVP=function(e){var r={};angular.forEach(a.rsvpFormData,function(e,i){r[i]=null==e?"":e}),/^([0][\d]{10})$/.test(r.phone)&&(r.phone="+234".concat(r.phone.substring(1))),r.time;var n="".concat(r.phone,"-").concat(r.name.replace(/\s/gi,"")).toLowerCase();db.collection("rsvp").doc(n).set(r).then(function(e){angular.element("#rsvp-modal").modal({show:!0,backdrop:"static"}),a.rsvpFormData={},a.rsvpForm.$setPristine(),i.$apply()}).catch(function(e){console.error("Error adding document: ",e)})},a}function Run(e){}function Config(){}angular.module("Wedding.App",[]).config(Config).run(Run).controller("MainCtrl",MainCtrl).directive("validatePhone",function(){return{require:"ngModel",link:function(e,i,r,a){a.$parsers.push(function(e){var i=e.replace(/[\(\)]/gi,"");return a.$setValidity("charE",/((\+[\d]{1,3})([\d]{10}))|([\d]{11})/g.test(i)),console.log(e),e})}}}),MainCtrl.$inject=["$rootScope","$scope","$window"],Run.$inject=["$rootScope"],Config.$inject=["$locationProvider"];
//# sourceMappingURL=App-min.js.map
