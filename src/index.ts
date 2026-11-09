// x402-crypto-derivatives-data: the derivs.duoleads.com client of duo-data-utilities, published on its own.
// The shared client code lives in src/lib (generated from https://github.com/hiesem/duo-data-utilities).
export {
  assertDerivsPath,
  buildDerivsQuery,
  createDerivsClient,
  createDerivsClient as createClient,
  DEFAULT_DERIVS_BASE_URL,
  DEFAULT_DERIVS_MAX_PRICE_USD,
  DERIVS_MCP_URL,
  derivsNumber,
} from "./lib/derivs.js";
export type { DerivsClient, DerivsClientOptions, DerivsPaidResult } from "./lib/derivs.js";
export * from "./lib/derivs-generated.js";
export { DuoApiError, PriceGuardError } from "./lib/errors.js";
export { BASE_NETWORK, BASE_USDC_ADDRESS } from "./lib/price-guard.js";
export type { EvmSigner, SettlementReceipt } from "./lib/transport.js";
export { SDK_USER_AGENT, SDK_VERSION } from "./lib/version.js";
