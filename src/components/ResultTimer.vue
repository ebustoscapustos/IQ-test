<template>
  <div class="timer">{{ formatStringTime }}</div>
</template>

<script>
export default {
  name: "ResultTimer",
  data() {
    return {
      time: 600,
      interval: null,
    };
  },

  computed: {
    formatStringTime() {
      const minute = parseInt((this.time % 3600) / 60);
      const sec = parseInt(this.time % 60);
      return `${this.formatItemTime(
        minute
      )}:${this.formatItemTime(sec)}`;
    },
  },
  mounted() {
      this.interval = setInterval(() => {
          if (this.time > 0) this.time -= 1;
        }, 1000);
  },

  methods: {
      formatItemTime(value) {
      return value < 10 ? `0${value}` : value;
    },
  }
};
</script>