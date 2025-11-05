# 🎨 Shopify — Tailwind Integration & Featured Product Refactor

## 📋 Опис завдання

Мета — інтегрувати **Tailwind CSS** у тему **Dawn** та провести рефакторинг секції **featured-product**, використовуючи лише утилітарні класи Tailwind.

---

## ✅ Виконана робота

- Інтегровано **Tailwind CSS** у тему Shopify (Dawn):
  - Перевірено роботу класів — стилі успішно застосовуються до елементів теми.
- Проведено **рефактор секції `featured-product`**(`banner-product`):
  - Усі стилі замінено на утилітарні класи Tailwind.
  - Повністю видалено або закоментовано попередні стилі секції, що дублювали функціональність Tailwind.
  - Адаптивність реалізовано через вбудовані брейкпоінти (`md:`, `xl:`).
  - Кнопки, зображення, типографіка та відступи тепер формуються виключно за допомогою Tailwind-класів.

---

## 🔧 Технології та підходи

- **Tailwind CSS** — основна бібліотека стилів.
- **Shopify CLI** — для побудови та гарячого оновлення.
- **Responsive design** через Tailwind утиліти (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4` тощо).

---

## 🔗 Ресурси

- **GitHub (branch: `tailwind-integration`)**  
  [https://github.com/krutobok/shopify-tkachenko-oleksandr-test-store/tree/css](https://github.com/krutobok/shopify-tkachenko-oleksandr-test-store/tree/css)

- **Тестовий стор:**  
  [https://tkachenko-oleksandr-test-store.myshopify.com/?preview_theme_id=183506731317](https://tkachenko-oleksandr-test-store.myshopify.com/?preview_theme_id=183506731317)  
  🔑 Пароль: `nowvol`
