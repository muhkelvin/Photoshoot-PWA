export type EnvironmentType = "indoor" | "outdoor" | "additional" | "light" | "human";

export interface Environment {
  id: string;
  type: EnvironmentType;
  title: string;
  icon: string;
  priority: string;
  description: string;
  framing: string;
  interaction: string;
  direction: string;
  character: string;
  angleLens: string;
}

export const ENVIRONMENTS: Environment[] = [
  {
    id: "tangga-indoor", type: "indoor", title: "Tangga Indoor", icon: "🪜", priority: "P1 · Core",
    description: "Tangga lurus, melingkar, anak tangga, landing, railing, tangga dengan pilar/dinding.",
    interaction: "duduk · berdiri · naik · turun · bersandar", framing: "FB–3/4",
    direction: "duduk · berdiri · naik · turun", character: "versatile · pose + movement",
    angleLens: "Low Angle (35mm-50mm) / High Angle (24mm-35mm)"
  },
  {
    id: "tangga-outdoor", type: "outdoor", title: "Tangga Outdoor", icon: "🪜", priority: "P1 · Core",
    description: "Tangga gedung, taman, landing, tangga menuju gedung/taman.",
    interaction: "duduk · berdiri · group bertingkat", framing: "FB–3/4",
    direction: "duduk · berdiri santai", character: "versatile · grand",
    angleLens: "Low Angle (35mm) untuk dramatic effect"
  },
  {
    id: "pintu", type: "indoor", title: "Pintu & Entrance", icon: "🚪", priority: "P1 · Core",
    description: "Pintu besar/kecil, double door, sliding, doorway, kusen, archway, pintu kaca/kayu.",
    interaction: "berdiri di samping · masuk/keluar · bersandar di kusen", framing: "FB–3/4",
    direction: "berdiri · walking through", character: "formal · candid",
    angleLens: "Eye Level (50mm-85mm) flattering portrait"
  },
  {
    id: "jendela", type: "indoor", title: "Jendela & Cahaya", icon: "🪟", priority: "P1 · Core",
    description: "Jendela besar/kecil, tinggi, deretan jendela, window sill, tirai.",
    interaction: "lihat keluar · berdiri dekat frame · reflection", framing: "3/4–CU",
    direction: "melihat keluar · merapikan pakaian", character: "soft · natural",
    angleLens: "Slightly High Angle (50mm)"
  },
  {
    id: "taman", type: "outdoor", title: "Taman & Vegetasi", icon: "🌿", priority: "P1 · Core",
    description: "Taman rumput, flower bed, semak, pohon besar/rindang, daun, foliage.",
    interaction: "berjalan · duduk di rumput · berdiri di bawah pohon", framing: "FB–3/4",
    direction: "candid jalan · melihat bunga", character: "soft · natural",
    angleLens: "Eye Level (85mm-135mm) bokeh"
  },
  {
    id: "dinding", type: "indoor", title: "Dinding Indoor", icon: "🧱", priority: "P1 · Core",
    description: "Dinding polos/putih/cream/beton/bata, dinding bertekstur, accent wall.",
    interaction: "bersandar ringan · shadow play", framing: "3/4–CU",
    direction: "bersandar · portrait clean", character: "clean · architectural",
    angleLens: "Eye Level (50mm-85mm)"
  },
  {
    id: "dinding-outdoor", type: "outdoor", title: "Dinding Outdoor", icon: "🧱", priority: "P1 · Core",
    description: "Dinding luar beton/bata, textured wall, dinding dengan tanaman/bayangan.",
    interaction: "bersandar santai · environmental portrait", framing: "3/4–CU",
    direction: "bersandar · portrait natural", character: "clean · architectural",
    angleLens: "Eye Level (50mm-85mm)"
  },
  {
    id: "bangku-outdoor", type: "outdoor", title: "Bangku & Seating", icon: "🪑", priority: "P1 · Core",
    description: "Bangku taman, bench kayu/beton, gazebo seating, kursi bawah pohon.",
    interaction: "duduk · ngobrol · simpan properti", framing: "FB–HB",
    direction: "duduk santai · ngobrol candid", character: "versatile · pose + movement",
    angleLens: "Eye Level / Slightly High (50mm)"
  },
  {
    id: "koridor", type: "indoor", title: "Koridor & Lorong", icon: "🚶", priority: "P1 · Core",
    description: "Koridor panjang/sempit/lebar, dengan pilar/jendela, leading lines.",
    interaction: "walking · berhenti di tengah", framing: "FB–3/4",
    direction: "walking toward · looking back", character: "movement · storytelling",
    angleLens: "Eye Level (35mm-50mm) lurus symmetry"
  },
  {
    id: "pilar", type: "indoor", title: "Pilar & Arsitektur", icon: "🏛️", priority: "P1 · Core",
    description: "Pilar besar/kecil, kolom persegi/bulat, arch, ceiling tinggi.",
    interaction: "bersandar · berdiri di antara pilar", framing: "FB–3/4",
    direction: "bersandar · berjalan melewati", character: "clean · architectural",
    angleLens: "Eye Level (35mm) / Tilt-Shift"
  },
  {
    id: "lapangan", type: "outdoor", title: "Lapangan / Open Field", icon: "🌤️", priority: "P1 · Core",
    description: "Lapangan rumput, area kosong, plaza, courtyard luas.",
    interaction: "cap toss · celebration · jumping", framing: "FB",
    direction: "cap toss · group celebration", character: "celebration · environmental",
    angleLens: "Low Angle (16mm-24mm) tangkap langit"
  },

  // ==========================================
  // ADDITIONAL ENVIRONMENTS (P2)
  // ==========================================
  // --- INDOOR TAMBAHAN ---
  {
    id: "ruang-kelas", type: "indoor", title: "Ruang Kelas", icon: "📚", priority: "P2",
    description: "Meja/kursi kelas, papan tulis, meja dosen, podium.",
    interaction: "duduk di bangku · berdiri depan kelas", framing: "FB–HB",
    direction: "duduk membaca · candid ngobrol", character: "nostalgic · lifestyle",
    angleLens: "Eye Level (35mm) tangkap konteks"
  },
  {
    id: "furniture", type: "indoor", title: "Furniture", icon: "🛋️", priority: "P2",
    description: "Sofa, armchair, stool, coffee table, kabinet, rak.",
    interaction: "duduk · bersandar di meja", framing: "3/4–HB",
    direction: "duduk santai · membaca", character: "lifestyle · indoor",
    angleLens: "Eye Level (50mm)"
  },
  {
    id: "perpustakaan", type: "indoor", title: "Perpustakaan", icon: "📖", priority: "P2",
    description: "Rak buku, meja/kursi baca, lorong rak, reading corner.",
    interaction: "ambil buku · baca buku", framing: "FB–HB",
    direction: "berjalan di lorong · membaca", character: "formal · candid",
    angleLens: "Eye Level (50mm-85mm) down the aisle"
  },
  {
    id: "lobby", type: "indoor", title: "Lobby & Waiting Area", icon: "🛎️", priority: "P2",
    description: "Lobby, sofa tunggu, resepsionis, tanaman indoor.",
    interaction: "menunggu · duduk santai", framing: "3/4–HB",
    direction: "candid ngobrol", character: "formal · lifestyle",
    angleLens: "Eye Level (35mm-50mm)"
  },
  {
    id: "aula", type: "indoor", title: "Aula / Auditorium", icon: "🎓", priority: "P2",
    description: "Panggung, podium, kursi auditorium, curtain, backstage.",
    interaction: "berdiri di panggung · pegang podium", framing: "FB–3/4",
    direction: "berdiri heroik · group", character: "grand · formal",
    angleLens: "Low Angle (24mm-35mm) megah"
  },
  {
    id: "cermin", type: "indoor", title: "Cermin & Refleksi", icon: "🪞", priority: "P2",
    description: "Cermin besar/kecil, kaca pintu, reflective surface, lantai glossy.",
    interaction: "cek penampilan · reflection portrait", framing: "3/4–CU",
    direction: "merapikan rambut/kebaya", character: "editorial · detail",
    angleLens: "Slightly High Angle (50mm-85mm)"
  },
  {
    id: "tirai", type: "indoor", title: "Tirai & Soft Elements", icon: "🪟", priority: "P2",
    description: "Tirai panjang, sheer curtain, backdrop kain, curtain wall.",
    interaction: "bermain dengan tirai · menyembunyikan wajah", framing: "3/4–CU",
    direction: "soft portrait · candid", character: "soft · ethereal",
    angleLens: "Eye Level (50mm-85mm) f/1.8"
  },
  {
    id: "ceiling", type: "indoor", title: "Ceiling / Struktur Atas", icon: "🏛️", priority: "P2",
    description: "Ceiling tinggi, balok, skylight, chandelier.",
    interaction: "melihat ke atas", framing: "FB–3/4",
    direction: "environmental portrait", character: "architectural · grand",
    angleLens: "Low Angle (16mm-24mm)"
  },
  {
    id: "flooring", type: "indoor", title: "Flooring / Lantai", icon: "⬛", priority: "P2",
    description: "Lantai marble, keramik, kayu, checkerboard, reflective.",
    interaction: "duduk di lantai · overhead shot", framing: "FB",
    direction: "duduk santai · refleksi", character: "clean · geometry",
    angleLens: "High Angle / Overhead (24mm-35mm)"
  },
  {
    id: "mezzanine", type: "indoor", title: "Mezzanine / Balkon", icon: "🏗️", priority: "P2",
    description: "Balkon interior, railing mezzanine, view lantai atas.",
    interaction: "bersandar di railing · melihat ke bawah", framing: "3/4–HB",
    direction: "leaning portrait", character: "layering · high angle",
    angleLens: "High/Low Angle (35mm-50mm)"
  },
  {
    id: "atrium", type: "indoor", title: "Atrium", icon: "🏢", priority: "P2",
    description: "Ruang terbuka di tengah gedung, void, skylight.",
    interaction: "berdiri di tengah · looking up", framing: "FB",
    direction: "hero shot", character: "scale · architecture",
    angleLens: "Low Angle (16mm-24mm)"
  },
  {
    id: "locker", type: "indoor", title: "Locker / Storage", icon: "🗄️", priority: "P2",
    description: "Locker, deretan pintu locker, rak storage.",
    interaction: "bersandar · buka locker", framing: "3/4–HB",
    direction: "candid", character: "repetition · symmetry",
    angleLens: "Eye Level (35mm-50mm)"
  },
  {
    id: "kantin", type: "indoor", title: "Kantin / Cafe", icon: "☕", priority: "P2",
    description: "Meja, kursi, counter, area makan.",
    interaction: "duduk ngopi · ngobrol", framing: "3/4–HB",
    direction: "candid lifestyle", character: "lifestyle · casual",
    angleLens: "Eye Level (50mm)"
  },
  {
    id: "tangga-darurat", type: "indoor", title: "Tangga Darurat", icon: "🪜", priority: "P2",
    description: "Tangga besi, railing, concrete wall.",
    interaction: "duduk di tangga · bersandar", framing: "FB–3/4",
    direction: "cool pose", character: "urban · editorial",
    angleLens: "Eye Level / Low Angle (35mm)"
  },

  // --- OUTDOOR TAMBAHAN ---
  {
    id: "pintu-outdoor", type: "outdoor", title: "Pintu & Entrance Outdoor", icon: "🚪", priority: "P2",
    description: "Entrance gedung, double door, kanopi, archway luar.",
    interaction: "berdiri di entrance · berjalan keluar", framing: "FB–3/4",
    direction: "berjalan keluar gedung", character: "grand · formal",
    angleLens: "Eye Level (35mm-50mm)"
  },
  {
    id: "jendela-facade", type: "outdoor", title: "Jendela & Facade", icon: "🏢", priority: "P2",
    description: "Jendela gedung luar, kaca besar, facade jendela klasik/modern.",
    interaction: "berdiri dekat facade · bayangan", framing: "FB–3/4",
    direction: "environmental portrait", character: "architectural",
    angleLens: "Eye Level (35mm-50mm)"
  },
  {
    id: "pilar-outdoor", type: "outdoor", title: "Pilar & Kolom Outdoor", icon: "🏛️", priority: "P2",
    description: "Deretan pilar gedung, colonnade, pilar teras.",
    interaction: "berjalan di antara pilar", framing: "FB",
    direction: "walking · bersandar", character: "clean · symmetry",
    angleLens: "Eye Level / Tilt-Shift (35mm)"
  },
  {
    id: "walkway", type: "outdoor", title: "Koridor / Walkway", icon: "🛤️", priority: "P2",
    description: "Pedestrian corridor, covered walkway, walkway dengan tanaman/pilar.",
    interaction: "walking toward · leading lines", framing: "FB",
    direction: "berjalan", character: "movement",
    angleLens: "Eye Level (50mm-85mm) compression"
  },
  {
    id: "pathway", type: "outdoor", title: "Pathway / Jalan", icon: "🛣️", priority: "P2",
    description: "Jalan kampus, paving, batu, jalan melengkung, jalan antar pepohonan.",
    interaction: "berjalan", framing: "FB",
    direction: "candid jalan", character: "storytelling",
    angleLens: "Low Angle (35mm)"
  },
  {
    id: "railing", type: "outdoor", title: "Railing & Pagar", icon: "🚧", priority: "P2",
    description: "Railing balkon, pagar besi/batu, handrail luar.",
    interaction: "bersandar · memegang railing", framing: "3/4–HB",
    direction: "melihat ke jauh", character: "candid · leaning",
    angleLens: "Eye Level (50mm-85mm)"
  },
  {
    id: "balkon", type: "outdoor", title: "Balkon & Teras", icon: "🌇", priority: "P2",
    description: "Balkon gedung, teras, veranda, rooftop terrace.",
    interaction: "bersandar · menikmati view", framing: "FB–3/4",
    direction: "portrait santai", character: "lifestyle",
    angleLens: "Eye Level (35mm-50mm)"
  },
  {
    id: "courtyard", type: "outdoor", title: "Courtyard", icon: "⛲", priority: "P2",
    description: "Courtyard terbuka, taman tengah gedung, fountain.",
    interaction: "berjalan · bersantai", framing: "FB",
    direction: "environmental portrait", character: "formal · grand",
    angleLens: "Eye Level (24mm-35mm)"
  },
  {
    id: "gerbang", type: "outdoor", title: "Gerbang & Gapura", icon: "⛩️", priority: "P2",
    description: "Gerbang utama kampus, gapura, arch gate, gate dengan tulisan.",
    interaction: "berdiri di depan gerbang", framing: "FB",
    direction: "hero shot", character: "contextual · monumental",
    angleLens: "Low Angle (24mm-35mm)"
  },
  {
    id: "facade-gedung", type: "outdoor", title: "Facade Gedung Utama", icon: "🏛️", priority: "P2",
    description: "Facade simetris, gedung klasik/modern, background gedung jauh.",
    interaction: "berdiri berlatar gedung", framing: "FB",
    direction: "environmental shot", character: "monumental",
    angleLens: "Low Angle / Eye Level (24mm-50mm)"
  },
  {
    id: "jembatan", type: "outdoor", title: "Jembatan", icon: "🌉", priority: "P2",
    description: "Jembatan taman, pedestrian bridge, bridge railing.",
    interaction: "berjalan melewati · bersandar", framing: "FB–3/4",
    direction: "candid jalan", character: "storytelling",
    angleLens: "Eye Level (50mm-85mm)"
  },
  {
    id: "gazebo", type: "outdoor", title: "Gazebo", icon: "🛖", priority: "P2",
    description: "Gazebo terbuka, kayu, gazebo taman.",
    interaction: "duduk · berdiri di gazebo", framing: "FB–3/4",
    direction: "candid santai", character: "natural",
    angleLens: "Eye Level (35mm-50mm)"
  },
  {
    id: "air", type: "outdoor", title: "Air & Refleksi", icon: "💧", priority: "P2",
    description: "Kolam, fountain, permukaan air, genangan, reflective pool.",
    interaction: "berdiri dekat air · reflection", framing: "FB–3/4",
    direction: "melihat pantulan", character: "serene · artistic",
    angleLens: "Low Angle untuk reflection (35mm-50mm)"
  },
  {
    id: "plaza", type: "outdoor", title: "Plaza", icon: "🔲", priority: "P2",
    description: "Area paving luas, plaza depan gedung.",
    interaction: "berjalan · group", framing: "FB",
    direction: "group shot · walking", character: "formal",
    angleLens: "Eye Level (24mm-35mm)"
  },
  {
    id: "amphitheater", type: "outdoor", title: "Amphitheater", icon: "🏟️", priority: "P2",
    description: "Tangga melingkar, seating bertingkat, stage.",
    interaction: "duduk ramai-ramai", framing: "FB",
    direction: "group · candid", character: "group · sitting",
    angleLens: "High/Low Angle (24mm-35mm)"
  },
  {
    id: "pergola", type: "outdoor", title: "Pergola / Canopy", icon: "🌿", priority: "P2",
    description: "Struktur atap terbuka, tanaman rambat, covered walkway.",
    interaction: "berjalan di bawah pergola", framing: "FB–3/4",
    direction: "walking", character: "framing · shadow",
    angleLens: "Eye Level (35mm-50mm)"
  },
  {
    id: "tunnel", type: "outdoor", title: "Tunnel / Terowongan", icon: "🚇", priority: "P2",
    description: "Lorong terbuka beratap, terowongan.",
    interaction: "berjalan", framing: "FB",
    direction: "leading lines walking", character: "dramatic · movement",
    angleLens: "Eye Level (35mm-50mm) lurus"
  },
  {
    id: "patung", type: "outdoor", title: "Sculpture / Patung", icon: "🗿", priority: "P2",
    description: "Patung kampus, monumen, artwork.",
    interaction: "interaksi dengan patung", framing: "FB",
    direction: "candid", character: "storytelling",
    angleLens: "Eye Level (35mm-50mm)"
  },
  {
    id: "signage", type: "outdoor", title: "Signage / Nama Gedung", icon: "🪧", priority: "P2",
    description: "Nama kampus, fakultas, nomor gedung.",
    interaction: "berdiri dekat signage", framing: "FB–3/4",
    direction: "contextual portrait", character: "contextual",
    angleLens: "Eye Level (35mm-50mm)"
  },
  {
    id: "parking", type: "outdoor", title: "Parking Structure", icon: "🅿️", priority: "P2",
    description: "Basement, ramp, concrete pillars.",
    interaction: "berjalan · bersandar", framing: "FB",
    direction: "urban portrait", character: "urban · editorial",
    angleLens: "Eye Level (35mm-50mm)"
  },
  {
    id: "rooftop", type: "outdoor", title: "Rooftop", icon: "🌆", priority: "P2",
    description: "Rooftop, railing, skyline.",
    interaction: "melihat skyline", framing: "FB",
    direction: "environmental sunset", character: "dramatic",
    angleLens: "Eye Level (24mm-50mm)"
  },

  // --- ALAMI / NATURAL ---
  {
    id: "langit", type: "outdoor", title: "Langit & Horizon", icon: "☁️", priority: "P2",
    description: "Blue sky, cloudy sky, sunset, open horizon.",
    interaction: "background langit luas", framing: "FB",
    direction: "low angle hero", character: "open · majestic",
    angleLens: "Low Angle (16mm-24mm)"
  },
  {
    id: "seasonal", type: "outdoor", title: "Seasonal Elements", icon: "🍂", priority: "P2",
    description: "Bunga bermekaran, daun jatuh, pohon berbunga.",
    interaction: "berinteraksi dengan daun/bunga", framing: "3/4–HB",
    direction: "candid natural", character: "seasonal · soft",
    angleLens: "Eye Level (85mm-135mm)"
  },

  // --- LIGHT / VISUAL (Dikelompokkan ke Light) ---
  {
    id: "light-shade", type: "light", title: "Open Shade / Soft Light", icon: "⛅", priority: "P2",
    description: "Bayangan gedung/pohon rata, diffused light.",
    interaction: "semua pose", framing: "semua",
    direction: "flattering portrait", character: "soft · natural",
    angleLens: "Eye Level (85mm)"
  },
  {
    id: "light-direct", type: "light", title: "Direct / Hard Light", icon: "☀️", priority: "P2",
    description: "Direct sunlight, hard shadow, dappled light.",
    interaction: "pose editorial · kacamata hitam", framing: "3/4–CU",
    direction: "dramatic portrait", character: "bold · editorial",
    angleLens: "Eye Level (35mm-50mm)"
  },
  {
    id: "light-golden", type: "light", title: "Golden Hour / Backlight", icon: "🌅", priority: "P2",
    description: "Matahari sore, rim light, silhouette.",
    interaction: "berjalan · menghadap matahari", framing: "FB–3/4",
    direction: "warm portrait", character: "magical · warm",
    angleLens: "Eye Level (50mm-85mm)"
  },
  {
    id: "visual-structure", type: "light", title: "Visual Structure", icon: "📐", priority: "P2",
    description: "Leading lines, symmetry, framing, foreground-background.",
    interaction: "berdiri di komposisi", framing: "FB",
    direction: "artistic composition", character: "artistic",
    angleLens: "Tergantung struktur (35mm-85mm)"
  },

  // --- HUMAN ENVIRONMENT ---
  {
    id: "human-env", type: "human", title: "Human Environment", icon: "👥", priority: "P2",
    description: "Orang lewat, kerumunan, teman-teman, antrean, crew.",
    interaction: "berinteraksi dengan orang lain · blur crowd", framing: "FB–3/4",
    direction: "candid", character: "dynamic · storytelling",
    angleLens: "Slow Shutter (35mm-50mm) / Shallow Depth (85mm)"
  }
];
