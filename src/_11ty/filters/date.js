const { DateTime } = require("luxon");

/**
 * Formats a date object into a readable date string
 * @param {DateTime} dateObj - a date object
 * @returns {string} - a date string (e.g. Jan 15, 2020)
 */
function readableDate(dateObj) {
  return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
}

/**
 * Formats a date object into a date string in ISO format
 * @param {DateTime} dateObj - a date object
 * @returns {string} - a date string in ISO format (e.g. 2020-01-15)
 */
function ISODate(dateObj) {
  return DateTime.fromJSDate(dateObj, { zone: "utc" }).toISODate();
}

module.exports = { readableDate, ISODate };
