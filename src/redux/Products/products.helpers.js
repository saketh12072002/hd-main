import {firestore} from '../../firebase/utils'


export const handleAddProduct = product => {
    return new Promise((resolve, reject)=>{
        firestore
        .collection('products')
        .doc()
        .set(product)
        .then(()=>{
            resolve()
        })     
        .catch(err=>{
            reject(err);
        })
    })
}

export const handleFetchProducts = ({filterType,startAfterDoc, persistProducts=[]}) => {
    return new Promise((resolve,reject)=>{

        const pageSize = 15;
        let ref = firestore.collection('products')
                           .orderBy('createdDate').limit(pageSize)
                          

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
        const pageSize = 15;
        let ref = firestore.collection('products')
                           .orderBy('createdDate').limit(pageSize)
                                             
        // if(filterType) ref =ref.where('productCategory', '==' , filterType).where('productSize', '==' , filterType)
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
    return new Promise((resolve,reject)=>{
        firestore
                .collection('products')
                .doc(productID)
                .get()
                .then(snapshot => {
                    if (snapshot.exists) {
                        resolve(
                            snapshot.data()
                        );
                    }
                })
                .catch(err=>{
                    reject(err);
                })
    })
}