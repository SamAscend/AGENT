// ========== NAVBAR SCROLL ==========
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// ========== BILINGUAL SYSTEM ==========
const translations = {
  id: {
    // Navbar
    nav_home: 'Beranda',
    nav_rencana: 'Masalah',
    nav_solusi: 'Cara Kerja',
    nav_challenge: 'Keuntungan',
    nav_income: 'Bukti Income',
    nav_kontak: 'Gabung Sekarang',
    
    // Back to home button
    back_home: 'Kembali ke Beranda',
    
    // Hero Baru (index.html)
    hero_pain_tag: 'Mungkin ini yang kamu rasakan sekarang?',
    hero_line1: 'Penghasilan habis buat kebutuhan?',
    hero_line2: 'Susah nabung?',
    hero_line3: 'Takut nggak punya tabungan hari tua?',
    hero_desc: 'Kalau jawabannya iya, kamu berada di tempat yang tepat. Kami mengajak kamu jadi partner bisnis, bukan sekadar agen.',
    pain_title: 'Kondisi Sekarang',
    hope_title: 'Bersama Kami',
    pain1: 'Gaji habis sebelum akhir bulan',
    pain2: 'Nggak punya aset yang menghasilkan',
    pain3: 'Khawatir masa depan & biaya kesehatan',
    pain4: 'Capek kerja keras tapi finansial stagnan',
    hope1: 'Ada penghasilan tambahan setiap bulan',
    hope2: 'Bisa nabung rutin & punya proteksi',
    hope3: 'Tenang karena ada passive income',
    hope4: 'Dibimbing jadi pemimpin tim, bukan kerja sendiri',
    hero_btn1: 'Kenali Masalahnya →',
    hero_btn2: 'Konsultasi Gratis →',
    
    // Trust Bar
    trust1: 'Sudah Banyak Partner Bergabung',
    trust2: 'Sistem Jelas & Transparan',
    trust3: 'Bimbingan Langsung dari Leader',
    trust4: 'Resmi & Terdaftar OJK',
    
    // CTA
    cta_title: 'Siap Ubah <em>Masalah Jadi Peluang?</em>',
    cta_desc: 'Kami cari partner yang mau bertumbuh bareng. Bukan sekadar jualan, tapi membangun sistem income masa depan.',
    cta_btn: 'Mulai Dari Sini →',
    
    // Rencana Page (Masalah)
    rencana_title: 'Ini Masalahnya',
    rencana_sub: 'Apakah kamu mengalami <em>salah satu</em> dari ini?',
    problem1_title: 'Penghasilan cuma cukup-cukup aja',
    problem1_desc: 'Setiap bulan gaji masuk, langsung habis buat cicilan, makan, transport. Nggak ada sisa buat nabung atau investasi.',
    problem2_title: 'Kalah sama inflasi',
    problem2_desc: 'Harga kebutuhan naik terus, tapi penghasilan tetap. Uang yang disimpan jadi nggak berasa nilainya.',
    problem3_title: 'Takut nggak punya tabungan hari tua',
    problem3_desc: 'Mikir pensiun atau kalau sakit, tabungan nggak cukup. Apalagi kalau cuma andalin gaji doang.',
    problem4_title: 'Capek kerja keras tapi finansial stagnan',
    problem4_desc: 'Lembur terus, kerja banting tulang, tapi di rekening nggak kelihatan perubahan berarti.',
    warning_text: 'FAKTA:',
    warning_desc: 'Kebanyakan orang cuma mengandalkan satu sumber penghasilan. Kalau sumber itu berhenti (resign, sakit, pensiun), langsung krisis finansial.',
    solution_teaser: 'Kalau kamu merasa 2 dari 4 masalah di atas...',
    solution_teaser_desc: 'Berarti kamu punya masalah yang SAMA dengan partner kami yang sekarang. Dan mereka sudah menemukan jalan keluarnya.',
    lihat_solusi: 'Lihat Solusinya →',
    
    // Solusi Page (Cara Kerja)
    solusi_title: 'Solusi Sederhana',
    solusi_title2: 'Menuju Penghasilan Tambahan',
    step1_title: 'Daftar & Ikut Program',
    step1_desc: 'Modal awal kecil, fleksibel. Kamu bisa mulai sambil tetap kerja atau bisnis yang sudah ada. Kami bimbing dari nol.',
    step2_title: 'Bangun Tim Kecil',
    step2_desc: 'Ajak 5 orang yang punya masalah finansial sama seperti kamu. Nggak perlu jualan, cukup ajak mereka bergabung.',
    step3_title: 'Dapatkan Passive Income',
    step3_desc: 'Setiap tim berkembang, kamu dapat income berulang (overriding). Nggak perlu kerja keras terus, sistem yang bekerja.',
    sistem_title: 'Kok bisa?',
    sistem_desc: 'Kami pakai sistem overriding dari Allianz. Semakin besar tim yang kamu bangun, semakin besar juga penghasilan bulanan kamu. Sederhananya: kamu dibayar atas pertumbuhan tim, bukan cuma hasil jualan pribadi.',
    next_btn: 'Lihat Keuntungannya →',
    
    // Challenge Page (Keuntungan)
    challenge_title: 'Yang Kamu Dapatkan',
    benefit_main: 'Bukan cuma <em>income tambahan</em>',
    benefit1_title: 'Hadiah Langsung',
    benefit1_desc: 'Jadi pemimpin tim dalam 3 bulan → iPad + Cash 10 Juta. Dalam 6 bulan → iPad + Cash 5 Juta.',
    benefit2_title: 'Komisi Tambahan hingga 40%',
    benefit2_desc: 'Golden Path: makin besar pencapaian tim, makin besar persentase komisi kamu.',
    benefit3_title: 'Reward Trip Luar Negeri',
    benefit3_desc: 'Champion Unit → trip ke Melbourne. Plus bonus jutaan rupiah dari challenge berkala.',
    benefit4_title: 'Bonus Mingguan',
    benefit4_desc: 'LLS Weekly Challenge: submit minimal 18 Juta ALP atau rekrut anggota baru → Voucher 100rb.',
    asn_title: 'ASN Early Sprint 2026',
    asn_desc: 'Capai 200 Juta ALP di periode 1 Jan - 28 Feb 2026 → Reward Rp 10.000.000 langsung!',
    lihat_income: 'Lihat Bukti Income Nyata →',
    
    // Income Page
    income_title: 'Bukan Janji, Tapi Sistem',
    income_main: 'Inilah <em>yang bisa kamu capai</em>',
    income_note: '*Ilustrasi berdasarkan sistem overriding berlapis. Hasil bisa berbeda tergantung perkembangan tim.',
    testimoni1: '"Dulu saya cuma karyawan toko. Setahun gabung, sekarang punya income tambahan 15-20 juta per bulan. Bisa bantu biaya kuliah adik."',
    testi1_name: 'Rizki, BP dari Jakarta',
    testimoni2: '"Awalnya ragu karena nggak paham bisnis. Tapi sistemnya sederhana, tim support. Sekarang tim saya 20+ orang, income rutin tiap bulan."',
    testi2_name: 'Siti, BP dari Surabaya',
    champion_title: 'ASN Champion Club Plus 2026',
    champion_desc: 'Personal Production 400-500 Juta ALP atau Unit Production 1-1.25 Miliar ALP → reward spesial + pengakuan nasional.',
    gabung_sekarang: 'Gabung Sekarang →',
    
    // Kontak Page
    kontak_title: 'Siap Jadi <em>Partner Kami?</em>',
    kontak_sub: 'Konsultasi Gratis',
    kontak_desc: 'Nggak perlu modal besar',
    kontak_desc2: 'Cukup niat berubah dan mau belajar. Kami bimbing sampai kamu bisa.',
    whatsapp_title: 'Hubungi Langsung',
    whatsapp_hours: 'Senin - Minggu | 08.00 - 21.00',
    whatsapp_btn: 'Chat Sekarang',
    cta_final: 'BE → BP → 270 Juta/bulan'
  },
  en: {
    // Navbar
    nav_home: 'Home',
    nav_rencana: 'Problem',
    nav_solusi: 'How It Works',
    nav_challenge: 'Benefits',
    nav_income: 'Proof',
    nav_kontak: 'Join Now',
    
    // Back to home button
    back_home: 'Back to Home',
    
    // Hero Baru
    hero_pain_tag: 'Is this what you\'re feeling right now?',
    hero_line1: 'Income always runs out for needs?',
    hero_line2: 'Hard to save money?',
    hero_line3: 'Afraid of having no savings for old age?',
    hero_desc: 'If yes, you\'re in the right place. We invite you to become a business partner, not just an agent.',
    pain_title: 'Current Situation',
    hope_title: 'With Us',
    pain1: 'Salary runs out before month end',
    pain2: 'No income-generating assets',
    pain3: 'Worried about future & healthcare costs',
    pain4: 'Tired of working hard but finances stagnant',
    hope1: 'Extra income every month',
    hope2: 'Can save regularly & have protection',
    hope3: 'Peace of mind with passive income',
    hope4: 'Guided to become a team leader, not working alone',
    hero_btn1: 'Understand the Problem →',
    hero_btn2: 'Free Consultation →',
    
    // Trust Bar
    trust1: 'Many Partners Have Joined',
    trust2: 'Clear & Transparent System',
    trust3: 'Direct Guidance from Leader',
    trust4: 'Official & OJK Registered',
    
    // CTA
    cta_title: 'Ready to Turn <em>Problems into Opportunities?</em>',
    cta_desc: 'We\'re looking for partners who want to grow together. Not just selling, but building a future income system.',
    cta_btn: 'Start Here →',
    
    // Rencana Page
    rencana_title: 'The Problem',
    rencana_sub: 'Are you experiencing <em>any of these</em>?',
    problem1_title: 'Income just barely enough',
    problem1_desc: 'Every month, salary comes in, immediately spent on bills, food, transportation. Nothing left for savings or investment.',
    problem2_title: 'Losing to inflation',
    problem2_desc: 'Living costs keep rising, but income stays the same. The money you save loses its value.',
    problem3_title: 'Afraid of no retirement savings',
    problem3_desc: 'Thinking about retirement or illness, savings aren\'t enough. Especially if you only rely on a salary.',
    problem4_title: 'Tired of hard work but finances stagnant',
    problem4_desc: 'Working overtime, working hard, but no significant change in your bank account.',
    warning_text: 'FACT:',
    warning_desc: 'Most people only rely on one source of income. If that source stops (resignation, illness, retirement), immediate financial crisis.',
    solution_teaser: 'If you feel 2 of the 4 problems above...',
    solution_teaser_desc: 'Then you have the SAME problem as our current partners. And they\'ve already found the solution.',
    lihat_solusi: 'See the Solution →',
    
    // Solusi Page
    solusi_title: 'Simple Solution',
    solusi_title2: 'to Extra Income',
    step1_title: 'Register & Join the Program',
    step1_desc: 'Small initial capital, flexible. You can start while still working or running your existing business. We guide you from zero.',
    step2_title: 'Build a Small Team',
    step2_desc: 'Invite 5 people who have the same financial problems as you. No need to sell, just invite them to join.',
    step3_title: 'Get Passive Income',
    step3_desc: 'Every time your team grows, you get recurring income (overriding). No need to keep working hard, the system works for you.',
    sistem_title: 'How is that possible?',
    sistem_desc: 'We use Allianz\'s overriding system. The bigger the team you build, the bigger your monthly income. Simply put: you get paid for team growth, not just personal sales.',
    next_btn: 'See the Benefits →',
    
    // Challenge Page
    challenge_title: 'What You Get',
    benefit_main: 'More than just <em>extra income</em>',
    benefit1_title: 'Direct Rewards',
    benefit1_desc: 'Become a team leader in 3 months → iPad + 10M Cash. In 6 months → iPad + 5M Cash.',
    benefit2_title: 'Extra Commission up to 40%',
    benefit2_desc: 'Golden Path: the bigger your team\'s achievement, the bigger your commission percentage.',
    benefit3_title: 'Overseas Trip Reward',
    benefit3_desc: 'Champion Unit → trip to Melbourne. Plus millions in bonuses from periodic challenges.',
    benefit4_title: 'Weekly Bonuses',
    benefit4_desc: 'LLS Weekly Challenge: submit min 18 Million ALP or recruit new members → 100k Voucher.',
    asn_title: 'ASN Early Sprint 2026',
    asn_desc: 'Achieve 200 Million ALP from Jan 1 - Feb 28, 2026 → Rp 10,000,000 direct reward!',
    lihat_income: 'See Real Income Proof →',
    
    // Income Page
    income_title: 'Not Just Promises, But a System',
    income_main: 'This is <em>what you can achieve</em>',
    income_note: '*Illustration based on layered overriding system. Results may vary depending on team development.',
    testimoni1: '"I used to be just a shop employee. One year after joining, I now have an extra 15-20 million per month. Can help pay for my sibling\'s college."',
    testi1_name: 'Rizki, BP from Jakarta',
    testimoni2: '"At first I was hesitant because I didn\'t understand business. But the system is simple, the team supports. Now my team has 20+ people, regular income every month."',
    testi2_name: 'Siti, BP from Surabaya',
    champion_title: 'ASN Champion Club Plus 2026',
    champion_desc: 'Personal Production 400-500 Million ALP or Unit Production 1-1.25 Billion ALP → special rewards + national recognition.',
    gabung_sekarang: 'Join Now →',
    
    // Kontak Page
    kontak_title: 'Ready to Become <em>Our Partner?</em>',
    kontak_sub: 'Free Consultation',
    kontak_desc: 'No big capital needed',
    kontak_desc2: 'Just the willingness to change and learn. We\'ll guide you until you succeed.',
    whatsapp_title: 'Contact Directly',
    whatsapp_hours: 'Monday - Sunday | 08.00 - 21.00',
    whatsapp_btn: 'Chat Now',
    cta_final: 'BE → BP → 270 Million/month'
  }
};

let currentLang = localStorage.getItem('language') || 'id';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);
  
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[lang] && translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        // Handle HTML content (for elements that contain HTML like em tags)
        if (key === 'cta_title' || key === 'rencana_sub' || key === 'benefit_main' || key === 'income_main' || key === 'kontak_title' || key === 'solusi_title2') {
          el.innerHTML = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    }
  });
  
  // Update active class on buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Initialize language switcher
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    setLanguage(btn.getAttribute('data-lang'));
  });
});

// Set initial language
setLanguage(currentLang);

// ========== SCROLL REVEAL ==========
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(r => observer.observe(r));