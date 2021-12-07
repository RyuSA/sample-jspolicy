import { V1ObjectMeta } from "@kubernetes/client-node";

// 所属部署を明示していないリソースの作成は禁止！
const departmentAnnotation = "jspolicy.com/department"

// ObjectMetaのAnnotationを精査し、所属部署を明示していない場合はエラー文言を付与して返却する
export const departmentCheck = (metadata: V1ObjectMeta): string[] => {
    const errors: string[] = []
    const annotationValue = metadata.annotations? metadata.annotations[departmentAnnotation] : "";
    if(!annotationValue) {
        errors.push("所属部署を明示していないリソースの作成は禁止！")
    }
    return errors
}
