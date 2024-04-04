//Converts bible reference to API-friendly code.

export const bibleCode = {
    "Genesis" : "Kej",
    "Exodus" : "Kel",
    "Leviticus" : "Ima",
    "Numbers" : "Bil",
    "Deuteronomy" : "Ula",
    "Joshua" : "Yos",
    "Judges" : "Hak",
    "Ruth" : "Rut",
    "1 Samuel" : "1 Sam",
    "2 Samuel" : "2 Sam",
    "1 Kings" : "1 Raj",
    "2 Kings" : "2 Raj",
    "1 Chronicles" : "1 Taw",
    "2 Chronicles" : "2 Taw",
    "Ezra" : "Ezr",
    "Nehemiah" : "Neh",
    "Tobit" : "TOB",
    "Judith" : "JDT",
    "Esther" : "Est",
    "1 Maccabees" : "1MA",
    "2 Maccabees" : "2MA",
    "Job" : "Ayb",
    "Psalm" : "Maz",
    "Proverbs":"Ams",
    "Ecclesiastes": "Pkh",
    "Song of Solomon": "Kid",
    "Wisdom":"WIS",
    "Sirach" : "SIR",
    "Isaiah" : "Yes",
    "Jeremiah" : "Yer",
    "Lamentations" : "Rat",
    "Baruch" : "BAR",
    "Ezekiel": "Yeh",
    "Daniel" : "Dan",
    "Hosea" : "Hos",
    "Joel" : "Yoe",
    "Amos" : "Amo",
    "Obadiah": "Oba",
    "Jonah" : "Yun",
    "Micah": "Mik",
    "Nahum" : "Nah",
    "Habakkuk": "Hab",
    "Zephaniah" : "Zef",
    "Haggai" : "Hag",
    "Zechariah" : "Zak",
    "Malachi" : "Mal",
    "Matthew" : "Mat",
    "Mark" : "Mar",
    "Luke" : "Luk",
    "John" : "Yoh",
    "Acts": "Kis",
    "Romans" : "Rom",
    "1 Corinthians" : "1 Kor",
    "2 Corinthians" : "2 Kor",
    "Galatians" : "Gal",
    "Ephesians" : "Efe",
    "Philippians" : "Flp",
    "Colossians" : "Kol",
    "1 Thessalonians" : "1 Tes",
    "2 Thessalonians" : "2 Tes",
    "1 Timothy" : "1 Tim",
    "2 Timothy" : "2 Tim",
    "Titus" : "Tit",
    "Philemon" : "Flm",
    "Hebrews" : "Ibr",
    "James" : "Yak",
    "1 Peter": "1 Pet",
    "2 Peter": "2 Pet",
    "1 John" : "1 Yoh",
    "2 John" : "2 Yoh",
    "3 John" : "3 Yoh",
    "Jude" : "Yud",
    "Revelation" : "Wah"
}
export class BibleClass
{
    constructor(abbreviation = "",  chapter = 0, verse = 0)
    {
        this.abbreviation = abbreviation;
        this.chapter = chapter;
        this.verse = verse;
    }
    getAbbreviation()
    {
        return this.abbreviation;
    }
    getChapter()
    {
        return this.chapter;
    }
    getVerse()
    {
        return this.verse;
    }
}


