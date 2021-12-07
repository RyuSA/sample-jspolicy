
import { V1ObjectMeta } from "@kubernetes/client-node";
import { departmentCheck } from "../../lib/metadata/department-validation";
import { denyOnErrors } from "../../util/helpers";

if(request.object) {
    const o = request.object as {metadata: V1ObjectMeta};
    denyOnErrors(
        departmentCheck(o.metadata)
    )
}
