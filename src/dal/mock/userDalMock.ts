import { CATALOG } from "../../const/catalog";
import { returnResponse } from "../../utils/response";

const brands: any[] = require("./brands.json");

export class UserDalMock {
  static getAll() {
    return returnResponse(
      brands,
      true,
      200,
      CATALOG.BRANDS.MESSAGES.GET_ALL_SUCCESS
    );
  }

  static getAllWithPaginate(page: number, limit: number) {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    return returnResponse(
      brands.slice(startIndex, endIndex),
      true,
      200,
      CATALOG.BRANDS.MESSAGES.GET_ALL_WITH_PAGINATION_SUCCESS
    );
  }

  static getById(id: string) {
    const brandIndex = brands.findIndex((brand: any) => brand.id === id);

    if (brandIndex === -1) {
      console.error("invalid index:" + brandIndex);
      return returnResponse(
        null,
        false,
        400,
        CATALOG.BRANDS.MESSAGES.GET_BY_ID_ERROR
      );
    }

    return returnResponse(
      brands[brandIndex],
      true,
      200,
      CATALOG.BRANDS.MESSAGES.GET_BY_ID_SUCCESS + id
    );
  }

  static create(brand: any) {
    const newBrand: any = {
      id: crypto.randomUUID(),
      ...brand,
    };

    brands.push(newBrand);
    return returnResponse(
      newBrand,
      true,
      200,
      CATALOG.BRANDS.MESSAGES.CREATE_SUCCESS
    );
  }

  static async update(id: string, brand: any) {
    const brandIndex = brands.findIndex((brand: any) => brand.id === id);

    if (brandIndex === -1) {
      console.error("invalid index" + brandIndex);
      return returnResponse(
        null,
        false,
        400,
        CATALOG.BRANDS.MESSAGES.UPDATE_ERROR
      );
    }

    const updatedBrand = {
      ...brands[brandIndex],
      ...brand,
    };

    brands[brandIndex] = updatedBrand;
    return returnResponse(
      updatedBrand,
      true,
      200,
      CATALOG.BRANDS.MESSAGES.UPDATE_SUCCESS
    );
  }

  static async delete(id: string) {
    const brandIndex = brands.findIndex((brand: any) => brand.id === id);

    if (brandIndex === -1) {
      console.error("invalid index" + brandIndex);
      return returnResponse(
        null,
        false,
        400,
        CATALOG.BRANDS.MESSAGES.DELETE_ERROR
      );
    }

    const deletedBrand = brands[brandIndex];

    brands.splice(brandIndex, 1);
    return returnResponse(
      deletedBrand,
      true,
      200,
      CATALOG.BRANDS.MESSAGES.DELETE_SUCCESS
    );
  }
}
