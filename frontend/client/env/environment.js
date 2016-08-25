 /**
  * Assign __env to the root window object.
  *
  * The goal of this file is to allow the deployment
  * process to pass in environment values into the application.
  *
  * The deployment process can overwrite this file to pass in
  * custom values:
  *
  * window.__env = window.__env || {};
  * window.__env.url = 'some-url';
  * window.__env.key = 'some-key';
  *
  * Keep the structure flat (one level of properties only) so
  * the deployment process can easily map environment keys to
  * properties.
  */

 (function(window) {
     //Define the variable
     window.__env = window.__env || {};

     //Main App
     window.__env.MainAppName = 'Gitlib';
     window.__env.BaseUrl = 'http://localhost';
     window.__env.Port = '7888';
     window.__env.FullURL = window.__env.BaseUrl + ':' + window.__env.Port;
 }(this));
