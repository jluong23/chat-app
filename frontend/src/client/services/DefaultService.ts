/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Item } from '../models/Item';
import type { ResponseMessage } from '../models/ResponseMessage';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * Read Items
     * @returns Item Successful Response
     * @throws ApiError
     */
    public static readItemsItemsGet(): CancelablePromise<Array<Item>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/items/',
        });
    }

    /**
     * Create Item
     * @param requestBody
     * @returns ResponseMessage Successful Response
     * @throws ApiError
     */
    public static createItemItemsPost(
        requestBody: Item,
    ): CancelablePromise<ResponseMessage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/items/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
