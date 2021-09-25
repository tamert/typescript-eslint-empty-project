const slugger = (text: string): string => {
  const turkish: Record<string, string> = {
    çÇ: 'c',
    ğĞ: 'g',
    şŞ: 's',
    üÜ: 'u',
    ıİ: 'i',
    öÖ: 'o',
  };
  for (const key in turkish) {
    text = text.replace(new RegExp( key[0]+"|"+key[1], 'g' ), turkish[key]);
  }
  return text .toLowerCase().replace(new RegExp(" |\\.", 'g'), "-");
  // @note: "string".split(" ").join("-") It would work. However, it's slower than regex methods
};

console.log(slugger('Selam dünyalı biz dostuz. Çünkü türkçe karakter kullanıyoruz ağam'));
// selam-dunyali-biz-dostuz--cunku-turkce-karakter-kullaniyoruz-agam
