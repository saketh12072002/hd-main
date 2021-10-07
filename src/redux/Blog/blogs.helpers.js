import {firestore} from '../../firebase/utils'


export const handleAddBlog = blog => {
    return new Promise((resolve, reject)=>{
        firestore
        .collection('blogs')
        .doc()
        .set(blog)
        .then(()=>{
            resolve()
        })     
        .catch(err=>{
            reject(err);
        })
    })
}


export const handleFetchBlogs = () => {
    return new Promise((resolve,reject)=>{
        firestore
                .collection('blogs')    
                .get()
                .then(snapshot => {
                    const blogArray = snapshot.docs.map(doc => {
                        return{
                            ...doc.data(),
                            documentID:doc.id
                        }
                    })
                    resolve(blogArray)
                    // .then(snapshot => {
                })
              
                //     if (snapshot.exists) {
                //         resolve(
                //             snapshot.data()
                           
                //         );
                //     }
                // })
                .catch(err=>{
                    reject(err);
                })
    })
}



export const handleDeleteBlog = (documentID) => {
    return new Promise((resolve, reject)=>{
        firestore 
                .collection('blogs')
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


export const handleFetchBlog = (blogID) => {
    return new Promise((resolve,reject)=>{
        firestore
                .collection('blogs')
                .doc(blogID)
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