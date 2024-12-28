<script setup>
const props = defineProps({
  camera_settings: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <table>
    <thead>
      <tr>
        <th colspan="2">
          <h3>{{ props.camera_settings.camera_maker }} {{ props.camera_settings.camera_model }}</h3>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>F-Stop</td>
        <td>{{ props.camera_settings['f-stop'] }}</td>
      </tr>
      <tr>
        <td>Exposure</td>
        <td>{{ props.camera_settings.exposure }}</td>
      </tr>
      <tr>
        <td>ISO Speed</td>
        <td>{{ props.camera_settings.iso_speed }}</td>
      </tr>
      <tr>
        <td>Focal Length</td>
        <td>{{ props.camera_settings.focal_length }}</td>
      </tr>
    </tbody>
  </table>
</template>
<style scoped>
table {
  padding-top: 15px;
  width: 100%;
}

tr {
  line-height: 2.2em;
}
</style>
