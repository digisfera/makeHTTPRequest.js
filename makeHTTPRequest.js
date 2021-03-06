function makeHTTPRequest(method, address, isJSON, data, callback) {
  if(bowser.msie && bowser.version <= 9) {
    ajaxXDomainRequest(method, address, isJSON, data, callback);
  }
  else {
    var req = superagent(method, address);
    if(data) { req = req.send(data); }

    req.end(function(err, res) {
      if(err) { callback(err); }
      else if(!res.ok) { callback(res.body || res.text); }
      else { callback(null, res.body || res.text); }
    });
  }
}

window.makeHTTPRequest = makeHTTPRequest;