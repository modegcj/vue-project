export default{
    install(Vue,options){
        Vue.prototype.url = "http://www.baidu.com/"
        Vue.prototype.myFun = function(ev){
            ev + 1;
            return ev;
        }

        Vue.http.interceptors.push(function ( request,next ){
            next(function (response){
                if(response.data.result == undefined){
                    this.$router.push('/')
                }
            })
        })
    }
}