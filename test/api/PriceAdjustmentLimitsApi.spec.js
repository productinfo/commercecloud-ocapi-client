/**
 * Shop API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 17.8
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
import expect from 'expect.js'
import * as ShopApi from '../../src/index'

var instance

beforeEach(() => {
    instance = new ShopApi.PriceAdjustmentLimitsApi()
})

var getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
        return object[getter]()
    else
        return object[property]
}

var setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
        object[setter](value)
    else
        object[property] = value
}

describe('PriceAdjustmentLimitsApi', () => {
    describe('getPriceAdjustmentLimits', () => {
        it('should call getPriceAdjustmentLimits successfully', () => {
            //uncomment below and update the code to test getPriceAdjustmentLimits
            //instance.getPriceAdjustmentLimits(function(error) {
            //  if (error) throw error;
            //expect().to.be();
            //});
            return Promise.resolve()
        })
    })
})
