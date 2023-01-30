const CDNINFO = [
  {
    regionUrl: 'bd1.amarcdn.com',
    regionKey: 'RG_BD_1_DHAKA',
    regionId: 'a91331ac-8005-4dcb-a8c8-ff51b0adbf56',
    regionTitle: 'BD-Dhaka',
  },
  {
    regionUrl: 'us1.amarcdn.com',
    regionKey: 'RG_US_1_CHICAGO',
    regionId: 'cd2046ef-9ae4-4652-8b47-d2207f7112ff',
    regionTitle: 'US-Chicago',
  },
  {
    regionUrl: 'global.amarcdn.com',
    regionKey: 'RG_GLOBAL_CENTRAL',
    regionId: 'f0717041-a2a8-45b9-b580-45b8254b4de3',
    regionTitle: 'Global',
  },
  {
    regionUrl: 'eu1.amarcdn.com',
    regionKey: 'RG_EU_1_GERMANY',
    regionId: 'f9752ee6-d1e2-4ab3-b025-04af108a94ac',
    regionTitle: 'EU-Germany',
  },
];

interface IUpload {
  apiKey: string;
  apiSecretKey: string;
  region: string;
  bucket: string;
  files: Blob[];
  isPrivate?: boolean;
  folder?: string;
}

interface IBucket {
  apiKey: string;
  apiSecretKey: string;
  region: string;
  title: string;
  isPrivate?: boolean;
}

interface IAmarCDN {
  upload: ({ apiKey, apiSecretKey, region, bucket, isPrivate, folder }: IUpload) => void;
  createBucket: ({ apiKey, apiSecretKey, region, title, isPrivate }: IBucket) => void;
  getBucketList: ({ apiKey, apiSecretKey, region }: any) => void;
  deleteBucket: ({ apiKey, apiSecretKey, region, bucketTitle, bucketId }: any) => void;
}
export class AmarCDN implements IAmarCDN {
  async upload({ apiKey, apiSecretKey, region, bucket, files, isPrivate, folder }: IUpload): Promise<any> {
    if (!apiKey) throw new Error('Api Key Id is required!');
    if (!apiSecretKey) throw new Error('Api Secret Key is required!');
    if (!region) throw new Error('Region is required!');
    if (!bucket) throw new Error('Bucket is required!');
    if (!files) throw new Error('Bucket is required!');

    try {
      const formData = new FormData();
      formData.append('bucket', bucket);
      formData.append('region', region);
      files.forEach((img) => formData.append('files', img));
      formData.append('isPrivate', isPrivate ? 'YES' : 'NO');
      formData.append('folder', folder || '');

      let url: any = CDNINFO.find((re) => re.regionKey === region) || null;
      if (!url) throw new Error('Region key is not valid!');

      const headers: any = {
        'api-key': apiKey,
        'api-secret-key': apiSecretKey,
        rid: url.regionId,
      };

      url = 'https://' + url.regionUrl + '/file/upload-many';

      const res = await fetch(url, {
        method: 'POST',
        headers: {
          ...headers,
        },
        body: formData,
      }).catch((err) => {
        throw new Error(err.msg);
      });
      const response = await res.json();

      if (response.code === 200) return response;

      throw new Error(response.msg);
    } catch (err) {
      throw new Error('Something went wrong');
    }
  }

  async createBucket({ apiKey, apiSecretKey, region, title, isPrivate }: IBucket): Promise<any> {
    if (!apiKey) throw new Error('Api Key Id is required!');
    if (!apiSecretKey) throw new Error('Api Secret Key is required!');
    if (!region) throw new Error('Region is required!');
    if (!title) throw new Error('Bucket title is required!');

    try {
      const formData = new FormData();
      formData.append('bucket', title);
      formData.append('region', region);
      formData.append('isPrivate', isPrivate ? 'YES' : 'NO');

      let url: any = CDNINFO.find((re) => re.regionKey === region) || null;
      if (!url) throw new Error('Region key is not valid!');

      const headers: any = {
        'api-key': apiKey,
        'api-secret-key': apiSecretKey,
        rid: url.regionId,
      };

      url = 'https://' + url.regionUrl + '/bucket/create';

      const res = await fetch(url, {
        method: 'POST',
        headers: {
          ...headers,
        },
        body: formData,
      }).catch((err) => {
        throw new Error(err.msg);
      });
      const response = await res.json();

      if (response.code === 200) return response;

      throw new Error(response.msg);
    } catch (err) {
      throw new Error('Something went wrong');
    }
  }

  async getBucketList({ apiKey, apiSecretKey, region }: any): Promise<any> {
    if (!apiKey) throw new Error('Api Key Id is required!');
    if (!apiSecretKey) throw new Error('Api Secret Key is required!');
    if (!region) throw new Error('Region is required!');

    try {
      let url: any = CDNINFO.find((re) => re.regionKey === region) || null;
      if (!url) throw new Error('Region key is not valid!');

      const headers: any = {
        'api-key': apiKey,
        'api-secret-key': apiSecretKey,
        rid: url.regionId,
      };

      url = 'https://' + url.regionUrl + '/bucket/list';

      const res = await fetch(url, {
        method: 'GET',
        headers: {
          ...headers,
        },
      }).catch((err) => {
        throw new Error(err.msg);
      });
      const response = await res.json();

      if (response.code === 200) return response;

      throw new Error(response.msg);
    } catch (err) {
      throw new Error('Something went wrong');
    }
  }

  async deleteBucket({ apiKey, apiSecretKey, region, bucketTitle, bucketId }: any): Promise<any> {
    if (!apiKey) throw new Error('Api Key Id is required!');
    if (!apiSecretKey) throw new Error('Api Secret Key is required!');
    if (!region) throw new Error('Region is required!');

    try {
      const formData = new FormData();
      formData.append('bucket', bucketTitle);
      formData.append('bucketId', bucketId);
      formData.append('region', region);

      let url: any = CDNINFO.find((re) => re.regionKey === region) || null;
      if (!url) throw new Error('Region key is not valid!');

      const headers: any = {
        'api-key': apiKey,
        'api-secret-key': apiSecretKey,
        rid: url.regionId,
      };

      url = 'https://' + url.regionUrl + '/bucket/delete';

      const res = await fetch(url, {
        method: 'POST',
        headers: {
          ...headers,
        },
        body: formData,
      }).catch((err) => {
        throw new Error(err.msg);
      });
      const response = await res.json();

      if (response.code === 200) return response;

      throw new Error(response.msg);
    } catch (err) {
      throw new Error('Something went wrong');
    }
  }
}
