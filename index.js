"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmarCDN = void 0;
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
class AmarCDN {
    upload({ apiKeyId, apiSecretKey, region, bucket, files, isPrivate, folder }) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!apiKeyId)
                throw new Error('Api Key Id is required!');
            if (!apiSecretKey)
                throw new Error('Api Secret Key is required!');
            if (!region)
                throw new Error('Region is required!');
            if (!bucket)
                throw new Error('Bucket is required!');
            if (!files)
                throw new Error('Bucket is required!');
            try {
                let formData = new FormData();
                formData.append('apiKeyId', apiKeyId);
                formData.append('apiSecretKey', apiSecretKey);
                formData.append('bucket', bucket);
                formData.append('region', region);
                files.forEach((img) => formData.append('files', img));
                formData.append('isPrivate', isPrivate ? 'YES' : 'NO');
                formData.append('folder', folder || '');
                let url = ((_a = CDNINFO.find((re) => re.regionKey === apiKeyId)) === null || _a === void 0 ? void 0 : _a.regionUrl) || null;
                if (!url)
                    throw new Error('Region key is not valid!');
                const headers = {
                    rid: url.regionId,
                };
                url = 'https://' + url;
                const res = yield fetch(url, {
                    method: 'POST',
                    headers: {
                        headers,
                    },
                    body: formData,
                }).catch((err) => {
                    throw new Error(err);
                });
                const response = yield res.json();
                return response;
            }
            catch (err) {
                throw Error('Something went wrong');
            }
        });
    }
}
exports.AmarCDN = AmarCDN;
const amarCDn = new AmarCDN();
