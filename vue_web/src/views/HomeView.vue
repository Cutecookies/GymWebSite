<template>
  <main>
        <section class="about">
            <div class="main_text">
                <h2>СПОРТИВНЫЙ ЗАЛ "ТИТАН"</h2>
                <p>Начни тренировать свое тело прямо сейчас.
                Выбирай свободные посещения или занятия с тренерами!</p>
            </div>
            <img src="@/assets/img/about_picture.jpg" class="main_img">
        </section>

        <section class="gym_photos">
            <h2>ГАЛЕРЕЯ</h2>
            <div class="slider_container">
                <!-- скрытые радиокнопки -->
                <input type="radio" name="slider" id="slide1" checked>
                <input type="radio" name="slider" id="slide2">
                <input type="radio" name="slider" id="slide3">

                <div class="slider">
                    <!-- фотографии спортзала -->
                    <div class="slides">
                        <div class="slide"><img src="@/assets/img/gym1.png" alt="Фото спортзала 1"></div>
                        <div class="slide"><img src="@/assets/img/gym2.png" alt="Фото спортзала 2"></div>
                        <div class="slide"><img src="@/assets/img/gym3.png" alt="Фото спортзала 3"></div>
                    </div>

                    <!-- точки переключения -->
                    <div class="dots">
                        <label for="slide1" class="dot"></label>
                        <label for="slide2" class="dot"></label>
                        <label for="slide3" class="dot"></label>
                    </div>
                </div>
            </div>
        </section>

        <section class="trainers">
            <h2>НАШИ ТРЕНЕРА</h2>
            <div class="trainers_cards">
                <TrainerCard
                    v-for="(trainer, i) in trainers"
                    :key="i"
                    :trainer="trainer"
                />
            </div>
        </section>
    </main>
</template>

<script setup>
    import TrainerCard from '@/components/TrainerCard.vue'
    import trainerAlexandr from '@/assets/img/trainers/trainer_Alexandr.jpg'
    import trainerEkaterina from '@/assets/img/trainers/trainer_Ekaterina.jpg'
    import trainerIvan from '@/assets/img/trainers/trainer_Ivan.jpg'
    import trainerNikita from '@/assets/img/trainers/trainer_Nikita.jpg'
    
    const trainers = [
    {
        photo: trainerAlexandr,          // путь к фото
        name: 'Верещагин Александр Викторович',  // имя
        status: 'Cтарший тренер силового направления',     // статус
        achievements: ['Мастер спорта России по пауэрлифтингу.',
                        'Серебряный призёр чемпионата ЦФО по классическому жиму (2016).',
                        '12 лет тренерского стажа.',
                        'Сертифицированный инструктор по технике приседа и становой тяги.']     // массив достижений
    },
    {
        photo: trainerIvan, 
        name: 'Загорский Иван Дмитриевич', 
        status: 'Тренер групповых функциональных программ',     
        achievements: ['Участник и финалист региональных соревнований по кроссфиту (топ-10 в 2021 и 2023).',
                        'Сертификат CrossFit Level 2 Trainer.',
                        'Прошёл курс по функциональной реабилитации после травм.',
                        '8 лет опыта, из них 3 года — тренер групповых занятий.',
                        'Провёл более 2000 групповых тренировок.']     
    },
    {
        photo: trainerEkaterina,       
        name: 'Соловьёва Екатерина Дмитриевна', 
        status: 'Тренер по гибкости и восстановлению',  
        achievements: ['Кандидат в мастера спорта по художественной гимнастике.',
                        'Сертифицированный инструктор по пилатесу (Mat Pilates, Level 2).',
                        '7 лет опыта, из них 4 года — тренер групповых программ.',
                        'Прошла обучение по стретчингу и миофасциальному релизу.'] 
    },
    {
        photo: trainerNikita, 
        name: 'Оболенский Никита Сергеевич', 
        status: 'Тренер по боксу и ударной технике',  
        achievements: ['Мастер спорта по боксу.',
                        'Бронзовый призёр первенства России среди юниоров.',
                        '10 лет тренерского стажа.',
                        'Подготовил 2 победителей региональных турниров и 1 финалиста всероссийского уровня.',
                        'Сертифицированный судья первой категории.'] 
    },
]
</script>