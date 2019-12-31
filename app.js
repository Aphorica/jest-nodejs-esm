import express from 'express'
const app = new express();

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization, Content-Length, X-Requested-With');
  // intercept OPTIONS method
  if (req.method === 'OPTIONS') {
    res.sendStatus(204);
  } else {
    next();
  }
};

var noCache = function(req, res, next) {
        // narrow to specific urls with an if statement, here
        //
  res.header("Cache-Control", "no-cache, no-store, must-revalidate");
  res.header("Pragma", "no-cache");
  res.header("Expires", 0);

  next();
};
  
app.use(allowCrossDomain);
app.use(noCache);

app.get('/testme', function(req,rsp) {
  rsp.send("I'm here!!");
});

export default app
 
