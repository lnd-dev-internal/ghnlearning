const fs = require('fs');
const path = require('path');

// Fix mojibake: the files were saved as UTF-8 bytes interpreted as Latin-1
// We need to re-encode: read as latin1 (to get raw bytes), then decode as utf-8
const files = ['leaders-talk.html', 'dien-gia.html', 'workshop.html'];
const dir = __dirname;

files.forEach(file => {
  const filePath = path.join(dir, file);
  // Read as binary (latin1) to get raw bytes
  const raw = fs.readFileSync(filePath, 'latin1');
  // Convert to Buffer then decode as UTF-8
  const buf = Buffer.from(raw, 'latin1');
  const fixed = buf.toString('utf8');
  // Write back as UTF-8
  fs.writeFileSync(filePath, fixed, 'utf8');
  console.log(`Fixed: ${file} (${raw.length} -> ${fixed.length} chars)`);
});

// Now fix image URLs in dien-gia.html - map NFD decomposed names to actual NFC filenames
const dienGiaPath = path.join(dir, 'dien-gia.html');
let dienGia = fs.readFileSync(dienGiaPath, 'utf8');

// Map of NFD (decomposed) filenames used in HTML to NFC (composed) actual filenames on disk
const imageFixMap = {
  "Lương Dũng Nhân.jpg": "Lương Dũng Nhân.jpg",
  "Hoàng Giang.png": "Hoàng Giang.png", 
  "Đỗ Đình Thương.jpg": "Đỗ Đình Thương.jpg",
  "Phạm Từ Thứ.jpg": "Phạm Từ Thứ.jpg",
  "Nguyễn Lâm Hoàng Yên.png": "Nguyễn Lâm Hoàng Yên.png",
  "Phạm Hoàng Long.png": "Phạm Hoàng Long.png",
  "Thơm Trần.png": "Thơm Trần.png",
  "Trần Thế Trung.png": "Trần Thế Trung.png",
  "Giáp Đức Thắng.png": "Giáp Đức Thắng.png",
  "Nguyễn Minh Trung.png": "Nguyễn Minh Trung.png",
  "Nhi Nguyễn.png": "Nhi Nguyễn.png",
  "Lê Thanh Bính.png": "Lê Thanh Bính.png",
  "Kim Lê Huy.png": "Kim Lê Huy.png",
  "Nguyễn Hoàng Nam.png": "Nguyễn Hoàng Nam.png",
  "Ngân Trần.png": "Ngân Trần.png",
  "Cao Tuấn Minh.png": "Cao Tuấn Minh.png",
};

// Get actual filenames from disk
const diskFiles = fs.readdirSync(dir);
const imageFiles = diskFiles.filter(f => /\.(png|jpg|jpeg)$/i.test(f));
console.log('\nImage files on disk:');
imageFiles.forEach(f => console.log(`  "${f}"`));

// Try to find and replace NFD URLs with URL-encoded versions of actual disk filenames  
// The issue is that macOS creates NFD filenames but Windows uses NFC
// Let's check what's actually in the HTML source for image URLs
const imgUrlRegex = /background-image:\s*url\('([^']+)'\)/g;
let match;
const foundUrls = [];
while ((match = imgUrlRegex.exec(dienGia)) !== null) {
  foundUrls.push(match[1]);
}
console.log('\nImage URLs found in dien-gia.html:');
foundUrls.forEach(u => console.log(`  "${u}"`));

// For each URL in HTML, try to find matching file on disk
// Use NFC normalization to match
foundUrls.forEach(url => {
  const urlNFC = url.normalize('NFC');
  const diskMatch = imageFiles.find(f => f.normalize('NFC') === urlNFC);
  if (diskMatch && diskMatch !== url) {
    console.log(`\n  Replacing: "${url}"`);
    console.log(`       With: "${diskMatch}"`);
    dienGia = dienGia.split(url).join(diskMatch);
  } else if (!diskMatch) {
    // Try percent-encoding approach
    const decoded = decodeURIComponent(url);
    const decodedNFC = decoded.normalize('NFC');
    const diskMatch2 = imageFiles.find(f => f.normalize('NFC') === decodedNFC);
    if (diskMatch2) {
      console.log(`\n  Replacing: "${url}"`);
      console.log(`       With: "${diskMatch2}"`);
      dienGia = dienGia.split(url).join(diskMatch2);
    } else {
      console.log(`\n  NO MATCH for: "${url}" (NFC: "${urlNFC}")`);
    }
  } else {
    console.log(`\n  OK: "${url}"`);
  }
});

fs.writeFileSync(dienGiaPath, dienGia, 'utf8');
console.log('\nDone! Fixed image URLs in dien-gia.html');
