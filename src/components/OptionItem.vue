<template>
  <li class="option-item" :class="{ 'other-style': otherStyle, 'selected' : option.selected && !otherStyle, 'other-style-selected' : option.selected && otherStyle }" @click="select">
    <p>{{ option.text }}</p>
  </li>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: "OptionItem",
  
  data() {
      return {
          
      }
  },
  props: {
    option: {
      type: Object,
      default: () => {},
    },
    otherStyle: {
      type: Boolean,
      default: false,
    },
    cardId: {
        type: Number,
    }
  },

  methods: {
      ...mapMutations(['switchSelected']),
      select() {
          this.switchSelected({
              selectedOption: this.option,
              cardId: this.cardId
              })
          this.$emit('select', this.option.selected)
      }
  }
};
</script>

<style lang="scss" scoped>
.option-item {
  background-color: rgba(255, 255, 255, 0.3);
  margin: 10px 0;
  padding: 15px 0;
  text-align: left;
  position: relative;
  cursor: pointer;

  p {
    margin: 0;
    margin-left: 95px;
    margin-right: 10px;
  }

  p::before {
    content: "";
    width: 20px;
    height: 20px;
    border: 1px solid #fff;
    border-radius: 50%;
    position: absolute;
    left: 35px;
    top: calc(50% - 10px);
  }
}
.other-style {
  width: 29px;
  height: 29px;
  border: 6px solid #fff;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #000;

  p {
    margin: 0;
  }

  p::before {
    content: none;
  }
}

.selected {
    background-color: #FFC700;
    color: #272727;

    p::before {
    border-color: #272727;
    background-color: #2950C2;
  }
}
.other-style-selected {
   border-color: #FFC700;
}
</style>