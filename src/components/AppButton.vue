<template>
    <button class="app-btn" :class="{'transparency': !transparency, 'disabled' : !enabled}">{{ buttonText }}</button>
</template>

<script>
export default {
    name: "AppButton",
    props: {
        buttonText: {
            type: String,
            default: ''
        },
        transparency: {
            type: Boolean,
            default: true
        },
        enabled: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style lang="scss" scoped>
.app-btn {
    font-family: "Merriweather", sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 0.1em;
    border: none;
    background-color: #FFC700;
    padding: 15px 35px;
    border-radius: 30px;
    min-width: 200px;
    cursor: pointer;
}
.transparency {
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid #fff;
    color: #fff;
}
.disabled {
    background-color: #DADADA;
    color: #8E8E8E;
    box-shadow: inset 1px 4px 7px 2px rgb(0 0 0 / 30%);
    pointer-events: none;
}
</style>