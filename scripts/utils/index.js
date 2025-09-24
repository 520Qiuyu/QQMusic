/**
 * 遍历树形结构的通用函数
 * @param {Array} tree 树形数组
 * @param {string} childrenKey 子节点属性名
 * @param {Function} callback 遍历到每一项时调用，参数为该项对象
 * @example
 * const tree = [
 *   { id: 1, children: [ { id: 2 }, { id: 3 } ] },
 *   { id: 4 }
 * ];
 * traverseTree(tree, 'children', (node) => { console.log(node); });
 */
function traverseTree(tree, childrenKey, callback) {
  if (!Array.isArray(tree)) return;
  tree.forEach((item) => {
    callback(item);
    if (Array.isArray(item[childrenKey]) && item[childrenKey].length > 0) {
      traverseTree(item[childrenKey], childrenKey, callback);
    }
  });
}

module.exports = {
  traverseTree,
};
