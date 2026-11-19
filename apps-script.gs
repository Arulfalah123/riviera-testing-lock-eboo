// Apps Script untuk menerima data form ebook dan menyimpannya ke Google Sheet.
// Cara pasang:
// 1. Buka script.google.com > New project, tempel kode ini.
// 2. Deploy > New deployment > type: Web app
//    - Execute as: Me
//    - Who has access: Anyone
// 3. Salin URL Web App, tempel ke formEndpoint di index.html.

const SHEET_ID = "1G1ROhPUHLabIkLgAeNl5ZbgC0vI5GDs5bIOEaW2Emho";
const SHEET_NAME = "Sheet1";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    sheet.appendRow([data.waktu, data.nama, data.whatsapp, data.instansi, data.ebook]);
    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
