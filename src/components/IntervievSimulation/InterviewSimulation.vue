<template>
  <pre>
  <code>
    p { color: red; }
    body { background-color: #eee; }
  </code>
</pre>
</template>

<script>
export default {
  data() {
    return {
      output: null
    }
  },
  methods: {
    async print() {
      const el = this.$refs.printMe;
      // add option type to get the image version
      // if not provided the promise will return 
      // the canvas.
      const options = {
        type: 'dataURL',
           useCORS: true
      }
      this.output = await this.$html2canvas(el, options);
    }
  },
  mounted() {
    this.print()
  }
}
</script>

