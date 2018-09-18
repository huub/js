angular.module("NgApp", []).directive("appDirective", function() {
  return {
    template: `<div @click="klik()" id="el">
		Dit is de template van de app-directive (klik)
		<vue-component @click="klik()" v-bind:naam="naam" ngNonBindable></vue-component>
    </div>`,
     link: function(scope, element, attribs) {
		 scope.vm = new Vue({
		 	el: "#el",
		 	data: function () { return {
					naam: attribs.naam
		 		}
		 	},
		 	methods: {
				klik: function(){
					this.naam = "OK"
				}
			}
		});
     }

  }
}).directive('ngDirective', function() {
	return {
		template: `<div>[Dit is de ng-directive template [{{naam}}] (klik)<vue-component  naam="test vue-component in directive in vue-app"></vue-component>]</div>`,
		link: function(scope, element, attributes) {

			scope.naam = attributes.naam;
			function change () {
				scope.naam = "OK"
				 scope.$apply();
			}
            element.on('click', change);
		}
	}
})
