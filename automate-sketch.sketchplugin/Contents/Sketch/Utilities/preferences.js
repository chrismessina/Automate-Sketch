/*----------------------------------------------------------

Author: Ashung Hung
Homepage: https://github.com/Ashung/Automate-Sketch
License: https://creativecommons.org/licenses/by-sa/4.0

----------------------------------------------------------*/

function getPreferences(key) {
    var userDefaults = NSUserDefaults.standardUserDefaults();
    if (!userDefaults.dictionaryForKey("com.ashung.hung.automate_sketch")) {
        var defaultPreferences = NSMutableDictionary.alloc().init();
        defaultPreferences.setObject_forKey("16", "margin");
        defaultPreferences.setObject_forKey("24", "boundsSize");
        defaultPreferences.setObject_forKey(8, "gap");
        defaultPreferences.setObject_forKey("Roboto-Regular", "defaultLatinFont");
        defaultPreferences.setObject_forKey("NotoSansCJKsc-Regular", "defaultCJKFont");
        defaultPreferences.setObject_forKey("NotoSansCJKsc-Regular", "replaceFont");
        defaultPreferences.setObject_forKey("200x50", "paletteSize");
        defaultPreferences.setObject_forKey("0", "colorFormat");
        userDefaults.setObject_forKey(defaultPreferences, "com.ashung.hung.automate_sketch");
        userDefaults.synchronize();
    }
    return userDefaults.dictionaryForKey("com.ashung.hung.automate_sketch").objectForKey(key);
}

function setPreferences(key, value) {
    var userDefaults = NSUserDefaults.standardUserDefaults();
    if (!userDefaults.dictionaryForKey("com.ashung.hung.automate_sketch")) {
        var preferences = NSMutableDictionary.alloc().init();
    } else {
        var preferences = NSMutableDictionary.dictionaryWithDictionary(userDefaults.dictionaryForKey("com.ashung.hung.automate_sketch"));
    }
    preferences.setObject_forKey(value, key);
    userDefaults.setObject_forKey(preferences, "com.ashung.hung.automate_sketch");
    userDefaults.synchronize();
}
