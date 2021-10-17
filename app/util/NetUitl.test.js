const NetUitl = require("./NetUitl")
// @ponicode
describe("NetUitl.get", () => {
    test("0", () => {
        let object = [["http://www.croplands.org/account/confirm?t=", "http://www.croplands.org/account/confirm?t=", "https://"], ["Www.GooGle.com", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://api.telegram.org/bot"], ["http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://api.telegram.org/", "http://base.com"]]
        let object2 = [["Www.GooGle.com", "http://www.croplands.org/account/confirm?t=", "https://api.telegram.org/bot"], ["ponicode.com", "http://www.example.com/route/123?foo=bar", "https://twitter.com/path?abc"], ["www.google.com", "https://twitter.com/path?abc", "https://croplands.org/app/a/reset?token="]]
        let object3 = [["https://", "https://", "http://base.com"], ["http://www.croplands.org/account/confirm?t=", "https://croplands.org/app/a/reset?token=", "Www.GooGle.com"], ["https://", "https://api.telegram.org/bot", "http://base.com"]]
        let param2 = [object, object2, object3]
        let callFunction = () => {
            NetUitl.get("ponicode.com", param2, () => "return callback value")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object = [["ponicode.com", "https://api.telegram.org/bot", "https://croplands.org/app/a/reset?token="], ["https://accounts.google.com/o/oauth2/revoke?token=%s", "http://www.example.com/route/123?foo=bar", "https://croplands.org/app/a/confirm?t="], ["Www.GooGle.com", "http://www.croplands.org/account/confirm?t=", "https://api.telegram.org/bot"]]
        let object2 = [["https://api.telegram.org/", "https://croplands.org/app/a/confirm?t=", "ponicode.com"], ["ponicode.com", "https://twitter.com/path?abc", "https://croplands.org/app/a/confirm?t="], ["https://croplands.org/app/a/reset?token=", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "http://base.com"]]
        let object3 = [["http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "ponicode.com", "http://www.example.com/route/123?foo=bar"], ["http://base.com", "https://accounts.google.com/o/oauth2/revoke?token=%s", "https://croplands.org/app/a/reset?token="], ["https://croplands.org/app/a/confirm?t=", "Www.GooGle.com", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg"]]
        let param2 = [object, object2, object3]
        let callFunction = () => {
            NetUitl.get("https://twitter.com/path?abc", param2, () => "return callback value")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object = [["Www.GooGle.com", "https://croplands.org/app/a/confirm?t=", "https://accounts.google.com/o/oauth2/revoke?token=%s"], ["https://", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg"], ["http://www.croplands.org/account/confirm?t=", "http://base.com", "ponicode.com"]]
        let object2 = [["http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "Www.GooGle.com", "https://croplands.org/app/a/confirm?t="], ["http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://api.telegram.org/", "www.google.com"], ["https://croplands.org/app/a/confirm?t=", "https://accounts.google.com/o/oauth2/revoke?token=%s", "https://accounts.google.com/o/oauth2/revoke?token=%s"]]
        let object3 = [["www.google.com", "http://www.croplands.org/account/confirm?t=", "https://"], ["http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "http://base.com", "http://www.example.com/route/123?foo=bar"], ["http://base.com", "http://www.example.com/route/123?foo=bar", "https://api.telegram.org/"]]
        let param2 = [object, object2, object3]
        let callFunction = () => {
            NetUitl.get("https://accounts.google.com/o/oauth2/revoke?token=%s", param2, () => "return callback value")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object = [["ponicode.com", "https://accounts.google.com/o/oauth2/revoke?token=%s", "https://croplands.org/app/a/reset?token="], ["https://croplands.org/app/a/confirm?t=", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "http://www.croplands.org/account/confirm?t="], ["http://base.com", "http://www.croplands.org/account/confirm?t=", "http://www.croplands.org/account/confirm?t="]]
        let object2 = [["www.google.com", "Www.GooGle.com", "https://api.telegram.org/"], ["https://croplands.org/app/a/reset?token=", "www.google.com", "https://croplands.org/app/a/confirm?t="], ["https://twitter.com/path?abc", "http://www.croplands.org/account/confirm?t=", "https://"]]
        let object3 = [["https://croplands.org/app/a/reset?token=", "https://twitter.com/path?abc", "www.google.com"], ["https://croplands.org/app/a/reset?token=", "http://www.croplands.org/account/confirm?t=", "http://www.croplands.org/account/confirm?t="], ["http://www.example.com/route/123?foo=bar", "https://croplands.org/app/a/reset?token=", "https://twitter.com/path?abc"]]
        let param2 = [object, object2, object3]
        let callFunction = () => {
            NetUitl.get("https://croplands.org/app/a/confirm?t=", param2, () => "return callback value")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object = [["http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "www.google.com", "https://"], ["http://base.com", "http://base.com", "https://api.telegram.org/bot"], ["www.google.com", "ponicode.com", "https://accounts.google.com/o/oauth2/revoke?token=%s"]]
        let object2 = [["ponicode.com", "http://www.croplands.org/account/confirm?t=", "Www.GooGle.com"], ["Www.GooGle.com", "http://base.com", "https://"], ["http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "http://www.croplands.org/account/confirm?t=", "ponicode.com"]]
        let object3 = [["www.google.com", "https://accounts.google.com/o/oauth2/revoke?token=%s", "ponicode.com"], ["https://croplands.org/app/a/reset?token=", "https://api.telegram.org/", "https://api.telegram.org/"], ["https://croplands.org/app/a/reset?token=", "www.google.com", "Www.GooGle.com"]]
        let param2 = [object, object2, object3]
        let callFunction = () => {
            NetUitl.get("ponicode.com", param2, () => "return callback value")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            NetUitl.get("", undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("NetUitl.post", () => {
    test("0", () => {
        let param2 = [["http://base.com", "ponicode.com", "https://croplands.org/app/a/confirm?t="], ["Www.GooGle.com", "https://croplands.org/app/a/reset?token=", "https://api.telegram.org/bot"], ["http://www.example.com/route/123?foo=bar", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "ponicode.com"]]
        let callFunction = () => {
            NetUitl.post("www.google.com", param2, { User-Agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", Accept-Language: "en-US,en;q=0.5", Connection: "keep-alive", Upgrade-Insecure-Requests: 1, Pragma: "no-cache", Cache-Control: "no-cache" }, () => "return callback value")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param2 = [["https://croplands.org/app/a/reset?token=", "https://api.telegram.org/", "http://www.croplands.org/account/confirm?t="], ["http://www.croplands.org/account/confirm?t=", "https://twitter.com/path?abc", "Www.GooGle.com"], ["https://croplands.org/app/a/reset?token=", "https://twitter.com/path?abc", "http://www.example.com/route/123?foo=bar"]]
        let callFunction = () => {
            NetUitl.post("https://croplands.org/app/a/reset?token=", param2, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", () => "return callback value")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param2 = [["https://", "ponicode.com", "ponicode.com"], ["Www.GooGle.com", "https://twitter.com/path?abc", "https://api.telegram.org/bot"], ["https://accounts.google.com/o/oauth2/revoke?token=%s", "https://croplands.org/app/a/reset?token=", "https://twitter.com/path?abc"]]
        let callFunction = () => {
            NetUitl.post("https://twitter.com/path?abc", param2, { Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9", Accept-Encoding: "gzip, deflate", Accept-Language: "en-GB,en-US;q=0.9,en;q=0.8", Dnt: 1, Host: "httpbin.org", Upgrade-Insecure-Requests: 1, User-Agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36" }, () => "return callback value")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param2 = [["http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://croplands.org/app/a/reset?token=", "https://croplands.org/app/a/confirm?t="], ["https://api.telegram.org/bot", "http://www.example.com/route/123?foo=bar", "Www.GooGle.com"], ["Www.GooGle.com", "http://www.croplands.org/account/confirm?t=", "www.google.com"]]
        let callFunction = () => {
            NetUitl.post("https://", param2, { Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9", Accept-Encoding: "gzip, deflate", Accept-Language: "en-GB,en-US;q=0.9,en;q=0.8", Dnt: 1, Host: "httpbin.org", Upgrade-Insecure-Requests: 1, User-Agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36" }, () => "return callback value")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param2 = [["https://twitter.com/path?abc", "https://croplands.org/app/a/reset?token=", "https://api.telegram.org/"], ["http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "http://base.com", "www.google.com"], ["https://croplands.org/app/a/confirm?t=", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://api.telegram.org/"]]
        let callFunction = () => {
            NetUitl.post("www.google.com", param2, { User-Agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", Accept-Language: "en-US,en;q=0.5", Connection: "keep-alive", Upgrade-Insecure-Requests: 1, Pragma: "no-cache", Cache-Control: "no-cache" }, () => "return callback value")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            NetUitl.post(undefined, undefined, undefined, () => "")
        }
    
        expect(callFunction).not.toThrow()
    })
})
