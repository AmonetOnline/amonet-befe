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
const stringController_1 = require("../../../core/stringController");
const dealsResponse = require('../../../../private/files/json/deals.json');
function loadDeals() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const isValid = dealsResponse.isValid;
            if (isValid == null && isValid == false) {
                return {};
            }
            return {
                name: dealsResponse.name,
                dealId: stringController_1.randomString(4),
                product_ids: dealsResponse.product_ids,
                category_id: dealsResponse.category_id,
                deal_color: dealsResponse.deal_color
            };
        }
        catch (error) {
            throw {
                status: index_1.HTTPCode.InternalError,
                message: error
            };
        }
    });
}
exports.currentDeals = (request, response) => __awaiter(this, void 0, void 0, function* () {
    try {
        const deals = yield loadDeals();
        response.status(200).json(deals);
    }
    catch (error) {
        response.status(index_1.HTTPCode.InternalError).json(error.message || "Internal error");
    }
});
//# sourceMappingURL=index.js.map