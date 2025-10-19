# 🛍️ Shopify — Promo Banners & Featured Products

## 📋 Опис завдання

Мета — створити дві кастомні секції з різними типами налаштувань і динамічними блоками для теми **Dawn**:

1. **Promo Banners (`promo-banners.liquid`)**  
   Секція з банерами, які можна додавати через редактор, налаштовуючи зображення, текст і кнопку.  

2. **Featured Products (`featured-products.liquid`)**  
   Секція для відображення обраних товарів із можливістю сортування та додавання в кошик.


## ✅ Виконана робота

### 🔹 Секція `promo-banners.liquid`

- Реалізовано всі вимоги до налаштувань секції:
  - Заголовок (text)
  - Підзаголовок (richtext)
  - Вирівнювання тексту (select: left, center, right)
  - Відступи секції (range: 0–100px)
  - Кольорова схема (select: світла, темна, акцентна)
- Додано підтримку блоків **banner**:
  - Зображення (image_picker)
  - Заголовок (text)
  - Текст кнопки (text)
  - Посилання (url)
  - Співвідношення сторін (select: 16:9, 1:1, 3:2)
- Адаптивна сітка:  
   1 колонка — мобільні  
   2 колонки — планшети  
   3 колонки — десктопи  
- Реалізовано fallback для зображень і alt-атрибутів.
- Стилі підключено через унікальний `section.id`.


### 🔹 Секція `featured-products.liquid`

- Налаштування секції:
  - Заголовок (text)
  - Вибір колекції (collection)
  - Кількість товарів (range: 2–12)
  - Показувати ціну / рейтинг / кнопку «Додати в кошик» (checkbox)
- Реалізовано **JS-сортування товарів** за такими параметрами:
  - 🔹 `best-selling` — початковий порядок
  - 🔹 `price-ascending` — від дешевших
  - 🔹 `price-descending` — від дорожчих
  - 🔹 `title-ascending` — A–Z
- При натисканні «Додати в кошик»:
  - Використовується **Fetch API** для додавання товару.
  - Оновлюється **cart icon bubble** через Section Rendering API.
  - Викликається стандартний **cart drawer** із теми Dawn.


## 🔧 Технології та підходи

- **Shopify Liquid**:  
  `assign`, `case`, `for`, `if/else`, `image_url`, `escape`, `default`
- **JSON schema** для опису налаштувань секцій та блоків
- **JavaScript**:
  - `fetch()` для роботи з Shopify cart API
  - Сортування колекції клієнтським методом
  - Динамічне оновлення DOM і cart drawer
- **Cart API** — для оновлення міні-кошика
- **CSS Grid** — для адаптивної верстки


## 📝 Примітки

- Сортування реалізовано через **звичайний JS**, оскільки секція використовується на **головній сторінці**, а не на сторінці колекції (де доступне server-side сортування).  
- **Cart drawer** працює частково:
  - ✅ Якщо в кошику вже є товари — працює повністю коректно.
  - ⚠️ Якщо додається **перший товар** — дровер відкривається, але не завжди оновлює контент належним чином.
- Скріншоти секцій розьашовані в цій гілці в папці screenshots


## 🔗 Пов’язані ресурси

- 🧩 **GitHub репозиторій (branch: `custom-section`)**  
  [https://github.com/krutobok/shopify-tkachenko-oleksandr-test-store/tree/custom-section](https://github.com/krutobok/shopify-tkachenko-oleksandr-test-store/tree/custom-section)

- 🛒 **Тестовий стор:**  
  [ https://tkachenko-oleksandr-test-store.myshopify.com/?preview_theme_id=182997680437](https://tkachenko-oleksandr-test-store.myshopify.com/?preview_theme_id=182997680437)  
  🔑 Пароль: `nowvol`


