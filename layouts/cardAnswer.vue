<template>
    <div>
        <div class="card">
            <div v-html="format"></div>
        </div>
    </div>
</template>

<script>
import { reactive, onMounted, computed } from 'vue';
import { request } from '../api/chatRequest';
import { marked } from 'marked';

export default {
    props: ['msg'],
    setup(props) {
        const state = reactive({
            result: null
        })

        async function get() {
            const answer = await request(props.msg)
            console.log(answer)
            state.result = answer.data
        }

        const format = computed(() => {
            if (state.result) {
                return marked(state.result)
            }
            return ''
        })

        onMounted(() => {
            setTimeout(() => {
                get()
            }, 2000);
        })

        return { state, get, format }
    }
}
</script>

<style scoped>
:root {
    --primary-color: #030420;
    --secondary-color: #00dc82;
    --optional-color: #162135;
    --text-color: #ffffff;
}

.card {
    margin: 0 auto;
    margin-top: 20px;
    width: 80%;
    height: 50vh;
    padding: 20px 30px;
    border-radius: 15px;
    overflow-y: auto;
    background-color: var(--optional-color);
    animation: width 1s, height 1s;
    line-height: 1.5;
}


@keyframes width {
    from {
        width: 0%;
    }

    to {
        width: 80%;
    }
}

@keyframes height {
    from {
        height: 0vh;
    }

    to {
        height: 50vh;
    }
}

.center {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media only screen and (max-width:700px) {
    .card {
        width: 80%;
    }
}
</style>