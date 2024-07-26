import request from "@/utils/request";

// 标准查询
export function getStandardReleaseList(params: any) {
  return request({
    url: "/LR_Api/StandardReleaseApi/GetPageList",
    method: "get",
    params: params,
  });
}

// 文件查询
export function getFilePathByIdAndTypeNew(params: any) {
  return request({
    url: "/LR_Api/StandardReleaseApi/GetFilePathByIdAndTypeNew",
    method: "get",
    params: params,
    responseType: "blob",
  });
}

// 文件查询2
export function getFilePathByIdNew(params: any) {
  return request({
    url: "/LR_Api/StandardReleaseApi/GetFilePathByIdNew/" + params,
    method: "get",
    responseType: "blob",
  });
}

// 通过id查询
export function getStandardReleaseById(params: any) {
  return request({
    url: "/LR_Api/StandardReleaseApi/GetById",
    method: "get",
    params: params,
  });
}

// 查询详情
export function getDetailViewNew1(params: any) {
  return request({
    url: "/LR_Api/TrainingApi/DetailViewNew1",
    method: "get",
    params: params,
  });
}

// 获取问卷调查列表
export function getQuestionnaireList(params: any) {
  return request({
    url: "/LR_Api/Questionnaire/GetPageList",
    method: "get",
    params: params,
  });
}
