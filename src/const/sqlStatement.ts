export const stmt = {
  MYSQL: {
    CREATE_TABLE: `CREATE TABLE brands(
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        slug TEXT NOT NULL,
        description TEXT NOT NULL,
        position INTEGER NOT NULL
      )`,
    SELECT_ALL: "SELECT * FROM brands;",
    SELECT_ALL_WITH_PAGINATION: "SELECT * FROM brands LIMIT ? OFFSET ?;",
    SELECT_ALL_WITH_FILTERS: "SELECT * FROM brands;",
    SELECT_ONE: "SELECT * FROM brands where id= ?;",
    INSERT_ONE:
      "INSERT INTO brands (name,slug,description,position) VALUES(?,?,?,?);",
    INSERT_MANY: "SELECT * FROM brands where id= ?;",
    UPDATE_ONE_OR_MANY:
      "UPDATE brands SET name=?, slug=?, description=?, position=? WHERE id=?;",
    DELETE_ONE_OR_MANY: "DELETE FROM brands where id = ?;",
  },
  POSTGRES: {
    CREATE_TABLE: `CREATE TABLE brands(
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        slug TEXT NOT NULL,
        description TEXT NOT NULL,
        position INTEGER NOT NULL
      )`,
    SELECT_ALL: "SELECT * FROM brands;",
    SELECT_ALL_WITH_PAGINATION: "SELECT * FROM brands LIMIT $1 OFFSET $2;",
    SELECT_ALL_WITH_FILTERS: "SELECT * FROM brands;",
    SELECT_ONE: "SELECT * FROM brands where id= $1;",
    INSERT_ONE:
      "INSERT INTO brands (name,slug,description,position) VALUES($1,$2,$3,$4);",
    INSERT_MANY: "SELECT * FROM brands where id= $1;",
    UPDATE_ONE_OR_MANY:
      "UPDATE brands SET name=$1, slug=$2, description=$3, position=$4 WHERE id=$5;",
    DELETE_ONE_OR_MANY: "DELETE FROM brands where id = $1;",
  },
  SQLITE: {
    CREATE_TABLE: `CREATE TABLE brands(
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        slug TEXT NOT NULL,
        description TEXT NOT NULL,
        position INTEGER NOT NULL
      )`,
    SELECT_ALL: "SELECT * FROM brands;",
    SELECT_ALL_WITH_PAGINATION: "SELECT * FROM brands LIMIT ? OFFSET ?;",
    SELECT_ALL_WITH_FILTERS: "SELECT * FROM brands;",
    SELECT_ONE: "SELECT * FROM brands where id= ?;",
    INSERT_ONE:
      "INSERT INTO brands (name,slug,description,position) VALUES(?,?,?,?);",
    INSERT_MANY: "SELECT * FROM brands where id= ?;",
    UPDATE_ONE_OR_MANY:
      "UPDATE brands SET name=?, slug=?, description=?, position=? WHERE id=?;",
    DELETE_ONE_OR_MANY: "DELETE FROM brands where id = ?;",
  },
  MONGODB: {
    CREATE_TABLE: `CREATE TABLE brands(
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        slug TEXT NOT NULL,
        description TEXT NOT NULL,
        position INTEGER NOT NULL
      )`,
    SELECT_ALL: "SELECT * FROM brands;",
    SELECT_ALL_WITH_PAGINATION: "SELECT * FROM brands LIMIT ? OFFSET ?;",
    SELECT_ALL_WITH_FILTERS: "SELECT * FROM brands;",
    SELECT_ONE: "SELECT * FROM brands where id= ?;",
    INSERT_ONE:
      "INSERT INTO brands (name,slug,description,position) VALUES(?,?,?,?);",
    INSERT_MANY: "SELECT * FROM brands where id= ?;",
    UPDATE_ONE_OR_MANY:
      "UPDATE brands SET name=?, slug=?, description=?, position=? WHERE id=?;",
    DELETE_ONE_OR_MANY: "DELETE FROM brands where id = ?;",
  },
};
