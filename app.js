const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 20,
      yourHealth: 20,
    };
  },
  methods: {
    getRandomInteger(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    },
    attack() {
      if (this.monsterHealth > 0 && this.yourHealth > 0) {
        this.monsterHealth = this.monsterHealth - this.getRandomInteger(3, 11);
        this.yourHealth = this.yourHealth - this.getRandomInteger(3, 11);
      } else if (this.monsterHealth > 0 && this.yourHealth <= 0) {
        console.log("monster won");
      } else if (this.monsterHealth <= 0 && this.yourHealth > 0) {
        console.log("you won");
      }

      console.log(this.monsterHealth, this.yourHealth);
    },
    superAttack() {
      console.log(this.monsterHealth - this.getRandomInteger(10, 21));
    },
    heal() {
      console.log(this.yourHealth + this.getRandomInteger(10, 21));
    },
  },
});

app.mount("#game");
