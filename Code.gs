// Google Sheet > Extensions > Apps Script-এ পুরো কোড পেস্ট করুন
const SECRET = 'change-me-123'; // নিজের গোপন কোড দিন (ইংরেজি/সংখ্যা), অ্যাপেও একই কোড দিন

function out(o){ return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }

function doPost(e){
  const d = JSON.parse(e.postData.contents);
  if (d.key !== SECRET) return out({error:'key'});
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  for (const n in d.sheets){
    const sh = ss.getSheetByName(n) || ss.insertSheet(n);
    sh.clear();
    const r = d.sheets[n];
    if (r.length){
      const w = Math.max.apply(null, r.map(x=>x.length));
      r.forEach(x=>{ while(x.length<w) x.push(''); });
      sh.getRange(1,1,r.length,w).setValues(r);
      sh.setFrozenRows(1);
    }
  }
  const b = ss.getSheetByName('_backup') || ss.insertSheet('_backup');
  b.clear();
  const t = d.backup, c = [];
  for (let i=0;i<t.length;i+=40000) c.push([t.substr(i,40000)]);
  b.getRange(1,1,c.length,1).setValues(c);
  b.hideSheet();
  return out({ok:1});
}

function doGet(e){
  if (e.parameter.key !== SECRET) return out({error:'key'});
  const b = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('_backup');
  const v = b ? b.getDataRange().getValues().map(r=>r[0]).join('') : '';
  return out({backup:v});
}
