# makeHTTPRequest.js

Make HTTP request using XDomainRequest (on IE9 and below) or Superagent (on other browsers)

    <script src="../bower_components/xdomainrequest/xdomainrequest.js"></script>
    <script src="../bower_components/superagent/superagent.js"></script>
    <script src="../bower_components/bowser/bowser.js"></script>
    <script src="../bower_components/makeHTTPRequest.js/makeHTTPRequest.js"></script>

    <script>
    makeHTTPRequest(method, address, isJSON, data, callback)
    </script>