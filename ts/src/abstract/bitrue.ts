// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

export default abstract class Exchange extends _Exchange {
    abstract klinePublicGetPublicJson (params?: {}): Promise<implicitReturnType>;
    abstract klinePublicGetPublicCurrencyJson (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetPing (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetTime (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetExchangeInfo (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetDepth (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetTrades (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetHistoricalTrades (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetAggTrades (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetTicker24hr (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetTickerPrice (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetTickerBookTicker (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetMarketKline (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateGetOrder (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateGetOpenOrders (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateGetAllOrders (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateGetAccount (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateGetMyTrades (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateGetEtfNetValueSymbol (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateGetWithdrawHistory (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateGetDepositHistory (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivatePostOrder (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivatePostWithdrawCommit (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateDeleteOrder (params?: {}): Promise<implicitReturnType>;
    abstract v2PrivateGetMyTrades (params?: {}): Promise<implicitReturnType>;
    abstract openPrivatePostPoseidonApiV1ListenKey (params?: {}): Promise<implicitReturnType>;
    abstract openPrivatePutPoseidonApiV1ListenKeyListenKey (params?: {}): Promise<implicitReturnType>;
    abstract openPrivateDeletePoseidonApiV1ListenKeyListenKey (params?: {}): Promise<implicitReturnType>;
}