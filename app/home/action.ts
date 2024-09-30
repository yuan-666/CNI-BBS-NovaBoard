import service from "@/utils/axios";
import { GetAllCategoryRequest } from "@/types/post/category";

export async function getAllCategoryAction(
  getAllCategoryRequest: GetAllCategoryRequest,
) {
  return await service({
    url: "/category/open/list",
    method: "post",
    data: getAllCategoryRequest,
  });
}
