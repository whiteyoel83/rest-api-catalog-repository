import Brand, { TUser } from "../../types/userType";
import { connection } from "../../config/sqlitedb";
import { stmt } from "../../const/sqlStatement";
import { returnResponse } from "../../utils/response";
import { CATALOG } from "../../const/catalog";

export class UserDalSQLite {
  static async getAll() {
    try {
      return await new Promise((resolve, reject) => {
        connection.all(stmt.SQLITE.SELECT_ALL, [], (err, result) => {
          if (err) {
            console.error(err);
            resolve(
              returnResponse(
                null,
                false,
                400,
                CATALOG.BRANDS.MESSAGES.GET_ALL_ERROR
              )
            );
          }
          resolve(
            returnResponse(
              result,
              true,
              200,
              CATALOG.BRANDS.MESSAGES.GET_ALL_SUCCESS
            )
          );
        });
      });
    } catch (err) {
      console.error(err);
      return returnResponse(
        null,
        false,
        500,
        CATALOG.GENERAL.MESSAGES.INTERNAL_SERVER_ERROR
      );
    }
  }

  static async getAllWithPaginate(page: number, limit: number) {
    try {
      return await new Promise((resolve, reject) => {
        connection.all(
          stmt.SQLITE.SELECT_ALL_WITH_PAGINATION,
          [limit, page],
          (err, result) => {
            if (err) {
              console.error(err);
              resolve(
                returnResponse(
                  null,
                  false,
                  400,
                  CATALOG.BRANDS.MESSAGES.GET_ALL_WITH_PAGINATION_ERROR
                )
              );
            }
            resolve(
              returnResponse(
                result,
                true,
                200,
                CATALOG.BRANDS.MESSAGES.GET_ALL_WITH_PAGINATION_SUCCESS
              )
            );
          }
        );
      });
    } catch (err) {
      console.error(err);
      return returnResponse(
        null,
        false,
        500,
        CATALOG.GENERAL.MESSAGES.INTERNAL_SERVER_ERROR
      );
    }
  }

  static async getAllWithFilter(filter: any) {
    try {
      const result: TUser[] = await Brand.find(filter);
      return returnResponse(
        result,
        true,
        200,
        CATALOG.BRANDS.MESSAGES.GET_ALL_WITH_FILTER_SUCCESS
      );
    } catch (err) {
      console.error(err);
      return returnResponse(
        null,
        false,
        500,
        CATALOG.GENERAL.MESSAGES.INTERNAL_SERVER_ERROR
      );
    }
  }

  static async getById(id: string) {
    try {
      return await new Promise((resolve, reject) => {
        connection.get(
          stmt.SQLITE.SELECT_ONE,
          [id],
          (err: any, result: any) => {
            if (err) {
              console.error(err);
              resolve(
                returnResponse(
                  null,
                  false,
                  404,
                  CATALOG.BRANDS.MESSAGES.GET_BY_ID_ERROR
                )
              );
            }
            if (result === undefined) {
              resolve(
                returnResponse(
                  null,
                  false,
                  404,
                  CATALOG.BRANDS.MESSAGES.GET_BY_ID_ERROR
                )
              );
            }
            resolve(
              returnResponse(
                result,
                true,
                200,
                CATALOG.BRANDS.MESSAGES.GET_BY_ID_SUCCESS + id
              )
            );
          }
        );
      });
    } catch (err) {
      console.error(err);
      return returnResponse(
        null,
        false,
        500,
        CATALOG.GENERAL.MESSAGES.INTERNAL_SERVER_ERROR
      );
    }
  }

  static async create(brand: any) {
    try {
      if (brand) {
        return await new Promise<any>((resolve, reject) => {
          connection.run(
            stmt.SQLITE.INSERT_ONE,
            [brand.name, brand.slug, brand.description, brand.position],
            (err: any, result: any) => {
              if (err) {
                console.error(err);
                resolve(
                  returnResponse(
                    null,
                    false,
                    400,
                    CATALOG.BRANDS.MESSAGES.CREATE_ERROR
                  )
                );
              }
              resolve(
                returnResponse(
                  result,
                  true,
                  200,
                  CATALOG.BRANDS.MESSAGES.CREATE_SUCCESS
                )
              );
            }
          );
        });
      }
    } catch (err) {
      console.error(err);
      return returnResponse(
        null,
        false,
        500,
        CATALOG.GENERAL.MESSAGES.INTERNAL_SERVER_ERROR
      );
    }
  }

  static async update(id: string, brand: any) {
    try {
      return await new Promise<any>((resolve, reject) => {
        connection.run(
          stmt.SQLITE.UPDATE_ONE_OR_MANY,
          [brand.name, brand.slug, brand.description, brand.position, id],
          (err: any, result: any) => {
            if (err) {
              console.error(err);
              resolve(
                returnResponse(
                  null,
                  false,
                  400,
                  CATALOG.BRANDS.MESSAGES.UPDATE_ERROR
                )
              );
            }
            resolve(
              returnResponse(
                result,
                true,
                200,
                CATALOG.BRANDS.MESSAGES.UPDATE_SUCCESS
              )
            );
          }
        );
      });
    } catch (err) {
      console.error(err);
      return returnResponse(
        null,
        false,
        500,
        CATALOG.GENERAL.MESSAGES.INTERNAL_SERVER_ERROR
      );
    }
  }

  static async delete(id: string) {
    try {
      return await new Promise<any>((resolve, reject) => {
        connection.run(
          stmt.SQLITE.DELETE_ONE_OR_MANY,
          [id],
          (err: any, result: any) => {
            if (err) {
              console.error(err);
              resolve(
                returnResponse(
                  null,
                  false,
                  400,
                  CATALOG.BRANDS.MESSAGES.DELETE_ERROR
                )
              );
            }
            resolve(
              returnResponse(
                result,
                true,
                200,
                CATALOG.BRANDS.MESSAGES.DELETE_SUCCESS
              )
            );
          }
        );
      });
    } catch (err) {
      console.error(err);
      return returnResponse(
        null,
        false,
        500,
        CATALOG.GENERAL.MESSAGES.INTERNAL_SERVER_ERROR
      );
    }
  }
}
