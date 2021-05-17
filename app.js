function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
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

        
      console.log(this.monsterHealth - getRandomInteger(10, 21));
    },

    attack() {
      if (this.monsterHealth > 0 && this.yourHealth > 0) {
        this.monsterHealth = this.monsterHealth - getRandomInteger(3, 11);
        this.yourHealth = this.yourHealth - getRandomInteger(3, 11);
      } else if (this.monsterHealth > 0 && this.yourHealth <= 0) {
        console.log("monster won");
      } else if (this.monsterHealth <= 0 && this.yourHealth > 0) {
        console.log("you won");
      }

      console.log(this.monsterHealth, this.yourHealth);
    },
   
    heal() {
      console.log(this.yourHealth + getRandomInteger(10, 21));
    },
  },
});

app.mount("#game");
