# 🧩 Shopify — Metaobjects & Designers Section

## 📋 Опис завдання

Мета — реалізувати секцію з відображенням дизайнерів на основі **Metaobject** і **Metafield** у темі **Dawn**.

**Завдання:**

- Створити `Metaobject` **Designer** з необхідними полями.
- Створити 3–4 екземпляри дизайнерів.
- Додати метаполе `Designers` до колекцій (тип: Metaobject list → Designer).
- Створити секцію `designers.liquid` для відображення карток дизайнерів.

---

## ✅ Виконана робота

- Створено **metaobject Designer** із полями:
  - name, role, bio, photo, tags, portfolio_links, birth_date, verified.
- Створено **4 дизайнерів**.
- Створено **метаполе для колекцій** — `Designer`, що зберігає кілька записів типу `Designer`.
- Реалізовано секцію `designers.liquid`, яка:
  - Підтягує дизайнерів з метаполя колекції.
  - Виводить їх фото, ім’я, роль, біографію, теги, посилання, дату народження та статус “Verified Designer”.
- Додано адаптивну сітку на **CSS Grid** (1–3 колонки).
- Фото взяті з **Unsplash**.

---

## 🔧 Технології

- **Shopify Liquid:** assign, for, if/else, metafields, metaobject.values, image_url.
- **Metaobjects & Metafields** — структура даних для колекцій.
- **CSS Grid** — адаптивне відображення карток.

---

## 📝 Примітки

- Основний фокус на роботі з метаданими, не на візуалі.
- Скріншоти розташовані у папці screenshots в цій гілці.

---

## 🔗 Ресурси

- **GitHub (branch: `metaobjects-and-metafields`)**  
  [https://github.com/krutobok/shopify-tkachenko-oleksandr-test-store/tree/metaobjects-and-metafields](https://github.com/krutobok/shopify-tkachenko-oleksandr-test-store/tree/metaobjects-and-metafields)

- **Стор Shopify:**  
  [https://tkachenko-oleksandr-test-store.myshopify.com/?preview_theme_id=183172563253](https://tkachenko-oleksandr-test-store.myshopify.com/?preview_theme_id=183172563253)  
  🔑 Пароль: `nowvol`
