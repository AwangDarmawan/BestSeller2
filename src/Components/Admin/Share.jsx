// encode teks agar aman di URL
export const encodeForShare = (text) => encodeURIComponent(text);

// generate link undangan
export const generateInvitationLink = (name) =>
  // name ? `https://alpi-ndah-nikahflix.vercel.app/${name.toLowerCase()}` : "";
     name
  ? `https://best-seller2.vercel.app/${encodeURIComponent(name)}`
  : "";

// generate teks undangan lengkap
export const generateShareText = (name, invitationLink) =>
  name
    ? `Kepada Yth.\n\n` +
      `Bapak/Ibu/Saudara/i *${name}*\n\n` +
      `Assalamualaikum Warahmatullahi Wabarakatuh\n\n` +
      `Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i, teman sekaligus sahabat, untuk menghadiri acara pernikahan kami.\n\n` +
      `Berikut link undangan kami, untuk info lengkap dari acara, bisa kunjungi: 
      ${invitationLink}\n\n` +
      `Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.\n\n` +
      `Acara akan diselenggarakan pada:\n` +
      `🗓️ Hari/Tanggal : Minggu, 05 Juli 2026\n` +
      `⏰ Waktu        : 08.00 WIB – selesai\n` +
      `📍 Tempat        : Kp. Halimun RT 003 RW 004, Desa Warudoyong, Kecamatan Cikalongkulon\n\n` +
      `Wassalamualaikum Warahmatullahi Wabarakatuh\n\n` +
      `Terima Kasih\nHormat kami,\nALPI & NDAH`
    : "";