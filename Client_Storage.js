/*******NOTES*******
 *
 * Created by: Michaelangelo Jong
 *
 * look at the README file for more information
 *
*******End of notes*******/

/*******Client Storage Object*******/
function ClientStorage(storage) {
    'use strict';
    storage = storage || localStorage;
//Methods
    this.set = function (key, val) {
        if (typeof key === 'string' && val) {
            storage.setItem(key, JSON.stringify(val));
            return this.get(key);
        }
    };
    this.get = function (key) {
        var value;
        if (this.has(key)) {
            value = JSON.parse(storage.getItem(key));
        }
        return value;
    };
    this.getAll = function () {
        var key, values = {};
        for (key in storage) {
            if (storage.hasOwnProperty(key)) {
                values[key] = this.get(key);
            }
        }
        return values;
    };
    this.remove = function (key) {
        if (this.has(key)) {
            storage.removeItem(key);
            return true;
        }
        return false;
    };
    this.removeAll = function () {
        storage.clear();
    };
    this.has = function (key) {
        return storage.hasOwnProperty(key);
    };
}

/*******Client Cache Object*******/
function ClientCache(storage) {
    'use strict';
    storage  = new ClientStorage(storage);
    var date = new Date();
//Methods
    this.set = function (key, val) {
        var cache = {};

        cache.cache = val;
        cache.cacheTime = date.getTime();

        storage.set('cache_' + key, cache);

        return this.get(key);
    };
    this.get = function (key) {
        var cache = storage.get('cache_' + key);
        if (this.isCache(cache)) {
            return cache;
        }
        return false;
    };
    this.getCache = function (key) {
        var cache = this.get(key);
        if (this.isCache(cache)) {
            return cache.cache;
        }
    };
    this.getAll = function () {
        return false;
    };
    this.remove = function (key) {
        var cache = this.get(key);
        if (this.isCache(cache)) {
            storage.remove('cache_' + key);
            return true;
        }
        return false;
    };
    this.removeAll = function () {
        return false;
    };
    this.checkCache = function (cache) {
        var i, check, checked = [];
        if (cache.constructor === Array) {
            for (i in cache) {
                if (cache.hasOwnProperty(i)) {
                    if (this.isCache(cache[i])) {
                        check = this.get(cache[i].cacheKey);
                        if (this.isCache(check)) {
                            if (cache[i].cacheTime <= check.cacheTime) {
                                checked[i] = {cached: true, cacheKey: cache[i].cacheKey};
                            } else {
                                checked[i] = {cached: false, cacheKey: cache[i].cacheKey};
                            }
                        } else {
                            checked[i] = {cached: false, cacheKey: cache[i].cacheKey};
                        }
                    } else {
                        checked[i] = 'not cache';
                    }
                }
            }
        } else if (this.isCache(cache)) {
            check = this.get(cache.cacheKey);
            if (this.isCache(check)) {
                if (cache.cacheTime <= check.cacheTime) {
                    checked[0] = {cached: true, cacheKey: cache.cacheKey};
                } else {
                    checked[0] = {cached: false, cacheKey: cache.cacheKey};
                }
            } else {
                checked[0] = {cached: false, cacheKey: cache.cacheKey};
            }
        }
        return checked;
    };
    this.isCache = function (cache) {
        if (typeof cache === 'object') {
            if (cache.hasOwnProperty('cacheTime') && (cache.hasOwnProperty('cache') || cache.hasOwnProperty('cacheKey'))) {
                return true;
            }
        }
        return false;
    };
}
/*******End of Code*******/
