var db = firebase.firestore();

db.collection("wishlist").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`, doc.data());
    });
});