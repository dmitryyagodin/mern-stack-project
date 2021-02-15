# Learning MERN full-stack tools
Based on the exercizes from 'Pro MERN stack' book by Vasan Subramanian

In development:

Added 2 package.json scripts lines:
```json
"start": "nodemon -w server server/server.js",
"watch": "babel src --out-dir public --watch --verbose",
```
Run them in separate terminals to watch for changes in the server and public folders to recompile jsx into js and restart the server accordingly.