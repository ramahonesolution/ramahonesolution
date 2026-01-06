export default function ProjectsPage() {
  const projects = [
    {
        owner:"Dinas Sosial Kota Surabaya",
      title: "Sistem Informasi Bantuan Sosial (Dinas Sosial Kota Surabaya)",
      subtitle: "Link Project",
      href: "#",
      description:
        "Aplikasi untuk mencatat transaksi terkait penyaluran bantuan sosial oleh Dinas Sosial Kota Surabaya.",
    },
    {
      owner:"Dinas Sosial Kota Surabaya",
      title:
        "Monitoring Penggunaan Bantuan Modal Usaha (Dinas Sosial Kota Surabaya)",
      subtitle: "Link Project",
      href: "#",
      description:
        "Aplikasi untuk memonitor penggunaan bantuan peralatan modal usaha dan efektivitasnya terhadap penerima.",
    },
    {
        owner:"PT. Ayama",
      title: "Aplikasi Inventory Gudang (PT. Ayama)",
      subtitle: "Link Project",
      href: "#",
      description:
        "Aplikasi yang digunakan untuk mengelola stok barang dalam gudang serta mencatat transaksi keluar/masuk.",
    },
    {
        owner:"PT. Pertamina",
      title: "Operational Control, Evaluation, & Analytics Network as OCEAN",
      subtitle: "Link Project",
      href: "#",
      description:
        "Aplikasi untuk kontrol, evaluasi, dan analisa kegiatan di port serta monitoring sarana prasarana.",
    },
    // {
    //   title: "Scorekeeper (Personal Project)",
    //   subtitle: "Link Project",
    //   href: "#",
    //   description:
    //     "Aplikasi untuk menghitung permainan kartu (Remy/Gin/Jokeran).",
    // },
    {
      title: "Karaoke Lyric (Personal Project)",
      subtitle: "Link Project",
      href: "#",
      description:
        "Aplikasi untuk menampilkan lyric yang digunakan pada acara live music.",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1
        className="text-2xl md:text-3xl font-bold text-indigo-800 dark:text-white mb-6"
        style={{ fontFamily: "var(--font-geist-sans)" }}
      >
        Project
      </h1>
      <p className="mb-6">Our Latest Project</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p) => (
        <article
        key={p.title}
        className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition"
        >
        {p.owner && (
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
            {p.owner}
          </p>
        )}
        <h3
          className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 flex items-center justify-between tracking-tight"
          style={{ fontFamily: "var(--font-geist-sans)" }}
        >
          <span className="mr-2">{p.title}</span>
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {p.description}
        </p>
        <a
          href={p.href}
          className="inline-block text-indigo-600 dark:text-indigo-400 font-medium hover:underline text-sm"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          {p.subtitle}
        </a>
        </article>
      ))}
    </div>
    </main>
  );
}
