const express = require('express')
const app = express()
const cors = require('cors')
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db.sqlite');
const MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}

require('dotenv').config()

app.use(cors())
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS User 
          (id INT PRIMARY KEY, 
          userID TEXT, 
          username TEXT );`, ((res, err) => { console.log( res, err ) }));


  db.run(`CREATE TABLE IF NOT EXISTS Exercise 
        ( user int, 
         description TEXT, 
         duration INT, 
         date DATE, 
         FOREIGN KEY (user) 
         REFERENCES User(id))`, ((res, err) => { console.log( res, err ) }))
        
  //db.run(`INSERT INTO User (id, userID, username) VALUES (1, 'userid_default_root', 'root')`)
  
})


app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.post('/api/users', async (req, res) => {
  const username = req.body.username;
  
  let result = await selectWhere(['*'], 'User', 'username', `'${username}'`).catch(async (err) => {
    console.log(err);   
  });
  if (result.length == 0) {
    let count = await select(['*'], 'User');
    count = count.length;
    await insert('User', ['id', 'userID', 'username'], (`${count}, '${MD5(username)}', '${username}'`))
    
    let newRes = await selectWhere(['*'], 'User', 'userID', `'${MD5(username)}'`);
    
    console.log("Inserted a New User", newRes);
    
    res.json({
      username: newRes[0].username,
      _id: newRes[0].userID
    });
    
  } else {
    console.log(result);
    res.json({
      username: result[0].username,
      _id: result[0].userID
    });
  }  
});

app.post('/api/users/:_id/exercises', async (req, res) => {
  //console.log(req.body);
  const output = {
    username: "",
    description: "",
    duration: 0,
    date: "",
    _id: ""
  }

  console.log(req.body);

  let description = req.body.description;
  let duration = req.body.duration;
  let date = req.body.date;
  let _id = req.params._id;

  if (date === undefined || date === 'undefined'){
    date = new Date().toISOString();
    date = date.split("T")[0];
  }

  console.log("Fixed date??", date);

  //Check existing user
  let result = await selectWhere(['*'], 'User', 'userID', `'${_id}'`);

  if (result.length > 0) {
    //Do the exercise stuff
    let insertOut = await insert('Exercise', 
      ['user', 'description', 'duration', 'date'],
      `${result[0].id}, '${description}', ${duration}, '${date}'`
    ).catch(err => {console.log(err);})

    output._id = _id; 
    output.date = new Date(date).toDateString();
    output.description = description;
    output.duration = Number(duration);
    output.username = result[0].username;

    return res.json(output);
  }

  return res.json({'error': "non-existent user"});
});

app.get('/api/users/:_id/logs', async (req, res) => {
  /**
   * {"params":{"id":"4c3fbd5668b809127d909f5d95685ac7"},"get":[{"from":"00-00-00","to":"00-00-00","limit":"0"}]}
   */
  const output = {
    username: "",
    count: 0,
    _id: "",
    log: []
  }

  /**{
      description: "",
      duration: 0,
      date: "",
    } */

  let id = req.params._id
  let from = req.query.from; 
  let to = req.query.to;
  let limit = req.query.limit;

  let result = await selectWhere(['*'], 'User', 'userID', `'${id}'`).catch(async (err) => {console.log(err)})
  if (result.length > 0){
    //generate user logs:
    let userRegisterID = result[0].id;
    output.username = result[0].username;
    output._id = result[0].userID;
    
    let options = '';
    if (from) {
      options += `AND date >= '${from} 00:00:00.000'`
    }

    if (to) {
      options += `AND date <= '${to} 23:59:59.999'`
    }

    options += `ORDER BY date ASC `;

    if (limit) {
      options += `LIMIT ${limit}`
    }

    let results = await selectWhereForLog(["*"], 'Exercise', options, userRegisterID);
    for (let i = 0; i<results.length; i++){
      let formatedDate = new Date(results[i].date).toDateString();
      output.log.push(
        {
          description: results[i].description,
          duration: Number(results[i].duration),
          date: formatedDate,
        }
      );

      output.count += 1;
    }

    return res.json(output)

  } else {
    //throw a invalid user
    return res.json({"error": "Invalid User"});
  }

})

app.get('/api/users/:_id/exercises', async function(req, res){
    const output = {
      username: "",
      _id: "",
      exercises : []
    }
  
    let userResults = await selectWhere(['*'], 'User', 'userID', `'${req.params._id}'`).catch(async (err) => {console.log(err)});
    
    if (userResults.length > 0){
      output.username = userResults[0].username;
      output._id = userResults[0].userID;
      let exercises = await selectWhere(['*'], 'Exercise', 'user', `${userResults[0].id}`).catch(async (err) => {console.log(err)});
      if (exercises.length > 0){
        for (let i=0; i<exercises.length; i++){
          console.log(exercises.length);
          let formatedDate = new Date(exercises[i].date).toDateString();
          output.exercises.push(
            {
              duration: Number(exercises[i].duration),
              date: formatedDate,
            }
          )
        }
      }
      return res.json(output);
    } else {
      return res.json({"error": "Missing user"});
    }
})

app.get('/api/users/', async function(req, res){
  let results = await select(['*'], 'User').catch(e => {console.log(e)});
  if (results.length > 0){
    let list = []
    for (let i=0; i<results.length; i++){
      list.push({
        username:results[i].username,
        _id:results[i].userID
      })
    }
    return res.json(list)
  } else {
    return res.json([]);
  }
})


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})

function lazyHash(username){
  let num = 0;
  for (let i=0; i<username.length; i++){
    num += username.charCodeAt(i);
  }

  return num%50000;
}

async function select(fields, table) {
  let sql = `SELECT ${fields.toString()} FROM ${table}` 
  console.log(sql)
  return new Promise((resolve, reject) => {
    db.all(sql, (err, rows) => {
      if (err) reject(err);
      resolve (rows);
    })
  })
}

async function selectWhere(fields, table, cond_field, condition) {
  let sql = `SELECT ${fields.toString()} FROM ${table} WHERE ${cond_field}=${condition}` 
  console.log(sql)
  return new Promise((resolve, reject) => {
    db.all(sql, (err, rows) => {
      if (err) reject(err);
      resolve (rows);
    })
  })
}

async function selectWhereCount(fields, table, cond_field, condition) {
  let sql = `SELECT ${fields.toString()} FROM ${table} WHERE ${cond_field}=${condition}` 
  console.log(sql)
  return new Promise((resolve, reject) => {
    db.all(sql, (err, rows) => {
      if (err) reject(err);
      resolve (rows);
    })
  })
}


async function selectWhereForLog(fields, table, options, id) {
  let sql = `SELECT ${fields.toString()} FROM ${table} WHERE user=${id} ${options}` 
  console.log(sql)
  return new Promise((resolve, reject) => {
    db.all(sql, (err, rows) => {
      if (err) {console.log(err); reject(err)};
      console.log(rows);
      resolve (rows);
    })
  })
}


async function insert(table, columns, values){
  let sql = `INSERT INTO ${table} (${columns.toString()}) VALUES (${values})`
  console.log(sql);
  return new Promise((resolve, reject) => {
    db.run(sql, (result, err) => {
      if (err) { reject(err) }
      resolve(result);
    })
  })
}

