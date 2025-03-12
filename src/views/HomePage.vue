<template>
  <div class="home">
    <featured-news></featured-news>
    <news-list></news-list>
  </div>
</template>

<script>
import FeaturedNews from '../components/FeaturedNews.vue'
import NewsList from '../components/NewsList.vue'

export default {
  name: 'HomePage',
  components: {
    FeaturedNews,
    NewsList
  }
}
</script>
