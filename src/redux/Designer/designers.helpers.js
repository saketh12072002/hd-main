import {firestore} from '../../firebase/utils'
// import Desingner from '../../pages/Designer/Desingner'


export const handleAddDesigner = designer => {
    return new Promise((resolve, reject)=>{
        firestore
        .collection('designers')
        .doc()
        .set(designer)
        .then(()=>{
            resolve()
        })     
        .catch(err=>{
            reject(err);
        })
    })
}


export const handleFetchDesigners = () => {
    return new Promise((resolve,reject)=>{
        firestore
                .collection('designers')    
                .get()
                .then(snapshot => {
                    const designerArray = snapshot.docs.map(doc => {
                        return{
                            ...doc.data(),
                            documentID:doc.id
                        }
                    })
                    resolve(designerArray)
                    // .then(snapshot => {
                })

                .catch(err=>{
                    reject(err);
                })
    })
}



export const handleDeleteDesigner = (documentID) => {
    return new Promise((resolve, reject)=>{
        firestore 
                .collection('designers')
                .doc(documentID)
                .delete()
                .then(()=>{
                    resolve();
                })
                .catch(err => {
                    reject(err);
                })
    });
}


export const handleFetchDesigner = ({brandName}) => {
    
    return new Promise((resolve,reject)=>{
      
        let ref = firestore.collection('designers')
                            .orderBy('createdDate')
                          

        if(brandName) ref =ref.where('desingerName', '==' , brandName)
        


        ref
            .get()
            .then(snapshot => {
                const totalCount =snapshot.size;

                const datad = [
                    
                    ...snapshot.docs.map(doc => {
                        return {
                            ...doc.data(),
                            documentID: doc.id
                        }
                    }) 
                ];
                resolve({
                        datad,
                        queryDoc:snapshot.docs[totalCount -1],
                        isLastPage:totalCount < 1
                });
                console.log('datad')
                console.log(datad)
            })
            .catch(err => {
                console.log(err)
            })
    })
   
}