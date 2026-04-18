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
    nav_rencana: 'Rencana',
    nav_solusi: 'Solusi',
    nav_challenge: 'Challenge',
    nav_income: 'Income',
    nav_kontak: 'Gabung Sekarang',
    
    // Back to home button
    back_home: 'Kembali ke Beranda',
    
    // Hero
    hero_badge: 'Bangun Bisnis Income Allianz',
    hero_title1: 'CAPAI KEAMANAN',
    hero_title2: 'FINANSIAL ANDA',
    hero_sub: 'Jangan hanya mengandalkan gaji. Bangun sistem income berulang melalui BE → BP Challenge. Raih passive income hingga 270 Juta/bulan.',
    hero_btn1: 'Mulai Sekarang',
    hero_btn2: 'Konsultasi Gratis →',
    
    // Card Stats
    card_title: 'Bisnis Income',
    stat1: '= 270 Juta/bln',
    stat2: '+ iPad + 10 Juta',
    stat3: 'Extra 40% komisi',
    stat4: 'Reward 10 Juta',
    
    // Trust Bar
    trust1: 'Overriding Generasi',
    trust2: 'Passive Income',
    trust3: 'Challenge 2026',
    trust4: 'Bonus + Reward',
    trust5: 'OJK & AAJI Certified',
    
    // CTA
    cta_title: 'Siap Menjadi',
    cta_desc: 'Bergabunglah bersama ribuan agen yang sudah merasakan manfaat income berulang dari sistem overriding generasi.',
    cta_btn: 'Lihat Rencana Bisnis →',
    
    // Rencana Page
    rencana_title: 'Fakta Hidup & Masalah',
    rencana_sub: 'Kerja / Bisnis → Gaji → Kebutuhan Hidup → Nabung (Kalo ada sisa)',
    fakta_card1_title: 'Realita Kebanyakan Orang',
    fakta_card1_desc: 'Penghasilan masuk, langsung habis untuk kebutuhan. Tabungan cuma sisa, bukan prioritas. Akhirnya susah kumpulin aset.',
    fakta_card2_title: 'Yang Terjadi Jika Hanya Andalkan Gaji',
    fakta_card2_item1: 'Susah ngumpulin aset',
    fakta_card2_item2: 'Kalah sama inflasi',
    fakta_card2_item3: 'Kaget pas hari tua tabungan tidak cukup',
    warning_text: 'BIAYA KESEHATAN SEMAKIN MAHAL - INFLASI MEMBUAT NILAI UANG TURUN',
    masalah_title: 'Tukar Waktu dengan Uang = Batas Pendapatan',
    masalah_card1: 'Inflasi + Biaya Hidup ↑',
    masalah_card1_desc: 'Pendapatan tetap, tapi kebutuhan naik terus. Hasilnya: tabungan tergerus.',
    masalah_card2: 'Kaget di Hari Tua',
    masalah_card2_desc: 'Tabungan tidak cukup karena hanya mengandalkan gaji tanpa sistem income berulang.',
    pilihan_title: 'Kamu disuruh pilih.. Kamu Pilih Yang mana ?',
    pilihan_card1: 'Nabung 2 Juta/bulan',
    pilihan_card1_desc: 'Rizki (BE) - Modal sendiri 2jt/bulan × 24 bulan',
    pilihan_card2: 'Ngajak 5 orang',
    pilihan_card2_desc: 'Nabung 2 Juta/Bulan - Modal Rizki tertutup + bonus',
    
    // Solusi Page
    solusi_title: '2 Langkah Membangun Bisnis Income',
    solusi_step1: 'Jadi Business Executive (BE)',
    solusi_step1_desc: 'Mulai dari modal kecil, bangun jaringan sendiri.',
    solusi_step2: 'Naik ke Business Partner (BP)',
    solusi_step2_desc: 'Overriding generasi, passive income dari tim. Penghasilan maksimal hingga 270 Juta/bulan.',
    konsep_title: 'Konsep Rizki BP',
    konsep_desc: 'Rizki = BP (Billion Unit) atau unit maksimal Rp 13,5 juta - 25 juta/bulan selama 24 bulan. Reward: Trip Melbourne (Champion Unit)',
    
    // Challenge Page
    challenge_title: 'BE → BP Challenge',
    be_bp_title: 'BE TO BP CHALLENGE',
    be_bp_item1: 'BE yang capai BP dalam periode 3 bulan sejak join dengan segitiga 100 → iPad + Cash 10 Juta',
    be_bp_item2: 'BE yang capai BP dalam periode 6 bulan dengan segitiga 100 → iPad + Cash 5 Juta',
    lls_title: 'LLS WEEKLY CHALLENGE',
    lls_desc: 'BE & BP melakukan submit min 18 Juta ALP atau rekrut tiap periode Senin - Minggu → Voucher MAP 100 ribu',
    asn_title: 'ASN EARLY SPRINT 2026',
    asn_desc: 'BE & BP capai 200 Juta ALP di periode 1 Jan - 28 Feb 2026 → Reward Rp 10.000.000',
    golden_title: 'GOLDEN PATH (Extra komisi hingga 40%)',
    golden_tier1: 'Tier 1: 150 Juta ALP → +20% komisi',
    golden_tier2: 'Tier 2: 300 Juta ALP → +30% komisi',
    golden_tier3: 'Tier 3: 450 Juta ALP → +40% komisi',
    
    // Income Page
    income_title: 'Penghasilan Rizki (BP) dari Overriding Generasi',
    income_desc: 'Cara Rizki punya 30 BP : Rizki (BP) punya BP Generasi 25 BP + 5 BP pribadi = Total 30 BP. Dst s/d BP ke-8 → sistem overriding berlapis.',
    champion_title: 'ASN CHAMPION CLUB PLUS 2026 & PREMIER CLUB PLUS 2026',
    champion_personal: 'Personal Production: Min 400 Juta ALP (Early bird) → 500 Juta ALP (Regular)',
    champion_unit: 'Unit Production: Min 1 Miliar ALP (Early bird) → 1.25 Miliar ALP (Regular)',
    champion_double: 'Double Premier: hingga 3.6 Miliar ALP dengan BP baru.',
    
    // Kontak Page
    kontak_title: 'CAPAI KEAMANAN FINANSIAL ANDA',
    kontak_sub: 'Konsultasi Gratis',
    kontak_desc: 'Jangan tunggu sampai penghasilan terbatas. Bangun sistem income berulang bersama Allianz.',
    whatsapp_title: 'Hubungi Agent Resmi',
    whatsapp_hours: 'Senin - Minggu | 08.00 - 21.00',
    whatsapp_btn: 'Chat Langsung',
    cta_final: 'BE → BP → 270 Juta/bulan'
  },
  en: {
    // Navbar
    nav_home: 'Home',
    nav_rencana: 'Plan',
    nav_solusi: 'Solution',
    nav_challenge: 'Challenge',
    nav_income: 'Income',
    nav_kontak: 'Join Now',
    
    // Back to home button
    back_home: 'Back to Home',
    
    // Hero
    hero_badge: 'Build Allianz Income Business',
    hero_title1: 'ACHIEVE YOUR',
    hero_title2: 'FINANCIAL SECURITY',
    hero_sub: 'Don\'t just rely on salary. Build a recurring income system through BE → BP Challenge. Earn passive income up to 270 Million/month.',
    hero_btn1: 'Start Now',
    hero_btn2: 'Free Consultation →',
    
    // Card Stats
    card_title: 'Income Business',
    stat1: '= 270M/month',
    stat2: '+ iPad + 10M',
    stat3: 'Extra 40% commission',
    stat4: '10M Reward',
    
    // Trust Bar
    trust1: 'Generation Overriding',
    trust2: 'Passive Income',
    trust3: 'Challenge 2026',
    trust4: 'Bonus + Reward',
    trust5: 'OJK & AAJI Certified',
    
    // CTA
    cta_title: 'Ready to Become a',
    cta_desc: 'Join thousands of agents who have experienced the benefits of recurring income from the generation overriding system.',
    cta_btn: 'View Business Plan →',
    
    // Rencana Page
    rencana_title: 'Life Facts & Problems',
    rencana_sub: 'Work / Business → Salary → Living Needs → Savings (If any left)',
    fakta_card1_title: 'Most People\'s Reality',
    fakta_card1_desc: 'Income comes in, immediately spent on needs. Savings are leftovers, not a priority. Eventually hard to accumulate assets.',
    fakta_card2_title: 'What Happens If You Only Rely on Salary',
    fakta_card2_item1: 'Hard to accumulate assets',
    fakta_card2_item2: 'Lose to inflation',
    fakta_card2_item3: 'Shocked in old age that savings are insufficient',
    warning_text: 'HEALTHCARE COSTS ARE INCREASING - INFLATION REDUCES MONEY VALUE',
    masalah_title: 'Trading Time for Money = Income Limit',
    masalah_card1: 'Inflation + Cost of Living ↑',
    masalah_card1_desc: 'Fixed income, but needs keep rising. Result: savings erode.',
    masalah_card2: 'Shocked in Old Age',
    masalah_card2_desc: 'Savings insufficient because only relying on salary without a recurring income system.',
    pilihan_title: 'If you had to choose.. Which one?',
    pilihan_card1: 'Save 2 Million/month',
    pilihan_card1_desc: 'Rizki (BE) - Own capital 2M/month × 24 months',
    pilihan_card2: 'Invite 5 people',
    pilihan_card2_desc: 'Save 2 Million/month - Rizki\'s capital covered + bonus',
    
    // Solusi Page
    solusi_title: '2 Steps to Build Income Business',
    solusi_step1: 'Become a Business Executive (BE)',
    solusi_step1_desc: 'Start with small capital, build your own network.',
    solusi_step2: 'Move up to Business Partner (BP)',
    solusi_step2_desc: 'Generation overriding, passive income from your team. Maximum income up to 270 Million/month.',
    konsep_title: 'Rizki BP Concept',
    konsep_desc: 'Rizki = BP (Billion Unit) or maximum unit of Rp 13.5 million - 25 million/month for 24 months. Reward: Melbourne Trip (Champion Unit)',
    
    // Challenge Page
    challenge_title: 'BE → BP Challenge',
    be_bp_title: 'BE TO BP CHALLENGE',
    be_bp_item1: 'BE who reaches BP within 3 months of joining with triangle 100 → iPad + 10M Cash',
    be_bp_item2: 'BE who reaches BP within 6 months with triangle 100 → iPad + 5M Cash',
    lls_title: 'LLS WEEKLY CHALLENGE',
    lls_desc: 'BE & BP submit min 18 Million ALP or recruit each period Monday - Sunday → 100k MAP Voucher',
    asn_title: 'ASN EARLY SPRINT 2026',
    asn_desc: 'BE & BP achieve 200 Million ALP in period Jan 1 - Feb 28, 2026 → Rp 10,000,000 Reward',
    golden_title: 'GOLDEN PATH (Extra commission up to 40%)',
    golden_tier1: 'Tier 1: 150 Million ALP → +20% commission',
    golden_tier2: 'Tier 2: 300 Million ALP → +30% commission',
    golden_tier3: 'Tier 3: 450 Million ALP → +40% commission',
    
    // Income Page
    income_title: 'Rizki (BP) Income from Generation Overriding',
    income_desc: 'How Rizki has 30 BP: Rizki (BP) has 25 BP Generation + 5 personal BP = Total 30 BP. And so on up to BP 8 → layered overriding system.',
    champion_title: 'ASN CHAMPION CLUB PLUS 2026 & PREMIER CLUB PLUS 2026',
    champion_personal: 'Personal Production: Min 400 Million ALP (Early bird) → 500 Million ALP (Regular)',
    champion_unit: 'Unit Production: Min 1 Billion ALP (Early bird) → 1.25 Billion ALP (Regular)',
    champion_double: 'Double Premier: up to 3.6 Billion ALP with new BP.',
    
    // Kontak Page
    kontak_title: 'ACHIEVE YOUR FINANCIAL SECURITY',
    kontak_sub: 'Free Consultation',
    kontak_desc: 'Don\'t wait until your income is limited. Build a recurring income system with Allianz.',
    whatsapp_title: 'Contact Official Agent',
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
    if (translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
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