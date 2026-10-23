<template>
  <main>
        <section class="schedule">
            <h2>РАСПИСАНИЕ ТРЕНИРОВОК</h2>
            <div class="table_wrapper">
                <table class="schedule_table">
                    <thead>
                        <tr>
                            <th>Время</th>
                            <th>Пн</th>
                            <th>Вт</th>
                            <th>Ср</th>
                            <th>Чт</th>
                            <th>Пт</th>
                            <th>Сб</th>
                            <th>Вс</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="time">8:00-9:00</td>
                            <td>Силовой тренинг (Александр)</td>
                            <td></td>
                            <td>Силовой тренинг (Александр)</td>
                            <td></td>
                            <td>Силовой тренинг (Александр)</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="time">9:00-10:00</td>
                            <td>Растяжка (Екатерина)</td>
                            <td></td>
                            <td>Растяжка (Екатерина)</td>
                            <td></td>
                            <td>Растяжка (Екатерина)</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="time">10:00-11:00</td>
                            <td></td>
                            <td>Силовая выносливость (Александр)</td>
                            <td></td>
                            <td>Силовая выносливость (Александр)</td>
                            <td></td>
                            <td>Силовая выносливость (Александр)</td>
                            <td>Бокс (Никита)</td>
                        </tr>
                        <tr>
                            <td class="time">11:00-12:00</td>
                            <td>Пилатес (Екатерина)</td>
                            <td></td>
                            <td>Пилатес (Екатерина)</td>
                            <td></td>
                            <td>Пилатес (Екатерина)</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="time">12:00-13:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Кроссфит (Иван)</td>
                            <td>Функциональный тренинг (Иван)</td>
                        </tr>
                        <tr>
                            <td class="time">13:00-14:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="time">14:00-15:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="time">15:00-16:00</td>
                            <td>Функциональный тренинг (Иван)</td>
                            <td></td>
                            <td>Функциональный тренинг (Иван)</td>
                            <td></td>
                            <td>Функциональный тренинг (Иван)</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="time">16:00-17:00</td>
                            <td>Ударная техника (Никита)</td>
                            <td></td>
                            <td>Ударная техника (Никита)</td>
                            <td></td>
                            <td>Ударная техника (Никита)</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="time">17:00-18:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="time">18:00-19:00</td>
                            <td>Кроссфит (Иван)</td>
                            <td></td>
                            <td></td>
                            <td>Кроссфит (Иван)</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="time">19:00-20:00</td>
                            <td></td>
                            <td>Бокс (Никита)</td>
                            <td></td>
                            <td>Бокс (Никита)</td>
                            <td></td>
                            <td>Бокс (Никита)</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="time">20:00-21:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="time">21:00-22:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <section class="individual_membership">
            <h2>ИНДИВИДУАЛЬНЫЕ ЗАНЯТИЯ</h2>
            <div class="membership_cards">
                <MembershipCard
                    v-for="(plan, i) in individual_memberships[0].plans"
                    :key="i"
                    :name="plan.name"
                    :cost="plan.cost"
                    :description="plan.description"
                />
            </div>
        </section>

        <section class="training_membership">
            <h2>ЗАНЯТИЯ С ТРЕНЕРАМИ</h2>
            <div v-for="(trainer, i) in trainers_membership" :key="i">
                <h3>{{ trainer.name }}</h3>
                <div class="membership_cards">
                    <MembershipCard
                        v-for="(plan, i) in trainer.plans"
                        :key="i"
                        :name="plan.name"
                        :cost="plan.cost"
                        :description="plan.description"
                    />
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
    import MembershipCard from '@/components/MembershipCard.vue';

    const individual_memberships = [
    {
        name: 'Индивидуальные занятия',   
        plans: [
            {name: '1 занятие', cost: '1 200 ₽', description: '1 доступное занятие.'},
            {name: '1 месяц занятий', cost: '3 500 ₽', description: '12 посещений.'},
            {name: '3 месяца занятий', cost: '10 000 ₽', description: '50 посещений.'},
            {name: '6 месяцев занятий', cost: '20 000 ₽', description: '100 посещений'}
        ] 
    }]
    const trainers_membership = [
    {
        name: 'Верещагин Александр Викторович',   
        plans: [
            {name: '1 пробное занятие', cost: '10 ₽', description: '1 пробное посещение любой из тренировок данного преподавателя.'},
            {name: '1 месяц занятий', cost: '9 500 ₽', description: '1 месяц посещений любых тренировок данного преподавателя.'},
            {name: '3 месяца занятий', cost: '27 000 ₽', description: '3 месяца посещений любых тренировок данного преподавателя.'},
            {name: '6 месяцев занятий', cost: '51 000 ₽', description: '6 месяцев посещений любых тренировок данного преподавателя.'}
        ] 
    },    {
        name: 'Загорский Иван Дмитриевич',   
        plans: [
            {name: '1 пробное занятие', cost: '10 ₽', description: '1 пробное посещение любой из тренировок данного преподавателя.'},
            {name: '1 месяц занятий', cost: '8 000 ₽', description: '1 месяц посещений любых тренировок данного преподавателя.'},
            {name: '3 месяца занятий', cost: '22 500 ₽', description: '3 месяца посещений любых тренировок данного преподавателя.'},
            {name: '6 месяцев занятий', cost: '42 000 ₽', description: '6 месяцев посещений любых тренировок данного преподавателя.'}
        ] 
    },    {
        name: 'Соловьёва Екатерина Дмитриевна',   
        plans: [
            {name: '1 пробное занятие', cost: '10 ₽', description: '1 пробное посещение любой из тренировок данного преподавателя.'},
            {name: '1 месяц занятий', cost: '6 000 ₽', description: '1 месяц посещений любых тренировок данного преподавателя.'},
            {name: '3 месяца занятий', cost: '16 500 ₽', description: '3 месяца посещений любых тренировок данного преподавателя.'},
            {name: '6 месяцев занятий', cost: '30 000 ₽', description: '6 месяцев посещений любых тренировок данного преподавателя.'}
        ] 
    },    {
        name: 'Оболенский Никита Сергеевич',   
        plans: [
            {name: '1 пробное занятие', cost: '10 ₽', description: '1 пробное посещение любой из тренировок данного преподавателя.'},
            {name: '1 месяц занятий', cost: '10 000 ₽', description: '1 месяц посещений любых тренировок данного преподавателя.'},
            {name: '3 месяца занятий', cost: '28 500 ₽', description: '3 месяца посещений любых тренировок данного преподавателя.'},
            {name: '6 месяцев занятий', cost: '54 000 ₽', description: '6 месяцев посещений любых тренировок данного преподавателя.'}
        ] 
    }]
</script>