/* =========================================================
   SMART CULINARY SURABAYA - DATA SHARED
   File ini dipakai oleh index.html dan admin.html.
   Kalau admin mengedit data, hasilnya disimpan di
   localStorage dengan key 'sc_data_override'.
   ========================================================= */

const DEFAULT_DATA = {
  identitas: {
    hariJadi: "31 Mei 1293",
    julukan: "Kota Pahlawan",
    penduduk: "±2,9 Juta",
    luas: "350,5 km²",
    pesisir: "Selat Madura",
    narasi: "Surabaya adalah kota terbesar kedua di Indonesia dan ibu kota Provinsi Jawa Timur. Nama kota berasal dari legenda pertarungan Sura (ikan hiu) dan Baya (buaya), simbol keberanian rakyatnya. Kota ini dijuluki \"Kota Pahlawan\" karena peristiwa heroik 10 November 1945, ketika rakyat Surabaya yang dipimpin Bung Tomo melawan tentara Sekutu. Hari jadi resmi kota ini diperingati setiap 31 Mei, mengacu pada kemenangan Raden Wijaya melawan pasukan Mongol pada tahun 1293."
  },

  whyCulinary: "Surabaya kaya akan kuliner karena posisinya sebagai kota pelabuhan tertua di Nusantara. Sejak abad ke-13, Pelabuhan Tanjung Perak menjadi titik temu pedagang dari Tiongkok, Arab, India, Madura, hingga Eropa. Setiap budaya yang singgah meninggalkan jejak rasa: pengaruh Tionghoa terlihat di kawasan Pasar Atom dengan nasi cumi dan bakmi-nya, sentuhan Belanda hadir lewat Es Krim Zangrandi dan Spikoe (kue lapis Surabaya), pengaruh Madura mewarnai sate dan bebek, sementara tradisi Jawa Timur memperkaya rawon, lontong balap, dan rujak cingur. Kombinasi inilah yang membuat Surabaya disebut \"miniatur kuliner Nusantara\".",

  youtube: {
    id: "m943fgPhv3s",
    title: "Mengenal Sejarah Kota Surabaya"
  },

  footer: {
    kelompok: "Kelompok ___",
    anggota: "1. ____________________\n2. ____________________\n3. ____________________\n4. ____________________",
    kelas: "Kelas ___",
    sekolah: "SMA ____________",
    mapel: "Tugas TIK / Informatika",
    tahun: "Tahun Ajaran 2025/2026"
  },

  culinary: [
    /* ===== UTARA ===== */
    {
      id: "lontong-kupang",
      name: "Lontong Kupang",
      emoji: "🦐",
      region: "utara",
      regionLabel: "Surabaya Utara",
      tag: "tradisional",
      category: "Hidangan Pesisir",
      price: "Rp 12.000 sampai Rp 20.000",
      history: "Lontong Kupang adalah hidangan khas pesisir Surabaya yang berbahan utama 'kupang putih', yaitu kerang kecil yang banyak ditemukan di Selat Madura. Hidangan ini berisi lontong, kupang, lentho (perkedel kacang tolo), dan disiram kuah petis berbumbu bawang putih dan cabai. Biasanya disandingkan dengan sate kerang dan es kelapa muda untuk menetralkan rasa.",
      places: [
        { name: "Lontong Kupang Bu Sumiati", addr: "Jl. Sidotopo Wetan, Surabaya Utara", meta: "Buka pagi, sekitar Rp 15.000" },
        { name: "Kupang Lontong Pak Misari", addr: "Pasar Kapasan, Surabaya Utara", meta: "Legendaris, sekitar Rp 18.000" },
        { name: "Lontong Kupang Cak Pri", addr: "Jl. Kalimas Baru, dekat Pasar Atom", meta: "Direkomendasikan untuk turis, sekitar Rp 20.000" }
      ]
    },
    {
      id: "semanggi",
      name: "Semanggi Surabaya",
      emoji: "🥗",
      region: "utara",
      regionLabel: "Surabaya Utara",
      tag: "legendaris",
      category: "Sayuran Tradisional",
      price: "Rp 10.000 sampai Rp 18.000",
      history: "Semanggi Surabaya merupakan kuliner rakyat yang sudah ada sejak zaman penjajahan Belanda. Berbahan daun semanggi rebus yang disiram bumbu kacang khas berwarna kemerahan, dilengkapi kerupuk puli. Para penjualnya secara tradisional memikul dagangan keliling kampung-kampung di kawasan utara Surabaya.",
      places: [
        { name: "Pecel Semanggi Bu Anik", addr: "Kawasan Pasar Genteng", meta: "Sejak 1970-an, sekitar Rp 12.000" },
        { name: "Semanggi Suroboyo Bu Sukini", addr: "Kenjeran, Surabaya Utara", meta: "Penjual keliling, sekitar Rp 10.000" },
        { name: "Pecel Semanggi Cak Mat", addr: "Kawasan Tanjung Perak", meta: "Khas pesisir, sekitar Rp 15.000" }
      ]
    },
    {
      id: "nasi-cumi",
      name: "Nasi Cumi Pasar Atom",
      emoji: "🦑",
      region: "utara",
      regionLabel: "Surabaya Utara",
      tag: "legendaris",
      category: "Nasi Lauk",
      price: "Rp 25.000 sampai Rp 45.000",
      history: "Nasi Cumi Pasar Atom adalah ikon kuliner Surabaya Utara yang sudah berdiri sejak tahun 1989. Disajikan dengan cumi hitam yang dimasak bersama tintanya sendiri, ditambah aneka lauk pelengkap seperti udang, paru, otak-otak, dan dadar jagung. Menjadi menu favorit pengunjung Pasar Atom di pagi hari.",
      places: [
        { name: "Nasi Cumi Pasar Atom Bu Tien", addr: "Pasar Atom Lantai Dasar", meta: "Sejak 1989, sekitar Rp 35.000" },
        { name: "Nasi Cumi Walikota Mustajab", addr: "Jl. Walikota Mustajab", meta: "Cabang resmi, sekitar Rp 30.000" },
        { name: "Nasi Cumi Mahmudah", addr: "Jl. Kalimas Barat", meta: "Buka 24 jam, sekitar Rp 28.000" }
      ]
    },

    /* ===== PUSAT ===== */
    {
      id: "rawon-setan",
      name: "Rawon Setan",
      emoji: "🍲",
      region: "pusat",
      regionLabel: "Surabaya Pusat",
      tag: "legendaris",
      category: "Sup Daging",
      price: "Rp 40.000 sampai Rp 60.000",
      history: "Rawon Setan dijuluki demikian karena warung legendaris ini dahulu hanya buka di tengah malam hingga dini hari, jam-jam yang dianggap sebagai 'jam setan'. Berdiri sejak tahun 1953 di Jalan Embong Malang, hidangan ini menyajikan sup daging berkuah hitam pekat dengan bumbu utama kluwek, disajikan bersama nasi, taoge pendek, telur asin, dan sambal terasi.",
      places: [
        { name: "Rawon Setan Embong Malang", addr: "Jl. Embong Malang No. 78 sampai 80", meta: "Sejak 1953, sekitar Rp 50.000" },
        { name: "Rawon Pak Pangat", addr: "Jl. Tambak Bayan Tengah", meta: "Legendaris, sekitar Rp 40.000" },
        { name: "Rawon Kalkulator", addr: "Taman Bungkul, Surabaya Pusat", meta: "Direkomendasikan, sekitar Rp 45.000" }
      ]
    },
    {
      id: "sate-klopo",
      name: "Sate Klopo Ondomohen",
      emoji: "🍢",
      region: "pusat",
      regionLabel: "Surabaya Pusat",
      tag: "legendaris",
      category: "Sate Bakar",
      price: "Rp 35.000 sampai Rp 55.000",
      history: "Sate Klopo Ondomohen Bu Asih sudah berdiri sejak tahun 1945. Keunikannya terletak pada daging sapi atau ayam yang dibalut parutan kelapa berbumbu sebelum dibakar di atas arang, menghasilkan aroma harum dan rasa gurih yang khas. Nama 'Ondomohen' diambil dari nama lama Jalan Walikota Mustajab.",
      places: [
        { name: "Sate Klopo Ondomohen Bu Asih", addr: "Jl. Walikota Mustajab No. 36", meta: "Sejak 1945, sekitar Rp 45.000" },
        { name: "Sate Klopo Cak Bowo", addr: "Jl. Pucang Anom Timur", meta: "Cabang populer, sekitar Rp 35.000" },
        { name: "Sate Klopo Bu Hartini", addr: "Jl. Walikota Mustajab", meta: "Alternatif, sekitar Rp 40.000" }
      ]
    },
    {
      id: "soto-ambengan",
      name: "Soto Ayam Ambengan",
      emoji: "🍜",
      region: "pusat",
      regionLabel: "Surabaya Pusat",
      tag: "legendaris",
      category: "Soto",
      price: "Rp 25.000 sampai Rp 40.000",
      history: "Soto Ayam Ambengan Pak Sadi adalah salah satu warung soto paling legendaris di Surabaya, berdiri sejak tahun 1971 di Jalan Ambengan. Keunikan utamanya adalah koya, yaitu campuran kerupuk udang dan bawang putih sangrai yang ditaburkan di atas soto, memberikan rasa gurih dan tekstur unik. Kini sudah menjadi waralaba dengan banyak cabang di Indonesia.",
      places: [
        { name: "Soto Ayam Ambengan Pak Sadi", addr: "Jl. Ambengan No. 3A", meta: "Sejak 1971, sekitar Rp 35.000" },
        { name: "Soto Ayam Cak Har", addr: "Jl. Jagir Wonokromo", meta: "Direkomendasikan, sekitar Rp 25.000" },
        { name: "Soto Ayam Lamongan Cak To", addr: "Jl. Karang Menjangan", meta: "Buka 24 jam, sekitar Rp 28.000" }
      ]
    },
    {
      id: "es-zangrandi",
      name: "Es Krim Zangrandi",
      emoji: "🍨",
      region: "pusat",
      regionLabel: "Surabaya Pusat",
      tag: "legendaris",
      category: "Dessert Klasik",
      price: "Rp 25.000 sampai Rp 70.000",
      history: "Zangrandi Ice Cream Palace berdiri sejak tahun 1930 oleh Renato Zangrandi, seorang berkebangsaan Italia. Hingga kini, suasana toko di Jalan Yos Sudarso masih mempertahankan nuansa kolonial vintage dengan kursi rotan klasik. Menu andalannya antara lain Tutti Frutti, Macedonia, dan Avocadolla. Menjadi salah satu ikon kuliner heritage Surabaya.",
      places: [
        { name: "Zangrandi Yos Sudarso", addr: "Jl. Yos Sudarso No. 15", meta: "Sejak 1930, sekitar Rp 35.000" },
        { name: "Zangrandi Pakuwon Mall", addr: "Pakuwon Mall, Lantai 2", meta: "Cabang modern, sekitar Rp 40.000" },
        { name: "Zangrandi Tunjungan Plaza", addr: "TP 3, Lantai 3", meta: "Mall pusat, sekitar Rp 45.000" }
      ]
    },
    {
      id: "historica-coffee",
      name: "Historica Coffee & Pastry",
      emoji: "☕",
      region: "pusat",
      regionLabel: "Surabaya Pusat",
      tag: "kekinian",
      category: "Coffee Shop Heritage",
      price: "Rp 30.000 sampai Rp 65.000",
      history: "Historica Coffee & Pastry berlokasi di gedung tua heritage di Jalan Tunjungan, kawasan kota lama Surabaya. Menggabungkan suasana kolonial dengan menu kopi specialty modern. Tempat favorit anak muda dan content creator karena interior-nya yang aesthetic dan cocok untuk foto. Buka mulai 2018 dan langsung menjadi salah satu coffee shop ikonik Surabaya.",
      places: [
        { name: "Historica Coffee & Pastry", addr: "Jl. Tunjungan No. 15, Surabaya Pusat", meta: "Aesthetic vintage, sekitar Rp 45.000" },
        { name: "Historica - Cabang Pakuwon", addr: "Pakuwon Mall, Lantai 1", meta: "Versi mall, sekitar Rp 50.000" },
        { name: "Historica - Cabang Galaxy Mall", addr: "Galaxy Mall Surabaya", meta: "Strategis, sekitar Rp 50.000" }
      ]
    },

    /* ===== TIMUR ===== */
    {
      id: "bebek-goreng",
      name: "Bebek Goreng Surabaya",
      emoji: "🦆",
      region: "timur",
      regionLabel: "Surabaya Timur",
      tag: "tradisional",
      category: "Lauk Goreng",
      price: "Rp 30.000 sampai Rp 55.000",
      history: "Bebek Goreng adalah primadona kuliner malam Surabaya, terutama di kawasan timur kota. Bebek dimasak terlebih dahulu dengan bumbu kuning rempah, kemudian digoreng kering dan disajikan dengan sambal ijo atau sambal korek yang super pedas. Menjadi favorit anak muda dan pendatang yang ingin menikmati malam di Surabaya.",
      places: [
        { name: "Bebek Palupi", addr: "Jl. Pucang Anom Timur No. 8", meta: "Buka malam, sekitar Rp 40.000" },
        { name: "Bebek Carok Cak Yudi", addr: "Jl. Mulyosari, Surabaya Timur", meta: "Pedas legendaris, sekitar Rp 45.000" },
        { name: "Bebek H. Slamet", addr: "Jl. Raya Kertajaya", meta: "Cabang waralaba, sekitar Rp 35.000" }
      ]
    },
    {
      id: "almond-crispy",
      name: "Almond Crispy Cheese",
      emoji: "🧀",
      region: "timur",
      regionLabel: "Surabaya Timur",
      tag: "kekinian",
      category: "Oleh-oleh Modern",
      price: "Rp 65.000 sampai Rp 95.000 per box",
      history: "Almond Crispy Cheese adalah inovasi oleh-oleh kekinian khas Surabaya. Berbentuk wafer tipis renyah yang ditaburi keju cheddar dan almond panggang, menghasilkan perpaduan rasa manis dan asin yang adiktif. Sejak booming di tahun 2010-an, kini menjadi salah satu oleh-oleh wajib dari Surabaya, terutama populer di kalangan turis lokal dan anak muda.",
      places: [
        { name: "Wisata Rasa Almond Crispy", addr: "Jl. Manyar Kertoarjo", meta: "Original, sekitar Rp 75.000" },
        { name: "Bunga Roti Almond", addr: "Jl. Raya Mulyosari", meta: "Banyak varian rasa, sekitar Rp 65.000" },
        { name: "Koen Cheese Almond", addr: "Pakuwon City Mall", meta: "Premium, sekitar Rp 95.000" }
      ]
    },
    {
      id: "calibrate-coffee",
      name: "Calibrate Coffee Roasters",
      emoji: "☕",
      region: "timur",
      regionLabel: "Surabaya Timur",
      tag: "kekinian",
      category: "Specialty Coffee",
      price: "Rp 35.000 sampai Rp 60.000",
      history: "Calibrate Coffee Roasters adalah salah satu specialty coffee shop terkenal di Surabaya Timur, populer di komunitas third-wave coffee. Mereka me-roast biji kopi sendiri dan dikenal dengan signature drink yang konsisten. Tempat berkumpul anak muda penggemar kopi serius dengan suasana minimalis modern.",
      places: [
        { name: "Calibrate Coffee Roasters", addr: "Jl. Manyar Kertoarjo, Surabaya Timur", meta: "Specialty roastery, sekitar Rp 45.000" },
        { name: "Common Grounds Coffee", addr: "Jl. Manyar, Surabaya Timur", meta: "Hidden gem, sekitar Rp 40.000" },
        { name: "Six Ounces Coffee", addr: "Jl. Raya Kertajaya Indah", meta: "Modern industrial, sekitar Rp 50.000" }
      ]
    },

    /* ===== BARAT ===== */
    {
      id: "tahu-campur",
      name: "Tahu Campur Lamongan",
      emoji: "🥣",
      region: "barat",
      regionLabel: "Surabaya Barat",
      tag: "tradisional",
      category: "Hidangan Berkuah",
      price: "Rp 18.000 sampai Rp 30.000",
      history: "Meskipun asalnya dari Lamongan, Tahu Campur sangat populer di Surabaya, khususnya di kawasan barat. Berisi lontong, mie kuning, taoge, daun selada, kentang goreng, perkedel singkong, dan tahu, kemudian disiram kuah daging berbumbu petis yang kental dan gurih. Menjadi sarapan favorit warga Surabaya.",
      places: [
        { name: "Tahu Campur Cak Kahar", addr: "Jl. Embong Malang", meta: "Legendaris, sekitar Rp 25.000" },
        { name: "Tahu Campur Pak Mat", addr: "Jl. HR. Muhammad, Surabaya Barat", meta: "Direkomendasikan, sekitar Rp 22.000" },
        { name: "Tahu Campur Cak Min", addr: "Jl. Mayjen Sungkono", meta: "Buka malam, sekitar Rp 20.000" }
      ]
    },
    {
      id: "spikoe",
      name: "Spikoe Resep Kuno",
      emoji: "🍰",
      region: "barat",
      regionLabel: "Surabaya Barat",
      tag: "legendaris",
      category: "Oleh-oleh Klasik",
      price: "Rp 80.000 sampai Rp 180.000 per box",
      history: "Spikoe atau Kue Lapis Surabaya adalah kue lapis legendaris dengan tiga lapisan, yaitu cokelat di tengah serta kuning di atas dan bawah. Resepnya diadaptasi dari kue 'spekkoek' Belanda. Spikoe Resep Kuno berdiri sejak tahun 1973 dengan resep turun-temurun, menjadi salah satu oleh-oleh paling dicari dari Surabaya.",
      places: [
        { name: "Spikoe Resep Kuno", addr: "Jl. Kayoon No. 24", meta: "Sejak 1973, sekitar Rp 130.000" },
        { name: "Lapis Surabaya Sangkuriang", addr: "Jl. Bratang Wetan", meta: "Kompetitor, sekitar Rp 100.000" },
        { name: "Layer Cake Surabaya", addr: "Pakuwon Mall", meta: "Versi modern, sekitar Rp 120.000" }
      ]
    },
    {
      id: "patata",
      name: "Surabaya Patata",
      emoji: "🥔",
      region: "barat",
      regionLabel: "Surabaya Barat",
      tag: "kekinian",
      category: "Oleh-oleh Kekinian",
      price: "Rp 55.000 sampai Rp 75.000 per box",
      history: "Surabaya Patata adalah brand oleh-oleh kekinian yang viral sejak tahun 2017. Inovasinya berupa kue lapis berbahan kentang ('patata' berarti kentang dalam Bahasa Italia) dengan tekstur lembut dan moist. Tersedia berbagai varian rasa modern seperti tiramisu, oreo, green tea, dan keju. Sangat populer di kalangan anak muda dan generasi milenial.",
      places: [
        { name: "Surabaya Patata Pusat", addr: "Jl. HR. Muhammad No. 156", meta: "Varian terlengkap, sekitar Rp 65.000" },
        { name: "Patata Pakuwon Mall", addr: "Pakuwon Mall, Ground Floor", meta: "Lokasi strategis, sekitar Rp 70.000" },
        { name: "Patata Bandara Juanda", addr: "Bandara Juanda Terminal 1 dan 2", meta: "Cocok beli mendadak, sekitar Rp 75.000" }
      ]
    },
    {
      id: "tanamera-coffee",
      name: "Tanamera Coffee",
      emoji: "☕",
      region: "barat",
      regionLabel: "Surabaya Barat",
      tag: "kekinian",
      category: "Specialty Coffee Chain",
      price: "Rp 35.000 sampai Rp 70.000",
      history: "Tanamera Coffee adalah brand coffee shop premium asal Indonesia yang menyajikan kopi single-origin dari berbagai daerah Nusantara. Outletnya di Pakuwon Mall menjadi salah satu tempat nongkrong favorit anak muda dan profesional muda Surabaya, dengan suasana modern minimalis dan barista yang ramah.",
      places: [
        { name: "Tanamera Coffee Pakuwon Mall", addr: "Pakuwon Mall, Ground Floor", meta: "Strategis, sekitar Rp 50.000" },
        { name: "Tanamera Coffee Tunjungan Plaza", addr: "TP 6, Lantai 1", meta: "Mall pusat, sekitar Rp 50.000" },
        { name: "Tanamera Coffee Galaxy Mall", addr: "Galaxy Mall, Lantai 2", meta: "Cabang Timur, sekitar Rp 45.000" }
      ]
    },

    /* ===== SELATAN ===== */
    {
      id: "lontong-balap",
      name: "Lontong Balap Pak Gendut",
      emoji: "🍜",
      region: "selatan",
      regionLabel: "Surabaya Selatan",
      tag: "legendaris",
      category: "Hidangan Berkuah",
      price: "Rp 15.000 sampai Rp 25.000",
      history: "Nama 'Lontong Balap' berasal dari kebiasaan para pedagangnya pada masa lalu yang memikul dagangan dengan setengah berlari, atau seakan saling 'balapan' menuju Pasar Wonokromo agar dagangannya cepat laku. Hidangan ini berisi lontong, taoge rebus, tahu goreng, lentho (perkedel kacang tolo), disiram kuah bawang putih, ditambah sambal petis. Biasanya disandingkan dengan sate kerang.",
      places: [
        { name: "Lontong Balap Pak Gendut", addr: "Jl. Kranggan No. 60", meta: "Sejak 1956, sekitar Rp 20.000" },
        { name: "Lontong Balap Garuda", addr: "Jl. Embong Malang", meta: "Cabang resmi, sekitar Rp 22.000" },
        { name: "Lontong Balap Cak Mat", addr: "Pasar Wonokromo", meta: "Tradisional, sekitar Rp 15.000" }
      ]
    },
    {
      id: "rujak-cingur",
      name: "Rujak Cingur",
      emoji: "🥗",
      region: "selatan",
      regionLabel: "Surabaya Selatan",
      tag: "tradisional",
      category: "Salad Tradisional",
      price: "Rp 20.000 sampai Rp 40.000",
      history: "Rujak Cingur adalah makanan khas Surabaya yang sudah ada sejak abad ke-19. Kata 'cingur' dalam bahasa Jawa berarti 'mulut', merujuk pada irisan moncong sapi rebus yang menjadi bahan utamanya. Disajikan bersama lontong, tahu, tempe, sayuran, dan buah-buahan, kemudian disiram bumbu petis udang yang diulek dengan kacang dan pisang klutuk muda.",
      places: [
        { name: "Rujak Cingur Ahmad Jais", addr: "Jl. Achmad Jais No. 40", meta: "Legendaris, sekitar Rp 35.000" },
        { name: "Rujak Cingur Genteng Durasim", addr: "Jl. Genteng Durasim", meta: "Klasik, sekitar Rp 30.000" },
        { name: "Rujak Cingur Delta", addr: "Delta Plaza Surabaya", meta: "Versi mall, sekitar Rp 40.000" }
      ]
    },
    {
      id: "tahu-tek",
      name: "Tahu Tek Pak Ali",
      emoji: "🥘",
      region: "selatan",
      regionLabel: "Surabaya Selatan",
      tag: "legendaris",
      category: "Hidangan Petis",
      price: "Rp 18.000 sampai Rp 28.000",
      history: "Tahu Tek mendapatkan namanya dari suara 'tek-tek' yang dihasilkan saat penjual memotong tahu dan lontong dengan gunting di atas piring. Hidangan ini terdiri dari tahu goreng setengah matang, lontong, kentang, taoge, dan telur, disiram bumbu petis kacang yang khas. Pak Ali adalah salah satu warung paling legendaris, populer di kalangan warga sejak tahun 1970-an.",
      places: [
        { name: "Tahu Tek Pak Ali", addr: "Jl. Dinoyo No. 147", meta: "Legendaris, sekitar Rp 25.000" },
        { name: "Tahu Tek Cak Kahar", addr: "Jl. Ngagel Jaya", meta: "Direkomendasikan, sekitar Rp 22.000" },
        { name: "Tahu Tek Telur Pak Jayen", addr: "Jl. Karangmenjangan", meta: "Buka malam, sekitar Rp 20.000" }
      ]
    }
  ]
};

/* =========================================================
   LOAD DATA: cek apakah ada override di localStorage
   ========================================================= */
function loadCulinaryData() {
  try {
    const raw = localStorage.getItem('sc_data_override');
    if (raw) {
      const override = JSON.parse(raw);
      // Merge: override menimpa default
      return {
        identitas: { ...DEFAULT_DATA.identitas, ...(override.identitas || {}) },
        whyCulinary: override.whyCulinary || DEFAULT_DATA.whyCulinary,
        youtube: { ...DEFAULT_DATA.youtube, ...(override.youtube || {}) },
        footer: { ...DEFAULT_DATA.footer, ...(override.footer || {}) },
        culinary: override.culinary || DEFAULT_DATA.culinary
      };
    }
  } catch (e) {
    console.warn('Gagal load override data:', e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_DATA)); // deep clone
}

function saveCulinaryData(data) {
  try {
    localStorage.setItem('sc_data_override', JSON.stringify(data));
    return true;
  } catch (e) {
    console.error('Gagal simpan data:', e);
    return false;
  }
}

function resetCulinaryData() {
  localStorage.removeItem('sc_data_override');
}

// Expose ke window
window.SC_DATA = loadCulinaryData();
window.SC_DEFAULT = DEFAULT_DATA;
window.scLoadData = loadCulinaryData;
window.scSaveData = saveCulinaryData;
window.scResetData = resetCulinaryData;
