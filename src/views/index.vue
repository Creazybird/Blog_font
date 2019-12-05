<template>
    <div class="container">
        <Header></Header> 
        <div class="bodyText">
            <router-view></router-view>
        </div>       
    </div>
</template>

<script>
import Header from './components/header'

export default {
    components:{
        Header,
    }
}
</script>
<style  scoped>
.container{
    height: 100%;
    width: 95%;
    margin: 0 auto;
    background: white;
}
.bodyText{
    width: 95%;
    margin: 0 auto;
    box-shadow: 0 2px 8px #f0f1f2;
    border-radius:4px;
}
</style>
