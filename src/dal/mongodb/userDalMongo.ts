import { CATALOG } from "../../const/catalog";
import Brand, { TUser } from "../../types/userType";
import { returnResponse } from "../../utils/response";

export class UserDalMongoDB {
  static async getAll() {
    try {
      const result: any[] = await Brand.find();
      return returnResponse(
        result,
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
      const result: TUser[] = await Brand.find().skip(page).limit(limit);
      return returnResponse(
        result,
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
      const result = await Brand.findOne({ _id: id });
      if (result === null) {
        console.error(result);
        return returnResponse(
          null,
          false,
          404,
          CATALOG.BRANDS.MESSAGES.GET_BY_ID_ERROR
        );
      }
      return returnResponse(
        result,
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
      const result = await Brand.create({
        name: brand.name,
        slug: brand.slug,
        description: brand.description,
        position: brand.position,
      });
      return returnResponse(
        result,
        true,
        200,
        CATALOG.BRANDS.MESSAGES.CREATE_SUCCESS
      );
    } catch (err: any) {
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
      const result = await Brand.findOneAndUpdate({ id }, brand);
      return returnResponse(
        result,
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
      const result = await Brand.findOneAndDelete({
        id,
      });
      return returnResponse(
        result,
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
