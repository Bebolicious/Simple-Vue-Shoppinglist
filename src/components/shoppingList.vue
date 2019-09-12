<template>
  <div class="hello">
    <div class="holder">
      <form @submit.prevent="addshoppingItem">
        <input type="text" placeholder="Add an item to your shoppinglist.." v-model="shoppingItem">
      </form>
      <ul>
        <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
        <li v-for="(data, index) in shoppingList" :key="index">{{ data.shoppingItem }}
          <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
        </li>
        </transition-group>
      </ul>

      <p>This is your shoppinglist.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "shoppingList",
  data() {
    return {
      shoppingItem: "",
      shoppingList: []
    };
  },

  methods: {
    addshoppingItem() {
      this.shoppingList.push({ shoppingItem: this.shoppingItem });
      this.shoppingItem = "";
    },
    remove(id) {
      this.shoppingList.splice(id, 1);
    }
  }
};
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"; 

.holder {
  background: #fff;
}

i {
  float:right;
  cursor: pointer;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #ffe9f8;
  border-left: 5px solid #e42b81;
  margin-bottom: 2px;
  color: #3e5252;
}

p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}

.container {
  box-shadow: 0px 0px 40px lightgray;
}

input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font: 1.3em;
  background-color: #3d1027;
  color: #687f7f;
}

.alert-in-enter-active {
  animation: bounce-in .5s;
}
.alert-in-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
