# AmarCDN SDK for NodeJs  




``
const amarcdn = new AmarCDN();
amarcdn.upload({ apiKey, apiSecretKey, region, bucket, files, isPrivate, folder }).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})
``
