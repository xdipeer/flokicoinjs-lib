/**
 * This module defines the network configurations for Bitcoin and its variants, including message prefixes,
 * Bech32 address format, BIP32 key derivation prefixes, and other address-related configurations.
 * It supports Bitcoin, Bitcoin testnet, and Bitcoin regtest networks.
 *
 * Additional information on address prefixes can be found here:
 * - https://en.bitcoin.it/wiki/List_of_address_prefixes
 *
 * @packageDocumentation
 */
export interface Network {
  messagePrefix: string;
  bech32: string;
  bip32: Bip32;
  pubKeyHash: number;
  scriptHash: number;
  wif: number;
}

interface Bip32 {
  public: number;
  private: number;
}

/**
 * Represents the Bitcoin network configuration.
 */
export const bitcoin: Network = {
  /**
   * The message prefix used for signing Bitcoin messages.
   */
  messagePrefix: '\x18Flokicoin Signed Message:\n',
  /**
   * The Bech32 prefix used for Bitcoin addresses.
   */
  bech32: 'fc',
  /**
   * The BIP32 key prefixes for Bitcoin.
   */
  bip32: {
    /**
     * The public key prefix for BIP32 extended public keys.
     */
    public: 0x0488b21e,
    /**
     * The private key prefix for BIP32 extended private keys.
     */
    private: 0x0488ade4,
  },
  /**
   * The prefix for Bitcoin public key hashes.
   */
  pubKeyHash: 0x23,
  /**
   * The prefix for Bitcoin script hashes.
   */
  scriptHash: 0x5,
  /**
   * The prefix for Bitcoin Wallet Import Format (WIF) private keys.
   */
  wif: 0x80,
};
/**
 * Represents the regtest network configuration.
 */
export const regtest: Network = {
  messagePrefix: '\x18Flokicoin Signed Message:\n',
  bech32: 'fcrt',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};
/**
 * Represents the testnet network configuration.
 */
export const testnet: Network = {
  messagePrefix: '\x18Flokicoin Signed Message:\n',
  bech32: 'tf',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};