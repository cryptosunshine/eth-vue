<template>
  <div>
    owner: {{owner}}    
  </div>
</template>

<script>
import { initContract } from '@/util/common.js'
export default {
    data () {
        return {
            owner: ''
        }
    },
    created () {
        const DB = initContract();
        setTimeout(()=>{
            console.log(DB.contract)
            DB.contract.methods.owner().call().then(e => {
                this.owner = e;
            })
        },1000)
        
        
    }
}
</script>

<style>

</style>