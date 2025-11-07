// --- 1. Configuration ---

/**
 * APPROVED_ITEM_MAP
 * Key: Normalized model (all caps, no special chars, preserves Chinese)
 * Value: Full display name (Brand + Model)
 */
const APPROVED_ITEM_MAP = new Map([
    // --- Chinese Dictionaries ---
    ['新编学生实用词典(第七版增订本)', '新亚出版社 新编学生实用词典 (第七版增订本)'],
    ['新编小学实用词典', '新亚出版社 新编小学实用词典'],
    ['新世纪学生华语词典', '怡学出版社・商务印书馆 新世纪学生华语词典'],
    // --- Chinese E-Dictionaries ---
    ['BESTAALLPASSS2', 'Besta All Pass S2'],
    ['BESTAALLPASS6', 'Besta All Pass 6'],
    ['BESTAALLPASSS1', 'Besta All Pass S1'],
    ['BESTAALLPASS3', 'Besta All Pass 3'],
    ['BESTAALLPASS5', 'Besta All Pass 5'],
    ['BESTAALLPASS2', 'Besta All Pass 2'],
    ['HANSVISIONPX2131', 'HansVision PX2131'],
    ['HANSVISIONPX2181', 'HansVision PX2181'],
    ['HANSVISIONPX2231', 'HansVision PX2231'],
    ['HANSVISIONPX2281', 'HansVision PX2281'],
    ['HANSVISIONPX2201', 'HansVision PX2201'],
    ['HANSVISIONPX2221', 'HansVision PX2221'],
    ['HANSVISIONPX2101', 'HansVision PX2101'],
    ['HANSVISIONPX2051', 'HansVision PX2051'],
    ['ZZNEW-A+', 'ZZ New-A+'],
    // --- Previously Approved Chinese ---
    ['华语规范字典', '胜利出版 华语规范字典'],
    ['华语规范词典', '胜利出版 华语规范词典'],
    ['规范汉语词典', '联营出版 规范汉语词典'],
    ['时代商务馆学华语词典', '泛太平洋 时代商务馆学华语词典'],
    ['新汉语字典', '联营出版 新汉语字典'],
    ['新华现代汉语词典', '思达出版 新华现代汉语词典'],
    ['新世纪学生新词典', '怡学出版社 新世纪学生新词典'],
    ['新世纪高级汉语词典', '怡学出版社 新世纪高级汉语词典'],
    ['现代汉语词典(第五版)', '商务印书馆 现代汉语词典(第五版)'],
    ['最新规范汉语词典', '联营出版 最新规范汉语词典'],
    ['最新汉语大词典(世纪版)', '联营出版 最新汉语大词典(世纪版)'],
    ['实用汉语词典', '胜利书局 实用汉语词典'],
    ['时代新汉语词典', '联邦出版社 时代新汉语词典'],
    ['现代汉语新词典', '商务印书馆 现代汉语新词典'],
    ['现代汉语小词典(增补本)', '朗文出版 现代汉语小词典(增补本)'],
    ['现代华语词典', '上海书局 现代华语词典'],
    ['现代华语词典(修订版)', '中图上海书局 现代华语词典(修订版)'],
    ['现代实用汉语词典', '联营出版 现代实用汉语词典'],
    ['新华字典(第十版)', '商务印书馆 新华字典(第十版)'],
    ['新汉语词典', '联营出版 新汉语词典'],
    ['新编学生词典', '上海书局 新编学生词典'],
    ['新世纪汉语词典', '怡学出版社 新世纪汉语词典'],
    ['最新学生词典', '联营出版 最新学生词典'],
    ['世纪版新汉语字典', '联营出版 世纪版新汉语字典'],
    ['最新规范汉语词典(修订版)', '联营出版 最新规范汉语词典(修订版)'],
    ['新世纪高级学习词典', '怡学出版社 新世纪高级学习词典'],
    ['最新汉语大词典(第5版)', '联营出版 最新汉语大词典(第5版)'],
    ['全球华语大词典', 'Marshall Cavendish 全球华语大词典'],
    // --- Previously Approved E-Chinese ---
    ['BESTAALLPASS-1', 'Besta All Pass-1'],
    ['BESTANEWALLPASS-1', 'Besta New All Pass-1'],
    ['ZZNEW-01', 'ZZ New-01'],
    ['BESTAALLPASS1', 'Besta All Pass 1'],
    // --- Malay E-Dictionary ---
    ['GLOBALTRANSLATOR/MODELM188', 'Global Translator / Model M188'],
    // --- Previously Approved Malay ---
    ['KAMUSDEWAN(EDISIKEDUA)', 'Kamus Dewan (Edisi Kedua)'],
    ['KAMUSDEWAN(EDISIKETIGA)', 'Kamus Dewan (Edisi Ketiga)'],
    ['KAMUSDEWAN(EDISIKEEMPAT)', 'Kamus Dewan (Edisi Keempat)'],
    ['KAMUSPELAJAR(TERBITANKBSM)', 'Kamus Pelajar (Terbitan KBSM)'],
    ['KAMUSPELAJAR(TERBITANKHASKBSM)', 'Kamus Pelajar (Terbitan Khas KBSM)'],
    ['KAMUSPELAJARBAHASAMALAYSIA(EDISIKEDUA)', 'Kamus Pelajar Bahasa Malaysia (Edisi Kedua)'],
    ['KAMUSPELAJARBAHASAMALAYSIA(TERBITANKHASKBSM)', 'Kamus Pelajar Bahasa Malaysia (Terbitan Khas KBSM)'],
    ['KAMUSPELAJARBAHASAMELAYUDEWAN(EDISIKEDUA)', 'Kamus Pelajar Bahasa Melayu Dewan (Edisi Kedua)'],
    ['KAMUSKOMPREHENSIFBAHASAMELAYU', 'Kamus Komprehensif Bahasa Melayu'],
    // --- Tamil (Latin-based names only) ---
    ['LAKSHMISLEARNERSTAMILLANGUAGEDICTIONARY(REVISEDEDITION)', "Lakshmi's Learners' Tamil Language Dictionary (Revised Edition)"],
    ['UMANATRAMILPERAGARAATHI(REVISEDEDITION)', 'Uma Natramil Peragaraathi (Revised Edition)'],
    ['LAKSHMISLEARNERSTAMILLANGUAGEDICTIONARY', "Lakshmi's Learners' Tamil Language Dictionary"],
    ['PUTHIYATAMILAKARAATHI(NEWTAMIL-TAMILDICTIONARY)', 'Puthiya Tamil Akaraathi (New Tamil - Tamil Dictionary)'],
    ['TAMIL-TAMILAKARAMUTHALI(MSHANMUGAMPILLAI)', 'Tamil - Tamil Akara Muthali (M Shanmugam Pillai)'],
    ['KRIYAVINTARKALATTAMILAKARATI(TAMIL-TAMILVERSIONONLY)', 'Kriyavin Tarkalat Tamil Akarati (Tamil - Tamil Version only)'],
    ['KAZHAKATTAMILAKARAATHI(TAMIL-TAMILDICTIONARY)', 'Kazhakat Tamil Akaraathi (Tamil - Tamil Dictionary)'],
    ['KAZHAKATTAMILKAIYAKARAATHI(TAMIL-TAMILDICTIONARY)', 'Kazhakat Tamil Kaiyakaraathi (Tamil - Tamil Dictionary)'],
]);


// --- 2. Global Variables ---
const SCAN_INTERVAL_MS = 2000;
let recognitionBox = { left: 0, top: 0, width: 0, height: 0 };
let tesseractWorker;
let videoTrack;
let hiddenCanvas;
let hiddenCtx;

// --- 3. Get HTML Elements ---
// We define them here, but they will be assigned *inside* the listener
let video;
let overlay;
let ctx;
let statusText;

// --- 4. Main Initialization Function (Stable Version) ---
async function initializeApp() {
    
    // --- Step 1: Assign HTML Elements (Now safe) ---
    video = document.getElementById('video-feed');
    overlay = document.getElementById('overlay');
    ctx = overlay.getContext('2d');
    statusText = document.getElementById('status-text');
    
    // Create hidden canvas
    hiddenCanvas = document.createElement('canvas');
    hiddenCtx = hiddenCanvas.getContext('2d', { willReadFrequently: true });

    // --- Step 2: Load the AI Model First ---
    try {
        const logger = (m) => {
            let status = m.status;
            if (status === "downloading" || status === "loading language model") {
                status = `Loading AI Model... (${status}: ${Math.round(m.progress * 100)}%)`;
            } else if (status === "initializing" || status === "loaded") {
                status = "Initializing AI Model...";
            } else if (status === "recognizing text") {
                status = `Scanning... (${Math.round(m.progress * 100)}%)`;
            }
            if (statusText) {
                statusText.innerHTML = `<p>${status}</p>`;
            }
        };
    
        tesseractWorker = await Tesseract.createWorker('eng+chi_sim', 1, { logger });

        await tesseractWorker.setParameters({
            tessedit_pageseg_mode: '7',
        });

    } catch (err) {
        console.error("Tesseract loading error:", err);
        statusText.innerHTML = "<p>Error: Could not load AI model.</p>";
        return; 
    }

    // --- Step 3: AI is loaded, now ask for the camera ---
    statusText.innerHTML = "<p>Requesting Camera Access...</p>";
    
    try {
        const constraints = { video: { facingMode: 'environment' } };
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = stream;
        videoTrack = stream.getVideoTracks()[0]; 
        
        // --- Step 4: Once the camera stream starts, set up the scanner ---
        video.onloadedmetadata = () => {
            overlay.width = video.videoWidth;
            overlay.height = video.videoHeight;
            
            const boxWidth = overlay.width * 0.9;
            const boxHeight = overlay.height * 0.25;
            
            recognitionBox.left = (overlay.width - boxWidth) / 2;
            recognitionBox.top = (overlay.height - boxHeight) / 2;
            recognitionBox.width = boxWidth;
            recognitionBox.height = boxHeight;

            hiddenCanvas.width = recognitionBox.width;
            hiddenCanvas.height = recognitionBox.height;

            drawOverlay([]); // Draw initial guide box
            
            // --- Step 5: All loaded! Start the scanning loop ---
            statusText.innerHTML = "<p>Aim at dictionary title or model</p>";
            setInterval(performScan, SCAN_INTERVAL_MS);
        };
    } catch (err) {
        console.error("Camera Error:", err);
        statusText.innerHTML = "<p>Camera access denied. Please allow camera access in your browser settings.</p>";
    }

    // --- Step 6: Add Tap-to-Focus ---
    video.addEventListener('click', () => {
        if (videoTrack && videoTrack.getCapabilities().focusMode) {
            console.log("Re-focusing camera...");
            
            videoTrack.applyConstraints({
                advanced: [{ focusMode: 'continuous' }]
            }).catch(e => console.error("Focus apply failed:", e));
            
            statusText.innerHTML = "<p style='text-align: center;'>Focusing...</p>";
            setTimeout(() => {
                statusText.innerHTML = "<p style='text-align: center;'>Aim at dictionary title or model</p>";
            }, 1000);
        }
    });
}

// --- 5. The Scanning Function ---
async function performScan() {
    if (!tesseractWorker || !video.srcObject) return;

    hiddenCtx.drawImage(
        video,
        recognitionBox.left, recognitionBox.top,
        recognitionBox.width, recognitionBox.height,
        0, 0,
        recognitionBox.width, recognitionBox.height
    );
    
    const imageToScan = hiddenCanvas.toDataURL('image/png');
    const { data: ocrData } = await tesseractWorker.recognize(imageToScan);
    processOcrResult(ocrData);
}

// --- 6. Levenshtein Distance Function (Unchanged) ---
function calculateSimilarity(s1, s2) {
    let longer = s1;
    let shorter = s2;
    if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
    }
    let longerLength = longer.length;
    if (longerLength === 0) {
        return 100;
    }
    return (longerLength - editDistance(longer, shorter)) / longerLength * 100;
}

function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    let costs = new Array();
    for (let i = 0; i <= s1.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++) {
            if (i == 0) {
                costs[j] = j;
            } else {
                if (j > 0) {
                    let newValue = costs[j - 1];
                    if (s1.charAt(i - 1) != s2.charAt(j - 1))
                        newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0)
            costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}

// --- 7. Process and Draw Results ---
function processOcrResult(data) {
    // Normalization to preserve Chinese characters
    const originalDetectedText = data.text.toUpperCase()
                                         .replace(/[\s\-_/()\n\r]/g, "");

    const textVariations = new Set([
        originalDetectedText,
        originalDetectedText.replaceAll('B', '8'),
        originalDetectedText.replaceAll('8', 'B'),
        originalDetectedText.replaceAll('S', '5'),
        originalDetectedText.replaceAll('5', 'S'),
    ]);

    let matches = [];

    for (const detectedText of textVariations) {
        if (detectedText.length < 2) continue;
        
        for (const [normalizedModel, fullDisplayName] of APPROVED_ITEM_MAP) {
            
            const similarity = calculateSimilarity(detectedText, normalizedModel);

            if (similarity > 60 || detectedText.includes(normalizedModel)) {
                matches.push({
                    name: fullDisplayName,
                    percent: Math.round(similarity)
                });
            }
        }
    }

    const uniqueMatches = [...new Map(matches.map(m => [m.name, m])).values()];
    uniqueMatches.sort((a, b) => b.percent - a.percent);

    if (uniqueMatches.length > 0) {
        let listHtml = "<ul>";
        for (const match of uniqueMatches) {
            listHtml += `<li><strong>${match.percent}%</strong> ${match.name}</li>`;
        }
        listHtml += "</ul>";
        statusText.innerHTML = listHtml;
    } else {
        if (originalDetectedText.length > 0) {
            statusText.innerHTML = `<p style="text-align: center; color: #FF4136;">Detected: ${originalDetectedText}</p>`;
        } else {
            statusText.innerHTML = "<p style='text-align: center;'>Aim at dictionary title or model</p>";
        }
    }

    drawOverlay(data.words);
}

// --- 8. Draw Overlay Function ---
function drawOverlay(words = []) {
    ctx.clearRect(0, 0, overlay.width, overlay.height);

    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 6;
    ctx.strokeRect(
        recognitionBox.left,
        recognitionBox.top,
        recognitionBox.width,
        recognitionBox.height
    );

    ctx.strokeStyle = "#007aff";
    ctx.lineWidth = 2;
    ctx.font = '20px Arial';
    ctx.fillStyle = "#007aff";

    words.forEach(word => {
        const box = word.bbox;
        const x = box.x0 + recognitionBox.left;
        const y = box.y0 + recognitionBox.top;
        const w = box.x1 - box.x0;
        const h = box.y1 - box.y0;

        ctx.strokeRect(x, y, w, h);
    });
}

// --- 9. Start the App ---
// This is the CRITICAL FIX. We wait for the page to be loaded
// before we try to run any code.
window.addEventListener('DOMContentLoaded', initializeApp);
