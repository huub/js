Vue.config.ignoredElements = [
  /^ng-/
]

Vue.component('vue-component', {
	props: ["naam"],
	data: function(){
		return {
			lokaleklik: 'Neen',
			i:1
		}
	},
	template: `<div>[Dit is de vue-component [{{naam}}]
		<div  @click="klik()">[lokaal geklikt ? {{lokaleklik}} (klik)]</div>
	</div>`,
	methods:{klik:function() {
		this.lokaleklik = "Jawel, " + this.i++ + " keer"
		}
	}})

new Vue({
	el: "#vue-app",

	data: function() {
		return {
			naam: "Angular Directive"
		}
	},
	template:`<div>Dit is een andere vue app. <ng-directive :naam="naam"></ng-directive></div>`
})
