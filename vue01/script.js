const app = Vue.createApp(
  {
    data() {
      return {
        firstGoal: "<h3>HTML</h3>",
        secondGoal: "CSS",
        website: "https://www.youtube.com/"
      };
    },
    methods: {
      ourGoal() {
        const randomNumber = Math.random();
        if (randomNumber > 0.4) {
          return this.firstGoal
        } else {
          return this.secondGoal
        }
      },
    },
  });

app.mount('#frontend');