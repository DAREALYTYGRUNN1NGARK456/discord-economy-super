import EconomyOptions from "../interfaces/EconomyOptions";
import SettingsTypes from "../interfaces/SettingsTypes";

declare class SettingsManager {
    constructor(options: EconomyOptions)

    /**
     * Gets the specified setting from the database.
     * 
     * Note: If the server don't have any setting specified,
     * the module will take the values from the
     * options object or default options object.
     * 
     * @param {'dailyAmount' | 'dailyCooldown' | 'workAmount' | 'workCooldown' | 'weeklyAmount' | 'weeklyCooldown' | 'dateLocale' | 'subtractOnBuy'} key The setting to fetch.
     * @param {string} guildID Guild ID.
     * @returns {any} The setting from the database.
     */
    public get(key: 'dailyAmount' | 'dailyCooldown' | 'workAmount' | 'workCooldown' | 'weeklyAmount' | 'weeklyCooldown' | 'dateLocale' | 'subtractOnBuy', guildID: string): any

    /**
     * Changes the specified setting.
     * 
     * Note: If the server don't have any setting specified, 
     * the module will take the values from the 
     * options object or default options object.
     * 
     * @param {'dailyAmount' | 'dailyCooldown' | 'workAmount' | 'workCooldown' | 'weeklyAmount' | 'weeklyCooldown' | 'dateLocale' | 'subtractOnBuy'} key The setting to change.
     * @param {any} value The value to set.`
     * @param {string} guildID Guild ID.
     * @returns {SettingsTypes} The server settings object.
     */
    public set(key: 'dailyAmount' | 'dailyCooldown' | 'workAmount' | 'workCooldown' | 'weeklyAmount' | 'weeklyCooldown' | 'dateLocale' | 'subtractOnBuy', value: any, guildID: string): SettingsTypes

    /**
     * Removes the specified setting.
     * 
     * Note: If the server don't have any setting specified, 
     * the module will take the values from the 
     * options object or default options object.
     * 
     * @param {'dailyAmount' | 'dailyCooldown' | 'workAmount' | 'workCooldown' | 'weeklyAmount' | 'weeklyCooldown' | 'dateLocale' | 'subtractOnBuy'} key The setting to remove.
     * @param {string} guildID Guild ID.
     * @returns {SettingsTypes} The server settings object.
     */
    public remove(key: 'dailyAmount' | 'dailyCooldown' | 'workAmount' | 'workCooldown' | 'weeklyAmount' | 'weeklyCooldown' | 'dateLocale' | 'subtractOnBuy', guildID: string): SettingsTypes

    /**
     * Fetches the server's settings object.
     * @param {string} guildID Guild ID.
     * @returns {SettingsTypes} The server settings object.
     */
    public all(guildID: string): SettingsTypes

    /**
     * Resets all the settings to setting that are in options object.
     * @param {string} guildID Guild ID.
     * @returns {SettingsTypes} The server settings object.
     */
    public reset(guildID: string): SettingsTypes
}