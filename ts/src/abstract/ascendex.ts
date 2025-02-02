// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

export default abstract class Exchange extends _Exchange {
    abstract v1PublicGetAssets (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetProducts (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetTicker (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetBarhistInfo (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetBarhist (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetDepth (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetTrades (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetCashAssets (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetCashProducts (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetMarginAssets (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetMarginProducts (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetFuturesCollateral (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetFuturesContracts (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetFuturesRefPx (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetFuturesMarketData (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetFuturesFundingRates (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetRiskLimitInfo (params?: {}): Promise<implicitReturnType>;
    abstract v1PublicGetExchangeInfo (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateGetInfo (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateGetWalletTransactions (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateGetWalletDepositAddress (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateGetDataBalanceSnapshot (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateGetDataBalanceHistory (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateAccountCategoryGetBalance (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateAccountCategoryGetOrderOpen (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateAccountCategoryGetOrderStatus (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateAccountCategoryGetOrderHistCurrent (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateAccountCategoryGetRisk (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateAccountCategoryPostOrder (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateAccountCategoryPostOrderBatch (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateAccountCategoryDeleteOrder (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateAccountCategoryDeleteOrderAll (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateAccountCategoryDeleteOrderBatch (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateAccountGroupGetCashBalance (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateAccountGroupGetMarginBalance (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateAccountGroupGetMarginRisk (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateAccountGroupGetFuturesCollateralBalance (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateAccountGroupGetFuturesPosition (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateAccountGroupGetFuturesRisk (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateAccountGroupGetFuturesFundingPayments (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateAccountGroupGetOrderHist (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateAccountGroupGetSpotFee (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateAccountGroupPostTransfer (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateAccountGroupPostFuturesTransferDeposit (params?: {}): Promise<implicitReturnType>;
    abstract v1PrivateAccountGroupPostFuturesTransferWithdraw (params?: {}): Promise<implicitReturnType>;
    abstract v2PublicGetAssets (params?: {}): Promise<implicitReturnType>;
    abstract v2PublicGetFuturesContract (params?: {}): Promise<implicitReturnType>;
    abstract v2PublicGetFuturesCollateral (params?: {}): Promise<implicitReturnType>;
    abstract v2PublicGetFuturesPricingData (params?: {}): Promise<implicitReturnType>;
    abstract v2PublicGetFuturesTicker (params?: {}): Promise<implicitReturnType>;
    abstract v2PrivateGetAccountInfo (params?: {}): Promise<implicitReturnType>;
    abstract v2PrivateAccountGroupGetOrderHist (params?: {}): Promise<implicitReturnType>;
    abstract v2PrivateAccountGroupGetFuturesPosition (params?: {}): Promise<implicitReturnType>;
    abstract v2PrivateAccountGroupGetFuturesFreeMargin (params?: {}): Promise<implicitReturnType>;
    abstract v2PrivateAccountGroupGetFuturesOrderHistCurrent (params?: {}): Promise<implicitReturnType>;
    abstract v2PrivateAccountGroupGetFuturesOrderOpen (params?: {}): Promise<implicitReturnType>;
    abstract v2PrivateAccountGroupGetFuturesOrderStatus (params?: {}): Promise<implicitReturnType>;
    abstract v2PrivateAccountGroupPostFuturesIsolatedPositionMargin (params?: {}): Promise<implicitReturnType>;
    abstract v2PrivateAccountGroupPostFuturesMarginType (params?: {}): Promise<implicitReturnType>;
    abstract v2PrivateAccountGroupPostFuturesLeverage (params?: {}): Promise<implicitReturnType>;
    abstract v2PrivateAccountGroupPostFuturesTransferDeposit (params?: {}): Promise<implicitReturnType>;
    abstract v2PrivateAccountGroupPostFuturesTransferWithdraw (params?: {}): Promise<implicitReturnType>;
    abstract v2PrivateAccountGroupPostFuturesOrder (params?: {}): Promise<implicitReturnType>;
    abstract v2PrivateAccountGroupPostFuturesOrderBatch (params?: {}): Promise<implicitReturnType>;
    abstract v2PrivateAccountGroupPostFuturesOrderOpen (params?: {}): Promise<implicitReturnType>;
    abstract v2PrivateAccountGroupPostSubuserSubuserTransfer (params?: {}): Promise<implicitReturnType>;
    abstract v2PrivateAccountGroupPostSubuserSubuserTransferHist (params?: {}): Promise<implicitReturnType>;
    abstract v2PrivateAccountGroupDeleteFuturesOrder (params?: {}): Promise<implicitReturnType>;
    abstract v2PrivateAccountGroupDeleteFuturesOrderBatch (params?: {}): Promise<implicitReturnType>;
    abstract v2PrivateAccountGroupDeleteFuturesOrderAll (params?: {}): Promise<implicitReturnType>;
}