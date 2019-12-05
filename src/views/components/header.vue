<template>
    <div class='container'>
        <h1 style="font-style:oblique">
            Welcome my blog
        </h1>
        <div class='navigation'>
            <span class='item' >
                <router-link to="/homePage" >首页</router-link> 
            </span>
            <span class='item'>
                <router-link to="/note">笔记</router-link> 
            </span>
            <span class='item'>
                <router-link to="/source">资源</router-link> 
            </span>
            <span class='item'>福利</span>
            <span class='item'>
                 <router-link to="/write">随笔</router-link> 
            </span>
        </div>
    </div>    
</template>

<script>
export default {
    
}
</script>

<style scoped>
.container{
    height: 150px;
    background: white;
    z-index:100;/*他是header 设置的高一点*/
    box-shadow: 0 2px 8px #f0f1f2;
}
.navigation{
  font-size: 1.5em;
  display: inline-flex;
  flex-direction: row;
  margin-bottom: 10px;
  text-align: center;
}
.item{
    margin-right: 10px
}
/*a和router-link-active用来设置router-link的css */
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