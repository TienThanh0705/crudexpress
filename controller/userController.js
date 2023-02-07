const ModelUser = require("../model/user");

const listUser = (req, res) => {
  const page = req.query.page;
  const pageSize = req.query.pageSize;

  if (page && pageSize) {
    const skip = (parseInt(page) - 1) * pageSize;
    ModelUser.find()
      .skip(skip)
      .limit(pageSize)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json("Loi server");
      });
  } else {
    ModelUser.find({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json("Loi server");
      });
  }
};

const detailUser = (req, res) => {
  const id = req.params.id;
  ModelUser.findById(id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json("Loi server");
    });
};

const createUser = (req, res) => {
  const dataUser = req.body;

  console.log(dataUser);

  ModelUser.create({
    name: dataUser.name,
    password: dataUser.password,
  })

    .then((data) => {
      res.json("thêm account thành công");
    })
    .catch((err) => {
      res.status(500).json("Loi server");
    });
};

const upDateUser = (req, res) => {
  const id = req.params.id;
  const dataUpdate = req.body;
  ModelUser.findByIdAndUpdate(id, {
    name: dataUpdate.name,
    password: dataUpdate.password,
  })
    .then((data) => {
      res.json("update account thành công");
    })
    .catch((err) => {
      res.status(500).json("Loi server");
    });
};
const deleteUser = (req, res) => {
  const id = req.params.id;
  ModelUser.deleteOne({
    _id: id,
  })
    .then((data) => {
      res.json("Xóa account thành công");
    })
    .catch((err) => {
      res.status(500).json("Loi server");
    });
};

module.exports = {
  listUser,
  detailUser,
  createUser,
  upDateUser,
  deleteUser,
};
