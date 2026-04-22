// ========== NAVBAR SCROLL ==========
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// ========== SLIDER FUNCTION ==========
let currentSlide = 0;
const track = document.getElementById('sliderTrack');
const slides = document.querySelectorAll('.slider-slide');
const dotsContainer = document.getElementById('sliderDots');
let slideCount = slides.length;

if (track && slides.length > 0) {
  // Create dots
  for (let i = 0; i < slideCount; i++) {
    const dot = document.createElement('div');
    dot.classList.add('slider-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }

  function updateDots() {
    document.querySelectorAll('.slider-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  function goToSlide(index) {
    if (index < 0) index = 0;
    if (index >= slideCount) index = slideCount - 1;
    currentSlide = index;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
  }

  function nextSlide() {
    if (currentSlide < slideCount - 1) {
      currentSlide++;
    } else {
      currentSlide = 0;
    }
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
  }

  function prevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
    } else {
      currentSlide = slideCount - 1;
    }
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
  }

  document.getElementById('sliderNext')?.addEventListener('click', nextSlide);
  document.getElementById('sliderPrev')?.addEventListener('click', prevSlide);

  // Auto slide every 5 seconds
  setInterval(() => {
    nextSlide();
  }, 5000);
}

// ========== BILINGUAL SYSTEM (SEDERHANA) ==========
const translations = {
  id: {
    nav_home: 'Beranda',
    nav_rencana: 'Masalah',
    nav_solusi: 'Cara Kerja',
    nav_challenge: 'Keuntungan',
    nav_income: 'Bukti Income',
    nav_kontak: 'Gabung',
    back_home: 'Kembali ke Beranda',
    hero_badge: '#BangunBisnisIncome',
    hero_line1: 'Penghasilan habis',
    hero_line2: 'buat kebutuhan?',
    hero_desc: 'Jangan biarkan gaji habis tanpa sisa. Bangun sistem income berulang dan raih kebebasan finansial.',
    stat_max: 'Potensi Maksimal/bln',
    stat_reward: 'Reward Langsung',
    hero_btn1: 'Mulai Perjalanan →',
    trust1: 'Overriding Generasi',
    trust2: 'Passive Income',
    trust3: 'Challenge 2026',
    trust4: 'Bonus + Reward',
    trust5: 'OJK Certified',
    cta_title: 'Siap Ubah <em>Masalah Jadi Peluang?</em>',
    cta_desc: 'Bergabunglah bersama partner yang sudah merasakan manfaat sistem income berulang.',
    cta_btn: 'Kenali Masalahnya →',
    rencana_title: 'Realita Hari Ini',
    rencana_sub: 'Apakah kamu mengalami',
    problem1_title: 'Penghasilan cuma cukup-cukup aja',
    problem1_desc: 'Setiap bulan gaji masuk, langsung habis buat cicilan, makan, transport. Nggak ada sisa buat nabung.',
    problem2_title: 'Kalah sama inflasi',
    problem2_desc: 'Harga kebutuhan naik terus, tapi penghasilan tetap. Uang yang disimpan jadi nggak berasa nilainya.',
    problem3_title: 'Takut nggak punya tabungan hari tua',
    problem3_desc: 'Mikir pensiun atau kalau sakit, tabungan nggak cukup. Apalagi kalau cuma andalin gaji doang.',
    problem4_title: 'Capek kerja keras tapi finansial stagnan',
    problem4_desc: 'Lembur terus, kerja banting tulang, tapi di rekening nggak kelihatan perubahan berarti.',
    warning_text: 'FAKTA:',
    warning_desc: 'Kebanyakan orang cuma mengandalkan satu sumber penghasilan. Kalau sumber itu berhenti, langsung krisis finansial.',
    solution_teaser: 'Kalau kamu merasa 2 dari 4 masalah di atas...',
    solution_teaser_desc: 'Berarti kamu punya masalah yang SAMA dengan partner kami yang sekarang.',
    lihat_solusi: 'Lihat Solusinya →',
    solusi_title: 'Solusi Sederhana',
    solusi_title2: 'Menuju Penghasilan Tambahan',
    step1_title: 'Daftar & Ikut Program',
    step1_desc: 'Modal awal kecil, fleksibel. Kamu bisa mulai sambil tetap kerja. Kami bimbing dari nol.',
    step2_title: 'Bangun Tim Kecil',
    step2_desc: 'Ajak 5 orang yang punya masalah finansial sama seperti kamu. Nggak perlu jualan.',
    step3_title: 'Dapatkan Passive Income',
    step3_desc: 'Setiap tim berkembang, kamu dapat income berulang. Sistem yang bekerja untuk kamu.',
    sistem_title: 'Kok bisa?',
    sistem_desc: 'Kami pakai sistem overriding dari Allianz. Semakin besar tim, semakin besar penghasilan kamu.',
    next_btn: 'Lihat Keuntungannya →',
    challenge_title: 'Yang Kamu Dapatkan',
    benefit_main: 'Bukan cuma <em>income tambahan</em>',
    benefit1_title: 'Hadiah Langsung',
    benefit1_desc: 'Jadi pemimpin tim dalam 3 bulan → iPad + Cash 10 Juta.',
    benefit2_title: 'Komisi Tambahan hingga 40%',
    benefit2_desc: 'Golden Path: makin besar pencapaian tim, makin besar komisi.',
    benefit3_title: 'Reward Trip Luar Negeri',
    benefit3_desc: 'Champion Unit → trip ke Melbourne + bonus jutaan rupiah.',
    benefit4_title: 'Bonus Mingguan',
    benefit4_desc: 'LLS Weekly Challenge: submit 18 Juta ALP atau rekrut anggota baru → Voucher 100rb.',
    asn_title: 'ASN Early Sprint 2026',
    asn_desc: 'Capai 200 Juta ALP di periode 1 Jan - 28 Feb 2026 → Reward Rp 10.000.000!',
    lihat_income: 'Lihat Bukti Income Nyata →',
    income_title: 'Bukan Janji, Tapi Sistem',
    income_main: 'Inilah <em>yang bisa kamu capai</em>',
    testimoni1: '"Dulu saya cuma karyawan toko. Setahun gabung, sekarang punya income tambahan 15-20 juta per bulan."',
    testi1_name: 'Rizki, BP dari Jakarta',
    testimoni2: '"Awalnya ragu. Tapi sistemnya sederhana, tim support. Sekarang tim saya 20+ orang."',
    testi2_name: 'Siti, BP dari Surabaya',
    champion_title: 'ASN Champion Club Plus 2026',
    champion_desc: 'Personal Production 400-500 Juta ALP atau Unit Production 1-1.25 Miliar ALP → reward spesial!',
    gabung_sekarang: 'Gabung Sekarang →',
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
    nav_home: 'Home',
    nav_rencana: 'Problem',
    nav_solusi: 'How It Works',
    nav_challenge: 'Benefits',
    nav_income: 'Proof',
    nav_kontak: 'Join',
    back_home: 'Back to Home',
    hero_badge: '#BuildIncomeBusiness',
    hero_line1: 'Income runs out',
    hero_line2: 'for needs?',
    hero_desc: 'Don\'t let your salary disappear. Build recurring income and achieve financial freedom.',
    stat_max: 'Max Potential/month',
    stat_reward: 'Direct Reward',
    hero_btn1: 'Start Journey →',
    trust1: 'Generation Overriding',
    trust2: 'Passive Income',
    trust3: 'Challenge 2026',
    trust4: 'Bonus + Reward',
    trust5: 'OJK Certified',
    cta_title: 'Ready to Turn <em>Problems into Opportunities?</em>',
    cta_desc: 'Join partners who have experienced recurring income benefits.',
    cta_btn: 'Know the Problem →',
    rencana_title: 'Today\'s Reality',
    rencana_sub: 'Are you experiencing',
    problem1_title: 'Income just barely enough',
    problem1_desc: 'Salary comes in, immediately spent on bills, food, transport.',
    problem2_title: 'Losing to inflation',
    problem2_desc: 'Living costs keep rising, but income stays the same.',
    problem3_title: 'Afraid of no retirement savings',
    problem3_desc: 'Thinking about retirement or illness, savings aren\'t enough.',
    problem4_title: 'Tired of hard work but finances stagnant',
    problem4_desc: 'Working overtime, but no significant change.',
    warning_text: 'FACT:',
    warning_desc: 'Most people only rely on one source of income. If that stops, immediate crisis.',
    solution_teaser: 'If you feel 2 of the 4 problems above...',
    solution_teaser_desc: 'You have the SAME problem as our current partners.',
    lihat_solusi: 'See the Solution →',
    solusi_title: 'Simple Solution',
    solusi_title2: 'to Extra Income',
    step1_title: 'Register & Join',
    step1_desc: 'Small capital, flexible. Start while still working. We guide you.',
    step2_title: 'Build a Small Team',
    step2_desc: 'Invite 5 people with the same financial problems.',
    step3_title: 'Get Passive Income',
    step3_desc: 'Every time your team grows, you get recurring income.',
    sistem_title: 'How is that possible?',
    sistem_desc: 'We use Allianz\'s overriding system. Bigger team = bigger income.',
    next_btn: 'See the Benefits →',
    challenge_title: 'What You Get',
    benefit_main: 'More than just <em>extra income</em>',
    benefit1_title: 'Direct Rewards',
    benefit1_desc: 'Team leader in 3 months → iPad + 10M Cash.',
    benefit2_title: 'Extra Commission up to 40%',
    benefit2_desc: 'Golden Path: bigger achievement = bigger commission.',
    benefit3_title: 'Overseas Trip Reward',
    benefit3_desc: 'Champion Unit → trip to Melbourne + bonuses.',
    benefit4_title: 'Weekly Bonuses',
    benefit4_desc: 'LLS Weekly Challenge: submit 18M ALP or recruit → 100k Voucher.',
    asn_title: 'ASN Early Sprint 2026',
    asn_desc: 'Achieve 200M ALP (Jan 1 - Feb 28, 2026) → Rp 10,000,000 reward!',
    lihat_income: 'See Real Income Proof →',
    income_title: 'Not Just Promises, But a System',
    income_main: 'This is <em>what you can achieve</em>',
    testimoni1: '"I used to be a shop employee. One year later, I have an extra 15-20 million per month."',
    testi1_name: 'Rizki, BP from Jakarta',
    testimoni2: '"At first I was hesitant. But the system is simple, the team supports. Now my team has 20+ people."',
    testi2_name: 'Siti, BP from Surabaya',
    champion_title: 'ASN Champion Club Plus 2026',
    champion_desc: 'Personal Production 400-500M ALP or Unit Production 1-1.25B ALP → special rewards!',
    gabung_sekarang: 'Join Now →',
    kontak_title: 'Ready to Become <em>Our Partner?</em>',
    kontak_sub: 'Free Consultation',
    kontak_desc: 'No big capital needed',
    kontak_desc2: 'Just the willingness to change and learn. We\'ll guide you.',
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
      if (key === 'cta_title' || key === 'rencana_sub' || key === 'benefit_main' || key === 'income_main' || key === 'kontak_title' || key === 'solusi_title2') {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
  
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    setLanguage(btn.getAttribute('data-lang'));
  });
});

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

// ========== BACK TO TOP ==========
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.style.opacity = '1';
      backToTop.style.visibility = 'visible';
    } else {
      backToTop.style.opacity = '0';
      backToTop.style.visibility = 'hidden';
    }
  });
  
  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

console.log('✅ SYNERGY website loaded successfully!');