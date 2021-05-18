var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TipperSchema = new Schema(
    {
      name: {type: String, required: true, maxLength: 100},
    }
  );

module.exports = mongoose.model('Tipper', TipperSchema);