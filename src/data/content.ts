export const experience = [
  {
    when: "2026 — hozirda · 4 oy",
    org: "IntelligentSolutions",
    role: "Fullstack Developer",
    points: [
      "14ta bank bilan integratsiya: Agrobank, Octobank, Ipak Yo'li Bank, Anor Bank, MyBank, Apeks Bank, Ipoteka Bank va boshqalar",
      "Backend logikani Java va Spring Boot'da quraman, Oracle SQL bilan ma'lumotlar tuzilmasini loyihalashtiraman",
      "Postman'da testlayman, IntelliJ IDEA'da ishlab chiqaman",
      "React frontend va Spring Boot backendni bog'lagan holda to'liq fullstack oqimda ishlayman",
    ],
  },
  {
    when: "hozirda",
    org: "Mars IT School",
    role: "Tutor / Yordamchi ustoz",
    points: [
      "Frontend bo'yicha talabalarga amaliy mashg'ulotlarda yordam beraman — HTML, CSS, JavaScript, React",
      "Kodlarni tekshirib, xatolarni aniqlash va mustaqil ishlashga yo'naltiraman",
    ],
  },
  {
    when: "5 oy",
    org: "Mars IT School",
    role: "Stajor",
    points: ["Frontend amaliy topshiriqlarda talabalarga yordam berdim, kodni tushuntirdim va xatolarni tuzatdim"],
  },
  {
    when: "2 oy",
    org: "Mars IT School",
    role: "IT Support",
    points: ["Saytdagi texnik xatolarni tuzatdim, davomat va coin tizimi bilan ishladim"],
  },
];

export const skills = {
  frontend: ["HTML5", "CSS3", "SASS", "Tailwind CSS", "JavaScript ES6+", "React", "React Router", "TypeScript", "Figma → kod"],
  backend: ["Java", "Spring Boot", "Oracle SQL", "Postman", "IntelliJ IDEA", "Git / GitHub", "REST API"],
};

export type Project = {
  kicker: string;
  title: string;
  desc: string;
  tags: string[];
  link: string;
  linkLabel: string;
};

export const backendProjects: Project[] = [
  {
    kicker: "BANKING API",
    title: "Client Account API",
    desc: "Bank mijozlari hisoblari uchun CRUD API. Oracle bazasi bilan integratsiya, Postman orqali testlangan.",
    tags: ["Java", "Spring Boot", "Oracle", "Gradle"],
    link: "https://github.com/azimjonxatamov40/client-account-api-integrasiya",
    linkLabel: "GitHub",
  },
  {
    kicker: "OPEN BANKING",
    title: "Open Banking Client API",
    desc: "Open Banking standartiga mos REST API. Controller–Service–Model arxitektura, JUnit testlari bilan.",
    tags: ["Java", "Spring Boot", "JUnit"],
    link: "https://github.com/azimjonxatamov40/open-banking-client-api",
    linkLabel: "GitHub",
  },
  {
    kicker: "DATABASE",
    title: "Spring Boot + JDBC + Oracle",
    desc: "JdbcTemplate orqali Oracle bazasi bilan to'g'ridan-to'g'ri ishlash amaliyoti.",
    tags: ["Java", "JdbcTemplate", "Oracle"],
    link: "https://github.com/azimjonxatamov40/spring-boot-jdbctemplate-oracle-",
    linkLabel: "GitHub",
  },
  {
    kicker: "INTEGRATION",
    title: "GRKI integratsiyasi",
    desc: "AIS GRKI (kredit ma'lumotlari reestri) veb-xizmatlari bilan Spring Boot integratsiyasi.",
    tags: ["Java", "Spring Boot"],
    link: "https://github.com/azimjonxatamov40/grki-project",
    linkLabel: "GitHub",
  },
];

export const frontendProjects: Project[] = [
  {
    kicker: "ADMIN PANEL",
    title: "E-commerce Admin Panel",
    desc: "Mahsulotlarni qo'shish, ko'rish va boshqarish uchun admin panel interfeysi.",
    tags: ["React", "Tailwind"],
    link: "https://e-commeerce-admin.netlify.app/",
    linkLabel: "Demo",
  },
  {
    kicker: "RESPONSIVE SITE",
    title: "Food Lover Website",
    desc: "Oziq-ovqat mavzusidagi responsive sayt — barcha qurilmalarga moslashtirilgan.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    link: "https://foodloverj.netlify.app/",
    linkLabel: "Demo",
  },
  {
    kicker: "CANVAS API",
    title: "Paint Canvas",
    desc: "JavaScript Canvas API asosida chizish va rang tanlash funksiyalari.",
    tags: ["JavaScript", "Canvas"],
    link: "https://paint-canvas-js.netlify.app/",
    linkLabel: "Demo",
  },
  {
    kicker: "UTILITY",
    title: "QR Code Generator",
    desc: "Telefon raqamlari uchun real vaqtda QR kod generatsiya qiluvchi React ilovasi.",
    tags: ["React"],
    link: "https://qrcodetelefon.netlify.app/",
    linkLabel: "Demo",
  },
];

export const plans = [
  { ico: "MIT", title: "MIT universitetiga kirish", desc: "Shu yo'nalishda tayyorgarlik ko'rmoqdaman" },
  { ico: "EN", title: "Ingliz tili", desc: "Chuqur va amaliy darajada o'rganish" },
  { ico: "∑", title: "Matematika", desc: "Asosiy fanlar bo'yicha bilimni mustahkamlash" },
  { ico: "GYM", title: "Jismoniy sog'lomlik", desc: "Muntazam trenajyor zaliga borish" },
];

export const contact = {
  tel: "+998 94 440 60 63",
  telHref: "tel:+998944406063",
  email: "xatamova40@gmail.com",
  telegram: "https://t.me/azimjon0717",
  github: "https://github.com/azimjonxatamov40",
};
