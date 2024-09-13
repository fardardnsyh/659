<template>
    <div>
        <nav>
            <div class="menu">
                <div class="menu-list" @click="toggle">About</div>
                <div class="menu-list">Login</div>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { reactive, defineEmits } from 'vue';

const emit = defineEmits(['showAbout'])

const state = reactive({
    toggle: false
})

function toggle() {
    state.toggle = true
    emit('showAbout', state.toggle)
}

</script>

<style scoped>
:root {
    --primary-color: #030420;
    --secondary-color: #00dc82;
    --text-color: #ffffff;
}

nav {
    /* border: 1px solid white; */
    color: white;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

nav .menu {
    /* border: 1px solid white; */
    width: 200px;
    margin-right: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

nav .menu .menu-list {
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.5s;
}

nav .menu .menu-list:hover {
    color: var(--secondary-color);
}
</style>