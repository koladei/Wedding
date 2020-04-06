"use strict";var db=firebase.firestore();db.collection("wishlist").get().then(function(t){t.forEach(function(t){console.log("".concat(t.id," => ").concat(t.data()),t.data())})});
//# sourceMappingURL=main-min.js.map
