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
    {"id" : "1cK1xrtJMeMbfQHrFc_TWUwCKlYzmkov0_zuBxO55iKM",  "name" : "PNT Rupert Transfers 4.0"},
    {"id" : "1QIKO0KcWPYoP4yR5c22jvbY0Ldsx9tO4MqyrMiTTzBc",  "name" : "Packing Slip"},
    {"id" : "1n1EDjZM_fQs3FNKv6dpYl2yt03-pr0_YCSSML6o6rsw",  "name" : "Lodge Order Tracking"},
    {"id" : "135A26u_GSwU7CeP-GOcTmCJe2NGs2KOZDm1hNYa_0i4",  "name" : "PNT WAYBILL"},
    {"id" : "1U7uOTLOaH_N9cLrS4kTZmBSWelcECiXvq7311iuAETw",  "name" : "PNT WAYBILL (Trite's Copy)"},
    {"id" : "1sLhSt5xXPP5y9-9-K8kq4kMfmTuf6a9_l9Ohy0r82gI",  "name" : "Shopify Item Comparison"},
    {"id" : "1o8BB1RWkxK1uo81tBjuxGc3VWArvCdhaBctQDssPDJ0",  "name" : "LODGE SALES"},
    {"id" : "1kKS6yazOEtCsH-QCLClUI_6NU47wHfRb8CIs-UTZa1U",  "name" : "CHARTER & GUIDE SALES"},
    {"id" : "1-cLMSBt96geU_UwYnJnT6AoFK5yk-kYG-iRHjNOQhJ8",  "name" : "PNT Warranty & Service Log"},
    {"id" : "1xKw4GAtNbAsTEodCDmCMbPCbXUlK9OHv0rt5gYzqx9c",  "name" : "Lodge, Charter, & Guide Data"},
    {"id" : "1Jh_XrKKSoCydOyMXvLKgxDr5cjj-BGS5jIrtnZPHM8Q",  "name" : "Master Booking Spreadsheet"},
    {"id" : "1RMsGXaAumkvGdNbSfFhqCiAE07MAg6TWpyHN0PPzZgo",  "name" : "Pacific Net & Twine Ltd. 2024 Booking Program"},
    {"id" : "1WB8DU1rAoRLr3a9t7K5Aa3wCOl08-pqgeV_7Yk4ink8",  "name" : "PurchaseOrder"},
    {"id" : "1z1rI4_8_g62XmEkYPAlUfagiDuMChqhuDNZ8nEJnUTw",  "name" : "Richmond Item Information"},
    {"id" : "159SK6rK3qsc_Q029xf_PWDLRqZNw5I6hCFM6kwovOAo",  "name" : "AccessToAdagio"},
    {"id" : "1EVvtvN8QC4KLXjoNNHFZNblq_Jwyhh7NLEI2OFGQWOk",  "name" : "Barcode Labels"},
    {"id" : "1zhF_6G_t7TrsaIHw1cu2k_In3Rts1FzJUwI3wJiJGHI",  "name" : "PNT Database Clean-Up"},
    {"id" : "1a92S05wxYLAe9UrfRhvS0CKQazEE9-Y7XHQemd_nYDQ",  "name" : "Boat Show Pricing"}
  ]
  
  var dateString = today.toDateString().split(' ');
  dateString = dateString[2] + ' ' + dateString[1] + ' ' + dateString[3]
  const newFolder = ssBackUpFolder.createFolder(dateString)

  fileIds.map(file => {

    try
    {
      ss = DriveApp.getFileById(file["id"])
      ss.makeCopy(ss.getName() + ' | ' + dateString + ' Back-Up', newFolder)
    }
    catch (err)
    {
      Logger.log('Spreadsheet: ' + file["name"] + ' was not found by the provided id: ' + file["id"])
    }
  })
}

function createTrigger()
{
  ScriptApp.newTrigger('createBackUps').timeBased().atHour(22).everyDays(1); // Run at 10pm everyday
}