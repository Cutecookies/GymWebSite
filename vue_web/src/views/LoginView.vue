<template>
  <main>
        <section class="authification">
            <div class="auth_card">
                <h2>Вход в аккаунт</h2>
                <p class="auth_subtitle">Введите свои данные, чтобы продолжить</p>

                <form class="auth_form" action="#" method="POST">
                    <div class="form_group">
                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="example@mail.ru" required>
                    </div>

                    <div class="form_group">
                        <label for="password">Пароль</label>
                        <input type="password" id="password" placeholder="••••••••" required>
                    </div>

                    <div class="form_options">
                        <label class="checkbox_label">
                            <input type="checkbox"> Запомнить меня
                        </label>
                        
                    </div>

                    <button type="submit" class="auth_btn">Войти</button>
                </form>

                <p class="auth_switch">
                    Нет аккаунта? <router-link to="/signup">Зарегистрируйтесь</router-link>
                </p>
            </div>
        </section>
    </main>
</template>