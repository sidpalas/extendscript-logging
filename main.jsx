#target photoshop
//@include "./logging.jsxlib"

var defaultLog = new LogFile();
defaultLog.log("Logging to the default log!");
defaultLog.log("Logging to the default log again...");

var normalLog = new LogFile('normal');
normalLog.log("Logging to the normal log!");

var specialLog = new LogFile('special');
specialLog.log("Logging to the special log!");

var removeMeLog = new LogFile('removeMe');
removeMeLog.log("Logging to the removeMe log!");

removeMeLog = new LogFile('removeMe');
removeMeLog.log("Logging to the *new* removeMe log!");

removeMeLog = new LogFile('removeMe');
removeMeLog.log("Logging to the *new**new* removeMe log!");

removeMeLog.removeOld();// or .removeOld( typeString, dateObject)
removeMeLog.log("Logging to the *new**new**new* removeMe log!");
