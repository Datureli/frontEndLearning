<template>
    <div class="mx-auto">
        <router-link :to="{name: 'Semanthic'}" class="text-decoration-none black--text mr-5">Semantyka</router-link>
        <router-link to="/about/htmlQuestions/:id" class="text-decoration-none black--text mr-5">Dobre praktyki</router-link>
        <router-link to="/about/html" class="text-decoration-none black--text mr-5">Teoria</router-link>
        <router-link to="/about/html" class="text-decoration-none black--text mr-5">Praktyka</router-link>
<router-view></router-view>
    </div>
</template>