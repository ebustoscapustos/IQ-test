<template>
    <button class="app-btn" :class="{'transparency': !transparency}">{{ buttonText }}</button>
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
}
.transparency {
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid #fff;
    color: #fff;
}
</style>