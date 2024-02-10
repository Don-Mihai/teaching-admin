<script setup lang="ts">
import { ref } from 'vue';
import { useToast } from "primevue/usetoast";
import InputText from 'primevue/inputtext';
import router from '@/router';
import Button from 'primevue/button';
import Toast from 'primevue/toast';

const toast = useToast();

let formValues = ref({email: '', password: ''})

const showError = () => {
    toast.add({ severity: 'error', summary: 'Incorrect password', life: 3000 });
};

const onSignIn = async () => {
        const payload = { email: formValues.value.email, password: formValues.value.password };
        
        if (false) {
			router.push('home')
        } else {
            showError()
        }
    };



</script>
<template >
	<div className="register-form">
            <h2 className="register-form__title">Log in</h2>
            <div className="register-form__inputs">
                <InputText v-model="formValues.email" label="Email" fullWidth />
                <InputText v-model="formValues.password" label="Password" fullWidth />
                <Button @click='onSignIn' variant="contained">
                    Sign in
                </Button>
            </div>
           <Toast />
           <router-link :to="'/login/register'">No account?</router-link>
        </div>
</template>

<style lang="scss">
	.register-form {
    width: 400px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 3px #000;

    &__title {
        font-size: 30px;
        margin-bottom: 20px;
    }

    &__inputs {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
}
</style>
