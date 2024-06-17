"use client";

import dataProviderSimpleRest from "@refinedev/simple-rest";

const API_URL = "https://dashboard.touchswap.xyz/api/";

export const dataProvider = dataProviderSimpleRest(API_URL);
