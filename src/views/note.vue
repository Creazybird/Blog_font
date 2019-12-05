
<template>
    <div class='container'>
        <!-- <span style="fornt-family:font-family: 'Avenir', Helvetica, Arial, sans-serif;font-style:oblique;font-size:4em">learning for myself</span> -->
        <div class="note" v-for="item in message" :key="item">
            <div class='title'><span>{{item.title}}</span></div>
            <div class='abstract'>摘要介绍:{{item.abstract}}
                <router-link :to="`/noteDetail/${item.id}`">详情</router-link>
            </div>
            <div class='classify'><span>分类:{{item.classify}}</span></div>
            <div class='Time'><div class='time1'>日期:{{item.createTime}}</div></div>
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
    mounted:function(){
        this.getAll()
    },
    methods:{
      getAll(){
          let s=0
          fetch(`/blogApi/note?page=${s}`,{
              method:'GET',
              headers:{
                  'Content-Type':'application/json'
              }
          }).then(res=>{
              if(res.ok){
                  return res.json()
              }
          }).then(res=>{
              this.message=res.data
              window.console.log(res.data[0].createTime)
              window.console.log(typeof(res.data[0].createTime))
          })
      }  
    }
}
</script>

<style scoped>
.container{
    height: auto;
    background: white;
}
.note{
    width: 90%;
    margin: 20px auto auto auto;
    padding: 20px auto auto auto;
    height: auto;
    text-align: center;
    box-shadow: 0px 2px 8px #f0f1f2;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.title{
    margin-top:20px;
    font-size:20px;
    padding-top:4px; 
    line-height: 50px
}
.classify{
    /* float:right; */
    /* margin-right: 5px;  */
}
.abstract{
    line-height: 50px
}
.Time{
    /* margin: 25px auto; */
}
.time1{
    /* float: right; */
    /* margin-right: 5px;  */
}
a{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    text-decoration: none;
}
.router-link-active {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    text-decoration: none;
}
</style>