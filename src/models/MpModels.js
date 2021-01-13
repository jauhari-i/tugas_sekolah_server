const monggose = require('mongoose');

const mpUserSchema = new monggose.Schema({
  uuid: { type: String, required: true },
  nama: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  no_hp: { type: Number, required: true, unique: true },
  password: { type: String, required: true },
  imgUrl: { type: String, required: false },
  verified: { type: Boolean, default: false, required: true },
  created_at: { type: Date, default: Date.now },
  edited_at: { type: Date, default: Date.now },
  deleted_at: { type: Date, default: null },
  last_login: { type: Date, default: null },
});

const MpUserModel = monggose.model('mpUser', mpUserSchema);

const mpAlamatUserSchema = new monggose.Schema({
  uuid: { type: String, required: true },
  userId: { type: String, required: true },
  nama: { type: String, required: true },
  provinsi: { type: String },
  kota: { type: String },
  kecamatan: { type: String },
  desa: { type: String },
  kode_pos: { type: Number },
  detailed: { type: String, required: false },
  created_at: { type: Date, default: Date.now },
  edited_at: { type: Date, default: Date.now },
  deleted_at: { type: Date, default: null },
});

const MpAlamatUserModel = monggose.model('mpAlamatUser', mpAlamatUserSchema);

const mpAdminSchema = new monggose.Schema({
  uuid: { type: String, required: true },
  nama: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  edited_at: { type: Date, default: Date.now },
  deleted_at: { type: Date, default: null },
  last_login: { type: Date, default: null },
});

const MpAdminModel = monggose.model('mpAdmin', mpAdminSchema);

const mpCategorySchema = new monggose.Schema({
  uuid: { type: String, required: true },
  nama: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  edited_at: { type: Date, default: Date.now },
  deleted_at: { type: Date, default: null },
});

const MpCategoryModel = monggose.model('mpCategory', mpCategorySchema);

const mpProductSchema = new monggose.Schema({
  uuid: { type: String, required: true },
  nama: { type: String, required: true },
  category: { type: String, required: true },
  sold: { type: Number },
  view: { type: Number },
  desc: { type: String, required: true },
  price: { type: Number, required: true },
  imgUrl: { type: String, required: true },
  rating: { type: Number },
  created_at: { type: Date, default: Date.now },
  edited_at: { type: Date, default: Date.now },
  deleted_at: { type: Date, default: null },
});

const MpProductModel = monggose.model('mpProduct', mpProductSchema);

const mpReviewProductSchema = new monggose.Schema({
  uuid: { type: String, required: true },
  user: { type: String, required: true },
  product: { type: String, required: true },
  rating: { type: Number },
  created_at: { type: Date, default: Date.now },
  edited_at: { type: Date, default: Date.now },
  deleted_at: { type: Date, default: null },
});

const MpReviewProduct = monggose.model('mpReview', mpReviewProductSchema);

const mpCart = new monggose.Schema({
  uuid: { type: String, required: true },
  userId: { type: String, required: true },
  item: { type: Array },
  total: { type: Number },
  created_at: { type: Date, default: Date.now },
  edited_at: { type: Date, default: Date.now },
  deleted_at: { type: Date, default: null },
});

const MpCartModel = monggose.model('mpCart', mpCart);

const mpTrans = new monggose.Schema({
  uuid: { type: String, required: true },
  userId: { type: String, required: true },
  item: { type: Array },
  total: { type: Number },
  pay: { type: Number },
  status: { type: Boolean },
  created_at: { type: Date, default: Date.now },
  edited_at: { type: Date, default: Date.now },
  deleted_at: { type: Date, default: null },
});

const MpTransModel = monggose.model('mpTrans', mpTrans);

module.exports = MpModel = {
  user: MpUserModel,
  admin: MpAdminModel,
  alamat: MpAlamatUserModel,
  category: MpCategoryModel,
  product: MpProductModel,
  review: MpReviewProduct,
  cart: MpCartModel,
  transaksi: MpTransModel,
};
