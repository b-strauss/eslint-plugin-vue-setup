<script setup lang="ts">
import {computed, ref, useAttrs} from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<{
  foo: string
  bar?: number
}>();

const slots = defineSlots<{
  default (props: { msg: string }): any
}>();

const emit = defineEmits<{
  change: [id: number] // named tuple syntax
  update: [value: string]
}>();

const count = defineModel('count');

const attrs = useAttrs();

const title = ref('title');

const doubleTitle = computed(() => title.value + title.value);

function fooBar () {
}

function wambo () {
}

defineExpose({
  title,
});
</script>

<template>
<header>
  <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125"/>

  <div class="wrapper">
    <HelloWorld msg="You did it!"/>
  </div>
</header>

<template></template>

<main>
  <TheWelcome/>
</main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
