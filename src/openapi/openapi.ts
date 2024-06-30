import { OpenAPIV3 } from "openapi-types";
import openapi from "./generate/openapi.json" assert { type: "json" };
console.log(openapi);
const apiDoc: OpenAPIV3.Document = {
    openapi: "3.0.2",
    info: {
        title: "API定義書",
        description: "express-openapiを試すための定義書",
        version: "0.1.0",
    },
    servers: [
        {
            url: "http://localhost:3000",
        },
    ],
    paths: {
        "/user": {
            get: {
                summary: "ユーザー取得API",
                description: "ユーザー情報を取得するAPI",
                operationId: "getUser",
                parameters: [],
                responses: {
                    "200": {
                        description: "取得に成功した場合",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    required: ["name"],
                                    properties: {
                                        name: {
                                            type: "string",
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        "/{sellerId}/orders": {
            post: {
                operationId: "createOrder",
                summary: "Get metadata from the root of the API",
                tags: ["order"],
                parameters: [
                    {
                        in: "path",
                        name: "sellerId",
                        required: true,
                        schema: {
                            type: "integer",
                        },
                    },
                ],
                requestBody: {
                    description: "Information about a new pet in the system",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    planId: {
                                        type: "integer",
                                    },
                                    customerId: {
                                        type: "integer",
                                    },
                                    paymentMethodId: {
                                        enum: ["CREDIT_CARD", "BANK_TEANSFER"],
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    "200": {
                        description: "注文処理を行うAPI",
                    },
                    "400": {
                        description: "不正なリクエスト\n",
                    },
                },
            },
        },
    },
}; //openapi;

export default apiDoc;
