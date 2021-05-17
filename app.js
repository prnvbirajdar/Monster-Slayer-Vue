function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      yourHealth: 100,
      attackCount: 0,
    };
  },
  methods: {
    attackMonster() {
      this.attackCount++;
      this.monsterHealth -= getRandomInteger(5, 12);
      this.attackPlayer();
    },

    attackPlayer() {
      this.yourHealth -= getRandomInteger(8, 15);
    },

    superAttack() {
      this.attackCount++;
      this.monsterHealth -= getRandomInteger(10, 25);
      this.attackPlayer();
    },

    heal() {
      this.attackCount++;

      if (this.yourHealth + getRandomInteger(8, 15) >= 100) {
        return (this.yourHealth = 100);
      }

      this.yourHealth += getRandomInteger(8, 15);
      this.attackPlayer();
    },
  },
});

app.mount("#game");
