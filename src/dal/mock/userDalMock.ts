import { CATALOG } from "../../const/catalog";
import { returnResponse } from "../../utils/response";

const users: any[] = require("./users.json");
console.log("users loaded", users);

export class UserDalMock {
  static getAll() {
    try {
      console.log("findAll from Mock");
      return users;
    } catch (error) {
      return error;
    }
  }

  static getAllWithPaginate(page: number, limit: number) {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    return users.slice(startIndex, endIndex);
  }

  static getById(id: string) {
    const brandIndex = users.findIndex((brand: any) => brand.id === id);

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
      users[brandIndex],
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

    users.push(newBrand);
    return returnResponse(
      newBrand,
      true,
      200,
      CATALOG.BRANDS.MESSAGES.CREATE_SUCCESS
    );
  }

  static async update(id: string, brand: any) {
    const brandIndex = users.findIndex((brand: any) => brand.id === id);

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
      ...users[brandIndex],
      ...brand,
    };

    users[brandIndex] = updatedBrand;
    return returnResponse(
      updatedBrand,
      true,
      200,
      CATALOG.BRANDS.MESSAGES.UPDATE_SUCCESS
    );
  }

  static async delete(id: string) {
    const brandIndex = users.findIndex((brand: any) => brand.id === id);

    if (brandIndex === -1) {
      console.error("invalid index" + brandIndex);
      return returnResponse(
        null,
        false,
        400,
        CATALOG.BRANDS.MESSAGES.DELETE_ERROR
      );
    }

    const deletedBrand = users[brandIndex];

    users.splice(brandIndex, 1);
    return returnResponse(
      deletedBrand,
      true,
      200,
      CATALOG.BRANDS.MESSAGES.DELETE_SUCCESS
    );
  }
}
