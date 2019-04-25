Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.txt }}</li>'
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
	],
	components:[
		{txt:'组件1'},
		{txt:'组件2'},
		{txt:'组件3'},
		{txt:'组件4'}
	]
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.message)
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