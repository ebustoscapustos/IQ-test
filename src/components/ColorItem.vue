<template>
    <div class="color-item" :class="{'selected': color.selected}" :style="{background: color.color}" @click="select"></div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
    name: 'ColorItem',

    data() {
        return {
            
        }
    },
    props: {
        color: {
            type: Object,
            default: () => {}
        },
        cardId: {
            type: Number
        }
    },
    methods: {
        ...mapMutations(['switchSelected', 'switchSelectedColor']),
        select() {
            this.switchSelectedColor({
                selectedOption: this.color,
                cardId: this.cardId
            })
            this.$emit('select', this.color.selected)
        }
    }
}
</script>

<style lang="scss" scoped>
.color-item {
    width: 100%;
    height: 100%;
}

.selected {
    border: 6px solid #FFC700;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
}
</style>