# STE Digital Hub – Smart Shop Management System

একটি single-file (HTML) দোকান ম্যানেজমেন্ট অ্যাপ, যেখানে ডেটা ব্রাউজারে থাকে এবং ঐচ্ছিকভাবে Google Sheets-এ ব্যাকআপ/সিঙ্ক করা যায়।

## ফাইল স্ট্রাকচার

```
├── index.html            # পুরো অ্যাপ
├── apps-script/Code.gs   # Google Sheets সিঙ্কের Apps Script
├── .nojekyll
└── README.md
```

## GitHub Pages-এ চালু করার নিয়ম

1. Repository → **Settings → Pages**
2. **Source:** Deploy from a branch → **Branch:** `main` / `(root)` → Save
3. কয়েক মিনিট পর লিংক পাবেন: `https://<username>.github.io/<repo-name>/`

## Google Sheets সিঙ্ক সেটআপ

1. নতুন Google Sheet খুলুন → **Extensions → Apps Script**
2. `apps-script/Code.gs`-এর পুরো কোড পেস্ট করুন
3. উপরের `SECRET` লাইনে নিজের গোপন কোড দিন (`change-me-123` বদলান)
4. **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
5. পাওয়া **Web App URL** কপি করুন
6. অ্যাপের **সেটিংস** পেজে URL ও একই SECRET বসান

## নিরাপত্তা

- Web App URL ও SECRET শুধু আপনার ব্রাউজারের localStorage-এ থাকে, কোডে নেই।
- **কখনো আসল SECRET GitHub-এ commit করবেন না** (`Code.gs`-এ placeholder-ই রাখুন)।
- ব্রাউজারের ডেটা মুছলে ডেটা হারাতে পারে, তাই নিয়মিত Sheets-এ সিঙ্ক রাখুন।
