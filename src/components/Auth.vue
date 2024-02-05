<script setup lang="ts">
import { ref } from 'vue';

let firstName = ref('')

</script>
<template >
	<div className="register-form">
            <h2  className="register-form__title">Log in</h2>
			<v-form @submit.prevent>
				<v-text-field
					v-model="firstName"
					
					label="First name"
					></v-text-field>
				<v-btn type="submit" block class="mt-2">Submit</v-btn>
			</v-form>
			<input v-model="firstName" type="text">
            <div className="register-form__inputs">
                <!-- <TextField onChange={onChange} value={formValues.email} label="Email" name="email" fullWidth></TextField>
                <TextField onChange={onChange} value={formValues.password} label="Password" name="password" fullWidth></TextField>
                <Button onClick={onSignIn} variant="contained">
                    Sign in
                </Button> -->
            </div>
        </div>
</template>

<style lang="scss">
	
</style>