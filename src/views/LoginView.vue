<script setup lang="ts">
</script>

<template>
	<div className="auth">
		<RouterView />
	</div>
</template>

<style lang="scss" scoped>

.auth {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    &__subtitle {
        margin-top: 10px;
        font-size: 16px;
        font-weight: normal;
    }
}
</style>
