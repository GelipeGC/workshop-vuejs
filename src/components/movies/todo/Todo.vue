<template>
  <li 
      class="list-group-item" 
      
      >
      {{ description}}
      {{ done ? 'done' : 'nope' }}
      <button @click="toggle" class="btn btn-primary btn-sm float-right">
        toggle!
      </button>
    </li>

</template>
<script>
  export default {
    props:{
      description:{
        type: String,
        required: true
      },
      done: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      toggle () {
        this.$emit('onToggle')
      }
    }
  }  
</script>