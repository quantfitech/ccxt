// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

export default abstract class Exchange extends _Exchange {
    abstract publicGetV1Time (params?: {}): Promise<implicitReturnType>;
    abstract publicGetV1ExchangeInfo (params?: {}): Promise<implicitReturnType>;
    abstract publicGetV1Depth (params?: {}): Promise<implicitReturnType>;
    abstract publicGetV1AggTrades (params?: {}): Promise<implicitReturnType>;
    abstract publicGetV1Klines (params?: {}): Promise<implicitReturnType>;
    abstract publicGetV1Ticker24hr (params?: {}): Promise<implicitReturnType>;
    abstract publicGetV2Time (params?: {}): Promise<implicitReturnType>;
    abstract publicGetV2ExchangeInfo (params?: {}): Promise<implicitReturnType>;
    abstract publicGetV2Depth (params?: {}): Promise<implicitReturnType>;
    abstract publicGetV2AggTrades (params?: {}): Promise<implicitReturnType>;
    abstract publicGetV2Klines (params?: {}): Promise<implicitReturnType>;
    abstract publicGetV2Ticker24hr (params?: {}): Promise<implicitReturnType>;
    abstract marketcapGetV1Assets (params?: {}): Promise<implicitReturnType>;
    abstract marketcapGetV1Candles (params?: {}): Promise<implicitReturnType>;
    abstract marketcapGetV1Orderbook (params?: {}): Promise<implicitReturnType>;
    abstract marketcapGetV1Summary (params?: {}): Promise<implicitReturnType>;
    abstract marketcapGetV1Ticker (params?: {}): Promise<implicitReturnType>;
    abstract marketcapGetV1TokenAssets (params?: {}): Promise<implicitReturnType>;
    abstract marketcapGetV1TokenOrderbook (params?: {}): Promise<implicitReturnType>;
    abstract marketcapGetV1TokenSummary (params?: {}): Promise<implicitReturnType>;
    abstract marketcapGetV1TokenTicker (params?: {}): Promise<implicitReturnType>;
    abstract marketcapGetV1TokenTrades (params?: {}): Promise<implicitReturnType>;
    abstract marketcapGetV1TokenCryptoOHLC (params?: {}): Promise<implicitReturnType>;
    abstract marketcapGetV1TokenCryptoAssets (params?: {}): Promise<implicitReturnType>;
    abstract marketcapGetV1TokenCryptoOrderbook (params?: {}): Promise<implicitReturnType>;
    abstract marketcapGetV1TokenCryptoSummary (params?: {}): Promise<implicitReturnType>;
    abstract marketcapGetV1TokenCryptoTicker (params?: {}): Promise<implicitReturnType>;
    abstract marketcapGetV1TokenCryptoTrades (params?: {}): Promise<implicitReturnType>;
    abstract marketcapGetV1Trades (params?: {}): Promise<implicitReturnType>;
    abstract privateGetV1Account (params?: {}): Promise<implicitReturnType>;
    abstract privateGetV1Currencies (params?: {}): Promise<implicitReturnType>;
    abstract privateGetV1Deposits (params?: {}): Promise<implicitReturnType>;
    abstract privateGetV1DepositAddress (params?: {}): Promise<implicitReturnType>;
    abstract privateGetV1Ledger (params?: {}): Promise<implicitReturnType>;
    abstract privateGetV1LeverageSettings (params?: {}): Promise<implicitReturnType>;
    abstract privateGetV1MyTrades (params?: {}): Promise<implicitReturnType>;
    abstract privateGetV1OpenOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateGetV1TradingPositions (params?: {}): Promise<implicitReturnType>;
    abstract privateGetV1TradingPositionsHistory (params?: {}): Promise<implicitReturnType>;
    abstract privateGetV1Transactions (params?: {}): Promise<implicitReturnType>;
    abstract privateGetV1Withdrawals (params?: {}): Promise<implicitReturnType>;
    abstract privateGetV2Account (params?: {}): Promise<implicitReturnType>;
    abstract privateGetV2Currencies (params?: {}): Promise<implicitReturnType>;
    abstract privateGetV2Deposits (params?: {}): Promise<implicitReturnType>;
    abstract privateGetV2DepositAddress (params?: {}): Promise<implicitReturnType>;
    abstract privateGetV2Ledger (params?: {}): Promise<implicitReturnType>;
    abstract privateGetV2LeverageSettings (params?: {}): Promise<implicitReturnType>;
    abstract privateGetV2MyTrades (params?: {}): Promise<implicitReturnType>;
    abstract privateGetV2OpenOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateGetV2TradingPositions (params?: {}): Promise<implicitReturnType>;
    abstract privateGetV2TradingPositionsHistory (params?: {}): Promise<implicitReturnType>;
    abstract privateGetV2Transactions (params?: {}): Promise<implicitReturnType>;
    abstract privateGetV2Withdrawals (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1Order (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1UpdateTradingPosition (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1UpdateTradingOrder (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV1CloseTradingPosition (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV2Order (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV2UpdateTradingPosition (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV2UpdateTradingOrder (params?: {}): Promise<implicitReturnType>;
    abstract privatePostV2CloseTradingPosition (params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteV1Order (params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteV2Order (params?: {}): Promise<implicitReturnType>;
}