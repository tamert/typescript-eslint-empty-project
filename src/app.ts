const slugger = (text: string): string => {
  const turkish: Record<string, string> = {
    çÇ: 'c',
    ğĞ: 'g',
    şŞ: 's',
    üÜ: 'u',
    ıİ: 'i',
    öÖ: 'o'
  };
  text = text
    .toLowerCase()
    .split(' ')
    .join('-');
  for (const key in turkish) {
    text = text
      .split(key[0])
      .join(turkish[key])
      .split(key[1])
      .join(turkish[key]);
  }
  return text;
};

console.log("way anasını")

console.log(slugger('Selam dünyalı biz dostuz. Çünkü türkçe karakter kullanıyoruz ağam'));
// selam-dunyali-biz-dostuz.-cunku-turkce-karakter-kullaniyoruz-agam