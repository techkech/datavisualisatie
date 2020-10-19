<template>
  <form class="switchBetween" @change="onSwitch">
    <input
      type="radio"
      id="nike"
      class="switchBetween_radio"
      name="switchBetween-input"
      value="nike"
      checked
    />
    <label for="nike" class="switchBetween_label">
     Nike
    </label>
    <input
      type="radio"
      id="adidas"
      class="switchBetween_radio"
      name="switchBetween-input"
      value="adidas"
    />
    <label for="adidas" class="switchBetween_label">
      Adidas
    </label>

    <input
      type="radio"
      id="idgaf"
      class="switchBetween_radio"
      name="switchBetween-input"
      value="idgaf"
    />
    <label for="idgaf" class="switchBetween_label">
      Idgaf
    </label>
  </form>
</template>

<script>
export default {
  methods: {
    onSwitch(event) {
      if (event.target.value === "nike") {
        return this.$emit("nike-click")
      }
      else if (event.target.value === "adidas") {
        return this.$emit("adidas-click")
      }
      else if (event.target.value === "idgaf") {
        return this.$emit("idgaf-click")
      }
    }
  }
}
</script>

<style lang="scss">
.switchBetween {
  display: flex;
  padding: 2px;
  border-radius: 10px;
  justify-content: center;
}

.switchBetween_label {
  padding: 1.2rem;
  border-radius: 5px;
  background: white;
  text-align: center;
  align-self: center;
  font-weight: 600;
}

.switchBetween_radio:checked + .switchBetween_label {
  background: black;
  color: white;
}

input[type="radio"] {
  visibility: hidden;
}
</style>
