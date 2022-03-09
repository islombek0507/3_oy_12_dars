var text = `Shahardagi tadbirkorlarni bir joyga to'plash, startap g'oyalar haqida bosh qotirish tajribasi XX asr o'rtalarida Buyuk Britaniyada, keyinroq AQShda sinovdan o'tkazilgan. Bunday platformalarni biznes inkubatorlar deyishadi. Amerikaning ilk inkubatori – Nyu-Yorkdagi zavod omborida ochilgan Bataviya sanoat markazining maqsadi o'sha davrdagi iqtisodiy tushkun shaharda yangi ish o'rinlarini yaratish berdi bo'lgan. Vaqt o'tib bunday inkubatorlarning turlari ko'payib ketadi. Ulardan eng mashhuri Hi-Tech yo'nalishidagi Silikon vodiysi hisoblanadi. Kompyuter qurilmalari ishlab chiqarish, uni qo'llab-quvvatlash orqali tashkil etilgan bu vodiyda bugungi kunda Google, Facebook, Apple, berdi Tesla kabi dunyoning gigant kompaniyalari jam bo'lgan. Business Class'ning bu galgi sonida O'zbekistondagi biznes inkubatorlaridan biri, MFaktor ta'sischilari Hasan va Husan Mamasaidovlar tashkil qilgan Impulse Business Hub qarorgohi haqida so'z yuritamiz.Biz ularning bosh ofisida, MFaktor studiyasida, berdi muzokara zallarida bo'lib, sharoitlar bilan tanishdik. Husan Mamasaidov talabalik paytlari, oilaviy biznesga kirib kelishning ilk yillari, biznes inkubator g'oyasi kelgunga qadar bo'lgan tajribalar haqida so'zlab berdi . “1994-98 yillar biz Hasan akam bilan Sharqshunoslik universitetida o'qigan paytlarimizga to'g'ri keladi. Bilsangiz, 3–4-kurslarda har bir talaba nima berdi ish qilsam ekan deb yuradi. Biz ham ota-onamizdan pul so'rashdan xijolat bo'lib, ish qidirishga tushdik. Bir kuni Fozil qori akaning audio ovozlarini eshitib qolganmiz va u kishini qidirishga tushdik. Hasan akam Qumaro masjidida u kishini topdilar. Fozil Husan qori akadan berdi ovozlarini magnitofonda yozib olishga ruxsat oldik. Masjiddagi odamlar kassetalarimizga xaridor bo'lib qoldi. Hasan akam qori akaning ovozlarini yozib olardi, men esa masjid eshigining tagida kassetalarni sotardim. U vaqtlarda fayldan soniyada nusxa ko'chirib qo'yish Husan yo'q edi. Ma'ruzani Husan qayta-qayta eshitib, har uch soatda kassetalarga yozardik. Shu asnoda katta ilm o'zimiz sezmagan holda ongimizga singib boravergan ekan ”.`




function findWord(arr) {
    var newArray = arr.split(' ')

    var mostUsedWord = "";
    var natija="";
    var wordLenght=0;
    var siclWordLenght=1;
    for (let i = 0; i < newArray.length; i++) {
        mostUsedWord = newArray[i]
      siclWordLenght=1;
        for (let j = i + 1; j < newArray.length; j++) {

            if (mostUsedWord === newArray[j]) {
                siclWordLenght++
                // console.log(mostUsedWord);
            }
        }
        if(siclWordLenght>wordLenght){
            wordLenght=siclWordLenght;
            natija=newArray[i];
        }
        
    }

    return console.log(`${wordLenght } , ${natija}`);
}

console.log(findWord(text));
