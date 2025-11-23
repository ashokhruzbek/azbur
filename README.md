# AZBUR - Alyuminiy Profillar va Xizmatlar

Zamonaviy alyuminiy konstruksiyalar va professional o'rnatish xizmatlari uchun veb-sayt. Loyiha React, TypeScript va Vite yordamida qurilgan.

## Texnologiyalar

- **React 19** - UI komponentlar
- **TypeScript** - tip xavfsizligi
- **Vite** - tez build tool
- **Tailwind CSS** - styling
- **Framer Motion** - animatsiyalar
- **Lucide React** - ikonkalar

## O'rnatish va Ishga Tushirish

### Talablar

- Node.js 18+
- npm yoki yarn

### Lokaldа Ishlatish

1. Repositoriyani klonlash:
```bash
git clone https://github.com/ashokhruzbek/azbur.git
cd azbur
```

2. Bog'liqliklarni o'rnatish:
```bash
npm install
```

3. Environment o'zgaruvchilarni sozlash:

`.env` faylini yarating va quyidagilarni kiriting:
```env
VITE_TELEGRAM_BOT_TOKEN=your_bot_token
VITE_TELEGRAM_CHAT_ID=your_chat_id
```

4. Ishga tushirish:
```bash
npm run dev
```

Sayt `http://localhost:5173` da ochiladi.

### Production Build

```bash
npm run build
```

Build natijasi `dist` papkasida bo'ladi.

### Preview

```bash
npm run preview
```

## Loyiha Strukturasi

```
azbur/
├── components/          # React komponentlar
│   ├── ui/             # UI primitivlar
│   ├── Hero.tsx        # Bosh sahifa
│   ├── About.tsx       # Biz haqimizda
│   ├── Services.tsx    # Xizmatlar
│   ├── Products.tsx    # Mahsulotlar
│   ├── Gallery.tsx     # Galereya
│   ├── Contact.tsx     # Aloqa
│   └── Footer.tsx      # Footer
├── constants.ts        # Statik ma'lumotlar
├── translations.ts     # Tarjimalar
├── types.ts            # TypeScript turlar
└── App.tsx             # Asosiy komponent
```

## Xususiyatlar

- 📱 Responsive dizayn
- 🌐 Ko'p tillilik (O'zbek, Rus)
- 🎨 Zamonaviy UI/UX
- ⚡ Tez yuklanish
- 📬 Telegram bot integratsiyasi
- 🖼️ Galereya va portfolio
- 📞 Aloqa formasi

## Aloqa

Savollar yoki takliflar uchun:
- 📞 Telefon: +998 94 234 0 234
- 🌐 Veb-sayt: [azbur.uz](https://azbur.uz)
- 📍 Manzil: Hazorasp, Xorazm

## Litsenziya

Bu loyiha shaxsiy foydalanish uchun mo'ljallangan.
