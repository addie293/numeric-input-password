<template>
    <div class="current-password-block">
        <h1>{{ currentPassword }}</h1>
    </div>
</template>
<script>
export default {
    name: 'PasswordViewer',
    props: {
        currentPassword: String
    }
}
</script>
<style>
    .current-password-block{
        height: 60px;
        border: 1px solid black;
        width: 100%;
    }
    .current-password-block h1{
        text-align: right;
        font-size: 40px;
        padding-right: 10px;
    }
</style>
