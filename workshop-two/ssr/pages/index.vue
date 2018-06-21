<template>
  <div class="container">
    <product-hero/>

  </div>
</template>

<script>
import ProductHero from '~/components/ProductHero'
// pages
// -- home
// -- buy
// -- shop
// ||-- toner
//   ||-- black
//   ||-- cyan
//   ||-- magenta
//   ||-- yellow

export default {
  components: {
    ProductHero
  },
  head() {
    return {
      title: '1D printer'
    }
  }
}
</script>
