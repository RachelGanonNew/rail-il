const express = require('express');
const fs = require('fs');
const router = express.Router();
const BASE_DIR = __dirname.replace('middlewares', '');
const jsonTransportationPath = `${BASE_DIR}\\data\\transportationData.json`;
const jsonUserPath = `${BASE_DIR}\\data\\userData.json`;
const bodyParser = require('body-parser');

router.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

router.use(bodyParser.json());
router.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});

router.get('/transportation/list', (req, res) => {
  fs.readFile(jsonTransportationPath, 'utf8', (err, data) => {
    res.end(data);
  });
});

router.get('/getNewTransportationId', (req, res) => {
  fs.readFile(jsonTransportationPath, 'utf8', (err, data) => {
    const list = JSON.parse(data);
    const newId = list.length;
    res.end(JSON.stringify(newId));
  });
});

router.post('/getExistUser', (req, res) => {
  fs.readFile(jsonUserPath, 'utf8', (err, data) => {
    const list = JSON.parse(data);
    const {pass} = req.body;
    const user = _getUserByPass(list, pass);
    if(user) res.end(JSON.stringify(user));
    else res.end(JSON.stringify(false));
  });
    
});

router.post('/add', (req, res) => {
  fs.readFile(jsonTransportationPath, 'utf8', (err, data) => {
    const list = JSON.parse(data);
    const item = req.body;
    const newList = _addItem(list, item);
    const jsonData = JSON.stringify(newList);

    fs.writeFile(jsonTransportationPath, jsonData, writeFileErr => {
      if (!writeFileErr) {
        res.end(jsonData);
      } else {
        res.end(data);
      }
    });
  });
});


router.get('/get/:id', (req, res) => {
  fs.readFile(jsonTransportationPath, 'utf8', (err, data) => {
    const list = JSON.parse(data);
    const { id } = req.params;
    const item = _getItem(list, id);
    res.end(JSON.stringify(item));
  });
});

router.post('/update', (req, res) => {
  fs.readFile(jsonTransportationPath, 'utf8', (err, data) => {
    const list = JSON.parse(data);
    const item = req.body;
    const newList = _updateItem(list, item);
    const jsonData = JSON.stringify(newList);

    fs.writeFile(jsonTransportationPath, jsonData, writeFileErr => {
      if (!writeFileErr) {
        res.end(jsonData);
      } else {
        res.end(data);
      }
    });
  });
});

router.post('/delete/:id', (req, res) => {
  fs.readFile(jsonTransportationPath, 'utf8', (err, data) => {
    const list = JSON.parse(data);
    const { id } = req.params;
    const newList = _deleteItem(list, id);
    const jsonData = JSON.stringify(newList);

    fs.writeFile(jsonTransportationPath, jsonData, writeFileErr => {
      if (!writeFileErr) {
        res.end(jsonData);
      } else {
        res.end(data);
      }
    });
  });
});

// Private functions
const _getItem = (list, id) => {
  const currentItem = list.find(item => item.id.toString() === id.toString());
  return currentItem;
};

const _getUserByPass = (list, pass) => {
  const currentItem = list.find(user => user.password.toString() === pass.toString());
  return currentItem;
};

const _updateItem = (list, updatedItem) => {
  const newList = [...list];
  const currentItemIndex = newList.findIndex(
    item => item.id.toString() === updatedItem.id.toString(),
  );
  newList[currentItemIndex] = updatedItem;
  return newList;
};

const _deleteItem = (list, id) => {
  const newList = [...list];
  const currentItemIndex = list.findIndex(
    item => item.id.toString() === id.toString(),
  );
  newList.splice(currentItemIndex, 1);
  return newList;
};

const _addItem = (list, addedItem) => {
  let lastId = 0;
  if (list.length > 0) {
    const id = list[list.length - 1].id.toString();
    lastId = parseInt(id, 10);
  }
  const item = { id: lastId + 1, ...addedItem };
  const newList = [...list];
  newList.push(item);
  return newList;
};

module.exports = router;
