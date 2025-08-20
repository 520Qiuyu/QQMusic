/** 给定一个类型和键 ，将该类型的给定键设成必选 */
type SetRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

/** 给定一个对象数组，获取其中所有对象的某个属性的联合取值 */
type GetArrayUnion<T extends readonly object[], K extends keyof T[number]> = T[number][K];

/** 传入一个类型，以及几个其中的键，让其几个键相互关联，一个填时，其关联的也填 */
/* type SetRelated<T extends object, K extends keyof T, ...R extends K[]> = {
  [P in K]: T[P];
} & {
  [P in R[number]]?: T[P];
}
 */

/** 定义一个工具类型，用于提取 ref 类型 */
type RefType<T> =
  T extends React.ForwardRefExoticComponent<infer P>
    ? P extends React.RefAttributes<infer R>
      ? R
      : never
    : never;
