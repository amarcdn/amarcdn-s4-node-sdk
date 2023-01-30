# AmarCDN SDK for NodeJs  

### Install via npm package.

```
npm i amarcdn-s4-node-sdk
```


### Create instance of AmarCDN with below code.


```
const amarcdn = new AmarCDN();
```



### Create Bucket Example

```
amarcdn.createBucket({ apiKey, apiSecretKey, region, title, isPrivate }).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})
```


### Delete Bucket Example

```
amarcdn.deleteBucket({ apiKey, apiSecretKey, region, bucketTitle, bucketId }).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})
```

### Get Bucket List Example

```
amarcdn.getBucketList({ apiKey, apiSecretKey, region }).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})
```


### Upload file example

```
amarcdn.upload({ apiKey, apiSecretKey, region, bucket, files, isPrivate, folder }).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})
```
