new Vue({
    el:'#app',
    data: {
        title:"Hello World!",
        stylecss:'',
        value: 1,
        show: false,

    },
    methods:{
        changetxt(){
            this.title='BB'
        },
        increment(value){
            this.value = value
            if (value==25)
                alert ("Число 25")
        }
        
    }   ,
    computed:{
        doublevalue () {
            return this.value * 2
        }
    }
});