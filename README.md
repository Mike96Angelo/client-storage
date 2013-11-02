HTML5-Client-Storage-Object-JavaScript
======================================

Make a new StorageLocal object:

    var storageLocal = new StorageLocal()
        No arguments!
        
StorageLocal Methods:

    storageLocal.set(key, val)
        where:
            key is the reference to the stored data
            val is the data to be stored
        does:
            creates key to refference the stored data
            writes the data to local storage
            
    storageLocal.get(key)
        where:
            key is the reference to the stored data
        does:
            returns the stored data refferenced by the key
            
    storageLocal.getAll()
        No arguments!
        does:
            returns an object refferencing keys to stored data
    
    storageLocal.remove(key)
        where:
            key is the reference to the stored data
        does:
            removes the stored data refferenced by the key
            
    storageLocal.removeAll()
        No arguments!
        does:
            removes all stored data in local storage

Make a new StorageSession object:

    var storageSession = new StorageSession()
        No arguments!
        
StorageSession Methods:

    storageSession.set(key, val)
        where:
            key is the reference to the stored data
            val is the data to be stored
        does:
            creates key to refference the stored data
            writes the data to session storage
            
    storageSession.get(key)
        where:
            key is the reference to the stored data
        does:
            returns the stored data refferenced by the key
            
    storageSession.getAll()
        No arguments!
        does:
            returns an object refferencing keys to stored data
    
    storageSession.remove(key)
        where:
            key is the reference to the stored data
        does:
            removes the stored data refferenced by the key
            
    storageSession.removeAll()
        No arguments!
        does:
            removes all stored data in session storage
            
Created By:
	
	Michaelangelo Jong
	
