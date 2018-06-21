<template>
<div class="container">
  <h1>Todo App</h1>
  <add @addTodo="addTodo"/>
  <br>
  <h3>Pending todos</h3>
  <ul class="list-group">
    <todo 
      v-for="(todo, index) in pendingTodos" 
      :description="todo.description" 
      :done="todo.done"
      :key="index"
      @onToggle="togglePending(todo)"
      />
  </ul>
  
  <br>
  <h3>Completed todos</h3>
  <ul class="list-group">
    <todo 
      v-for="(todo, index) in completedTodos" 
      :description="todo.description" 
      :done="todo.done"
      :key="index"
      @onToggle="toggleCompleted(todo)"
      />
  </ul>
</div>
</template>
<script>
  import Todo from './Todo'
  import Add from './Add'
  export default {
    components: {
      Todo,
      Add
    },
    data () {
      return {
        newtodo:'',
        todos:[
          { description: 'Drink a beer', done: true},
          { description: 'Aprender vuej', done: false},
          { description: 'Deliver the worksho', done: false},
        ],
      }
    },
    methods: {
      togglePending(todo){
        todo.done = !todo.done
      },
      toggleCompleted(todo){
        todo.done = !todo.done
      },
      addTodo(todo) {
        this.todos.push({
          description: todo,
          done: false,
        })
        
      }

      
    },
    computed: {
      pendingTodos () {
        return this.todos.filter((todo) => !todo.done)
      },
      completedTodos () {
        return this.todos.filter((todo) => todo.done)
      },
    }
  }  
</script>
