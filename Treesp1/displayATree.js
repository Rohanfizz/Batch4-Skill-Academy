// let tree = [20, 8, 4, -1, -1, 12, 10, -1, -1, 14, -1, -1, -1];
class Node {
    left;
    right;
    val;
    constructor(v) {
        this.val = v;
        this.left = null;
        this.right = null;
    }
}

function serialize(tree) {
    let idx = 0;
    function solve(tree) {
        if (idx == tree.length) return null;
        if (tree[idx] == -1) {
            idx++;
            return null;
        }
        let nn = new Node(tree[idx]);
        idx++;
        nn.left = solve(tree);
        nn.right = solve(tree);
        return nn;
    }

    let root = solve(tree);
    return root;
}

let tree = [1,3,4,-1,-1,2,8,-1,-1,-1,5,6,-1,9,-1,-1,7,-1,-1];
let root = serialize(tree);








function display(node){
    if(node == null) return;
    let leftChildValue = (node.left != null?node.left.val:-1);
    let rightChildValue = (node.right != null?node.right.val:-1);
    console.log(node.val+" : "+leftChildValue+", "+rightChildValue);
    display(node.left);
    display(node.right);
}
function treeSize(node){       // return integer size of three
    if(node == null) return 0;
    let leftSize = treeSize(node.left);
    let rightSize = treeSize(node.right);
    return leftSize+rightSize+1;
    // return (node == null?0:treeSize(node.left)+treeSize(node.right)+ 1);
}
var maxDepth = function(root) {
    if(root == null) return 0;
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);
    return Math.max(leftDepth,rightDepth) + 1;
};
// display(root);
console.log(treeSize(root));
