## [ДЗ] Shopify — Dev-store, Dawn, GitHub flow

## 📋 Опис завдання

Потрібно було створити Dev-store у Partner Dashboard, встановити тему Dawn, завантажити її локально через Shopify CLI, налаштувати GitHub репозиторій із гілками main/dev, підключити теми у Shopify Admin та зробити зміни у секції в окремій feature-гілці з наступним PR → merge у dev.

## ✅ Виконана робота

 Створено Dev-store у Partner Dashboard.
 Встановлено офіційну тему Dawn.
 Завантажено тему локально через CLI командою shopify theme pull.
 Створено GitHub репозиторій shopify-<назва-стору>.
 Завантажено код теми у GitHub.
 Створено гілку dev від main.
 Прив’язано теми у Shopify Admin до GitHub (main/dev).
 Створено feature-гілку feature-slider-change.
 У гілці feature-slider-change змінено вигляд дотсів для слайдера у файлах CSS, щоб вони відповідали макету у Figma.
 Виконано commit та відкрито Pull Request → merge у dev.

## 🔧 Технології та підходи

- Shopify Partner Dashboard
- Shopify CLI 3.84.1
- GitHub
- Theme Editor (Customize)
- CSS для зміни стилів слайдера

## 📝 Примітки

Спочатку виникла проблема з командою shopify auth login — вирішено через shopify login --store.
Базові зміни у Slideshow (Hero Banner) виконані через кастомайзер без коду.
Для завдання з макетом у Figma довелось редагувати CSS (assets/base.css), щоб дотси слайдера збігалися за стилем і розташуванням.

🔗 Пов’язані ресурси

GitHub репозиторій
Гілка: feature-slider-change (замержена в dev)
