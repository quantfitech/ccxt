import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';
export default abstract class Exchange extends _Exchange {
    abstract publicGetPublicCurrency(params?: {}): Promise<implicitReturnType>;
    abstract publicGetPublicSymbol(params?: {}): Promise<implicitReturnType>;
    abstract publicGetPublicTicker(params?: {}): Promise<implicitReturnType>;
    abstract publicGetPublicPriceRate(params?: {}): Promise<implicitReturnType>;
    abstract publicGetPublicTrades(params?: {}): Promise<implicitReturnType>;
    abstract publicGetPublicOrderbook(params?: {}): Promise<implicitReturnType>;
    abstract publicGetPublicCandles(params?: {}): Promise<implicitReturnType>;
    abstract publicGetPublicFuturesInfo(params?: {}): Promise<implicitReturnType>;
    abstract publicGetPublicFuturesHistoryFunding(params?: {}): Promise<implicitReturnType>;
    abstract publicGetPublicFuturesCandlesIndexPrice(params?: {}): Promise<implicitReturnType>;
    abstract publicGetPublicFuturesCandlesMarkPrice(params?: {}): Promise<implicitReturnType>;
    abstract publicGetPublicFuturesCandlesPremiumIndex(params?: {}): Promise<implicitReturnType>;
    abstract publicGetPublicFuturesCandlesOpenInterest(params?: {}): Promise<implicitReturnType>;
    abstract privateGetSpotBalance(params?: {}): Promise<implicitReturnType>;
    abstract privateGetSpotOrder(params?: {}): Promise<implicitReturnType>;
    abstract privateGetSpotOrderClientOrderId(params?: {}): Promise<implicitReturnType>;
    abstract privateGetSpotFee(params?: {}): Promise<implicitReturnType>;
    abstract privateGetSpotFeeSymbol(params?: {}): Promise<implicitReturnType>;
    abstract privateGetSpotHistoryOrder(params?: {}): Promise<implicitReturnType>;
    abstract privateGetSpotHistoryTrade(params?: {}): Promise<implicitReturnType>;
    abstract privateGetMarginAccount(params?: {}): Promise<implicitReturnType>;
    abstract privateGetMarginAccountIsolatedSymbol(params?: {}): Promise<implicitReturnType>;
    abstract privateGetMarginOrder(params?: {}): Promise<implicitReturnType>;
    abstract privateGetMarginOrderClientOrderId(params?: {}): Promise<implicitReturnType>;
    abstract privateGetMarginHistoryClearing(params?: {}): Promise<implicitReturnType>;
    abstract privateGetMarginHistoryOrder(params?: {}): Promise<implicitReturnType>;
    abstract privateGetMarginHistoryPositions(params?: {}): Promise<implicitReturnType>;
    abstract privateGetMarginHistoryTrade(params?: {}): Promise<implicitReturnType>;
    abstract privateGetFuturesBalance(params?: {}): Promise<implicitReturnType>;
    abstract privateGetFuturesAccount(params?: {}): Promise<implicitReturnType>;
    abstract privateGetFuturesAccountIsolatedSymbol(params?: {}): Promise<implicitReturnType>;
    abstract privateGetFuturesOrder(params?: {}): Promise<implicitReturnType>;
    abstract privateGetFuturesOrderClientOrderId(params?: {}): Promise<implicitReturnType>;
    abstract privateGetFuturesFee(params?: {}): Promise<implicitReturnType>;
    abstract privateGetFuturesFeeSymbol(params?: {}): Promise<implicitReturnType>;
    abstract privateGetFuturesHistoryClearing(params?: {}): Promise<implicitReturnType>;
    abstract privateGetFuturesHistoryOrder(params?: {}): Promise<implicitReturnType>;
    abstract privateGetFuturesHistoryPositions(params?: {}): Promise<implicitReturnType>;
    abstract privateGetFuturesHistoryTrade(params?: {}): Promise<implicitReturnType>;
    abstract privateGetWalletBalance(params?: {}): Promise<implicitReturnType>;
    abstract privateGetWalletCryptoAddress(params?: {}): Promise<implicitReturnType>;
    abstract privateGetWalletCryptoAddressRecentDeposit(params?: {}): Promise<implicitReturnType>;
    abstract privateGetWalletCryptoAddressRecentWithdraw(params?: {}): Promise<implicitReturnType>;
    abstract privateGetWalletCryptoAddressCheckMine(params?: {}): Promise<implicitReturnType>;
    abstract privateGetWalletTransactions(params?: {}): Promise<implicitReturnType>;
    abstract privateGetWalletCryptoCheckOffchainAvailable(params?: {}): Promise<implicitReturnType>;
    abstract privateGetWalletCryptoFeeEstimate(params?: {}): Promise<implicitReturnType>;
    abstract privateGetSubAccount(params?: {}): Promise<implicitReturnType>;
    abstract privateGetSubAccountAcl(params?: {}): Promise<implicitReturnType>;
    abstract privateGetSubAccountBalanceSubAccID(params?: {}): Promise<implicitReturnType>;
    abstract privateGetSubAccountCryptoAddressSubAccIDCurrency(params?: {}): Promise<implicitReturnType>;
    abstract privatePostSpotOrder(params?: {}): Promise<implicitReturnType>;
    abstract privatePostMarginOrder(params?: {}): Promise<implicitReturnType>;
    abstract privatePostFuturesOrder(params?: {}): Promise<implicitReturnType>;
    abstract privatePostWalletConvert(params?: {}): Promise<implicitReturnType>;
    abstract privatePostWalletCryptoAddress(params?: {}): Promise<implicitReturnType>;
    abstract privatePostWalletCryptoWithdraw(params?: {}): Promise<implicitReturnType>;
    abstract privatePostWalletTransfer(params?: {}): Promise<implicitReturnType>;
    abstract privatePostSubAccountFreeze(params?: {}): Promise<implicitReturnType>;
    abstract privatePostSubAccountActivate(params?: {}): Promise<implicitReturnType>;
    abstract privatePostSubAccountTransfer(params?: {}): Promise<implicitReturnType>;
    abstract privatePostSubAccountAcl(params?: {}): Promise<implicitReturnType>;
    abstract privatePatchSpotOrderClientOrderId(params?: {}): Promise<implicitReturnType>;
    abstract privatePatchMarginOrderClientOrderId(params?: {}): Promise<implicitReturnType>;
    abstract privatePatchFuturesOrderClientOrderId(params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteSpotOrder(params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteSpotOrderClientOrderId(params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteMarginPosition(params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteMarginPositionIsolatedSymbol(params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteMarginOrder(params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteMarginOrderClientOrderId(params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteFuturesPosition(params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteFuturesPositionIsolatedSymbol(params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteFuturesOrder(params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteFuturesOrderClientOrderId(params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteWalletCryptoWithdrawId(params?: {}): Promise<implicitReturnType>;
    abstract privatePutMarginAccountIsolatedSymbol(params?: {}): Promise<implicitReturnType>;
    abstract privatePutFuturesAccountIsolatedSymbol(params?: {}): Promise<implicitReturnType>;
    abstract privatePutWalletCryptoWithdrawId(params?: {}): Promise<implicitReturnType>;
}
