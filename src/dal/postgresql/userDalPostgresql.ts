import { connection } from "../../config/postgresqldb";
import { CATALOG } from "../../const/catalog";
import { stmt } from "../../const/sqlStatement";
import { returnResponse } from "../../utils/response";

export class UserDalPostgres {
  static async getAll() {
    try {
      const result = await connection.query<any>(stmt.POSTGRES.SELECT_ALL);
      if (!result) {
        console.error(result);
        return returnResponse(
          null,
          false,
          400,
          CATALOG.BRANDS.MESSAGES.GET_ALL_ERROR
        );
      }
      return returnResponse(
        result.rows,
        true,
        200,
        CATALOG.BRANDS.MESSAGES.GET_ALL_SUCCESS
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

  static async getAllWithPaginate(page: number, limit: number) {
    try {
      const result = await connection.query<any>(
        stmt.POSTGRES.SELECT_ALL_WITH_PAGINATION,
        [limit, page]
      );
      if (!result) {
        console.error(result);
        return returnResponse(
          null,
          false,
          400,
          CATALOG.BRANDS.MESSAGES.GET_ALL_WITH_PAGINATION_ERROR
        );
      }
      return returnResponse(
        result.rows,
        true,
        200,
        CATALOG.BRANDS.MESSAGES.GET_ALL_WITH_PAGINATION_SUCCESS
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

  static async getAllWithFilter(filter: any) {
    try {
      const result = await connection.query<any>(
        stmt.POSTGRES.SELECT_ALL_WITH_FILTERS,
        [filter]
      );
      if (!result) {
        console.error(result);
        return returnResponse(
          null,
          false,
          400,
          CATALOG.BRANDS.MESSAGES.GET_ALL_WITH_FILTER_ERROR
        );
      }
      return returnResponse(
        result.rows,
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
      const result = await connection.query<any>(stmt.POSTGRES.SELECT_ONE, [
        id,
      ]);
      if (!result) {
        console.error(result);
        return returnResponse(
          null,
          false,
          400,
          CATALOG.BRANDS.MESSAGES.GET_BY_ID_ERROR
        );
      }
      if (result.rowCount === 0) {
        console.error(result);
        return returnResponse(
          null,
          false,
          400,
          CATALOG.BRANDS.MESSAGES.GET_BY_ID_ERROR
        );
      }
      return returnResponse(
        result.rows[0],
        true,
        200,
        CATALOG.BRANDS.MESSAGES.GET_BY_ID_SUCCESS + id
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

  static async create(brand: any) {
    try {
      const result = await connection.query<any>(stmt.POSTGRES.INSERT_ONE, [
        brand.name,
        brand.slug,
        brand.description,
        brand.position,
      ]);
      if (!result) {
        console.error(result);
        return returnResponse(
          null,
          false,
          400,
          CATALOG.BRANDS.MESSAGES.CREATE_ERROR
        );
      }
      return returnResponse(
        result.rowCount,
        true,
        200,
        CATALOG.BRANDS.MESSAGES.CREATE_SUCCESS
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

  static async update(id: string, brand: any) {
    try {
      const result = await connection.query<any>(
        stmt.POSTGRES.UPDATE_ONE_OR_MANY,
        [brand.name, brand.slug, brand.description, brand.position, id]
      );
      if (!result) {
        console.error(brand);
        return returnResponse(
          null,
          false,
          400,
          CATALOG.BRANDS.MESSAGES.UPDATE_ERROR
        );
      }
      return returnResponse(
        result.rowCount,
        true,
        200,
        CATALOG.BRANDS.MESSAGES.UPDATE_SUCCESS
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

  static async delete(id: string) {
    try {
      const result = await connection.query<any>(
        stmt.POSTGRES.DELETE_ONE_OR_MANY,
        [id]
      );
      if (!result) {
        console.error(result);
        return returnResponse(
          null,
          false,
          500,
          CATALOG.BRANDS.MESSAGES.DELETE_ERROR
        );
      }
      return returnResponse(
        result.rowCount,
        true,
        200,
        CATALOG.BRANDS.MESSAGES.DELETE_SUCCESS
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
}
