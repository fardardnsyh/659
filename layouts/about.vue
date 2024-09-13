<template>
    <div>
        <div class="card">
            <p>Sebuah ai yang menggunakan api dari <a href="https://console.groq.com">Groq</a> dan menggunakan model
                <span>llama3-8b-8192</span>, Ai ini akan menjawab semua pertanyaan kalian menggunakan bahasa indonesia dan ai ini tetap akan menjawab dengan bahasa indonesia meskipun kalian bertanya menggunakan bahasa manapun.
            </p>
            <div class="footer">
                <small>Made by <a href="https://radya.fun">Radya</a></small>
            </div>
        </div>
    </div>
</template>

<style scoped>
:root {
    --primary-color: #030420;
    --secondary-color: #00dc82;
    --optional-color: #162135;
    --text-color: #ffffff;
}

.card {
    border: none;
    border-radius: 20px;
    background-color: var(--optional-color);
    color: var(--text-color);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 54%;
    height: 55vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    animation: position 0.5s;
}

@keyframes position{
    0% {top: 45%;}
    50% {top: 55%;}
    100% {top: 50%}
}

.card p {
    line-height: 2;
    font-size: 18px;
}

span{
    background-color: lightslategrey;
    padding: 5px;
    border-radius: 5px;
}

a{
    color: lightblue;
}


@media only screen and (max-width:700px) {
    .card {
        width: 80%;
    }
}
</style>