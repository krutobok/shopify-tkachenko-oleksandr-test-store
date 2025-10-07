## [ДЗ] Shopify — Будуємо сторінки на Shopify

## 📋 Опис завдання

Метою було створити власну тему Shopify з нуля, додати базову структуру файлів теми (config, layout, templates, sections, snippets, locales), забезпечити працездатність теми та підключення її до GitHub-репозиторію. Необхідно було реалізувати головну сторінку з секціями, створити шаблон сторінки продукту з використанням раніше створеного універсального банера, а також налаштувати систему локалізації для української мови.

## ✅ Виконана робота

- Створено нову тему Shopify з нуля в межах існуючого проєкту.
- Налаштовано базову структуру файлів
- Додано секцію `sections/banner-product.liquid` з логікою для універсального банера продукту.
- Підключено GitHub-репозиторій та створено окрему гілку для нової теми.
- Винесено частини у підсніпети:
  - `snippets/product-colors.liquid` — кнопки кольорів.
  - `snippets/product-price.liquid` — блок ціни.
  - `snippets/product-badge.liquid` — бейджі брендів.
- Створено локальну українську локалізацію з fallback-текстами (через `t`).
- Забезпечено роботу логіки вибору кольору з підвантаженням відповідних зображень та зміною ціни через JS.
  


## 🔧 Технології та підходи

- **Shopify Liquid**: базові та розширені конструкції (assign, case, capture, render, t)
- **Shopify CLI 3.84.1** — ініціалізація, деплой та синхронізація теми.
- **GitHub Flow** — створення окремої гілки (`theme/minimal-theme`) та пуш змін.
- **Theme architecture** — структура `layout`, `templates`, `sections`, `snippets`, `locales`, `config`.
- **JavaScript інтеграція** — оновлення ціни та головного зображення при виборі кольору.
- **Локалізація** — реалізовано через `t` з fallback на українську.
- **Fallback контент** — використання `default` і `blank` для запобігання порожнім значенням.

## 📝 Примітки

- Під час створення теми вручну було додано мінімальний набір системних файлів, необхідних для коректної роботи теми (settings_data.json, settings_schema.json та gift_card.liquid).
- Лише один файл локалізації — `uk.default.json`
  
🔗 Пов’язані ресурси

- GitHub репозиторій(theme/minimal-theme гілка): https://github.com/krutobok/shopify-tkachenko-oleksandr-test-store/edit/theme/minimal-theme
- Посилання на стор(theme/minimal-theme гілка): https://tkachenko-oleksandr-test-store.myshopify.com/?preview_theme_id=182809198901
Пароль від стору: nowvol
