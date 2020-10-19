<template>
<main id="home">
  <h1>datavisualisatie id</h1>
  <section class="active">
    <h2>Supermegabelangrijke vraag. Waar gaat je hart naar uit?</h2>
    <SwitchBetween class="choices" @nike-click="choice = 'nike'" @adidas-click="choice = 'adidas'" @idgaf-click="choice = 'idgaf'" />

    <div v-if="choice === 'nike'">
      <Nike title="Nike" category="nike" />
    </div>

    <div v-if="choice === 'adidas'">
      <Adidas title="Adidas" category="adidas" />
    </div>

    <div v-if="choice === 'idgaf'">
      <Idgaf title="Idgaf" category="idgaf" />
    </div>
  </section>
</main>
</template>

<script>
import SwitchBetween from "@/components/switchBetween.vue";
import Nike from "@/components/nike.vue";
import Adidas from "@/components/adidas.vue";
import Idgaf from "@/components/idgaf.vue";

export default {
  name: "home",
  data() {
    return {
      choice: "nike"
    };
  },
  methods: {},
  components: {
    SwitchBetween,
    Nike,
    Adidas,
    Idgaf
  }
};
</script>

<style lang="scss">
</style>
