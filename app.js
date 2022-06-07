const app = Vue.createApp({

    data(){
        return{
            firstName:'',
            lastName:'',
            num:0
        }
    },
    computed:{
        fullName(){
            console.log('Re-evaluating fullName in Computed Property')
            return this.firstName + ' ' + this.lastName
        }
    },
    methods:{
        incrementNum(){
            this.num++
        },
        fullNamefn(){
            console.log('()')
            return this.firstName + ' ' + this.lastName
        }
    }
   
})
app.mount('#app')