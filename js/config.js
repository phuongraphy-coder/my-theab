/* ═══ ការកំណត់ទាំងអស់ (Config) នៅទីនេះ ═══ */
/* ១) តំណ Relay (សារជូនពរ + រាប់អ្នកចូលមើល) · ២) តម្លៃលក់ · ៣) Login · ៤) លេខកូដបើកសិទ្ធិ */

/* relay = តំណ Google Apps Script Web App (Code.gs) ដែលរក្សាទុកសារជូនពរក្នុង Google Sheet ហើយបញ្ជូនមកបញ្ជីភ្ញៀវដោយស្វ័យប្រវត្តិ។ */
window.TGCFG={relay:"https://script.google.com/macros/s/AKfycbySOGrVQ1WBjrXOgFADaMxESyb_Q2sduSj_5PDrMvIK8VA2OHRUONKcnKJvcaw9xDImoQ/exec"};

/* ដាក់តម្លៃលក់នៅទីនេះ (ទុកទទេ = មិនបង្ហាញ) ឧ. {t1:"$25",t2:"$12"} */
window.MT_PRICE={t1:"",t2:"",t3:""};

/* កំណត់ប្រព័ន្ធ Login៖ ដាក់តំណ Web App (Apps Script ថ្មី Code.gs) ក្នុង api។ បើទុកទទេ = មិនបិទ editor ទេ។
   gClient = Google OAuth Client ID, tgBot = លេខ ID របស់ Telegram Bot (ទុកទទេ បើមិនប្រើ)។
   សាកល្បងរូបរាងដោយគ្មាន backend៖ បន្ថែម #login ឬ #register ក្រោយតំណ */
window.AUTHCFG={api:"https://script.google.com/macros/s/AKfycbxbmFlDWqQNzJLoJUc6ASjLcWo3mWrr49tUA5aMugjE85LQ3oEZAA0qWppXY_EZ90-a/exec",gClient:"",tgBot:"",
  buyTg:"mytheab",            /* Telegram username របស់អ្នកលក់ (គ្មាន @) ឧ. "mytheab" — សម្រាប់ប៊ូតុងទិញ */
  buyNote:"",          /* ការណែនាំទូទាត់ ឧ. "ABA 000 123 456 · ឈ្មោះ ..." (បង្ហាញក្នុងប្រអប់ទិញ) */
  packs:[10,20,50,100] /* ជម្រើសកន្លែងភ្ញៀវបន្ថែម */};

/* ប្រព័ន្ធលេខកូដបើកសិទ្ធិ (គ្មាន login)៖ Royal និង Premium ត្រូវមានលេខកូដទើបបើកប្រើបាន, Standard ឥតគិតថ្លៃ ១០ នាក់។
   secret ត្រូវដូចគ្នាទៅនឹងក្នុង code-generator.html។ buyTg = Telegram username អ្នកលក់ (គ្មាន @) ឧ. "mytheab"។
   buyNote = ការណែនាំទូទាត់ ឧ. "ABA 000 123 456 · ឈ្មោះ ..."។ price = តម្លៃបង្ហាញ ឧ. "$15"។ packs = ជម្រើសកន្លែងភ្ញៀវបន្ថែម */
window.MTLIC_CFG={secret:"mt-35208f4d5f97711a249f7270",buyTg:"mytheab",buyNote:"",price:{t1:"",t3:"",guests:""},packs:[10,20,50,100]};
