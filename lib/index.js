"use strict";

const unicodeMap = require("emoji-unicode-map")
    , nameMap = require("emoji-name-map")
    , categoryMap = require("@rivkesse/emoji-category-map")
    , emojiNames = require("emoji-names")
    , emojiChars = require("emoji-chars")
    ;

const dict = module.exports = {};

/**
 * getName
 * Gets the name of the unicode emoji.
 *
 * @name getName
 * @function
 * @param {String} unicodeChar The emoji unicode character.
 * @return {String} The emoji name.
 */
dict.getName = function (unicodeChar) {
    return unicodeMap.get(unicodeChar);
};

/**
 * getCategory
 * Gets the category of the unicode emoji.
 *
 * @name getCategory
 * @function
 * @param {String} unicodeChar The emoji unicode character.
 * @return {String} The emoji category.
 */
dict.getCategory = function (unicodeChar) {
    var cat = categoryMap.get(unicodeChar);

    console.log("EMOJI DICTIONARY: cat = " + cat);

    return cat;
};

/**
 * getEmojiInfo
 * Gets the name and category of the unicode emoji.
 *
 * @name getEmojiInfo
 * @function
 * @param {String} unicodeChar The emoji unicode character.
 * @return {Object} The emoji unicode character, name and category.
 */
dict.getEmojiInfo = function (unicodeChar) {
    var name = unicodeMap.get(unicodeChar);
    var category = categoryMap.get(unicodeChar);

    var emojiObj = {
        "unicode": unicodeChar,
        "name": name,
        "category": category
    };

    console.log("emoji: ", emojiObj);

    return emojiObj;
};

/**
 * getUnicode
 * Gets the unicode character by providing the emoji name.
 *
 * @name getUnicode
 * @function
 * @param {String} name The emoji name.
 * @return {String} The emoji unicode character.
 */
dict.getUnicode = function (name) {
    return nameMap.get(name);
};

dict.names = emojiNames;
dict.unicode = emojiChars;
// dict.categories = emojiCategories;
