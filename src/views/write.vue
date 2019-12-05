
<template>
    <div class='container'>
        <h4>please write you want </h4>
        <form id='writeForm'>
        标题: <input type="text" name="title" /><br>
        分类: <input type="text" name="classify" /><br>
        正文:<br>
        <textarea name="content" form="writeForm" cols="100" rows="40"></textarea>
        <br>
        <input type="button" value="提交" @click="submit()"/><br>
        </form>
    </div>    
</template>

<script>
export default {
    methods:{
        submit(){
            window.console.log(document.getElementById('writeForm'));
            const data={
                'title':document.getElementById('writeForm').title.value,
                'classify':document.getElementById('writeForm').classify.value,
                'content':document.getElementById('writeForm').content.value,
            };
            this.postNote(data);
        },        
        postNote(data){
          //暂时所有的都能添加
          let role={'role':'Super'}
          Object.assign(data,role)
          fetch(`/blogApi/note`,{
              method:'POST',
              headers:{
                  'Content-Type':'application/json'
              },
              body:JSON.stringify(data)
          }).then(res=>{
              if(res.ok){
                  alert('添加成功')
                  document.getElementById('writeForm').reset()
              }
          })

        }
        
    }
}
</script>

<style scoped>
.container{
    height: 800px;
    background: white;
}
</style>