# AmarCDN SDK for NodeJs  

AmarCDN is a product of TongBari. We have started our domain and hosting business since 2011. Over this time, we have re-branding ourself. Now we are providing Global Standard compatible cloud services.

## What is S4?
Before going to tell about S4 we have to know about S3. *S3* is the abbreviation of *Simple Storage Service*. So the S4 is *Secured S3*. Finally S4 stands for *Secured - Simple Storage Service*.

## What is Bucket?
A container for objects stored in AmarCDN S4. AmarCDN will provide a subdomain for the bucket. The bucket is globally unique but your subdomain will be prefix with regional url. *Bucket name should be 4-60 chararacters*


### Install via npm package.

```
npm i amarcdn-s4-node-sdk --save
```

### Install via yarn.

```
yarn add  amarcdn-s4-node-sdk
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
