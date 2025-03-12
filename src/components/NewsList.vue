<template>
  <div class="news-list">
    <h2>Latest News</h2>
    <div class="articles">
      <article v-for="article in articles" :key="article.id">
        <img :src="article.image" :alt="article.title">
        <h3>{{ article.title }}</h3>
        <p>{{ article.summary }}</p>
        <span class="category">{{ article.category }}</span>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsList',
  data() {
    return {
      articles: [
        {
          id: 1,
          title: 'First News Article',
          summary: 'Summary of the first news article...',
          image: 'path/to/image1.jpg',
          category: 'Politics'
        },
        // Add more articles here
      ]
    }
  }
}
</script>

<style scoped>
.news-list {
  padding: 2rem;
}

.articles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

article {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
}

article img {
  max-width: 100%;
  height: auto;
}

.category {
  background-color: #333;
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}
</style>
