function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      attackCount: 0,
      winner: null,
      logMessages: [],
    };
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  computed: {
    monsterHealthBarStyling() {
      if (this.monsterHealth < 0) {
        return {
          width: "0 %",
        };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerHealthBarStyling() {
      if (this.playerHealth < 0) {
        return {
          width: "0 %",
        };
      }
      return { width: this.playerHealth + "%" };
    },
    enableSuperAttack() {
      return this.attackCount % 4 !== 0;
    },
  },

  methods: {
    attackMonster() {
      this.attackCount++;
      const attackValue = getRandomInteger(5, 12);
      this.monsterHealth -= attackValue;
      this.addLogMessages("player", "attack", attackValue);
      this.attackPlayer();
    },

    attackPlayer() {
      const attackValue = getRandomInteger(8, 15);
      this.playerHealth -= attackValue;
      this.addLogMessages("monster", "attack", attackValue);
    },
    superAttack() {
      this.attackCount++;
      const superAttackValue = getRandomInteger(10, 25);
      this.monsterHealth -= superAttackValue;
      this.addLogMessages("player", "special-attack", superAttackValue);
      this.attackPlayer();
    },

    heal() {
      this.attackCount++;
      const healValue = getRandomInteger(8, 15);

      if (this.playerHealth + healValue >= 100) {
        return (this.playerHealth = 100);
      }

      this.playerHealth += healValue;
      this.addLogMessages("player", "heal", healValue);
      this.attackPlayer();
    },

    surrender() {
      this.winner = "monster";
    },

    playAgain() {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.attackCount = 0;
      this.winner = null;
      this.logMessages = [];
    },

    addLogMessages(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount("#game");
