<template>
  <div>
    <form >
      <div class="input-group">
        <input 
          v-model="newtodo"
          type="text" 
          class="form-control" 
          placeholder="Add todo.." 
        >
        <span class="input-group-btn">
          <button @click.prevent="addTodo" class="btn btn-success">Add +</button>
        </span>
      </div>
    </form>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        newtodo:''
        
      }
    },
    methods:{
      addTodo () {
        if(!this.newtodo){
          return 
        }
        this.$emit('addTodo', this.newtodo)
        this.newtodo = ''
      }
    }
   
  }
</script>