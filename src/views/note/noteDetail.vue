
<template>
    <div class='container'>   
        <h2>{{form.title}}</h2> 
        <h3>分类:{{form.classify}}</h3> 
        <div>{{form.content}}</div>
        <h3>日期：{{form.createTime}}</h3>
    </div>    
</template>

<script>
export default {
    data(){
        return{
        form:{}    
        }
    },
    mounted() {
        window.console.log(this.$route)
        const id=this.$route.params.id
        this.getDetailById(id)
    },
    methods:{
        
        getDetailById:function(id){
            fetch(`/blogApi/note?noteId=${id}`,{
                methods:'GET',
                'Content-Type':'application/json'
            }).then(res=>{
            if(res.ok){
                return  res.json()
            }
            }).then(res=>{
                this.form=res.data
            })
        }
    }
}
</script>

<style scoped>
.container{
    min-height: 800px;
    width: 100%;
    background: white;
    margin: 20px auto auto auto;
    box-shadow: 0px 2px 8px #f0f1f2;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    /* box-shadow: 0px 2px 8px #f0f1f2; */
}
</style>