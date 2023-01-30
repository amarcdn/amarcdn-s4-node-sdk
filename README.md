# AmarCDN SDK for NodeJs  

install via npm package.

```
npm i amarcdn-s4-node-sdk
```


```
const amarcdn = new AmarCDN();

amarcdn.upload({ apiKey, apiSecretKey, region, bucket, files, isPrivate, folder }).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})
```
