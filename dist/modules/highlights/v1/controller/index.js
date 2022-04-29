"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../../constants/index");
const ImageController_1 = require("../../../core/ImageController");
const pathProvider_1 = require("../../../static-contents/v1/resources/pathProvider");
const highlightResponse = require('../../../../private/files/json/highlightedProducts.json');
const kAdvertisingImage = 'advertising-image';
const kCategoryId = 'category-id';
const kProductIds = 'associated-product-ids';
function advert(imageBase64hash, associatedCategoryId, associatedProductsIds) {
    if (imageBase64hash == null) {
        return {};
    }
    if (associatedCategoryId != null && associatedCategoryId != undefined) {
        return {
            'advertising_image': imageBase64hash,
            'category_id': associatedCategoryId
        };
    }
    else if (associatedProductsIds != null && associatedProductsIds != undefined) {
        return {
            'advertising_image': imageBase64hash,
            'associated_product_ids': associatedProductsIds
        };
    }
    else {
        return { 'advertising_image': imageBase64hash };
    }
}
function loadHighlights() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const highlights = highlightResponse.highlights;
            if (highlights != null && highlights.length > 0) {
                let currentHighlights = new Array();
                highlights.forEach(function (highlight) {
                    const procutsIds = highlight.associatedProductsIds;
                    const categoryId = highlight.associatedCategoryId;
                    const adervertisingImageName = highlight.adervertisingImageName;
                    if (adervertisingImageName == null) {
                        return;
                    }
                    const fileName = pathProvider_1.imageDirectory() + adervertisingImageName;
                    const imageBase64hash = ImageController_1.encodeFileIntoBase64(fileName);
                    if (categoryId != null && categoryId != 0) {
                        currentHighlights.push(advert(imageBase64hash, categoryId));
                    }
                    else if (procutsIds != null) {
                        currentHighlights.push(advert(imageBase64hash, null, procutsIds));
                    }
                    else {
                        currentHighlights.push(advert(imageBase64hash));
                    }
                });
                return currentHighlights;
            }
            else {
                throw {
                    status: index_1.HTTPCode.NotFound,
                    message: "No advertisement at this time"
                };
            }
        }
        catch (error) {
            throw {
                status: index_1.HTTPCode.InternalError,
                message: error
            };
        }
    });
}
exports.highlightedProducts = (request, response) => __awaiter(this, void 0, void 0, function* () {
    try {
        const highlights = yield loadHighlights();
        response.status(200).json(highlights);
    }
    catch (error) {
        response.status(index_1.HTTPCode.InternalError).json(error.message || "Internal error");
    }
});
//# sourceMappingURL=index.js.map