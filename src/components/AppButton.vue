<template>
    <button class="app-btn">{{ buttonText }}</button>
</template>

<script>
export default {
    name: "AppButton",
    props: {
        buttonText: {
            type: String,
            default: ''
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
</style>