import { bibleCode, BibleClass } from "./bibleCode.js";



export function convertBibleCode(code)
{
    let bibleClass = new BibleClass();
    let splitArray = code.split(" ");
    if(splitArray.length === 2)
    {
        let splitVerse = splitArray[1].split(":");
        bibleClass.abbreviation = bibleCode[splitArray[0]];
        bibleClass.chapter = splitVerse[0];
        bibleClass.verse = splitVerse[1];
    }
    
    return bibleClass;
}

