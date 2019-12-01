<template>
    <div>
      <h1> {{ title }} </h1>
      <h2>{{ subtitle }}</h2>

    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
};
</script>
