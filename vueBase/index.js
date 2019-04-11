Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.title }}</li>'
})
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
	tip:'页面加载于 ' + new Date().toLocaleString(),
	show:true,
	showbg:-1,
	list:[
		{title:'列表1'},
		{title:'列表2'},
		{title:'列表3'},
		{title:'列表4'}
	]
  },
  methods:{
	  showBorder:function(index){
		  this.showbg = index;
	  },
	  hideBorder:function(){
		  this.showbg = -1;
	  }
  }
  
})