<template>
  <main>
        <section class="authification">
            <div class="auth_card">
                <h2>Создать аккаунт</h2>
                <p class="auth_subtitle">Начни свой путь к силе прямо сейчас</p>

                <form class="auth_form" action="#" method="POST">
                    <div class="form_group">
                        <label for="name">Имя</label>
                        <input type="text" id="name" placeholder="Александр" required>
                    </div>

                    <div class="form_group">
                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="example@mail.ru" required>
                    </div>

                    <div class="form_group">
                        <label for="phone">Телефон</label>
                        <input type="tel" id="phone" placeholder="+7 (999) 123-45-67">
                    </div>

                    <div class="form_group">
                        <label for="password">Пароль</label>
                        <input type="password" id="password" placeholder="Минимум 6 символов" required>
                    </div>

                    <div class="form_group">
                        <label for="confirm">Подтвердите пароль</label>
                        <input type="password" id="confirm" placeholder="••••••••" required>
                    </div>

                    <div class="form_options">
                        <label class="checkbox_label">
                            <input type="checkbox" required> Я согласен с <a href="#">условиями</a>
                        </label>
                    </div>

                    <button type="submit" class="auth_btn">Зарегистрироваться</button>
                </form>

                <p class="auth_switch">
                    Уже есть аккаунт? <a href="login.html">Войдите</a>
                </p>
            </div>
        </section>
    </main>
</template>
