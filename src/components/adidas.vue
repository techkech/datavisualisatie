<template>
  <div :id="category">
    <h2>{{ title }}</h2>
    <div class="content">
      <a v-for="(result, index) in results" :key="index" :href="result.url">
        <section>
          <h3>{{ result.title.value }}</h3>
          <p>&#x25bc; {{ result.location.value }}</p>
          <img
            class="images"
            v-bind:src="result.img.value"
            alt="result.title.value"
          />
        </section>
      </a>
    </div>
  </div>
</template>

<script>
/*eslint-disable */
export default {
  name: "category",
  data() {
    return {
      results: []
    };
  },
  props: {
    title: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss"></style>
