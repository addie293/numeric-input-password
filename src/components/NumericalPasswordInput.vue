<template>
    <div class="main">
        <!-- <h2>{{ userPassword }}</h2> -->
        <!-- <h2></h2> -->
        <password-viewer :currentPassword="currentPassword" />
        <randomized-numeric-input :numbers="numbers" @current-password-change="currentPasswordChange" />
    </div>
</template>
<script>
import PasswordViewer from './PasswordViewer.vue'
import RandomizedNumericInput from './RandomizedNumericInput.vue'

export default {
    name: 'NumericalPasswordInput',
    props: {
        userPassword: String
    },
    methods: {
        currentPasswordChange: function(num) {
            if(this.currentPassword.length == 9) return false;
            this.currentPassword += num;
            if(this.currentPassword.length == 9){
                if(this.userPassword == this.currentPassword)
                {
                this.wrongPassword = false
                alert('Password matched');
                this.$emit('password-match')
                }
                else{
                    this.wrongPassword = true
                    console.log(this.wrongPassword)
                    this.currentPassword = "";
                    alert("Password doesn't match");
                    this.shuffle();
                }
            }
            // return true;
        },
        shuffle: function() {
            var currentIndex = this.numbers.length,  randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                // And swap it with the current element.
                [this.numbers[currentIndex], this.numbers[randomIndex]] = [
                this.numbers[randomIndex], this.numbers[currentIndex]];
            }
        }
    },
    beforeMount(){
        this.shuffle()
    },
    data: () => {
        return {
            currentPassword: '',
            numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '', ''],
            wrongPassword: false
        }
    },
    computed: {
      error () {
        return this.wrongPassword ? true : false
      }
    },
    components: {
        PasswordViewer,
        RandomizedNumericInput
    }
}
</script>
<style>
    .main{
        width: 50%;
        margin: 6% 25% 0px;
        padding: 5%;
        border: 1px solid black;
    }
</style>
