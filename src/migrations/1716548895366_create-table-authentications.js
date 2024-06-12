/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
exports.shorthands = undefined;

exports.shorthands = undefined;
exports.up = (pgm) => {
  pgm.createTable("authentications", {
    token: {
      type: "TEXT",
      notNull: true,
    },
  });
};
exports.down = (pgm) => {
  pgm.dropTable("authentications");
};
