import fs from 'fs';
import { loadYaml, V1Pod } from '@kubernetes/client-node';
import { departmentCheck } from '../src/lib/metadata/department-validation';

describe("Test metadata", () => {
  test("所属部署確認の時間だゴラァ！所属部署書けやゴラァ！！", () => {
    const podString: string = fs.readFileSync("tests/bad-pod.yaml").toString();
    const pod: V1Pod = loadYaml<V1Pod>(podString);
    expect(departmentCheck(pod.metadata!)).toHaveLength(1);
  })

  test("所属部署確認の時間だゴラァ！所属部署書いてるな、ヨシ！", () => {
    const podString: string = fs.readFileSync("tests/good-pod.yaml").toString();
    const pod: V1Pod = loadYaml<V1Pod>(podString);
    expect(departmentCheck(pod.metadata!)).toHaveLength(0);
  })
})
