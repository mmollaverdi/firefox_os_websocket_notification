(function () {
    /*
        WebActivities:

            configure
            costcontrol/balance
            costcontrol/data_usage
            costcontrol/telephony
            dial
            new (type: "websms/sms", "webcontacts/contact") (add-contact, compose-mail?)
            open
            pick (type: "image/png" etc)
            record (capture?)
            save-bookmark
            share
            test
            view (type: "url" etc. "text/html"?)
    */

    // WebActivities
    var pickImage = document.querySelector("#pick-image");
    if (pickImage) {
        pickImage.onclick = function () {
            var pick = new MozActivity({
                name: "pick",
                data: {
                    type: ["image/png", "image/jpg", "image/jpeg"]
                ?}
            });

            pick.onsuccess = function () {?
                var img = document.createElement("img");
                img.src = window.URL.createObjectURL(this.result.blob);
                var imagePresenter = document.querySelector("#image-presenter");
                imagePresenter.appendChild(img);
                imagePresenter.style.display = "block";
            };

            pick.onerror = function () {?
                alert("Can't view the image!");
            };
        }
    }

    var pickAnything = document.querySelector("#pick-anything");
    if (pickAnything) {
        pickAnything.onclick = function () {
             var pickAny = new MozActivity({
                 name: "pick"
             });

            pickAny.onsuccess = function () {?
                var img = document.createElement("img");
                if (this.result.blob.type.indexOf("image") != -1) {
                    img.src = window.URL.createObjectURL(this.result.blob);
                    document.querySelector("#image-presenter").appendChild(img);
                }
            };

            pickAny.onerror = function () {?
                console.log("An error occurred");
            };
        }
    }

    var record = document.querySelector("#record");
    if (record) {
        record.onclick = function () {
            var rec = new MozActivity({
                name: "record" // Possibly capture in future versions
            });

            rec.onsuccess = function () {?
                var img = document.createElement("img");
                img.src = window.URL.createObjectURL(this.result.blob);
                var imagePresenter = document.querySelector("#image-presenter");
                imagePresenter.appendChild(img);
                imagePresenter.style.display = "block";
            };

            rec.onerror = function () {?
                alert("No taken picture returned");
            };
        }
    }

    var dial = document.querySelector("#dial");
    if (dial) {
        dial.onclick = function () {
            var call = new MozActivity({
                name: "dial",
                data: {
                    number: "+46777888999"
                }
            });
        }
    }

    var viewURL = document.querySelector("#view-url");
    if (viewURL) {
        viewURL.onclick = function () {
            var openURL = new MozActivity({
                name: "view",
                data: {
                    type: "url", // Possibly text/html in future versions
                    url: "http://robertnyman.com"
                }
            });
        }
    }

    // Notifications
    var addNotification = document.querySelector("#add-notification");
    if (addNotification) {
        addNotification.onclick = function () {
            var notification = navigator.mozNotification.createNotification(
                "See this",
                "This is a notification"
            );
            ?notification.show();
        };
    }

})();
