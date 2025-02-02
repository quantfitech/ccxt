import Exchange from './abstract/hollaex.js';
export default class hollaex extends Exchange {
    describe(): any;
    fetchMarkets(params?: {}): Promise<any[]>;
    fetchCurrencies(params?: {}): Promise<{}>;
    fetchOrderBooks(symbols?: string[], limit?: any, params?: {}): Promise<{}>;
    fetchOrderBook(symbol: any, limit?: any, params?: {}): Promise<import("./base/types.js").OrderBook>;
    fetchTicker(symbol: any, params?: {}): Promise<import("./base/types.js").Ticker>;
    fetchTickers(symbols?: string[], params?: {}): Promise<any>;
    parseTickers(response: any, symbols?: string[], params?: {}): any;
    parseTicker(ticker: any, market?: any): import("./base/types.js").Ticker;
    fetchTrades(symbol: any, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Trade[]>;
    parseTrade(trade: any, market?: any): import("./base/types.js").Trade;
    fetchTradingFees(params?: {}): Promise<{}>;
    fetchOHLCV(symbol: any, timeframe?: string, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").OHLCV[]>;
    parseOHLCV(response: any, market?: any, timeframe?: string, since?: any, limit?: any): number[];
    parseBalance(response: any): import("./base/types.js").Balances;
    fetchBalance(params?: {}): Promise<import("./base/types.js").Balances>;
    fetchOpenOrder(id: any, symbol?: string, params?: {}): Promise<any>;
    fetchOpenOrders(symbol?: string, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Order[]>;
    fetchClosedOrders(symbol?: string, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Order[]>;
    fetchOrder(id: any, symbol?: string, params?: {}): Promise<any>;
    fetchOrders(symbol?: string, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Order[]>;
    parseOrderStatus(status: any): string;
    parseOrder(order: any, market?: any): any;
    createOrder(symbol: any, type: any, side: any, amount: any, price?: any, params?: {}): Promise<any>;
    cancelOrder(id: any, symbol?: string, params?: {}): Promise<any>;
    cancelAllOrders(symbol?: string, params?: {}): Promise<import("./base/types.js").Order[]>;
    fetchMyTrades(symbol?: string, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Trade[]>;
    parseDepositAddress(depositAddress: any, currency?: any): {
        currency: any;
        address: string;
        tag: any;
        network: string;
        info: any;
    };
    fetchDepositAddresses(codes?: string[], params?: {}): Promise<{}>;
    fetchDeposits(code?: string, since?: any, limit?: any, params?: {}): Promise<any>;
    fetchWithdrawal(id: any, code?: any, params?: {}): Promise<{
        info: any;
        id: string;
        txid: string;
        timestamp: number;
        datetime: string;
        network: any;
        addressFrom: any;
        address: string;
        addressTo: any;
        tagFrom: any;
        tag: any;
        tagTo: any;
        type: string;
        amount: number;
        currency: any;
        status: any;
        updated: number;
        fee: any;
    }>;
    fetchWithdrawals(code?: string, since?: any, limit?: any, params?: {}): Promise<any>;
    parseTransaction(transaction: any, currency?: any): {
        info: any;
        id: string;
        txid: string;
        timestamp: number;
        datetime: string;
        network: any;
        addressFrom: any;
        address: string;
        addressTo: any;
        tagFrom: any;
        tag: any;
        tagTo: any;
        type: string;
        amount: number;
        currency: any;
        status: any;
        updated: number;
        fee: any;
    };
    withdraw(code: any, amount: any, address: any, tag?: any, params?: {}): Promise<{
        info: any;
        id: string;
        txid: string;
        timestamp: number;
        datetime: string;
        network: any;
        addressFrom: any;
        address: string;
        addressTo: any;
        tagFrom: any;
        tag: any;
        tagTo: any;
        type: string;
        amount: number;
        currency: any;
        status: any;
        updated: number;
        fee: any;
    }>;
    normalizeNumberIfNeeded(number: any): any;
    sign(path: any, api?: any, method?: string, params?: {}, headers?: any, body?: any): {
        url: any;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(code: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): void;
}
