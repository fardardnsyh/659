<template>
    <div>
        <About v-if="state.showAbout" />
        <div class="container">
            <Navbar @showAbout="toggleAbout" />
            <main @click="state.showAbout = false">
                <div class="wrapper">
                    <h2><span style="color: var(--secondary-color);">Radya</span>.Ai</h2>
                    <div class="ask-input"
                        :style="{ 'height': state.beforeAsk ? '70%' : '10%', 'transition': !state.beforeAsk ? 'height 1s' : 'none' }">
                        <input type="text" required :placeholder="state.placeholder" v-model="state.msg"
                            @keyup.enter="getAnswer">
                        <button type="submit" class="btn-ask" v-on:click="getAnswer" aria-label="Submit">
                            <div class="loader" v-if="!state.beforeAsk && state.load"></div>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-arrow-up" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5" />
                            </svg>
                        </button>
                    </div>
                    <section>
                        <Card v-if="state.showCard" :isLoading="state.load" :msg="state.msg" />
                    </section>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import Navbar from '../layouts/navbar.vue';
import Card from '../layouts/cardAnswer.vue';
import About from '../layouts/about.vue';
import { useHead } from 'nuxt/app';

useHead({
    title: 'Ask Ai',
    meta: [
        { name: 'description', content: 'Tanyakan apa saja pada AI di website ini!' },
        { name: 'keywords', content: 'ai, ask ai, tanya ai, chat gpt' },
        { name: 'author', content: 'M Radya I' },
        { name: 'robots', content: 'index, follow' }
    ]
})

const state = reactive({
    title: 'Home',
    msg: "",
    placeholder: 'Ask...',
    beforeAsk: true,
    showCard: false,
    load: false,

    showAbout: false
})

function toggleAbout(value) {
    state.showAbout = value
}

function getAnswer() {
    if (state.msg != "") {
        state.showCard = false
        state.beforeAsk = false
        state.load = true
        setTimeout(() => {
            state.showCard = true
        }, 1000);
        setTimeout(() => {
            state.load = false
        }, 5000);
    } else {
        state.placeholder = "Inputnya disini dulu!"
        setTimeout(() => {
            state.placeholder = "Ask..."
        }, 1200);
    }
}

</script>

<style>
@import url("/assets/css/style.css");
</style>