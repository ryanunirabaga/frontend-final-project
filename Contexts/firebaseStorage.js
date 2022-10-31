import { useEffect, useState, createContext } from 'react';
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

export const firebaseStorageContext = createContext();

export function GetFilesProvider (props) {
    

    const [fileArray,setFileArray] = useState([]);
    const [folderArray, setFolderArray] = useState([]);

    function listAllFiles() {

        const storage = getStorage();
        const listRef = ref(storage, '/');
        
      // Find all the prefixes and items.
        listAll(listRef)
          .then((res) => {
            res.prefixes.forEach((folder) => {
            const folderName = folder._location.path_;
            const folderRef = ref(storage,`${folder._location.path_}/`);

            // Append to folderNames
            setFolderArray(currentArray => 
                [...currentArray.filter((existingFolder) => existingFolder !== folderName),folderName]);

            // list all items inside the folder
            listAll(folderRef)
              .then((res) => {
                res.items.forEach((itemRef) => {
                  const itemPath = itemRef._location.path_;
                  const downloadRef = ref(storage, itemPath);
    
                  //get download URL
                  getDownloadURL(downloadRef).then((url) => {
    
                    const fileObj = {
                      folderName: folderName,
                      fileName: itemRef.name,
                      downloadURL: url
                    }
                    // append to file objects
                    setFileArray(currentArray => 
                      [...currentArray.filter((item) => item.fileName !== fileObj.fileName), fileObj]);
                  })
                });
              });
            }); 
      
          }).catch((error) => {
            console.log(`error code: ${error.code} \nerror Message: ${error.message}`);
            // Uh-oh, an error occurred!
        });
    }

    useEffect(()=>{
        listAllFiles();
      },[]);
      
    // Check array if correct
    // useEffect(()=>{
    // console.log(fileArray)
    // },[fileArray])

    // Check array if correct
    // useEffect(()=>{
    //     console.log(folderArray)
    //     },[folderArray])

    return (
    <firebaseStorageContext.Provider value={{fileArray, folderArray}}>
        {props.children}
    </firebaseStorageContext.Provider>
    )
    
}