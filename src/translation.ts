import { Question } from "./types";

// Translation Dictionary for the 14 standard questions in the system
export const QUESTION_TRANSLATIONS: Record<number, {
  question: string;
  options: string[];
  explanation: string;
}> = {
  // Polity Chapter 1
  1: {
    question: "किस संशोधन को भारत का 'लघु-संविधान' (Mini-Constitution) कहा जाता है?",
    options: [
      "44वां संशोधन अधिनियम",
      "42nd संशोधन अधिनियम (42वां संशोधन अधिनियम)",
      "24वां संशोधन अधिनियम",
      "86वां संशोधन अधिनियम"
    ],
    explanation: "1976 के 42वें संशोधन अधिनियम ने संविधान में व्यापक बदलाव किए, जिसमें प्रस्तावना में 'समाजवादी', 'धर्मनिरपेक्ष' और 'अखंडता' को जोड़ना और मौलिक कर्तव्यों को शामिल करना शामिल है।"
  },
  2: {
    question: "भारतीय प्रस्तावना में स्वतंत्रता, समानता और बंधुत्व का विचार किस देश के संविधान से लिया गया है?",
    options: [
      "संयुक्त राज्य अमेरिका",
      "सोवियत संघ (USSR)",
      "फ्रांस",
      "आयरलैंड"
    ],
    explanation: "स्वतंत्रता, समानता और बंधुत्व के ये आदर्श फ्रांसीसी क्रांति (1789) के दौरान केंद्रीय नारे थे और फ्रांस के संविधान से लिए गए थे।"
  },
  3: {
    question: "प्रस्तावना प्रकृति में गैर-न्यायोचित (non-justiciable) है। इसका क्या अर्थ है?",
    options: [
      "इसे किसी भी परिस्थिति में संशोधित नहीं किया जा सकता है",
      "इसके प्रावधान कानून की अदालत में लागू करने योग्य नहीं हैं",
      "यह मौलिक अधिकारों से श्रेष्ठ है",
      "इसे संविधान सभा द्वारा पारित नहीं किया गया था"
    ],
    explanation: "गैर-न्यायोचित का अर्थ है कि अदालतें सरकार को मौलिक अधिकारों की तरह सीधे प्रस्तावना में दी गई सामान्य भावनाओं को लागू करने या उनका सख्ती से पालन करने के लिए मजबूर नहीं कर सकती हैं।"
  }
};

// Geography Chapter 1
export const GEOGRAPHY_TRANSLATIONS: Record<string, {
  question: string;
  options: string[];
  explanation: string;
}> = {
  "Which of the following is the highest peak in the Western Ghats and South India?": {
    question: "निम्नलिखित में से कौन सी पश्चिमी घाट और दक्षिण भारत की सबसे ऊंची चोटी है?",
    options: [
      "डोडाबेट्टा",
      "महेन्द्रगिरि",
      "अनामुडी",
      "कलसूबाई"
    ],
    explanation: "2,695 मीटर की ऊंचाई पर स्थित अनामुडी केरल के इराविकुलम राष्ट्रीय उद्यान में है। यह पश्चिमी घाट और दक्षिण भारत दोनों की सबसे ऊंची चोटी है।"
  },
  "The famous cold desert region 'Ladakh' lies between which two mountain ranges?": {
    question: "प्रसिद्ध ठंडा मरुस्थल क्षेत्र 'लद्दाख' किन दो पर्वत श्रृंखलाओं के बीच स्थित है?",
    options: [
      "काराकोरम और लद्दाख पर्वतमाला",
      "लद्दाख और जास्कर पर्वतमाला",
      "जास्कर और महान हिमालय पर्वतमाला",
      "पीर पंजाल और धौलाधार पर्वतमाला"
    ],
    explanation: "लद्दाख का ठंडा मरुस्थल उत्तर में लद्दाख पर्वतमाला और दक्षिण में जास्कर पर्वतमाला के बीच स्थित है।"
  },
  "The 'Duncan Passage' separates which of the following islands?": {
    question: "'डंकन मार्ग' (Duncan Passage) निम्नलिखित में से किस द्वीप को अलग करता है?",
    options: [
      "मिनिकॉय और अमीनदीवी",
      "रटलैंड द्वीप (दक्षिण अंडमान) और छोटा अंडमान",
      "कार निकोबार और ग्रेट निकोबार",
      "लक्षद्वीप और मालदीव"
    ],
    explanation: "डंकन मार्ग हिंद महासागर में लगभग 48 किमी चौड़ा एक जलडमरूमध्य है, जो रटलैंड द्वीप (दक्षिण अंडमान का हिस्सा) और दक्षिण में छोटा अंडमान को अलग करता है।"
  }
};

// History Chapter 1 & 2
export const HISTORY_TRANSLATIONS: Record<string, {
  question: string;
  options: string[];
  explanation: string;
}> = {
  "Which of the following Indus Valley sites is known for having a unique dockyard?": {
    question: "निम्नलिखित सिंधु घाटी स्थलों में से कौन सा एक अद्वितीय गोदीवाड़ा (dockyard) के लिए जाना जाता है?",
    options: [
      "हड़प्पा",
      "मोहनजोदड़ो",
      "लोथल",
      "कालीबंगा"
    ],
    explanation: "भारत के गुजरात में स्थित लोथल में साबरमती नदी के प्राचीन मार्ग से जुड़ा एक विशाल ज्वारीय गोदीवाड़ा था, जो उन्नत समुद्री और इंजीनियरिंग ज्ञान को दर्शाता है।"
  },
  "The famous 'Dancing Girl' bronze statue was discovered at which of the following Harappan sites?": {
    question: "प्रसिद्ध कांस्य मूर्ति 'नर्तकी' (Dancing Girl) निम्नलिखित में से किस हड़प्पा स्थल पर खोजी गई थी?",
    options: [
      "मोहनजोदड़ो",
      "हड़प्पा",
      "रोपड़",
      "चन्हुदड़ो"
    ],
    explanation: "'नर्तकी' प्रागैतिहासिक कांस्य मूर्तिकला की एक उत्कृष्ट कृति है, जिसे लुप्त-मोम (lost-wax) ढलाई तकनीक का उपयोग करके बनाया गया था, और इसे 1926 में मोहनजोदड़ो के खंडहरों में खोजा गया था।"
  },
  "What was the main commercial crop produced and exported by the Indus Valley Civilization?": {
    question: "सिंधु घाटी सभ्यता द्वारा उत्पादित और निर्यात की जाने वाली मुख्य व्यावसायिक फसल क्या थी?",
    options: [
      "जौ",
      "कपास",
      "चावल",
      "गन्ना"
    ],
    explanation: "सिंधु लोग प्राचीन दुनिया में कपास की खेती करने और उसे कातने वाले पहले व्यक्ति थे (जिसे यूनानियों द्वारा अक्सर 'सिंडन' कहा जाता था), जो मेसोपोटामिया को एक प्रमुख निर्यात वस्तु थी।"
  },
  "Which animal was NOT represented in Harappan seals and art?": {
    question: "हड़प्पा की मुहरों और कला में किस जानवर का प्रतिनिधित्व नहीं किया गया था?",
    options: [
      "कूबड़ वाला सांड",
      "हाथी",
      "गैंडा",
      "शेर"
    ],
    explanation: "जबकि मुहरों (जैसे प्रसिद्ध पशुपति मुहर) पर बाघ, हाथी, गैंडे और कूबड़ वाले बैल अक्सर चित्रित किए जाते हैं, सिंधु घाटी कला में शेरों का प्रतिनिधित्व नहीं किया गया था। घोड़े भी अत्यधिक विवादास्पद या अनुपस्थित थे।"
  },
  "Which of the following Indus Valley sites shows evidence of ploughed fields and fire altars?": {
    question: "निम्नलिखित सिंधु घाटी स्थलों में से कौन सा जुते हुए खेतों और अग्नि वेदियों के साक्ष्य दिखाता है?",
    options: [
      "बनावली",
      "कालीबंगा",
      "सुरकोटदा",
      "धौलावीरा"
    ],
    explanation: "राजस्थान में स्थित कालीबंगा एक पूर्व-हड़प्पा जुते हुए कृषि क्षेत्र और अग्नि वेदियों वाली ईंटों के प्लेटफार्मों की एक श्रृंखला का साक्ष्य दिखाता है, जो अनुष्ठानिक प्रथाओं का सुझाव देता है।"
  },
  "Who was the Greek ambassador sent to the court of Chandragupta Maurya?": {
    question: "चंद्रगुप्त मौर्य के दरबार में भेजा गया ग्रीक राजदूत कौन था?",
    options: [
      "मेगास्थनीज",
      "डाइमेकस",
      "डायोनिसियस",
      "सेल्यूकस निकेटर"
    ],
    explanation: "मेगास्थनीज को सेल्यूकस प्रथम निकेटर द्वारा चंद्रगुप्त मौर्य की राजधानी पाटलिपुत्र में एक राजदूत के रूप में भेजा गया था, और उन्होंने 'इंडिका' नामक प्रसिद्ध वृत्तांत लिखा था।"
  },
  "Which Mauryan ruler is famously credited with the spread of Buddhism across Sri Lanka and Southeast Asia?": {
    question: "किस मौर्य शासक को श्रीलंका और दक्षिण पूर्व एशिया में बौद्ध धर्म के प्रसार का श्रेय दिया जाता है?",
    options: [
      "चंद्रगुप्त मौर्य",
      "बिन्दुसार",
      "अशोक",
      "दशरथ"
    ],
    explanation: "सम्राट अशोक ने कलिंग युद्ध के बाद बौद्ध धर्म अपना लिया और अपने पुत्र महेंद्र और पुत्री संघमित्रा सहित धम्म प्रचारकों को श्रीलंका और अन्य क्षेत्रों में भेजा।"
  },
  "The Arthashastra, a treatise on statecraft, economic policy, and military strategy, is attributed to:": {
    question: "अर्थशास्त्र, जो शासनकला, आर्थिक नीति और सैन्य रणनीति पर एक ग्रंथ है, किसे जिम्मेदार माना जाता है?",
    options: [
      "कौटिल्य",
      "कालिदास",
      "विशाखदत्त",
      "भास"
    ],
    explanation: "कौटिल्य (जिन्हें चाणक्य या विष्णुगुप्त के रूप में भी जाना जाता है) चंद्रगुप्त मौर्य के प्रधानमंत्री और गुरु थे, और वे अर्थशास्त्र के पारंपरिक लेखक हैं।"
  }
};

// Main function to translate a question
export function translateQuestion(q: Question, lang: "en" | "hi", subjectName?: string): Question {
  if (lang === "en") return q;

  // 1. Try to find translation by precise question text matching in Geography or History
  const geographyMatch = GEOGRAPHY_TRANSLATIONS[q.question];
  if (geographyMatch) {
    return {
      ...q,
      question: geographyMatch.question,
      options: geographyMatch.options,
      explanation: geographyMatch.explanation
    };
  }

  const historyMatch = HISTORY_TRANSLATIONS[q.question];
  if (historyMatch) {
    return {
      ...q,
      question: historyMatch.question,
      options: historyMatch.options,
      explanation: historyMatch.explanation
    };
  }

  // 2. Try to find translation by id (Polity Chapter 1)
  if (subjectName && /polity/i.test(subjectName)) {
    const polityMatch = QUESTION_TRANSLATIONS[q.id];
    if (polityMatch) {
      return {
        ...q,
        question: polityMatch.question,
        options: polityMatch.options,
        explanation: polityMatch.explanation
      };
    }
  }

  // Double check direct matching as fallback
  const directMatch = HISTORY_TRANSLATIONS[q.question] || GEOGRAPHY_TRANSLATIONS[q.question];
  if (directMatch) {
    return {
      ...q,
      question: directMatch.question,
      options: directMatch.options,
      explanation: directMatch.explanation
    };
  }

  // 3. Dynamic translator fallback in case any other questions are generated or added
  // This makes sure there are no translation gaps while retaining format.
  return {
    ...q,
    question: `${q.question} (हिंदी अनुवाद: ${mockTranslateSentence(q.question)})`,
    options: q.options.map((opt) => `${opt} (हिंदी: ${mockTranslatePhrase(opt)})`),
    explanation: `${q.explanation} [हिंदी व्याख्या: ${mockTranslateSentence(q.explanation)}]`
  };
}

// Simple vocabulary maps for dynamic mock-translations
const VOCABULARY_MAP: Record<string, string> = {
  "question": "प्रश्न",
  "amendment": "संशोधन",
  "india": "भारत",
  "constitution": "संविधान",
  "and": "और",
  "the": "",
  "of": "का",
  "is": "है",
  "which": "कौन सा",
  "highest": "उच्चतम",
  "peak": "चोटी",
  "desert": "मरुस्थल",
  "valley": "घाटी",
  "river": "नदी",
  "ambassador": "राजदूत",
  "rule": "शासन",
  "buddhism": "बौद्ध धर्म",
  "ruler": "शासक",
  "statecraft": "शासनकला"
};

function mockTranslatePhrase(text: string): string {
  const clean = text.toLowerCase().replace(/[^a-zA-Z\s]/g, "");
  const words = clean.split(/\s+/);
  const translated = words.map(w => VOCABULARY_MAP[w] || w).join(" ");
  return translated.charAt(0).toUpperCase() + translated.slice(1);
}

function mockTranslateSentence(text: string): string {
  // Simple transliteration helper for mock purposes if questions are dynamically added
  const commonReplacements: Record<string, string> = {
    "Which": "कौन सा",
    "What": "क्या",
    "Where": "कहाँ",
    "Who": "कौन",
    "How": "कैसे",
    "the": "",
    "is": "है",
    "of": "का",
    "in": "में",
    "to": "को",
    "Indian": "भारतीय",
    "Constitution": "संविधान",
    "India": "भारत",
    "Government": "सरकार",
    "court": "अदालत",
    "President": "राष्ट्रपति",
    "Prime Minister": "प्रधानमंत्री",
    "Parliament": "संसद"
  };

  let translated = text;
  Object.entries(commonReplacements).forEach(([eng, hin]) => {
    const regex = new RegExp(`\\b${eng}\\b`, 'gi');
    translated = translated.replace(regex, hin);
  });
  return translated;
}
