<script setup>
const props = defineProps({
  design_data: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <table>
    <tbody>
      <tr>
        <td>Programs</td>
        <td>{{ props.design_data.programs }}</td>
      </tr>
      <tr>
        <td>File Type</td>
        <td>{{ props.design_data.file_type }}</td>
      </tr>
      <tr>
        <td>Dimensions</td>
        <td>{{ props.design_data.dimensions }}</td>
      </tr>
      <tr>
        <td>Resolution</td>
        <td>{{ props.design_data.resolution }}</td>
      </tr>
      <tr>
        <td>Color Mode</td>
        <td>{{ props.design_data.color_mode }}</td>
      </tr>
      <tr>
        <td>Design Type</td>
        <td>{{ props.design_data.design_type }}</td>
      </tr>
      <tr v-if="design_data.brand">
        <td>Brand</td>
        <td>{{ props.design_data.brand }}</td>
      </tr>
      <tr v-if="design_data.product">
        <td>Product</td>
        <td>{{ props.design_data.product }}</td>
      </tr>
      <tr v-if="design_data.event">
        <td>Event</td>
        <td>{{ props.design_data.event }}</td>
      </tr>
    </tbody>
  </table>
</template>
<style scoped>
table {
  width: 100%;
}

tr {
  line-height: 2.2em;
}
</style>
