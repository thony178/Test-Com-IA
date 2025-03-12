<template>
  <div class="featured">
    <h2>Featured Story</h2>
    <div class="featured-article" v-if="featuredArticle">
      <img :src="featuredArticle.image" :alt="featuredArticle.title">
      <h3>{{ featuredArticle.title }}</h3>
      <p>{{ featuredArticle.summary }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturedNews',
  data() {
    return {
      featuredArticle: {
        title: 'Breaking News Story',
        summary: 'This is the main story of the day...',
        image: 'path/to/image.jpg'
      }
    }
  }
}
</script>

<style scoped>
.featured {
  padding: 2rem;
  background-color: #f5f5f5;
}

.featured-article img {
  max-width: 100%;
  height: auto;
}
</style>
