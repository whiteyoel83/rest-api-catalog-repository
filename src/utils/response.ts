import { IResponse } from "../interfaces/IResponse";

export function returnResponse(
  data: any,
  status: boolean,
  code: number,
  message?: any
): IResponse {
  const responseResult = {
    data: data,
    status: status,
    message: message,
    code: code,
  };

  return responseResult;
}
