<template>
    <header class="header">
        <div class="name">
            <img class="logo" src="@/assets/img/logo.png" alt="Логотип с молнией по середине и двумя накачанными руками">
            <h1>TITAN</h1>
        </div>
        <div class="pages">
            <router-link to="/" exact-active-class="active">ГЛАВНАЯ</router-link>
            <router-link to="/aboniments" active-class="active">АБОНИМЕНТЫ</router-link>
            <router-link to="/login" active-class="active">ВХОД / РЕГИСТРАЦИЯ</router-link>
        </div>
    </header>  
</template>