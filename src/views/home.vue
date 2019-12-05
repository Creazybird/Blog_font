
<template>
    <div class='container'>    
        <div class='grid'>
            <div class='first'>首页</div>
            <div class='second'>消息
                <div>
                    {{message}}
                </div>
            </div>
            <div class='third'>新闻1</div>
            <div class='fourth'>新闻2</div>
            <div class="fifth">摘要</div>
        </div>
    </div>    
</template>

<script>
export default {
    data(){
        return{
            message:[]
        }
    },
    mounted() {
        this.getNewMessage();
    },
    methods:{
        getNewMessage:function(){
             window.console.log('s')
            fetch(`/blogApi/message?accountId=2`,{
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            }).then(res=>{
                if(res.ok){
                    return res.json()
                }
            }).then(res=>{
                this.message=[]
                res[0].data.map(data=>{
                    this.message.push(data.message)
                })
            })
        }
    }
}
</script>

<style scoped>
.container{
    height: 800px;
    width: 100%;
    margin-top: 20px;   
    background: white;
}
.grid{
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns:33.3% 33.3% 33.3%;
    grid-template-rows:33.3% 33.3% 33.3%;
}
.first{
    grid-area: 1/1/3/3;
    box-shadow: 0 2px 8px #f0f1f2;
    grid-gap: 20em;
    margin: 0px 20px 20px 0px;
}
.second{
    grid-area: 1/3/2/4;  
    box-shadow: 0 2px 8px #f0f1f2;
    margin: 0px 0px 20px 0px;
}
.third{
    grid-area: 3/1/4/2;
    box-shadow: 0 2px 8px #f0f1f2;
    margin: 0px 20px 0px 0px;
}
.fourth{
    grid-area: 3/2/4/3;
    box-shadow: 0 2px 8px #f0f1f2;
    margin: 0px 20px 0px 0px;
}
.fifth{
    grid-area: 2/3/4/4;
    box-shadow: 0 2px 8px #f0f1f2;
    
}
</style>