/*******NOTES*******
 * 
 * Created by: Michaelangelo Jong
 * 
 * look at the README file for more information
 * 
*******End of notes*******/

/*******Local Storage Object*******/
function LocalStorage() {
    'use strict';
//Methods
    function set(key, val) {
        var value = JSON.stringify(val);
        localStorage.setItem(key, value);
        return val;
    }
    function get(key) {
        var value = localStorage.getItem(key);
        value = JSON.parse(value);
        return value;
    }
    function getAll() {
        var key, val, values = {};
        for (key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                val = localStorage.getItem(key);
                values[key] = JSON.parse(val);
            }
        }
        return values;
    }
    function remove(key) {
        localStorage.removeItem(key);
    }
    function removeAll() {
        var key;
        for (key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                localStorage.removeItem(key);
            }
        }
    }
    this.set = set;
    this.get = get;
    this.getAll = getAll;
    this.remove = remove;
    this.removeAll = removeAll;
}

/*******Session Storage Object*******/
function SessionStroage() {
    'use strict';
//Methods
    function set(key, val) {
        var value = JSON.stringify(val);
        sessionStorage.setItem(key, value);
        return val;
    }
    function get(key) {
        var value = sessionStorage.getItem(key);
        value = JSON.parse(value);
        return value;
    }
    function getAll() {
        var key, val, values = {};
        for (key in sessionStorage) {
            if (sessionStorage.hasOwnProperty(key)) {
                val = sessionStorage.getItem(key);
                values[key] = JSON.parse(val);
            }
        }
        return values;
    }
    function remove(key) {
        sessionStorage.removeItem(key);
    }
    function removeAll() {
        var key;
        for (key in sessionStorage) {
            if (sessionStorage.hasOwnProperty(key)) {
                sessionStorage.removeItem(key);
            }
        }
    }
    this.set = set;
    this.get = get;
    this.getAll = getAll;
    this.remove = remove;
    this.removeAll = removeAll;
}
/*******End of Code*******/
