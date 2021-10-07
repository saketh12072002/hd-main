import {firestore} from '../../firebase/utils'


export const handleAddProduct = product => {
    return new Promise((resolve, reject) => {
      firestore
        .collection('products')
        .doc()
        .set(product)
        .then(() => {
          resolve();
        })
        .catch(err => {
          reject(err);
        })
    });
  }



  export const handleFetchQueryProducts = ({filterDresstype,gender,sizes,dresstype,startAfterDoc, persistProducts=[]}) => {
    return new Promise((resolve,reject)=>{

        const genderarr=['mens','womens']
        const sizearr = ['L','M']

        const pageSize = 15;
        let ref = firestore.collection('products')
                           .orderBy('productPrice','asc').limit(pageSize)

        console.log('ref')
        console.log(ref)
        if(startAfterDoc) ref = ref.startAfter(startAfterDoc)

        ref
            .get()
            .then(snapshot => {
                const totalCount = snapshot.size;

                const data = [
                    ...persistProducts,
                    ...snapshot.docs.map(doc => {
                        return {
                            ...doc.data(),
                            documentID: doc.id
                        }
                    }) 
                ];

                console.log(data)
                resolve({
                        data,
                        queryDoc:snapshot.docs[totalCount -1],
                        isLastPage:totalCount < 1
                });
            })
            .catch(err => {
                console.log(err)
            })
    })
}

export const handleFetchProducts = ({filterType,startAfterDoc, persistProducts=[]}) => {
    return new Promise((resolve,reject)=>{

        const pageSize = 15;
        let ref = firestore.collection('products')
                           .orderBy('productPrice','asc').limit(pageSize)
                          

        if(filterType) ref =ref.where('productCategory', '==' , filterType)
        


        if(startAfterDoc) ref = ref.startAfter(startAfterDoc)

        ref
            .get()
            .then(snapshot => {
                const totalCount =snapshot.size;

                const data = [
                    ...persistProducts,
                    ...snapshot.docs.map(doc => {
                        return {
                            ...doc.data(),
                            documentID: doc.id
                        }
                    }) 
                ];
                resolve({
                        data,
                        queryDoc:snapshot.docs[totalCount -1],
                        isLastPage:totalCount < 1
                });
            })
            .catch(err => {
                console.log(err)
            })
    })
}




export const handleFetchProductsSize = ({filterSize,startAfterDoc, persistProducts=[]}) => {
    return new Promise((resolve,reject)=>{
        const pageSize = 45;
        let ref = firestore.collection('products')
                           .orderBy('createdDate').limit(pageSize)
                                             
        // if(filterType) ref =ref.where('productCategory', '==' , filterType).where('productSize', '==' , filterType)
        if(filterSize) ref = ref.where('productSize', '==' , filterSize)
        if(startAfterDoc) ref = ref.startAfter(startAfterDoc)

        ref
            .get()
            .then(snapshot => {
                const totalCount =snapshot.size;

                const data = [
                    ...persistProducts,
                    ...snapshot.docs.map(doc => {
                        return {
                            ...doc.data(),
                            documentID: doc.id
                        }
                    }) 
                ];
                resolve({
                        data,
                        queryDoc:snapshot.docs[totalCount -1],
                        isLastPage:totalCount < 1
                });
            })
            .catch(err => {
                reject(err)
            })
    })
}


export const handleFetchProductsColour = ({filterColour,startAfterDoc, persistProducts=[]}) => {
    return new Promise((resolve,reject)=>{
        const pageSize = 45;
        let ref = firestore.collection('products')
                           .orderBy('createdDate').limit(pageSize)
                                             
        // if(filterType) ref =ref.where('productCategory', '==' , filterType).where('productSize', '==' , filterType)
        if(filterColour) ref = ref.where('colour', '==' , filterColour)
        if(startAfterDoc) ref = ref.startAfter(startAfterDoc)

        ref
            .get()
            .then(snapshot => {
                const totalCount =snapshot.size;

                const data = [
                    ...persistProducts,
                    ...snapshot.docs.map(doc => {
                        return {
                            ...doc.data(),
                            documentID: doc.id
                        }
                    }) 
                ];
                resolve({
                        data,
                        queryDoc:snapshot.docs[totalCount -1],
                        isLastPage:totalCount < 1
                });
            })
            .catch(err => {
                reject(err)
            })
    })
}


export const handleFetchProductsDresstype = ({filterDresstype,startAfterDoc, persistProducts=[]}) => {
    return new Promise((resolve,reject)=>{
        const pageSize = 45;
        let ref = firestore.collection('products')
                           .orderBy('createdDate').limit(pageSize)
                                             
        // if(filterType) ref =ref.where('productCategory', '==' , filterType).where('productSize', '==' , filterType)
        if(filterDresstype) ref = ref.where('productType', '==' , filterDresstype)
        if(startAfterDoc) ref = ref.startAfter(startAfterDoc)

        ref
            .get()
            .then(snapshot => {
                const totalCount =snapshot.size;

                const data = [
                    ...persistProducts,
                    ...snapshot.docs.map(doc => {
                        return {
                            ...doc.data(),
                            documentID: doc.id
                        }
                    }) 
                ];
                resolve({
                        data,
                        queryDoc:snapshot.docs[totalCount -1],
                        isLastPage:totalCount < 1
                });
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const handleFetchProductsBrand = ({filterBrand,startAfterDoc, persistProducts=[]}) => {
    return new Promise((resolve,reject)=>{ 

        // const filterSize='womens'
        // const filterSize='L'
        console.log(filterBrand)
        const pageSize = 15;
        let ref = firestore.collection('products')
                           .orderBy('createdDate').limit(pageSize)

        // if(filterType) ref =ref.where('productCategory', '==' , filterType).where('productSize', '==' , filterType)
        // if(filterSize) ref = ref.where('productSize', '==' , filterSize)
        // if(filterSize) ref = ref.where('productSize', '==' , filterSize)
        if(filterBrand) ref = ref.where('brandName', '==' , filterBrand)
        if(startAfterDoc) ref = ref.startAfter(startAfterDoc)
     
        

        ref
            .get() 
            .then(snapshot => {
                const totalCount =snapshot.size;


                const data = [
                    ...persistProducts,
                    ...snapshot.docs.map(doc => {
                        return {
                            ...doc.data(),
                            documentID: doc.id
                        }
                    }) 
                ];


                resolve({
                        data,
                        queryDoc:snapshot.docs[totalCount -1],
                        isLastPage:totalCount < 1
                });

            })
            .catch(err => {
                reject(err)
            })
    })
}


export const handleDeleteProduct = (documentID) => {
    return new Promise((resolve, reject)=>{
        firestore 
                .collection('products')
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


export const handleFetchProduct = (productID) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('products')
      .doc(productID)
      .get()
      .then(snapshot => {

        if (snapshot.exists) {
          resolve({
            ...snapshot.data(),
            documentID: productID
          });
        }
      })
      .catch(err => {
        reject(err);
      })
  })
}