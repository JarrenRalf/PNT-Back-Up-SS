function createBackUps()
{
  const today = new Date();
  const Num_Days_Ago = 14;
  const two_weeks_ago = today.getTime() - 3600000*24*Num_Days_Ago;
  const ssBackUpFolder = DriveApp.getFolderById('1-VLEJEUJUpbNOAHQDjR-jjIeuEWMpNQe')
  const allFolders = ssBackUpFolder.getFolders()
  var ss, folder;

  // Delete the folders that are more than 2 weeks old
  while (allFolders.hasNext())
  {
    folder = allFolders.next();

    if (folder.getDateCreated() < two_weeks_ago)
      folder.setTrashed(true)
  }

  const fileIds = [
    {"id" : "130AZ1zZ0ImnIB-uA8juMGUAfOswfxD7rH0ldVNk1Zq0",  "name" : "Adrian's Adagio Update Sheet"}, 
    {"id" : "1fSkuXdmLEjsGMWVSmaqbO_344VNBxTVjdXFL1y0lyHk",  "name" : "PNT Richmond Inventory 4.0"},
    {"id" : "181NdJVJueFNLjWplRNsgNl0G-sEJVW3Oy4z9vzUFrfM",  "name" : "PNT Parksville Transfers 4.0"},
    {"id" : "1IEJfA5x7sf54HBMpCz3TAosJup4TrjXdUOqm4KK3t9c",  "name" : "PNT Rupert Transfers 4.5"},
    {"id" : "1HBDGsr6TCqredSnNrZdto4_GkffQxv3cNTomcOF3-5Q",  "name" : "PNT Inflow Inventory"},
    {"id" : "1gXQ7uKEYPtyvFGZVmlcbaY6n6QicPBhnCBxk-xqwcFs",  "name" : "Discount"},
    {"id" : "1QIKO0KcWPYoP4yR5c22jvbY0Ldsx9tO4MqyrMiTTzBc",  "name" : "Packing Slip (Version 1.0)"},
    {"id" : "1AGaLjrJk-OxaltOFhggcxZFv1HexrldNzOq1TIANrz0",  "name" : "OrderEntry"},
    {"id" : "1DDD-LPDCZlfexouWsF0OjTE2AceC1SwnLgDZmJmKtfI",  "name" : "Quick Receipt for PurchaseOrder"},
    {"id" : "1b6CHJNq8voW9UQRXWhTNLpOIRWS2hkZ7liZ3jBRTGto",  "name" : "2025 Lodge Order Tracking 2.0"},
    {"id" : "1gWp17inaULaYOjDzv6j3IycSt2alT-qX5j5kq_STybc",  "name" : "QCL Labels"},
    {"id" : "135A26u_GSwU7CeP-GOcTmCJe2NGs2KOZDm1hNYa_0i4",  "name" : "PNT WAYBILL"},
    {"id" : "1U7uOTLOaH_N9cLrS4kTZmBSWelcECiXvq7311iuAETw",  "name" : "PNT WAYBILL (Trite's Copy) with Piece Counts"}, 
    {"id" : "1sLhSt5xXPP5y9-9-K8kq4kMfmTuf6a9_l9Ohy0r82gI",  "name" : "Shopify Item Comparison"},
    {"id" : "1Q4fCsaIgx5-lYW0tdRPrAuLapbMlf9VbZBQOhAz0gxc",  "name" : "Current Leaders"},
    {"id" : "1IpZQAkonprPAwUzCKsq_yNYsohyhRiEFl2JkCzrraJI",  "name" : "PNT Richmond Trites Lodge Counts"},
    {"id" : "1xvYkkeodVMFew-YCWdmtcNIET920Ko_A0kS6HmePjSU",  "name" : "Lodge Order Processor V2"},
    {"id" : "1o8BB1RWkxK1uo81tBjuxGc3VWArvCdhaBctQDssPDJ0",  "name" : "LODGE SALES"},
    {"id" : "1kKS6yazOEtCsH-QCLClUI_6NU47wHfRb8CIs-UTZa1U",  "name" : "CHARTER & GUIDE SALES"},
    {"id" : "1-cLMSBt96geU_UwYnJnT6AoFK5yk-kYG-iRHjNOQhJ8",  "name" : "PNT Warranty & Service Log"},
    {"id" : "1xKw4GAtNbAsTEodCDmCMbPCbXUlK9OHv0rt5gYzqx9c",  "name" : "Lodge, Charter, & Guide Data"},
    {"id" : "1YOthLiVfhTd_p0H-gqYQ0xCpJvfjp3zz-RTWZ7Q3I4I",  "name" : "PNT Inventory Prediction Tool"},
    {"id" : "1MVHnXnkoqRjp2gOmDGHPzcWxLeXRDJ5twrmIO17cgss",  "name" : "Master Booking Spreadsheet"},
    {"id" : "1EAUG08kCsNRcBUXOru5ZGxNg_S3NLMwcppnE5AXANSs",  "name" : "Pacific Net & Twine Ltd. 2025 Booking Program"},
    {"id" : "1Fx_0LCt8_j1VeM6w0vCup_1GXjrHT5gBfUaojzvP46Y",  "name" : "PurchaseOrder"},
    {"id" : "1z1rI4_8_g62XmEkYPAlUfagiDuMChqhuDNZ8nEJnUTw",  "name" : "Richmond Item Information"},
    {"id" : "159SK6rK3qsc_Q029xf_PWDLRqZNw5I6hCFM6kwovOAo",  "name" : "AccessToAdagio"},
    {"id" : "1Wh0h5kCYeIScGp201QOxZCd_NKTxhx5NGx8KA29Q9nw",  "name" : "Items to be deleted"},
    {"id" : "1kkNNuGK6LdFcOKXg4560HXQu0lFJtAvw5PtGCvUZdxY",  "name" : "Barcode Labels"},
    {"id" : "1EVvtvN8QC4KLXjoNNHFZNblq_Jwyhh7NLEI2OFGQWOk",  "name" : "Barcode Labels (Trites)"},
    {"id" : "1PAu5YjNZ1wd5T7W8ojcCe5O8-JvYuIin4r9gXULRNV8",  "name" : "Database Analyzer"},
    {"id" : "1a92S05wxYLAe9UrfRhvS0CKQazEE9-Y7XHQemd_nYDQ",  "name" : "Boat Show Pricing"}
  ]
  
  var dateString = today.toDateString().split(' ');
  dateString = dateString[2] + ' ' + dateString[1] + ' ' + dateString[3]
  const newFolder = ssBackUpFolder.createFolder(dateString)

  fileIds.map(file => {

    try
    {
      ss = DriveApp.getFileById(file["id"])
      ss.makeCopy('Back-Up ' + ss.getName() + ' | ' + dateString, newFolder)
    }
    catch (err)
    {
      Logger.log('Spreadsheet: ' + file["name"] + ' was not found by the provided id: ' + file["id"])
    }
  })
}

function createTrigger()
{
  ScriptApp.newTrigger('createBackUps').timeBased().atHour(22).everyDays(1).create(); // Run at 10pm everyday
}