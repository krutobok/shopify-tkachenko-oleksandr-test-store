# 🧩 Shopify — Custom Forms (Contact & Product Inquiry)

## 📋 Опис завдання

Мета — створити дві кастомні секції з формами для теми **Dawn**, використовуючи можливості Shopify Forms API.

**Завдання:**
1. Реалізувати секцію **Contact Form** із полями:
   - Name  
   - Email (required)  
   - Phone  
   - Message (required)  
   - Honeypot (антиспам)
2. Реалізувати секцію **Product Inquiry / Add to cart Form**:
   - На базі `{% form 'product', product %}`
   - З кастомними властивостями `properties[...]`
   - Валідацією кількості
   - Обробкою недоступних варіантів

---

## ✅ Виконана робота

### 🔹 Секція `contact-form-custom.liquid`
- Створено форму з правильними атрибутами:
  - `type="email"`, `required`, `autocomplete`, `aria-invalid`, `aria-describedby`
- Додано **honeypot-поле** для запобігання спаму.
- Реалізовано відображення помилок і повідомлення про успіх через `role="status"` і `aria-live="polite"`.
- Підтримується валідація з боку Shopify.
- Усі тексти виведені через переклади (`| t`).

### 🔹 Секція `product-inquiry-form.liquid`
- Створено форму на базі `{% form 'product', product %}`.
- Передається правильний `variant.id` для додавання в кошик.
- Додано кастомні поля:
  - `properties[Reason]` — текстове поле;
  - `properties[Preferred contact]` — select.
- Реалізовано базову валідацію кількості (`min="1"`) і повідомлення при недоступному варіанті.

---

## 🔧 Технології

- **Shopify Liquid:**  
  `form`, `form.errors`, `default_errors`, `t`, `aria-*`, `for`, `if/else`
- **Accessibility (a11y):**  
  `aria-live`, `aria-invalid`, `aria-describedby`, `role="status"`
- **Honeypot-антиспам:** приховане поле `contact[trap]`
- **Localization:** усі тексти через `| t`, без хардкоду

---

## 📝 Примітки

- Базова логіка відправки форм працює через стандартну Shopify систему.  
- AJAX-відправка не реалізована.

---

## 🔗 Ресурси

- **GitHub (branch: `shopify-forms`)**  
  [https://github.com/krutobok/shopify-tkachenko-oleksandr-test-store/tree/shopify-forms](https://github.com/krutobok/shopify-tkachenko-oleksandr-test-store/tree/forms)

- **Стор Shopify:**  
  [https://tkachenko-oleksandr-test-store.myshopify.com/?preview_theme_id=183432380725](https://tkachenko-oleksandr-test-store.myshopify.com/?preview_theme_id=183432380725)  
  🔑 Пароль: `nowvol`

